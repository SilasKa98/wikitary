import path from 'node:path';
import { readFile, writeFile } from 'node:fs/promises';
import { buildGraph } from './pipeline.mjs';
import { VIEWER_DIR, serialise } from './serve.mjs';

/** Builds one portable HTML file: app, styles and wiki data, no server required. */
export async function buildStatic(graphOptions, outFile) {
  const graph = await buildGraph(graphOptions);
  const [html, js, css] = await Promise.all([
    readFile(path.join(VIEWER_DIR, 'index.html'), 'utf8'),
    readFile(path.join(VIEWER_DIR, 'app.js'), 'utf8'),
    readFile(path.join(VIEWER_DIR, 'app.css'), 'utf8'),
  ]);

  // `<` is escaped so wiki content can never close the surrounding script tag.
  const data = serialise(graph).replace(/</g, '\\u003c');
  const inlineJs = js.replace(/<\/script/gi, '<\\/script');
  const output = html
    .replace('<link rel="stylesheet" href="app.css">', () => `<style>${css}</style>`)
    .replace('<script type="module" src="app.js"></script>', () =>
      `<script id="wikitary-data" type="application/json">${data}</script>\n<script type="module">${inlineJs}</script>`);

  const target = path.resolve(graphOptions.cwd || process.cwd(), outFile);
  await writeFile(target, output);
  return target;
}
