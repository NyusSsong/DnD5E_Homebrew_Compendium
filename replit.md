# DnD 5E Homebrew Compendium

A MkDocs documentation site for homebrew D&D 5E classes and subclasses, using the `material` theme.

## Running the site

```
mkdocs serve --dev-addr=0.0.0.0:5000
```

The live preview is available on port 5000.

## Project structure

```
docs/                        ← MkDocs source
  classes/                   ← Assembled class pages (one .md per class)
    base_classes/
    kibbles/
    valda/
  snippets/                  ← Snippet files included via --8<--
    base_classes/[classname]/
    kibbles/[classname]/
    valda/[classname]/
  assets/css/ assets/js/     ← Custom styles and filter scripts
  index.md, rules.md, magic-items.md
input/                       ← Drop raw homebrew text here for agent processing
templates/                   ← Reference templates (never published as pages)
mkdocs.yml                   ← Site config and nav
AGENTS.md                    ← Agent workflow instructions
SKILL.md                     ← Formatting rules and conventions
```

## Adding a new class

1. Place the raw homebrew text in `input/[descriptive-name].md`
2. Ask the agent to process it — it will follow AGENTS.md and SKILL.md
3. After the agent is done, add the new page to the `nav` section of `mkdocs.yml`

## User preferences

- Never alter mechanical text from source content — reformat only, never rewrite rules
- Use `*` for bullet points, never `-`
- Never use `<div>` wrappers for tables — pure Markdown tables only
- Never leave `&nbsp;` or similar HTML spacing entities in output files
