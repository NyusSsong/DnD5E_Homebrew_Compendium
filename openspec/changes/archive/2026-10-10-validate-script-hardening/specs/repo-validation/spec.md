# Spec Delta

## Purpose

Enforces repository markdown conventions through automated validation so contributors can catch and fix documentation drift before publishing.

## ADDED Requirements

### Requirement: Strengthen repo validation for markdown conventions

The repository validator must reject markdown and include syntax that conflicts with the project's documented conventions, so contributors catch drift before content is published.

#### Scenario: Detect invalid include syntax

- **WHEN** a markdown document contains a single-dash include such as `-8<-- "path/to/file.md"`
- **THEN** the validator reports the file and line number
- **AND** it exits with a non-zero status so the issue is not silently accepted

#### Scenario: Detect legacy subclass heading patterns

- **WHEN** a markdown file includes a legacy subclass heading such as `## ^^Name^^`
- **THEN** the validator reports the file and line number
- **AND** it flags the migration away from the old heading format

#### Scenario: Detect forbidden HTML and spacing artifacts

- **WHEN** a file contains `&nbsp;`, `<div class='classTable'>`, or a similarly forbidden layout wrapper
- **THEN** the validator reports the exact file and offending line
- **AND** it prevents the content from passing repo validation

#### Scenario: Keep validation output actionable

- **WHEN** a convention violation is detected
- **THEN** the report names the check group, file, line, and clear reason
- **AND** the output remains easy to read and fix during normal repo edits
