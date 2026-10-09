# Proposal

## Why

The repository's validation script catches broken path includes and missing filter wiring, but it still misses a few mechanical conventions that are easy to reintroduce during fast edits. That leaves the documentation quality checks reliant on human review instead of automated guardrails.

## What Changes

- Expand the repository validator to catch a broader set of mechanical markdown mistakes.
- Guard against single-dash include syntax, legacy subclass-heading patterns, forbidden HTML spacing/entities, and HTML wrappers that violate the repo conventions.
- Keep the validation output actionable so contributors can fix failures quickly without interpreting vague warnings.

## Capabilities

### New Capabilities
- `repo-validation`: improve enforcement of repo markdown conventions in the validation script.

## Impact

- `validate.mjs`: add targeted checks for the missing markdown conventions.
- `docs/` and `templates/`: continue to be scanned as the source of truth for repository consistency.
