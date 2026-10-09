# Tasks

## 1. Validation coverage

- [x] 1.1 Add detection for single-dash include syntax (`-8<--`) in markdown files — verify: `node validate.mjs` fails on a known bad sample or a targeted fixture.
- [x] 1.2 Add detection for legacy subclass headings (`## ^^Name^^`) in markdown content — verify: the validator reports the exact file and line.
- [x] 1.3 Add detection for forbidden HTML spacing and wrapper patterns such as `&nbsp;` and `<div class='classTable'>` — verify: the validator flags both patterns with clear output.

## 2. Integration checks

- [x] 2.1 Run the repo validator and ensure the project remains clean after the change — verify: `node validate.mjs` exits successfully.
