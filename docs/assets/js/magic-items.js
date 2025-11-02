// Magic Items Database Standalone Component
class MagicItemsDB {
    constructor(containerElement) {
        this.container = containerElement;
        this.SUPABASE_URL = "https://mcsyppddpfdwszjujvdb.supabase.co";
        this.SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jc3lwcGRkcGZkd3N6anVqdmRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAwODEwMDQsImV4cCI6MjA3NTY1NzAwNH0.baTeknh36nwbn3PFV_CNGt-3aTD7QYo12mI1cxn6iZw";
        
        this.supabaseClient = supabase.createClient(this.SUPABASE_URL, this.SUPABASE_ANON_KEY);
        this.items = [];
        this.filteredItems = [];
        this.sortAscending = true;
        this.user = null;
        
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
                        <div class="magic-items-auth" style="display: none;">
                            <button id="mi-login-btn" class="magic-items-button">Login</button>
                            <button id="mi-logout-btn" class="magic-items-button" style="display:none;">Logout</button>
                            <button id="mi-open-add-card" class="magic-items-button" style="display:none;">Add Item</button>
                        </div>
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

                <!-- Add Item Card -->
                <div id="mi-add-item-card" class="magic-items-modal">
                    <div class="magic-items-card-content">
                        <h2>Add New Item</h2>
                        <input type="text" id="mi-add-name" placeholder="Name" required class="magic-items-input" />
                        <input type="text" id="mi-add-type" placeholder="Type" required class="magic-items-input" />
                        <select id="mi-add-rarity" required class="magic-items-select">
                            <option value="">Select Rarity</option>
                            <option value="Common">Common</option>
                            <option value="Uncommon">Uncommon</option>
                            <option value="Rare">Rare</option>
                            <option value="Very Rare">Very Rare</option>
                            <option value="Legendary">Legendary</option>
                            <option value="Unique">Unique</option>
                        </select>
                        <select id="mi-add-attunement" required class="magic-items-select">
                            <option value="">Requires Attunement?</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                        <textarea id="mi-add-description" placeholder="Description (supports * for bullet points)" class="magic-items-textarea"></textarea>
                        <div class="magic-items-card-buttons">
                            <button class="magic-items-submit-btn" id="mi-submit-item">Add Item</button>
                            <button class="magic-items-cancel-btn" id="mi-cancel-item">Cancel</button>
                        </div>
                    </div>
                </div>

                <!-- Login Modal -->
                <div id="mi-login-modal" class="magic-items-modal">
                    <div class="magic-items-card-content">
                        <h2>Login</h2>
                        <input type="email" id="mi-login-email" placeholder="Email" required class="magic-items-input" />
                        <input type="password" id="mi-login-password" placeholder="Password" required class="magic-items-input" />
                        <div class="magic-items-card-buttons">
                            <button id="mi-login-submit" class="magic-items-submit-btn">Login</button>
                            <button id="mi-login-cancel" class="magic-items-cancel-btn">Cancel</button>
                        </div>
                        <p id="mi-login-error" class="magic-items-error"></p>
                    </div>
                </div>
            </div>
        `;
    }

    setupEventListeners() {
        // Search and filters
        this.container.querySelector('#mi-search').addEventListener('input', () => this.applyFilters());
        this.container.querySelector('#mi-filter-type').addEventListener('change', () => this.applyFilters());
        this.container.querySelector('#mi-filter-rarity').addEventListener('change', () => this.applyFilters());
        this.container.querySelector('#mi-filter-attunement').addEventListener('change', () => this.applyFilters());
        this.container.querySelector('#mi-sort-alpha').addEventListener('click', () => this.toggleSort());

        // Modal
        this.container.querySelector('#mi-modal-close').addEventListener('click', () => this.closeModal());
        this.container.querySelector('#mi-modal').addEventListener('click', (e) => {
            if (e.target === this.container.querySelector('#mi-modal')) this.closeModal();
        });

        // Add item card
        this.container.querySelector('#mi-open-add-card')?.addEventListener('click', () => this.openAddCard());
        this.container.querySelector('#mi-cancel-item').addEventListener('click', () => this.closeAddCard());
        this.container.querySelector('#mi-add-item-card').addEventListener('click', (e) => {
            if (e.target === this.container.querySelector('#mi-add-item-card')) this.closeAddCard();
        });
        this.container.querySelector('#mi-submit-item').addEventListener('click', () => this.submitItem());

        // Login
        this.container.querySelector('#mi-login-btn')?.addEventListener('click', () => this.openLogin());
        this.container.querySelector('#mi-login-cancel').addEventListener('click', () => this.closeLogin());
        this.container.querySelector('#mi-login-modal').addEventListener('click', (e) => {
            if (e.target === this.container.querySelector('#mi-login-modal')) this.closeLogin();
        });
        this.container.querySelector('#mi-login-submit').addEventListener('click', () => this.submitLogin());
        this.container.querySelector('#mi-logout-btn')?.addEventListener('click', () => this.logout());
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
        const types = [...new Set(this.items.map(i => i.type || "").filter(Boolean))].sort();
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
            const matchesSearch = (i.name || "").toLowerCase().includes(search);
            const matchesType = typeVal === "" || (i.type || "") === typeVal;
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
        if (window.marked) {
            descriptionElement.innerHTML = marked.parse(item.description || "");
        } else {
            descriptionElement.textContent = item.description || "";
        }
        
        this.container.querySelector('#mi-modal').style.display = "flex";
    }

    closeModal() {
        this.container.querySelector('#mi-modal').style.display = "none";
    }

    openAddCard() {
        this.container.querySelector('#mi-add-item-card').style.display = "flex";
    }

    closeAddCard() {
        this.container.querySelector('#mi-add-item-card').style.display = "none";
    }

    openLogin() {
        this.container.querySelector('#mi-login-modal').style.display = "flex";
    }

    closeLogin() {
        this.container.querySelector('#mi-login-modal').style.display = "none";
        this.container.querySelector('#mi-login-error').textContent = "";
    }

    async submitLogin() {
        const email = this.container.querySelector('#mi-login-email').value;
        const password = this.container.querySelector('#mi-login-password').value;
        const errorElement = this.container.querySelector('#mi-login-error');

        errorElement.textContent = "";

        try {
            const { data, error } = await this.supabaseClient.auth.signInWithPassword({ email, password });
            if (error) throw error;
            
            this.user = data.user;
            this.closeLogin();
            this.updateAuthUI();
        } catch (err) {
            console.error(err);
            errorElement.textContent = "Login failed. Check your credentials.";
        }
    }

    async logout() {
        await this.supabaseClient.auth.signOut();
        this.user = null;
        this.updateAuthUI();
    }

    updateAuthUI() {
        const loginBtn = this.container.querySelector('#mi-login-btn');
        const logoutBtn = this.container.querySelector('#mi-logout-btn');
        const addBtn = this.container.querySelector('#mi-open-add-card');
        const authContainer = this.container.querySelector('.magic-items-auth');

        if (this.user) {
            if (loginBtn) loginBtn.style.display = "none";
            if (logoutBtn) logoutBtn.style.display = "inline-block";
            if (addBtn) addBtn.style.display = "inline-block";
        } else {
            if (loginBtn) loginBtn.style.display = "inline-block";
            if (logoutBtn) logoutBtn.style.display = "none";
            if (addBtn) addBtn.style.display = "none";
        }

        // Show auth controls only if needed
        if (authContainer) {
            authContainer.style.display = "block";
        }
    }

    async submitItem() {
        if (!this.user) {
            alert("You must be logged in to add items.");
            return;
        }

        const newItem = {
            name: this.container.querySelector('#mi-add-name').value.trim(),
            type: this.container.querySelector('#mi-add-type').value.trim(),
            rarity: this.container.querySelector('#mi-add-rarity').value,
            attunement: this.container.querySelector('#mi-add-attunement').value,
            description: this.container.querySelector('#mi-add-description').value.trim()
        };

        if (!newItem.name || !newItem.type || !newItem.rarity || !newItem.attunement) {
            alert("Please fill all required fields.");
            return;
        }

        try {
            const { error } = await this.supabaseClient.from("items").insert([newItem]);
            if (error) throw error;

            // Reset form
            this.container.querySelector('#mi-add-name').value = "";
            this.container.querySelector('#mi-add-type').value = "";
            this.container.querySelector('#mi-add-rarity').value = "";
            this.container.querySelector('#mi-add-attunement').value = "";
            this.container.querySelector('#mi-add-description').value = "";
            
            this.closeAddCard();
            await this.loadItems();
            this.applyFilters();
        } catch (err) {
            console.error("Failed to add item:", err);
            alert("Failed to add item.");
        }
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