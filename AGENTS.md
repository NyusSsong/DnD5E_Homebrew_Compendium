# AGENTS.md

Instructions for agents (Antigravity, local models, or any LLM) working on this
D&D 5E homebrew MkDocs repository.

---

## General principles

- Act autonomously. Make all formatting and structure decisions on your own.
- Do not ask for confirmation before creating or editing files except in the cases
  explicitly noted below.
- When finished, write a summary block of everything you did and flag any ambiguous
  decisions you made.
- Never alter mechanical text from the source content. Reformat, do not rewrite.

---

## Standard workflow

When the user asks you to process a class or subclass:

### 1. Read the input

The source file will be at `./input/[descriptive-name].md`.  
Read it in full before doing anything else.

### 2. Consult the skill and templates

Read `SKILL.md` to apply the repository conventions.  
Templates are in `./templates/`. Use them as the basis for each output file.

### 3. Identify which files to create

From the input content, determine:

- **Source folder:** `base_classes`, `kibbles/kt_[classname]`, or `valda/valda_[classname]`
- **Required snippets:** always `progression.md`, `core_features.md`, `subclasses.md`;
  plus any additional snippets the content requires (exploits, knacks, talents, etc.)
- **Alternate subclasses:** if the input includes them, create `alternate_subclasses.md`
- **Class-specific snippets:** a class may have a specific tab refering to a set of features (`developed_talents.md`, `knacks.md`, `psionic_disciplines.md`, etc)
- **Filters:** determine whether any snippet needs a filter per the rules in `SKILL.md`

### 4. Create the snippet files

Path: `docs/snippets/[source_folder]/[classname]/[snippet].md`

Apply the formatting rules from `SKILL.md` for each snippet type.  
Feature and subclass levels are always extracted from the source text.

### 5. Create the assembled class page

Path: `docs/classes/[source_folder]/[classname].md`

Use `templates/class.md`. Tab order:
1. Progression Table
2. Core [ClassName] Features
3. Class-specific tabs (if any)
4. Alternate Subclasses (if present)
5. Subclasses — always last, but thematically named for the class
   (e.g. "Primal Paths", "Divine Domains", "Witch's Crafts"), never literally "Subclasses"

### 6. Review filter.js

Read `docs/assets/js/filter.js` and check that every filter used in the new snippets
is already registered.

- If all filters used are generic (already registered), do not touch the file.
- If a new class-specific filter is needed, **do not edit filter.js**.  
  Instead, include the exact line to add in your final summary:
  ```javascript
  setupFilter('[filter-id]', '[content-class]', '[data-attr]');
  ```

### 7. Final summary

When done, write a block with:

- Files created and their paths
- Snippets and tabs included in the assembled page
- Filters applied and whether `filter.js` needs a manual update
- Any ambiguous decisions made (unusual structure, non-standard levels, etc.)

---

## What you must never do

- Edit `filter.js` directly
- Invent feature levels that do not appear in the source text
- Alter mechanical text (damage, distances, conditions, saving throws, etc.)
- Publish templates from `./templates/` as site pages
- Produce subclass names as a `##`/`##` heading instead of a `??? subclass "Name"`
  admonition title — this includes leaving legacy `## ^^Name^^` files untouched when
  you're already editing them; convert them to `??? subclass` as part of that edit
- Use `*` for untitled bullet lists — always use `-` instead; no blank lines between untitled items
- Format titled list items as bullets — `* **Name.** text` must become `**Name.** text` with a blank line between each item and no bullet character
- Write `-8<--` (one dash) instead of `--8<--` (two dashes) for snippet includes — the
  single-dash form silently fails: MkDocs renders the literal text instead of including
  the file
- Use `<div class='classTable'>` or any other `<div>` wrappers for tables (use pure Markdown tables)
- Leave HTML spacing entities like `&nbsp;` in output files
- Deviate from the exact markdown structure of the files in `./templates/`