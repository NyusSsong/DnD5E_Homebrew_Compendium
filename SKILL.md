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
        js/
            filter-js          ← global filter registration
            magic-items.js
    classes/
        base_classes/          ← assembled class pages (one per class)
        kibbles/               ← Kibbles Tasty class pages
        valda/                 ← Valda's Spire class pages
    snippets/
        base_classes/[classname]/   ← snippet files for base classes
        kibbles/[classname]/        ← snippet files for Kibbles classes
        valda/[classname]/          ← snippet files for Valda classes
        compendium/rules/           ← rules, feats, glossary, etc.
./templates/                   ← reference templates (never published)
./mkdocs.yml
```

**Source folder convention:**
- Base classes → `base_classes/[classname]/`
- Kibbles classes → `kibbles/kt_[classname]/`
- Valda classes → `valda/valda_[classname]/`

---

## Snippet Types & Templates

Each class is composed of snippet files included via `--8<--`. The templates live in
`./templates/`. Always use them as the basis for new files.

### Universal snippets (every class)

| File | Template |
|---|---|
| `progression.md` | `templates/progression.md` |
| `core_features.md` | `templates/core_features.md` |
| `subclasses.md` | `templates/subclasses.md` |

### Optional snippets (add only if the class has them)

| File | When to create |
|---|---|
| `alternate_subclasses.md` | Class has alternate/variant subclasses |
| `[feature_list].md` | Class has a named list: exploits, knacks, talents, disciplines, etc. |
| `animal_companion.md` | Class has an animal companion mechanic |
| Any other named tab | Determined by the class content |

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
- Bullet points use `*`, never `-`
- No blank lines between bullet points in the same list
- Sections separated by `<hr>`
- Named subsections within a feature use bold inline: `**Subsection Name.** Description.`
- Feature levels come from the source text — never assume or invent them

### subclasses.md and alternate_subclasses.md
- Subclass name: `## ^^[Full Subclass Name]^^`
- Feature headers: `### Level [X] - [Feature Name]`
- Feature levels come from the source text — never assume or invent them
- `<hr>` between features within a subclass
- Each subclass wrapped in `<div class="subclass-content" data-subclass="[slug]">`
- Subclass slug: kebab-case, e.g. `ancestral-guardian`, `alt-berserker`

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

### ^^[Category Display Name]^^

[items...]

</div>
```

### Generic filter IDs (already registered in filter-js)

| Filter ID | Content class | Data attribute | Use for |
|---|---|---|---|
| `subclass-select` | `subclass-content` | `subclass` | Subclasses |
| `alt-subclass-select` | `subclass-content` | `subclass` | Alternate subclasses |
| `exploit-select` | `exploit-content` | `exploit` | Exploit lists |

### Adding a new class-specific filter

When a new snippet needs a filter ID not in the table above:
1. Use a descriptive ID: `[category]-select` (e.g. `discipline-select`, `talent-select`)
2. Propose adding this line to `filter-js` under `// Initialize filters`:
   ```javascript
   setupFilter('[filter-id]', '[content-class]', '[data-attr]');
   ```
3. Always inform the user and ask for confirmation before editing `filter-js`

### Filtered list item format

Within each `<div>`, individual items use `####` with prerequisites in `*italics*`
immediately below the header, no blank line between them:

```markdown
#### Item Name
*Prerequisites: Condition*

Description text.
```

No `<hr>` between individual items. `<hr>` only between category `<div>` blocks if needed.

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
5. Check `filter-js`: if any new filter IDs are needed, propose the addition to the user

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
- `^^` syntax around subclass names in `##` headers is always included
- The `--8<--` include paths in assembled pages must match the actual snippet file paths exactly