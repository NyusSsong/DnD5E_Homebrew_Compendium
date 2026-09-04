#!/usr/bin/env node
/**
 * validate.mjs — zero-dependency convention validator for the DnD repo.
 *
 * Read-only: reports findings, never modifies anything. Exit 0 = clean, 1 = findings.
 * Run: `node validate.mjs`
 *
 * Check groups:
 *   1. include-resolve — every `--8<-- "…"` include in an assembled page resolves
 *      to a real file (a typo'd path silently renders nothing).
 *   2. include-orphan  — no snippet file under docs/snippets is never included.
 *   3. filter-attrs    — every `select.filter-select` carries both
 *      data-filter-content and data-filter-attr (a select missing them is a
 *      dead dropdown — the filter does nothing).
 *   4. nav-target      — every `nav:` path in mkdocs.yml resolves to a real file.
 *   5. encoding-bom    — no UTF-8 BOMs in any .md file.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const DOCS = path.join(ROOT, 'docs');
const TEMPLATES = path.join(ROOT, 'templates');

const findings = [];
const scanned = new Set();

function walk(dir, ext, out = []) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) walk(full, ext, out);
        else if (entry.name.endsWith(ext)) out.push(full);
    }
    return out;
}

function mdFilesUnder(dir) {
    if (!fs.existsSync(dir)) return [];
    return walk(dir, '.md');
}

function readLines(abs) {
    scanned.add(path.relative(ROOT, abs));
    return fs.readFileSync(abs, 'utf8').split(/\r?\n/);
}

function report(group, file, line, detail) {
    findings.push({ group, file: path.relative(ROOT, file), line, detail });
}

/* ------------------------------------------------------------------ */
/* 1. Include resolution + 2. orphan snippets                          */
/* ------------------------------------------------------------------ */

// Roots of the include graph: every .md under docs/ that is NOT a snippet.
const assembledRoots = mdFilesUnder(DOCS).filter(
    (f) => !f.includes(path.sep + 'snippets' + path.sep)
);

function resolveInclude(fromFile, target) {
    const candidates = [
        path.join(DOCS, 'snippets', target),
        path.join(path.dirname(fromFile), target),
        path.join(DOCS, target),
    ];
    return candidates.find((c) => fs.existsSync(c));
}

function checkIncludes() {
    const included = new Set(); // absolute snippet paths reached from roots
    for (const root of assembledRoots) {
        const lines = readLines(root);
        lines.forEach((line, i) => {
            const m = line.match(/--8<--\s+"([^"]+)"/);
            if (!m) return;
            const target = m[1];
            const resolved = resolveInclude(root, target);
            if (!resolved) {
                report('include-resolve', root, i + 1,
                    `include target not found: "${target}"`);
                return;
            }
            included.add(resolved);
            scanned.add(path.relative(ROOT, resolved));
        });
    }

    for (const snippet of mdFilesUnder(path.join(DOCS, 'snippets'))) {
        if (!included.has(snippet)) {
            report('include-orphan', snippet, 1,
                `snippet is never included by any assembled page`);
        }
    }
}

/* ------------------------------------------------------------------ */
/* 3. Filter selects missing their wiring attributes                   */
/* ------------------------------------------------------------------ */

function checkFilters() {
    const tagRe = /<select\b[^>]*>/g;
    const attrRe = /([\w-]+)=["'][^"']*["']/g;

    for (const file of [...mdFilesUnder(DOCS), ...mdFilesUnder(TEMPLATES)]) {
        const text = fs.readFileSync(file, 'utf8');
        for (const m of text.matchAll(tagRe)) {
            const tag = m[0];
            if (!tag.includes('filter-select')) continue;
            const line = text.slice(0, m.index).split('\n').length;
            const attrs = new Set();
            for (const a of tag.matchAll(attrRe)) attrs.add(a[1].toLowerCase());
            if (!attrs.has('data-filter-content') || !attrs.has('data-filter-attr')) {
                const id = attrs.has('id') ? tag.match(/id=["']([^"']*)["']/)?.[1] : '(no id)';
                report('filter-attrs', file, line,
                    `filter select #${id} is missing data-filter-content / data-filter-attr — the dropdown does nothing`);
            }
        }
    }
}

/* ------------------------------------------------------------------ */
/* 4. Config coherence: mkdocs.yml nav vs. real files                  */
/* ------------------------------------------------------------------ */

function checkNav() {
    const yml = path.join(ROOT, 'mkdocs.yml');
    const lines = readLines(yml);
    lines.forEach((line, i) => {
        const m = line.match(/:\s*([A-Za-z0-9_][A-Za-z0-9_./-]*\.md)\s*$/);
        if (!m) return;
        if (!fs.existsSync(path.join(DOCS, m[1]))) {
            report('nav-target', yml, i + 1,
                `nav entry points at "${m[1]}" which does not exist`);
        }
    });
}

/* ------------------------------------------------------------------ */
/* 5. Encoding: UTF-8 BOM                                              */
/* ------------------------------------------------------------------ */

function checkBom() {
    const files = [
        ...mdFilesUnder(DOCS),
        ...mdFilesUnder(TEMPLATES),
        ...mdFilesUnder(path.join(ROOT, 'input')),
    ];
    const readme = path.join(ROOT, 'readme.md');
    if (fs.existsSync(readme)) files.push(readme);

    for (const file of files) {
        const buf = fs.readFileSync(file);
        if (buf.length >= 3 && buf[0] === 0xef && buf[1] === 0xbb && buf[2] === 0xbf) {
            report('encoding-bom', file, 1,
                'UTF-8 BOM present — strip it (.editorconfig enforces LF/UTF-8)');
        }
    }
}

/* ------------------------------------------------------------------ */

checkIncludes();
checkFilters();
checkNav();
checkBom();

const byGroup = new Map();
for (const f of findings) {
    if (!byGroup.has(f.group)) byGroup.set(f.group, []);
    byGroup.get(f.group).push(f);
}

if (findings.length) {
    console.error(`✗ ${findings.length} finding(s) across ${byGroup.size} check group(s):\n`);
    for (const [group, list] of byGroup) {
        console.error(`[${group}]`);
        for (const f of list) {
            console.error(`  error: ${f.file}:${f.line} — ${f.detail}`);
        }
        console.error('');
    }
    process.exit(1);
}

console.log(`✓ clean — ${scanned.size} file(s) scanned, 0 findings.`);
