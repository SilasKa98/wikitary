import { readdir, readFile, stat } from 'node:fs/promises';
import { existsSync, statSync } from 'node:fs';
import path from 'node:path';

const MD_EXT = /\.(md|markdown|mdx)$/i;

// Folders that hold tooling or uncompiled source material, never wiki pages.
const DEFAULT_IGNORE_DIRS = new Set([
  'node_modules', '.git', '.obsidian', '.trash', '.wikitary', '.claude', '.github', '.vscode', '.idea',
  'raw', '_raw', 'dist', 'build', 'out', 'templates', '_templates', 'attachments', 'assets', '__pycache__', 'venv', '.venv',
]);
// Agent instruction files and repo boilerplate.
const DEFAULT_IGNORE_FILES = /^(claude|agents|gemini|copilot-instructions|contributing|code_of_conduct|license|security)\.md$/i;

/** Finds the wiki folder: explicit option, then ./wiki, then the current folder. */
export function resolveWikiRoot(cwd, explicit) {
  if (explicit) {
    const p = path.resolve(cwd, explicit);
    if (!existsSync(p) || !statSync(p).isDirectory()) throw new Error(`Wiki folder not found: ${p}`);
    return p;
  }
  for (const candidate of ['wiki', 'Wiki', 'vault', 'kb', 'knowledge']) {
    const p = path.join(cwd, candidate);
    if (existsSync(p) && statSync(p).isDirectory()) return p;
  }
  return cwd;
}

function globToRegExp(glob) {
  const pattern = glob
    .replace(/\\/g, '/')
    .replace(/[.+^${}()|[\]]/g, '\\$&')
    .replace(/\*\*\//g, '\u0001')
    .replace(/\*\*/g, '\u0002')
    .replace(/\*/g, '[^/]*')
    .replace(/\?/g, '[^/]')
    .replace(/\u0001/g, '(?:.*/)?')
    .replace(/\u0002/g, '.*');
  return new RegExp(`^${pattern}(?:/.*)?$`, 'i');
}

/** Recursively collects Markdown files. Returned paths always use forward slashes. */
export async function scanWiki(root, { exclude = [], include = null } = {}) {
  const excludes = exclude.map(globToRegExp);
  const includes = include && include.length ? include.map(globToRegExp) : null;
  const files = [];

  async function walk(dir) {
    let entries;
    try {
      entries = await readdir(dir, { withFileTypes: true });
    } catch {
      return;
    }
    entries.sort((a, b) => (a.name < b.name ? -1 : 1));
    for (const entry of entries) {
      const abs = path.join(dir, entry.name);
      const rel = path.relative(root, abs).split(path.sep).join('/');
      if (excludes.some((r) => r.test(rel))) continue;
      if (entry.isDirectory()) {
        if (DEFAULT_IGNORE_DIRS.has(entry.name.toLowerCase())) continue;
        await walk(abs);
      } else if (entry.isFile() && MD_EXT.test(entry.name)) {
        if (DEFAULT_IGNORE_FILES.test(entry.name)) continue;
        if (includes && !includes.some((r) => r.test(rel))) continue;
        const [content, info] = await Promise.all([readFile(abs, 'utf8'), stat(abs)]);
        files.push({ path: rel, content, mtime: info.mtimeMs });
      }
    }
  }

  await walk(root);
  return files;
}
