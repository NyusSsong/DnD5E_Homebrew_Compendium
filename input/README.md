# Input Directory

Place raw homebrew class or subclass files here for an agent to process.

## Naming convention

Use a descriptive filename so it's clear what the file contains:

```
input/barbarian_path_of_the_storm.md
input/wizard_school_of_chronomancy.md
input/kt_psion_subclass_nomad.md
```

## What to include in each file

Paste the full homebrew text as-is — class features, subclasses, progression table, etc.
The agent will read AGENTS.md and SKILL.md to determine the correct output structure.

## What the agent produces

For each input file, the agent will create:

* `docs/snippets/[source]/[classname]/progression.md`
* `docs/snippets/[source]/[classname]/core_features.md`
* `docs/snippets/[source]/[classname]/subclasses.md`
* Any additional snippets the content requires (exploits, knacks, talents, etc.)
* `docs/classes/[source]/[classname].md` — the assembled page

After the agent finishes, update `mkdocs.yml` to add the new class page to the `nav` section.
