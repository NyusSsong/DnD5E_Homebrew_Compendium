// Magic Items Database Standalone Component

// Supabase project settings. The anon key is safe to expose client-side by design
// — row-level security (RLS) on the "items" table is what protects the data.
const SUPABASE_CONFIG = {
    URL: "https://mcsyppddpfdwszjujvdb.supabase.co",
    ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jc3lwcGRkcGZkd3N6anVqdmRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAwODEwMDQsImV4cCI6MjA3NTY1NzAwNH0.baTeknh36nwbn3PFV_CNGt-3aTD7QYo12mI1cxn6iZw"
};

class MagicItemsDB {
    constructor(containerElement) {
        this.container = containerElement;
        this.supabaseClient = supabase.createClient(SUPABASE_CONFIG.URL, SUPABASE_CONFIG.ANON_KEY);
        this.items = [];
        this.filteredItems = [];
        this.sortAscending = true;

        this.init();
    }

    async init() {
        this.renderHTML();
        this.setupEventListeners();
        await this.loadItems();
        this.applyFilters();
    }

    renderHTML() {
        this.container.innerHTML = `
            <div class="magic-items-db">
                <header class="magic-items-header">
                    <div class="magic-items-controls">
                        <input type="text" id="mi-search" placeholder="Search by name..." class="magic-items-input" />
                        <select id="mi-filter-type" class="magic-items-select">
                            <option value="">All Types</option>
                        </select>
                        <select id="mi-filter-rarity" class="magic-items-select">
                            <option value="">All Rarities</option>
                            <option value="Common">Common</option>
                            <option value="Uncommon">Uncommon</option>
                            <option value="Rare">Rare</option>
                            <option value="Very Rare">Very Rare</option>
                            <option value="Legendary">Legendary</option>
                            <option value="Unique">Unique</option>
                        </select>
                        <select id="mi-filter-attunement" class="magic-items-select">
                            <option value="">All Attunements</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                        <button id="mi-sort-alpha" class="magic-items-button">Sort A–Z</button>
                    </div>
                </header>

                <main class="magic-items-main">
                    <table id="mi-results" class="magic-items-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Rarity</th>
                                <th>Attunement</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- Data rows will be populated here -->
                        </tbody>
                    </table>
                </main>

                <!-- Item Details Modal -->
                <div id="mi-modal" class="magic-items-modal">
                    <div class="magic-items-modal-content">
                        <span id="mi-modal-close" class="magic-items-close">&times;</span>
                        <h2 id="mi-modal-title"></h2>
                        <div class="magic-items-meta" id="mi-modal-meta"></div>
                        <div id="mi-modal-description" class="magic-items-description"></div>
                    </div>
                </div>
            </div>
        `;
    }

    setupEventListeners() {
        // Search and filters — the search box is debounced because each input
        // event rebuilds the entire results table.
        const searchInput = this.container.querySelector('#mi-search');
        let searchTimer = null;
        searchInput.addEventListener('input', () => {
            clearTimeout(searchTimer);
            searchTimer = setTimeout(() => this.applyFilters(), 150);
        });
        this.container.querySelector('#mi-filter-type').addEventListener('change', () => this.applyFilters());
        this.container.querySelector('#mi-filter-rarity').addEventListener('change', () => this.applyFilters());
        this.container.querySelector('#mi-filter-attunement').addEventListener('change', () => this.applyFilters());
        this.container.querySelector('#mi-sort-alpha').addEventListener('click', () => this.toggleSort());

        // Modal
        this.container.querySelector('#mi-modal-close').addEventListener('click', () => this.closeModal());
        this.container.querySelector('#mi-modal').addEventListener('click', (e) => {
            if (e.target === this.container.querySelector('#mi-modal')) this.closeModal();
        });
    }

    async loadItems() {
        try {
            const { data, error } = await this.supabaseClient.from("items").select("*");
            if (error) throw error;
            this.items = Array.isArray(data) ? data : [];
            this.items = this.items.map(i => ({ ...i, attunement: (i.attunement || "").toString() }));
            this.populateFilters();
        } catch (err) {
            console.error("Fetch failed:", err);
            this.container.querySelector('#mi-results tbody').innerHTML = "<tr><td colspan='4'>Failed to load items.</td></tr>";
        }
    }

    populateFilters() {
        const typeFilter = this.container.querySelector('#mi-filter-type');
        
        // Clear existing options (keep first)
        typeFilter.querySelectorAll("option:not(:first-child)").forEach(n => n.remove());
        
        // Add types
        const types = [...new Set(this.items.map(i => (i.type || "").replace(/\s*\(.*\)/, "")).filter(Boolean))].sort();
        
        types.forEach(t => {
            const opt = document.createElement("option");
            opt.value = t;
            opt.textContent = t;
            typeFilter.appendChild(opt);
        });
    }

    applyFilters() {
        const search = (this.container.querySelector('#mi-search').value || "").toLowerCase().trim();
        const typeVal = this.container.querySelector('#mi-filter-type').value || "";
        const rarityVal = this.container.querySelector('#mi-filter-rarity').value || "";
        const attuneVal = this.container.querySelector('#mi-filter-attunement').value || "";

        this.filteredItems = this.items.filter(i => {
            const matchesSearch = search === "" || 
                (i.name || "").toLowerCase().includes(search) ||
                (i.type || "").toLowerCase().includes(search);
            const matchesType = typeVal === "" || (i.type || "").toLowerCase().includes(typeVal.toLowerCase());
            const matchesRarity = rarityVal === "" || (i.rarity || "") === rarityVal;
            const matchesAttune = attuneVal === "" || (i.attunement || "") === attuneVal;
            return matchesSearch && matchesType && matchesRarity && matchesAttune;
        });

        this.filteredItems.sort((a, b) =>
            this.sortAscending
                ? (a.name || "").localeCompare(b.name || "")
                : (b.name || "").localeCompare(a.name || "")
        );
        
        this.renderItems();
    }

    renderItems() {
        const tbody = this.container.querySelector('#mi-results tbody');
        tbody.innerHTML = "";

        if (!this.filteredItems || this.filteredItems.length === 0) {
            tbody.innerHTML = "<tr><td colspan='4'>No items found.</td></tr>";
            return;
        }

        this.filteredItems.forEach(item => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td>${this.escapeHtml(item.name || "")}</td>
                <td>${this.escapeHtml(item.type || "")}</td>
                <td>${this.escapeHtml(item.rarity || "")}</td>
                <td>${this.escapeHtml(item.attunement || "")}</td>
            `;
            tr.addEventListener("click", () => this.openModal(item));
            tbody.appendChild(tr);
        });
    }

    toggleSort() {
        this.sortAscending = !this.sortAscending;
        this.container.querySelector('#mi-sort-alpha').textContent = this.sortAscending ? "Sort A–Z" : "Sort Z–A";
        this.applyFilters();
    }

    openModal(item) {
        this.container.querySelector('#mi-modal-title').textContent = item.name || "";
        this.container.querySelector('#mi-modal-meta').innerHTML = `
            <span class="magic-items-meta-item"><strong>Type:</strong> ${this.escapeHtml(item.type || "")}</span>
            <span class="magic-items-meta-item"><strong>Rarity:</strong> ${this.escapeHtml(item.rarity || "")}</span>
            <span class="magic-items-meta-item"><strong>Attunement:</strong> ${this.escapeHtml(item.attunement || "")}</span>
        `;
        
        const descriptionElement = this.container.querySelector('#mi-modal-description');
        const rawDescription = item.description || "";
        if (window.marked && window.DOMPurify) {
            // Sanitize the rendered HTML: item descriptions are user-contributed.
            descriptionElement.innerHTML = DOMPurify.sanitize(marked.parse(rawDescription));
        } else {
            // Without DOMPurify, fall back to plain text rather than unsanitized HTML.
            descriptionElement.textContent = rawDescription;
        }
        
        this.container.querySelector('#mi-modal').style.display = "flex";
    }

    closeModal() {
        this.container.querySelector('#mi-modal').style.display = "none";
    }

    escapeHtml(str) {
        return String(str)
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;")
            .replaceAll("'", "&#039;");
    }
}

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('magic-items-container');
    if (container) {
        window.magicItemsDB = new MagicItemsDB(container);
    }
});