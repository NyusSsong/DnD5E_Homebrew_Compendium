---
name: dnd-homebrew-repo
description: >
  Manage and format content for a D&D 5E homebrew MkDocs repository.
  Use this skill whenever the user asks to add a new class, subclass, feature list,
  or any other content to the repo; reformat or standardize existing Markdown files;
  create or update snippet files; assemble a class page; check or update the filter
  system; or follow repository conventions for structure and naming. Also use when
  the user pastes raw homebrew text and asks to convert it into repo format.
---

# D&D Homebrew Repository Skill

This skill governs formatting, structure, and conventions for a MkDocs-based D&D 5E
homebrew repository. Always read this skill before creating or editing any file.

---

## Repository Structure

```
./docs/
    index.md
    magic-items.md
    rules.md
    assets/
        css/
            custom.css
            magic-items.css
            admonition-*.css
        icons/
        js/
            filter-js          ← global filter registration
            magic-items.js
    classes/
        base_classes/          ← assembled class pages (one per class)
        kibbles/               ← Kibbles' Tasty class pages
        laserllama/            ← Laserllama's class pages
        valda/                 ← Valda's Spire class pages
    snippets/
        base_classes/[classname]/   ← snippet files for base classes
        kibbles/[classname]/        ← snippet files for Kibbles' classes
        laserllama/[classname]/     ← snippet files for Laserllama's classes
        valda/[classname]/          ← snippet files for Valda classes
        compendium/rules/           ← rules, feats, glossary, etc.
./templates/                   ← reference templates (never published)
./mkdocs.yml
```

**Source folder convention:**
- Base classes → `base_classes/[classname]/`
- Kibbles classes → `kibbles/kt_[classname]/`
- Laserllama classes → `laserllama/ll_[classname]/`
- Valda classes → `valda/valda_[classname]/`

---

## Snippet Types & Templates

Each class is composed of snippet files included via `--8<--`. The templates live in
`./templates/`. Always use them as the basis for new files.

### Universal snippets (every class)

| File               | Template                     |
| ------------------ | ----------------------------- |
| `progression.md`   | `templates/progression.md`   |
| `core_features.md` | `templates/core_features.md` |
| `subclasses.md`    | `templates/subclasses.md`    |

### Optional snippets (add only if the class has them)

| File                      | When to create                                                       |
| ------------------------- | ---------------------------------------------------------------------|
| `alternate_subclasses.md` | Class has alternate/variant subclasses                               |
| `[feature_list].md`       | Class has a named list: exploits, knacks, talents, disciplines, etc. |
| `animal_companion.md`     | Class has an animal companion mechanic                               |
| Any other named tab       | Determined by the class content                                      |

---

## Assembled Class Page (`docs/classes/[source]/[classname].md`)

Use `templates/class.md`. Structure:

```markdown
# The [ClassName]

[One or two sentences of flavour text.]

=== "Progression Table"

    --8<-- "[source_folder]/[classname]/progression.md"

=== "Core [ClassName] Features"

    --8<-- "[source_folder]/[classname]/core_features.md"

<!-- Optional class-specific tabs here, before Alternate Subclasses and Subclasses -->

=== "Subclasses"

    --8<-- "[source_folder]/[classname]/subclasses.md"
```

**Tab order rules:**
1. Progression Table — always first
2. Core Features — always second
3. Class-specific tabs (Exploits, Knacks, Talents, etc.) — middle, ordered by relevance
4. Alternate Subclasses — if present, just before Subclasses
5. Subclasses — always last

---

## Formatting Rules

### core_features.md
- All section headers use `####` (h4)
- Bold labels include their colon: `**Armor:**`, `**Hit Dice:**`
- Sections separated by `<hr>`
- Named subsections within a feature use bold inline: `**Subsection Name.** Description.`
- Feature levels come from the source text — never assume or invent them

### Bullet point rules (apply everywhere)

**Untitled lists** — items with no bold lead:
- Use `-`, never `*`
- No blank lines between consecutive untitled items

```markdown
- First item
- Second item
- Third item
```

**Titled items** — items that open with `**Name.**`:
- Remove the bullet character entirely
- Separate each item with a blank line so they render as bold-lead paragraphs

```markdown
**First Item.** Description text.

**Second Item.** Description text.

**Third Item.** Description text.
```

### subclasses.md and alternate_subclasses.md

> **Migration in progress:** the repo is moving from the legacy `## ^^Name^^` heading
> format to the collapsible `??? subclass "Name"` admonition format. `??? subclass` is
> the only target format going forward — never produce new content in `## ^^Name^^`.
> When editing or reformatting any existing snippet still in the legacy format,
> convert it to `??? subclass` as part of that edit rather than leaving it as-is.
>
> The same migration applies to filtered feature lists (monk techniques, metamagic, etc.)
> which historically used `### ^^TierName^^` as tier headers. New content and any file
> touched during edits should use the appropriate admonition type instead (see
> **Admonition Types** below).

- Subclass name: `??? subclass "[Full Subclass Name]"` (Title Case, double quotes) —
  never a `##`/`###` heading. The name always lives in the admonition title.
- Content inside `??? subclass` is indented exactly 4 spaces (no tabs).
- Feature headers: `### Level [X] - [Feature Name]`, indented at the same 4-space level.
- Feature levels come from the source text — never assume or invent them
- If the subclass has a spell-by-level (or equivalent) progression table, use a nested
  `??? table "[Element Name]"` admonition (8-space indent) instead of a loose Markdown
  table. Spell names in *italics*, options separated by ` / `.
- `<hr>` between features within a subclass (own line, 4-space indent)
- `<hr>` after the last feature before the closing `</div>` of each subclass
- Each subclass wrapped in `<div class="subclass-content" data-subclass="[slug]">`
- Subclass slug: kebab-case, e.g. `ancestral-guardian`, `alt-berserker`
- Slug in `data-subclass` must exactly match the `value` in the corresponding
  `<option>` of the filter `<select>` (see Filter System below)

**Reference structure:**

```markdown
<div class="subclass-content" data-subclass="[slug]">

??? subclass "[Full Subclass Name]"

    [One or two sentences of flavour text.]

    ### Level [X] - [Feature Name]

    [Feature description.]

    <hr>

</div>
```

### progression.md
- Standard 20-level table, PB values are fixed (5E standard)
- First three columns always: `Level | PB | Features`
- Additional columns determined by the class content

---

## Filter System

### When to add a filter

Add a filter to a snippet when:
1. **Always:** `subclasses.md` and `alternate_subclasses.md`
2. **When elements are categorized by level or degree:** feature lists like exploits,
   knacks, disciplines, talents, etc. The content itself determines this — if items are
   grouped under named tiers or degree headings, add a filter.

### Filter HTML pattern

```html
<p><strong>Choose a [category type]:</strong></p>

<select id="[filter-id]" style="padding: 0.4em; border-radius: 6px; border: 1px solid #888; background: var(--md-default-bg-color); color: var(--md-typeset-color);">
    <option value="all">All</option>
    <option value="[slug]">[Display Name]</option>
</select>

<div class="[content-class]" data-[data-attr]="[slug]">

??? subclass "[Category Display Name]"

    [items...]

</div>
```

> Note: for `subclasses.md`/`alternate_subclasses.md` specifically, the admonition
> title is the subclass name itself (see above) — this generic pattern applies to
> other filtered content classes (e.g. exploit lists) that adopt the same collapsible
> convention. If a given content class still uses a different header style, follow
> that snippet's own formatting rules instead.

### Registered filters

Before adding a new filter, read `docs/assets/js/filter-js` to see every `setupFilter()`
call already registered. Do not duplicate an existing filter ID.

### Adding a new class-specific filter

When a new snippet needs a filter ID not already in filter-js:
1. Use a descriptive ID: `[category]-select` (e.g. `discipline-select`, `talent-select`)
2. **Multi-word data attributes:** the HTML attribute uses kebab-case (`data-metamagic-cost`)
   but the `data-attr` argument passed to `setupFilter()` must use camelCase
   (`metamagicCost`). Single-word attributes are the same in both (`data-subclass` →
   `subclass`).
3. Propose adding this line to `filter-js` under `// Initialize filters`:
   ```javascript
   setupFilter('[filter-id]', '[content-class]', '[data-attr]');
   ```
4. Always inform the user and ask for confirmation before editing `filter-js`

### Filtered list item format

Within each `<div>`, individual items use `####` with prerequisites in `*italics*`
immediately below the header, no blank line between them:

```markdown
#### Item Name
*Prerequisites: Condition*

Description text.
```

No `<hr>` between individual items. Each `<div>` block ends with `<hr>` before its
closing `</div>` tag (same rule as subclasses).

---

## Admonition Types

Any SVG file present in `docs/assets/icons/svg/` can be used as an admonition type.
The keyword is the filename without the `.svg` extension; underscores are preserved
(`bonus_action`, not `bonus-action`). Use `???` for collapsible, `!!!` for always-open.

Available types by category:

| Category | Types |
| --------- | ------|
| **Combat** | `action`, `bonus_action`, `initiative`, `melee`, `ranged`, `reach`, `reaction`, `round`, `target` |
| **Campaign** | `character`, `explore`, `feature`, `hazard`, `lock`, `monster`, `party`, `puzzle`, `rest`, `social`, `source-book`, `spell`, `subclass`, `table`, `trap` |
| **Creature** | `aberration`, `beast`, `celestial`, `construct`, `dragon`, `elemental`, `fae`, `fiend`, `giant`, `humanoid`, `monstrosity`, `ooze`, `plant`, `undead` |
| **Entity** | `archive`, `armor`, `book`, `location`, `loot`, `magic-item`, `map`, `mount`, `object`, `organization`, `pack`, `person`, `pet`, `potion`, `ring`, `scroll`, `ship`, `spellbook`, `summon`, `time`, `tool`, `trinket`, `vehicle`, `wand`, `weapon`, `world` |

**Commonly used in class content:**

* `??? subclass "Name"` — subclass entry
* `??? table "Name"` — structured table (spell lists, progression variants)
* `??? spell "Name"` — individual spell or power stat block
* `??? spellbook "Name"` — spell list or alternate-effects block
* `??? feature "Name"` — optional feature callout

When adding a new icon type to the repo, add the SVG to the appropriate category folder
and register its CSS in the matching `admonition-[category].css` file.

---

## master-index.yml

`master-index.yml` at the repo root is a machine-readable index of every class page and
its snippets. **Update it whenever you add a new class or snippet file.**

Schema (add one item block per new class):

```yaml
- class_name: ClassName       # Display name, Title Case
  slug: source_classname      # Matches the folder name, e.g. kt_psion, valda_warden
  page: docs/classes/[source]/[slug].md
  snippets:
    - docs/snippets/[source]/[slug]/progression.md
    - docs/snippets/[source]/[slug]/core_features.md
    # … one entry per snippet file actually created
```

Also update `summary.total_class_pages` and the relevant source counter when adding a
class. Do not update `generated_on` — leave that for the user.

---

## Workflow: Adding a New Class

1. Identify source folder based on publisher (base_classes / kibbles / valda)
2. Read source text carefully to determine:
   - Which snippet files are needed
   - Whether a filter is needed for any snippet
   - Column names for the progression table
   - Feature levels for subclasses (from the text, never assumed)
3. Create snippet files in `docs/snippets/[source_folder]/[classname]/`
4. Create assembled page in `docs/classes/[source_folder]/[classname].md`
5. Check if input material brings extra format in tables. Output tables do not use `<div>`, just pure Markdown.
6. Check `filter-js`: if any new filter IDs are needed, propose the addition to the user
7. Check in similar files for other classes if some of the bullet points (especially in `core_features.md` files) have a double space at the end to account for the line-break spacing issue.

## Workflow: Reformatting Existing Content

1. Identify which snippet type the content corresponds to
2. Load the relevant template from `./templates/`
3. Apply formatting rules for that snippet type
4. Preserve all mechanical content exactly — never alter rules text
5. Flag any ambiguities to the user rather than guessing

---

## What Never Changes

- Mechanical rules text is always preserved verbatim
- PB progression (5E standard) is never modified
- Subclass names always live in a `??? subclass "Name"` admonition title, never in a
  `##`/`###` heading — this applies to new content and to any legacy file touched
  during the `## ^^Name^^` → `??? subclass` migration
- The `--8<--` include paths in assembled pages must match the actual snippet file paths exactly