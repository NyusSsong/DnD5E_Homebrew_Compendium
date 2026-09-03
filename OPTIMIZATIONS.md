# Repository Analysis & Optimization Proposals

Analysis of the DnD 5E Homebrew Compendium repo (MkDocs Material site, ~209 Markdown
files / ~52k lines, 34 assembled class pages, 172 snippets, 2 JS files, 6 CSS files).

Findings are grouped by impact. Each item lists the concrete change, the reason, and
rough effort.

## Execution log

Session of 2026-09-03 — items implemented in risk-ascending order:

1. **SKILL.md / AGENTS.md reconciled with the repo** (§3): `master-index.yml` references
   dropped (file was deleted in commit `87d5995`), `filter-js` → `filter.js` everywhere,
   thematic subclass-tab naming documented.
2. **Cosmetic/content normalization** (§2a–e): `bomb_formulae.md` `---` → `<hr>` (26),
   `filter.js` missing semicolons, Portuguese CSS comments translated,
   `templates/class.md` shows a thematic subclass tab, `templates/subclasses.md` /
   `templates/alternate_subclass.md` / SKILL.md filter pattern use `class="filter-select"`,
   `magic-items.md` duplicate stylesheet `<link>` removed, `marked` pinned to 18.0.11.
3. **Config hygiene** (§2b, §7): `.editorconfig` added (`end_of_line = lf` — the canonical
   git blobs are LF; on-disk CRLF here is a `core.autocrlf=true` artifact),
   `.gitignore` extended (`site/`, `.venv/`, `__pycache__/`, `.DS_Store`).
4. **Encoding** (§2b): UTF-8 BOMs stripped from all 67 affected `.md` files.
5. **XSS fix** (§4.1): `magic-items.js` now sanitizes `marked.parse()` output with
   DOMPurify 3.4.14 (pinned; versions 3.1.3–3.2.6 are vulnerable to CVE-2026-0540);
   without DOMPurify it degrades to plain text, never unsanitized HTML.
6. **JS hardening** (§4.2–4.5): Supabase URL/anon key hoisted into a `SUPABASE_CONFIG`
   constant; 150 ms debounce on the search box; marked 18.0.11 and supabase-js 2.114.0
   pinned (DOMPurify 3.4.14 added with the XSS fix). §4.4 investigated — no change needed.
7. **Dead auth UI removed from the Magic Items page** (§4.6, 2026-09-04): after RLS
   was verified in the Supabase dashboard and web write policies were dropped in favor
   of DBeaver edits (dedicated `db_editor` role), the site is anonymous read-only.
   Removed the login/add-item modals, auth buttons, and all auth methods (`submitLogin`,
   `logout`, `updateAuthUI`, `submitItem`, …) from `magic-items.js`, the card/login CSS
   from `magic-items.css`, and the duplicate inline `<script>` for `magic-items.js` in
   `docs/magic-items.md` (it is already loaded site-wide via `mkdocs.yml`
   `extra_javascript` — the double load spun up two instances on that page).
8. **Content decisions** (§7, 2026-09-04): orphaned `spellcasting.md` published as a
   "Spellcasting Services" tab in `docs/rules.md`; empty `input/` kept and documented
   via `input/README.md` (AGENTS.md's workflow depends on it); `readme.md` rewritten
   with a repo intro and local-build instructions (credits notice preserved); duplicate
   "Psion Spell List" / "Core Warden Features" tab labels left as-is per owner decision.
9. **filter.js self-registration** (§5, 2026-09-04): replaced the 11 `setupFilter(...)`
   registrations with one delegated `change` listener driven by `data-filter-content` /
   `data-filter-attr` on each select; added the attributes to all 69 selects (67
   snippets + 2 templates) and updated SKILL.md/AGENTS.md (the "edit filter.js" step
   and its user-confirmation guard are gone). **Bonus fix:** the Kibbles Inventor
   "Upgrades" filter was registered as `upgrade-content`/`upgrade` but its content
   divs are `subclass-content`/`data-subclass` — it never worked; rewired to
   `subclass-content`/`subclass`. The delegated listener also survives MkDocs
   Material's `navigation.instant` soft page swaps, which the old
   `DOMContentLoaded`-captured listeners did not.

Still open: §1 (CI + validation script), §6 (CSS consolidation/audit).

---

## 1. Highest value: automate the consistency checks (CI + validation script)

The repo's conventions are extensive (SKILL.md, AGENTS.md) and are currently enforced
only by human/agent discipline. Every rule in the "never do" lists is machine-checkable.

**Proposed change:** add a small validation script (Python or Node, no deps) that runs
against `docs/` and fails on:

- `--8<--` include targets in assembled pages that don't exist, and orphan snippets
  (snippet files never included) — e.g. `compendium/rules/spellcasting.md` is currently
  orphaned.
- Legacy `## ^^Name^^` subclass headings (migration target is `??? subclass`).
- Single-dash `-8<--` includes (silently render as literal text).
- `&nbsp;` entities, `<div class='classTable'>` wrappers.
- `---` used as horizontal rules instead of `<hr>` (see §2).
- Filter `<select class="filter-select">`s missing `data-filter-content` /
  `data-filter-attr`, or whose declared content class / data attribute doesn't exist
  in the same file.
- Nav entries in `mkdocs.yml` vs. actual class pages (currently in sync).

**Why:** turns the documented conventions into automated guardrails; catches regressions
on every change instead of during review.

**Effort:** medium (one script + wiring). Pair it with a GitHub Actions workflow
(`mkdocs build` on PRs, deploy to GitHub Pages on push to `master`) and a pinned
`requirements.txt` (mkdocs + mkdocs-material). There is currently **no build tooling,
no CI, no dependency pinning** — the site cannot be verified or deployed reproducibly.

---

## 2. Quick consistency fixes (mechanical, low risk)

| # | Finding | Proposal |
|---|---------|----------|
| a | `docs/snippets/valda/valda_alchemist/bomb_formulae.md` uses `---` as separators (lines 38–64+); every other snippet uses `<hr>` | Convert to `<hr>` |
| b | 67 of 223 Markdown files have a UTF-8 **BOM** (e.g. `docs/snippets/base_classes/barbarian/subclasses.md`); the rest don't. **Status: resolved** (2026-09-03) — BOMs stripped from all 67 files; `.editorconfig` added (`charset = utf-8`, `end_of_line = lf`) |
| c | `docs/assets/js/filter.js` has inconsistent semicolons (`setupFilter(...)` calls sometimes lack `;`) and mixes quote styles | Format with Prettier/StandardJS. **Status: resolved** (2026-09-03) — missing semicolons added |
| d | `docs/assets/css/custom.css` mixes English and Portuguese comments (e.g. "Override específico para headings dentro de admonitions/details") | Translate to English for consistency. **Status: resolved** (2026-09-03) |
| e | `docs/magic-items.md` loads `assets/css/magic-items.css` via `<link>` **and** the file is already in `mkdocs.yml` `extra_css` (loaded on every page) | Remove the duplicate `<link>`; pin CDN versions. **Status: resolved** (2026-09-03) — duplicate `<link>` removed; marked/supabase-js pinned exactly |

---

## 3. Docs/tooling drift: SKILL.md and AGENTS.md no longer match reality

These three discrepancies will mislead any agent or contributor:

1. **`master-index.yml` is referenced as a mandatory update target** (SKILL.md §"master-index.yml",
   AGENTS.md step 6) **but the file was deleted** in commit `87d5995` and never recreated.
   Either restore it (it can be regenerated from `mkdocs.yml` + the filesystem) or strip
   all references from SKILL.md/AGENTS.md. As-is, every new class instructs agents to
   update a file that doesn't exist. **Status: resolved** (2026-09-03) — the references
   were dropped from SKILL.md/AGENTS.md; the file was deliberately deleted in commit
   `87d5995` and was already stale when removed, so it was not restored.
2. **The filter file is `docs/assets/js/filter.js`,** but SKILL.md and AGENTS.md call it
   `docs/assets/js/filter-js` (no extension) in ~10 places. Rename references (or the file).
   **Status: resolved** (2026-09-03) — all references now say `filter.js`.
3. **Select styling is drifted:** all 67 `<select>` elements in snippets use
   `class="filter-select"` (defined in `custom.css`), but `templates/subclasses.md` and
   the SKILL.md filter pattern still show the old inline `style="padding: 0.4em; …"`
   markup. Align templates + SKILL.md with the CSS-class approach; the inline-style
   pattern in the template is dead convention. **Status: resolved** (2026-09-03) —
   `templates/subclasses.md`, `templates/alternate_subclass.md`, and the SKILL.md filter
   pattern now use `class="filter-select"`.

**Bonus:** the assembled-page template says the last tab is `"Subclasses"`, but **no**
class page uses that label — every page uses a thematic name ("Primal Paths", "Witch's
Crafts", "Divine Domains", "Occult Traditions", …). This is a deliberate and consistent
deviation. **Status: resolved** (2026-09-03) — documented in SKILL.md (§ Assembled Class
Page), AGENTS.md (step 5), and `templates/class.md` now shows a `[Thematic Subclass Tab
Name]` placeholder.

---

## 4. JS quality: `magic-items.js`

The Magic Items database component (`docs/assets/js/magic-items.js`, ~220 lines) is the
largest piece of hand-written code. Findings, in order of importance:

1. **Unsanitized markdown → stored XSS risk.** `openModal()` renders
   `marked.parse(item.description)` straight into the DOM. Table cells are correctly
   escaped via `escapeHtml()`, but the description path is not. Since the component has
   an authenticated "Add Item" flow, any user with write access to the Supabase table can
   inject script. Fix: sanitize with DOMPurify before/after `marked.parse`, or render
   with `textContent` and a tiny safe markdown subset (bullets are the advertised
   feature). **Status: resolved** (2026-09-03) — `DOMPurify.sanitize(marked.parse(...))`
   with DOMPurify 3.4.14 pinned; falls back to plain text (never unsanitized HTML)
   when DOMPurify is unavailable. (2026-09-04: the authenticated add-item flow was
   removed entirely — see execution log #7 — so descriptions are now DBeaver-administered;
   DOMPurify is kept as defense-in-depth.)
2. **Credentials are hardcoded.** The Supabase URL + anon key live in the constructor.
   Anon keys are public by design, so this is acceptable for a static site **only if**
   Row Level Security (RLS) is enabled server-side — verify that the `items` table
   enforces RLS so the key can't read/insert beyond policy. Consider hoisting them into
   a single `CONFIG` constant at the top of the file for reviewability.
   **Status: resolved** (2026-09-03/04) — hoisted into a `SUPABASE_CONFIG` constant
   with a comment; RLS was then verified in the Supabase dashboard (anonymous reads
   work, anonymous writes rejected with `42501`, write policies were gated by
   `auth.uid() IS NOT NULL`) and the web write policies were dropped entirely in
   favor of DBeaver edits — see execution log #7.
3. **`renderItems()` rebuilds the whole table on every keystroke** in the search box.
   Fine for small datasets; add a ~150 ms debounce if the table grows.
   **Status: resolved** (2026-09-03) — 150 ms debounce added to the search input.
4. **Redundant double render** — `init()` calls `loadItems()` → `populateFilters()`,
   then `applyFilters()` (which re-renders). Harmless; just noting.
   **Status: no action needed** — `populateFilters()` only rebuilds the type `<select>`
   options; the table renders exactly once per data change.
5. **CDN deps are floating:** `marked.min.js` is unpinned (any version); pin exact
   versions in the `<script>` tags for reproducibility.
   **Status: resolved** (2026-09-03) — marked 18.0.11 and supabase-js 2.114.0 pinned
   in `docs/magic-items.md` (DOMPurify 3.4.14 added with the XSS fix).
6. **Dead auth/add-item flow** — after the web write policies were dropped (site is
   anonymous read-only; writes happen via DBeaver), the login buttons, modals, and
   `submitItem` path promised web inserts that RLS now rejects.
   **Status: resolved** (2026-09-04) — auth UI and all related methods/CSS removed;
   also removed the duplicate inline `<script>` for `magic-items.js` (double load
   spawned two instances on the page). See execution log #7.

---

## 5. JS quality: `filter.js`

Current design is fine, but two structural improvements would remove the most
error-prone manual step in the whole workflow:

1. **Every new filter requires editing `filter.js`** (a step SKILL.md/AGENTS.md guard
   with "ask the user first"). Instead of per-select registration, use one delegated
   listener: any `<select data-filter="content-class">` wires itself up on
   `DOMContentLoaded` (or a MutationObserver for tabbed content). New filters in
   snippets then work with **zero JS changes**, which also eliminates the
   "did I register the right id/data-attr?" failure mode.
   **Status: resolved** (2026-09-04) — one delegated `change` listener in `filter.js`
   (10 lines); all 69 selects now carry `data-filter-content` + `data-filter-attr`;
   SKILL.md/AGENTS.md updated. Also fixed the pre-existing dead Kibbles Inventor
   "Upgrades" filter (`upgrade-content`/`upgrade` never matched its
   `subclass-content`/`data-subclass` divs). See execution log #9.
2. `setupFilter` toggles `style.display` directly; a `.is-hidden` class (defined in
   CSS, respecting the site's dark/light scheme) would be cleaner and consistent with
   how `custom.css` is organized. **Status: not done** — behavior identical to the
   old code; optional polish if CSS consolidation (§6) happens.

---

## 6. CSS review

- `custom.css` sets a **global `p { font-size: 0.75rem }`** — this overrides paragraphs
  everywhere, including inside admonitions/details and any future embedded component
  (magic-items has its own font rules that fight it). Scope it to `.md-content`/
  `.md-typeset` paragraphs instead of bare `p`.
- The four `admonition-*.css` files repeat the same "shared structural rules" block
  (border-color + title styles per category). They could share one base file with
  per-category icon variables; low priority, purely cosmetic consolidation.
- `magic-items.css` had heavy repetition in the modal/card button styles; the card/
  login styles were removed wholesale with the dead auth UI (execution log #7) — the
  remaining file is leaner; any residual repetition is lowest priority.
- Some rules in `custom.css` look stale after the table refactor (duplicate
  `.tabbed-content table` border declarations with `!important`); a quick audit with a
  CSS linter (stylelint) would surface dead rules.

---

## 7. Structure / content hygiene (small, worthwhile)

- **`input/` was empty** — the ingestion directory from AGENTS.md.
  **Status: resolved** (2026-09-04) — kept and documented via `input/README.md`;
  AGENTS.md's standard workflow reads source files from `./input/`.
- **`compendium/rules/spellcasting.md` was orphaned** — existed but was never included
  by `rules.md` (which includes mechanical_changes, racial_changes, glossary, feats,
  magic_items). **Status: resolved** (2026-09-04) — published as a "Spellcasting
  Services" tab in `rules.md` (real authored content: hireling spellcasting + pricing).
- **`readme.md` was only a credits/legal notice** — the repo's front door on GitHub
  with no explanation of what the repo is or how to build it.
  **Status: resolved** (2026-09-04) — rewritten with a repo intro, repository layout
  table, local-build instructions, and a brief contributing note; the credits/legal
  notice was preserved.
- Nav labels collide for the two Psion/Warden classes ("Psion Spell List", "Core Warden
  Features" appear twice under different sources). Consider disambiguating labels
  ("Kibbles' Psion" vs "Laserllama's Psion") — already partly handled by section
  headers. **Status: decided** (2026-09-04) — left as-is per owner choice; section
  headers already distinguish the sources.
- `.gitignore` only contains `.env` — add `.venv/`, `__pycache__/`, `site/` (mkdocs
  build output), `.DS_Store`.

---

## Suggested priority order

1. **§1** validation script + CI + pinned requirements (biggest structural win).
2. **§4.1** XSS fix in `magic-items.js` (security).
3. **§3** fix SKILL.md/AGENTS.md drift (master-index.yml, filter-js naming, select
   class convention) so agents stop following stale instructions.
4. **§5.1** self-registering filters in `filter.js` (removes the manual registration step).
5. **§2** mechanical consistency batch (BOM, `---`→`<hr>`, semicolons, duplicate CSS link).
6. **§6–7** CSS audit, README, .gitignore, orphan cleanup.

---

## Appendix: verification commands used

```bash
# All 171 snippet includes resolve; only compendium/rules/spellcasting.md is orphaned
find docs/classes docs/index.md docs/rules.md -name "*.md" -print0 | xargs -0 cat \
  | tr -d '\r' | grep -o -- '--8<-- "[^"]*"' | sed 's/--8<-- "//;s/"//' | sort -u

# Filter ids used in snippets vs. setupFilter() calls in filter.js
grep -rho 'id="[^"]*-select"' docs/snippets | sort -u

# Legacy format fully migrated (0 hits), single-dash includes (0 hits), &nbsp; (0 hits)
grep -rl '^## \^\^' docs --include="*.md" | wc -l
grep -rn '^-8<--' docs --include="*.md" | wc -l
grep -rln '&nbsp;' docs --include="*.md" | wc -l

# Encoding: all 67 BOM files stripped (2026-09-03)
find docs templates -type f -name "*.md" -exec grep -lP '^\xEF\xBB\xBF' {} + | wc -l
```

> Note: line endings on disk are CRLF on this machine because `core.autocrlf=true`;
> the canonical git blobs are LF, so `.editorconfig` declares `end_of_line = lf`.