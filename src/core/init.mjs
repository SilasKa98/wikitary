import path from 'node:path';
import { existsSync } from 'node:fs';
import { readFile, writeFile, mkdir, copyFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolveWikiRoot } from './scan.mjs';

const SKILL = fileURLToPath(new URL('../../skills/wikitary/SKILL.md', import.meta.url));

/** Wires Wikitary into an existing wiki without touching any wiki page. */
export async function initProject(cwd, { wiki } = {}) {
  const root = resolveWikiRoot(cwd, wiki);
  const rel = path.relative(cwd, root).split(path.sep).join('/') || '.';
  const done = [];

  const configPath = path.join(cwd, 'wikitary.config.json');
  if (!existsSync(configPath)) {
    const config = { wiki: rel, cluster: { mode: 'auto' }, planets: {} };
    await writeFile(configPath, `${JSON.stringify(config, null, 2)}\n`);
    done.push('wikitary.config.json');
  }

  const pkgPath = path.join(cwd, 'package.json');
  if (existsSync(pkgPath)) {
    const pkg = JSON.parse(await readFile(pkgPath, 'utf8'));
    pkg.scripts ||= {};
    if (!pkg.scripts.wikitary) {
      pkg.scripts.wikitary = 'wikitary';
      await writeFile(pkgPath, `${JSON.stringify(pkg, null, 2)}\n`);
      done.push('npm script "wikitary"');
    }
  }

  // Agents working in this wiki can then name planets and tune clusters themselves.
  const skillDir = path.join(cwd, '.claude', 'skills', 'wikitary');
  const skillPath = path.join(skillDir, 'SKILL.md');
  if (!existsSync(skillPath)) {
    await mkdir(skillDir, { recursive: true });
    await copyFile(SKILL, skillPath);
    done.push('.claude/skills/wikitary/SKILL.md');
  }

  const ignorePath = path.join(cwd, '.gitignore');
  const ignore = existsSync(ignorePath) ? await readFile(ignorePath, 'utf8') : '';
  if (!/^wikitary\.html$/m.test(ignore)) {
    await writeFile(ignorePath, `${ignore}${ignore && !ignore.endsWith('\n') ? '\n' : ''}wikitary.html\n`);
    done.push('.gitignore entry');
  }

  console.log(done.length ? `Added: ${done.join(', ')}` : 'Already set up — nothing to do.');
  console.log(`Wiki folder: ${rel}\nNext: run "npx wikitary" to take off.`);
}
