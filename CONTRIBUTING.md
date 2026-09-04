# Contributing & Replication Guide

This guide walks a new person through the full lifecycle of the repository:
forking it, running it locally, making content changes, going through CI, and
(either as a maintainer or a fork owner) publishing the site. It covers two
goals:

1. **Contribute content** to the original project via a pull request.
2. **Run your own copy** of the site from your own fork.

The deep content conventions live in `SKILL.md` (how to write pages) and
`AGENTS.md` (the standard processing workflow, including the `input/` drop
zone and the `templates/` skeletons). This guide is the operational layer:
environments, commands, validation, and deploy.

---

## Prerequisites

| Tool | Why | Check |
|------|-----|-------|
| Git | clone, branch, push | `git --version` |
| Python 3.13 + pip | MkDocs and the build | `python --version`, `python -m pip --version` |
| Node 20+ | the convention validator (no installs needed — it uses only Node's standard library) | `node --version` |

Python 3.13 is recommended because `requirements.txt` was generated from a
3.13 environment; slightly older 3.9+ versions usually work as well.

---

## 1. Fork and clone

1. Open <https://github.com/NyusSsong/DnD5E_Homebrew_Compendium> and click
   **Fork** (top right).
2. Clone your fork and add the original as `upstream`:

   ```bash
   git clone https://github.com/<your-name>/DnD5E_Homebrew_Compendium.git
   cd DnD5E_Homebrew_Compendium
   git remote add upstream https://github.com/NyusSsong/DnD5E_Homebrew_Compendium.git
   git remote -v          # verify: origin = your fork, upstream = original
   ```

3. Create a working branch for your change:

   ```bash
   git checkout -b my-change
   ```

---

## 2. Install the pinned dependencies

The build environment is pinned in `requirements.txt` (exact versions of
`mkdocs`, `mkdocs-material`, `pymdown-extensions`, and their transitive
closure), so every clone builds identically to the maintainer's machine.

A virtual environment is recommended so the pinned versions never touch your
global Python:

```bash
python -m venv .venv
# Windows:
.venv\Scripts\activate
# macOS/Linux:
source .venv/bin/activate

python -m pip install -r requirements.txt
```

> **Windows users outside a venv:** the maintainer's setup installs packages to
> the global Python user site. That works, but keep in mind that some tools on
> that shared site may depend on a newer `click` (see "Why `--livereload`?"
> below).

---

## 3. Preview locally

```bash
mkdocs serve --livereload
```

Open the printed URL (default <http://127.0.0.1:8000>). To produce the static
site without serving (output in `site/`, which is git-ignored):

```bash
mkdocs build --strict
```

### Why `--livereload`?

Plain `mkdocs serve` sometimes fails to start its file watcher. This is a
known mkdocs ≤ 1.6.1 bug triggered by `click > 8.2.1` (see
[mkdocs#4032](https://github.com/mkdocs/mkdocs/issues/4032)) — the site serves,
but never rebuilds when files change, or the process misbehaves. Passing
`--livereload` forces the watcher on. If you work inside a dedicated venv you
may instead pin `click==8.2.1` (`pip install click==8.2.1`) and drop the flag.

---

## 4. Understand the layout

| Path | Purpose |
|------|---------|
| `docs/` | Site content — assembled class pages in `docs/classes/`, reusable snippets in `docs/snippets/`, `rules.md`, `magic-items.md` |
| `docs/assets/` | JavaScript (`filter.js`, `magic-items.js`) and CSS (`custom.css`, `admonition-*.css`) |
| `templates/` | Skeletons for assembling new class pages and snippets |
| `input/` | Drop zone for raw source text awaiting processing (never published) |
| `validate.mjs` | Convention validator — run before every commit |
| `requirements.txt` | Pinned Python build environment |
| `.github/workflows/ci.yml` | CI: validate + build on every push/PR, auto-deploy on `master` |
| `SKILL.md`, `AGENTS.md` | Content conventions and the agent processing workflow |
| `mkdocs.yml` | Site config: theme, `nav`, plugins, `extra_css` / `extra_javascript` |

Key structural idea: class pages in `docs/classes/` do not contain their
content inline — they assemble it with snippet includes. For example,
`docs/classes/base_classes/barbarian.md` includes
`docs/snippets/base_classes/barbarian/subclasses.md` via
`--8<-- "base_classes/barbarian/subclasses.md"` (paths are relative to
`docs/snippets/`). Edit snippets, not page bodies.

---

## 5. Run the validator before you commit

```bash
node validate.mjs
```

Zero dependencies, read-only, sub-second. It fails (exit code 1) on:

- `include-resolve` / `include-orphan` — an `--8<--` include points at a
  missing file, or a snippet under `docs/snippets/` is included by no page.
- `filter-attrs` — a `<select class="filter-select">` lacks
  `data-filter-content` / `data-filter-attr`, so its dropdown would do nothing.
- `nav-target` — a `mkdocs.yml` nav entry points at a file that doesn't exist.
- `encoding-bom` — a UTF-8 BOM snuck into an `.md` file (`.editorconfig`
  enforces LF + UTF-8).

Every finding prints as `file:line — detail`, so fixes are direct. CI runs the
same validator, so a red local run will be red in the pull request too.

---

## 6. Make your change

**Small content edits** — edit the relevant snippet under `docs/snippets/`
(or the assembled page for meta-level text), then:

```bash
node validate.mjs          # must be green
mkdocs build --strict      # optional but recommended: catches build-level issues
```

**A new class or subclass** — follow `AGENTS.md` → "Standard workflow": drop
the raw source text into `input/`, then process it into
`docs/snippets/<source>/<class>/...` files assembled by a page in
`docs/classes/`, using the skeletons in `templates/` as the shape reference.
Then add the page to the `nav:` section of `mkdocs.yml`.

**Filter selects** — a dropdown is a `<select class="filter-select"
data-filter-content="content-class" data-filter-attr="attr-name">`; the
`data-filter-content` value must equal the CSS class of the divs it filters,
and `data-filter-attr` their `data-*` attribute. No JavaScript registration is
ever needed — the delegated listener in `filter.js` picks the select up
automatically. The validator enforces the wiring.

**New admonition icon types / CSS** — see the instructions in `SKILL.md`
(`admonition-base.css` holds the structural rules; the four
`admonition-<category>.css` files hold per-type icons/colors).

**Never**: use `--8<--` includes with a single dash, leave content under
`docs/snippets/` unreferenced, or edit `docs/assets/js/filter.js` to register
a filter.

---

## 7. Commit, push, open a pull request

```bash
git add <your files>
git commit -m "Describe the change"
git push -u origin my-change
```

Open a pull request from your fork's branch against `upstream` `master`. CI
runs automatically on the PR:

- `node validate.mjs`
- `mkdocs build --strict` (warnings fail the build)

A green check means the change is safe to merge. **Pull requests never
deploy** — nothing is published until the change reaches `master`.

---

## 8. Deploys (maintainers of the original repo)

Publishing is fully automatic: any push to `master` runs the same
validate + build pipeline, and if both pass, pushes the built `site/` to the
`gh-pages` branch (the branch GitHub Pages serves). No manual `mkdocs
gh-deploy` is needed anymore.

Two one-time repository settings make this work:

1. **Settings → Pages → Build and deployment → Source**: *Deploy from a
   branch* → `gh-pages`. (Already the case for this repo.)
2. **Settings → Actions → General → Workflow permissions**: *Read and write
   repository permissions*, so the built-in `GITHUB_TOKEN` may push to
   `gh-pages`.

---

## 9. Run your own forked copy of the site

To publish your fork as its own live site, in addition to steps 1–3:

1. **Make `mkdocs.yml` yours** — change `site_name`, `site_description`,
   `site_author`, and point `repo_url` / `edit_uri` at your fork:

   ```yaml
   repo_url: https://github.com/<your-name>/DnD5E_Homebrew_Compendium
   edit_uri: edit/master/docs
   ```

2. **Decide what to do with the Magic Items page.** The page
   (`docs/magic-items.md` + `docs/assets/js/magic-items.js`) reads from the
   *original project's* Supabase database — the `SUPABASE_CONFIG` constant at
   the top of `magic-items.js` holds the project URL and anon key (the anon
   key is public by design; row-level security keeps the site anonymous
   read-only). Your options:
   - **Keep it** — the page is read-only and public, so pointing at the
     original database works as-is.
   - **Remove it** — delete `docs/magic-items.md` and its `nav:` entry, and
     remove `magic-items.css` / `magic-items.js` from `extra_css` /
     `extra_javascript` in `mkdocs.yml`.
   - **Host your own** — create a Supabase project with an `items` table
     (`id`, `name`, `type`, `rarity`, `attunement`, `description`), enable RLS
     with a public `SELECT` policy only, and replace `SUPABASE_CONFIG` in
     `magic-items.js`.

3. **Enable Pages + workflow permissions** on your fork (same two settings as
   §8), then push to your `master`. CI publishes to your fork's `gh-pages`,
   and your site appears at `https://<your-name>.github.io/DnD5E_Homebrew_Compendium/`.

---

## Troubleshooting

| Symptom | Cause / fix |
|---------|-------------|
| `mkdocs serve` serves but never reloads (or misbehaves) | `click > 8.2.1` breaks mkdocs ≤ 1.6.1's watcher — use `mkdocs serve --livereload` (or `pip install click==8.2.1` inside a venv) |
| Validator exits 1 | Read the `file:line — detail` lines; each group names the fix (missing include target, orphan snippet, unwired filter select, bad nav path, BOM) |
| `mkdocs build --strict` fails on a warning | Warnings-as-errors — fix what it names, or (rarely) relax `--strict` in `.github/workflows/ci.yml` |
| CI deploy step fails with a permission error | Workflow permissions are read-only — enable "Read and write" (Settings → Actions → General) and re-run |
| Git warns about CRLF/LF when committing | Harmless `core.autocrlf` artifact — canonical blobs are LF (`.editorconfig`), on-disk checkout may be CRLF on Windows |
| A stat block or admonition renders as literal text | The `???` marker was indented one level deeper than its parent block — align it with the surrounding block's indentation |

---

The content conventions (`SKILL.md`) and processing workflow (`AGENTS.md`)
are the authoritative references for *what* the pages must look like; the
validator, CI, and this guide are the operational wrapper that keeps every
clone consistent.
