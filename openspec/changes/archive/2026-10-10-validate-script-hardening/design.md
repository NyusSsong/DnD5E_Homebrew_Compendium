# Design

## Context

The repository relies on a lightweight Node validator to enforce conventions around markdown includes, filters, navigation, and file encoding. That validator already catches several important issues, but it does not cover every guideline described in the repo documentation.

## Goals / Non-Goals

**Goals:**
- Extend validation coverage to the remaining mechanical markdown conventions.
- Keep the script read-only and fast enough to run during local checks and CI.
- Preserve the current validator structure so it remains easy to reason about.

**Non-Goals:**
- Rewriting content to match new rules automatically.
- Changing the repo's authoring workflow beyond the validator's enforcement.

## Decisions

### Decision 1: Add missing convention checks in the same validation pass

Rather than introducing a second tool, the validator should add a few more `report(...)` check groups in the same pass. This keeps the enforcement model consistent: everything is scanned, grouped, and fails non-zero when violations are found.

### Decision 2: Keep checks focused on high-signal mechanical patterns

The added rules will target patterns that are reliably wrong and easy to detect without context-heavy parsing: single-dash include syntax, legacy subclass heading patterns, and forbidden HTML layout artifacts. These are exactly the kinds of mistakes the repo wants to prevent during routine edits.

### Decision 3: Stay compatible with the current repo structure

The script will scan the repo's existing markdown files and templates without adding dependencies or changing how the project is built. This keeps the change low-risk and aligned with the existing validation flow.
