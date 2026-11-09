// Bundles the viewer into dist/viewer. The result is committed, so that installing
// Wikitary from Git needs neither a build step nor any dependencies.
import { build, context } from 'esbuild';
import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.join(root, 'dist/viewer');
await mkdir(out, { recursive: true });

// What the bundle contains from others. Each license goes into THIRD_PARTY_LICENSES.txt in
// full; the code licenses also head app.js, so a single-file build carries them along. The
// fonts carry their copyright and license in their own metadata.
const BUNDLED = [
  { name: 'three.js', pkg: 'three', inCode: true },
  { name: 'marked', pkg: 'marked', inCode: true },
  { name: 'Inter (font)', pkg: '@fontsource-variable/inter' },
  { name: 'Space Grotesk (font)', pkg: '@fontsource-variable/space-grotesk' },
  { name: 'IBM Plex Mono (font)', pkg: '@fontsource/ibm-plex-mono' },
];

const rule = '='.repeat(72);
const notices = [];
for (const b of BUNDLED) {
  const dir = path.join(root, 'node_modules', b.pkg);
  const { version, license } = JSON.parse(await readFile(path.join(dir, 'package.json'), 'utf8'));
  const text = (await readFile(path.join(dir, 'LICENSE'), 'utf8')).replace(/\r\n/g, '\n').trim();
  notices.push({ ...b, block: `${rule}\n${b.name} ${version} (${license})\n${rule}\n\n${text}\n` });
}
await writeFile(path.join(out, 'THIRD_PARTY_LICENSES.txt'),
  ['Wikitary bundles the following third-party software. Their licenses follow in full.\n', ...notices.map((n) => n.block)].join('\n'));

const comment = (text) => `/*!\n${text.replace(/\*\//g, '* /')}\n*/`;
const watching = process.argv.includes('--watch');
const options = {
  absWorkingDir: root,
  entryPoints: { app: 'src/viewer/main.js' },
  bundle: true,
  format: 'esm',
  target: 'es2021',
  minify: !watching,
  sourcemap: false,
  outdir: out,
  loader: { '.woff2': 'dataurl' },
  // Fonts are inlined, so a single-file build needs nothing from the network.
  nodePaths: [path.join(root, 'node_modules')],
  logLevel: 'info',
  legalComments: 'eof',
  banner: {
    js: comment(['Wikitary, MIT License. This file includes the following software:\n', ...notices.filter((n) => n.inCode).map((n) => n.block)].join('\n')),
    css: comment('Wikitary, MIT License. Embeds the fonts Inter, Space Grotesk and IBM Plex Mono under the SIL Open Font License 1.1; see THIRD_PARTY_LICENSES.txt.'),
  },
};

await copyFile(path.join(root, 'src/viewer/index.html'), path.join(out, 'index.html'));
if (watching) {
  const ctx = await context(options);
  await ctx.watch();
  console.log('Watching viewer sources…');
} else {
  await build(options);
}
