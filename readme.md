# DnD 5E Homebrew Compendium

A personal, homebrew-focused Dungeons & Dragons 5th Edition compendium, published as a
static site built with [MkDocs Material](https://squidfunk.github.io/mkdocs-material/).

It contains homebrew classes, subclasses, and rules used in Song's D&DR games, plus a
searchable Magic Items database backed by [Supabase](https://supabase.com/).

## Repository layout

| Path | Purpose |
|------|---------|
| `docs/` | Site content — class pages in `docs/classes/`, shared snippets in `docs/snippets/`, rules in `docs/rules.md` |
| `docs/assets/` | Site JavaScript (`filter.js`, `magic-items.js`) and CSS |
| `templates/` | Base templates for assembling new class pages |
| `input/` | Drop zone for source class/subclass text awaiting processing |
| `SKILL.md`, `AGENTS.md` | Conventions and workflow for AI agents working in this repo |

## Local development

Requires Python 3 and `pip`:

```bash
pip install mkdocs-material
mkdocs serve
```

Then open the printed URL (default `http://127.0.0.1:8000`). To build the static site
without serving: `mkdocs build` (output goes to `site/`).

Dependency versions are **not pinned** — install `mkdocs-material` fresh; the site uses
vanilla Material features and does not need a specific version.

## Contributing

This is a personal compendium, but contributions are welcome. The site's conventions
are extensive and documented for agents in `SKILL.md` / `AGENTS.md`; human contributors
should follow the same structural rules (snippets, tabbed layouts, thematic subclass
tab names) so the generated pages stay consistent.

---

## Credits & Legal Notice

This site contains **homebrew content and references** for Dungeons & Dragons 5th Edition.

All official content, trademarks, and intellectual property belong to their respective
creators and publishers, including **Wizards of the Coast**.

This site is intended for **personal, educational, and non-commercial use only**. No
claim is made to any copyrighted material.

Some homebrew content may be contributed by community members; credit is given where
applicable.
