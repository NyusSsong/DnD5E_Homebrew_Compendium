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
| `CONTRIBUTING.md` | Fork, local-dev, and deploy walkthrough |

## Local development

Requires Python 3.13 (or another recent 3.x), pip, and Node 20+ (for the validator):

```bash
python -m pip install -r requirements.txt
mkdocs serve --livereload
```

Then open the printed URL (default `http://127.0.0.1:8000`). Builds are reproducible:
`requirements.txt` pins the exact dependency versions. To build the static site without
serving: `mkdocs build --strict` (output goes to `site/`). Run `node validate.mjs`
before committing.

> `--livereload` is required on some setups: mkdocs ≤ 1.6.1 fails to start its file
> watcher when `click > 8.2.1` is installed. Inside a venv you can instead pin
> `click==8.2.1` and drop the flag.

## Contributing

Contributions are welcome — the full fork → develop → PR → deploy walkthrough lives in
[`CONTRIBUTING.md`](CONTRIBUTING.md). The site's content conventions are documented for
agents in `SKILL.md` / `AGENTS.md`; human contributors should follow the same structural
rules (snippets, tabbed layouts, thematic subclass tab names) so generated pages stay
consistent. Pushes to `master` are validated, built, and auto-deployed to GitHub Pages
by `.github/workflows/ci.yml`.

---

## Credits & Legal Notice

This site contains **homebrew content and references** for Dungeons & Dragons 5th Edition.

All official content, trademarks, and intellectual property belong to their respective
creators and publishers, including **Wizards of the Coast**.

This site is intended for **personal, educational, and non-commercial use only**. No
claim is made to any copyrighted material.

Some homebrew content may be contributed by community members; credit is given where
applicable.
