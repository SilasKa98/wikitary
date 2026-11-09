import http from 'node:http';
import path from 'node:path';
import { readFile, realpath, stat } from 'node:fs/promises';
import { watch } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { exec } from 'node:child_process';
import { buildGraph, describeGraph } from './pipeline.mjs';

export const VIEWER_DIR = fileURLToPath(new URL('../../dist/viewer/', import.meta.url));

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.map': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.svg': 'image/svg+xml',
};

const IMAGE_EXT = new Set(['.png', '.jpg', '.jpeg', '.gif', '.webp', '.avif', '.svg']);

function openBrowser(url) {
  const cmd = process.platform === 'win32' ? `start "" "${url}"`
    : process.platform === 'darwin' ? `open "${url}"` : `xdg-open "${url}"`;
  exec(cmd, () => {});
}

/**
 * Only requests addressed to this machine by name are answered. Binding to loopback is not
 * enough on its own: through DNS rebinding a web page could point its own domain at
 * 127.0.0.1 and read the wiki. Such a request still carries that domain in its Host header.
 */
export function isLocalHost(host) {
  const name = String(host || '').toLowerCase().replace(/:\d+$/, '');
  return name === 'localhost' || name === '127.0.0.1' || name === '[::1]';
}

function listen(server, port, attempts = 20) {
  return new Promise((resolve, reject) => {
    const tryPort = (p, left) => {
      server.once('error', (err) => {
        if (err.code === 'EADDRINUSE' && left > 0) tryPort(p + 1, left - 1);
        else reject(err);
      });
      // Loopback only: the viewer exposes the full text of the wiki.
      server.listen(p, '127.0.0.1', () => resolve(p));
    };
    tryPort(port, attempts);
  });
}

export async function serve(graphOptions, { port, open }) {
  let graph = await buildGraph(graphOptions);
  let payload = serialise(graph);
  const clients = new Set();

  console.log(`\n${describeGraph(graph)}\n`);

  const server = http.createServer(async (req, res) => {
    if (!isLocalHost(req.headers.host)) { res.writeHead(403); res.end(); return; }
    try {
      // Inside the try: a malformed address such as "/%" must not take the server down.
      const url = new URL(req.url, 'http://localhost');
      const route = decodeURIComponent(url.pathname);
      if (route === '/graph.json') {
        res.writeHead(200, { 'content-type': MIME['.json'], 'cache-control': 'no-store' });
        res.end(payload);
        return;
      }
      if (route === '/events') {
        res.writeHead(200, { 'content-type': 'text/event-stream', 'cache-control': 'no-store', connection: 'keep-alive' });
        res.write(': connected\n\n');
        clients.add(res);
        req.on('close', () => clients.delete(res));
        return;
      }
      if (route.startsWith('/wiki-asset/')) {
        const rel = route.slice('/wiki-asset/'.length);
        const abs = path.resolve(graph.rootDir, rel);
        const inside = abs.startsWith(path.resolve(graph.rootDir) + path.sep);
        const ext = path.extname(abs).toLowerCase();
        if (!inside || !IMAGE_EXT.has(ext)) { res.writeHead(403); res.end(); return; }
        // A symlink inside the wiki could point anywhere, so check where it really leads.
        const real = await realpath(abs);
        if (!real.startsWith((await realpath(graph.rootDir)) + path.sep)) { res.writeHead(403); res.end(); return; }
        const body = await readFile(real);
        res.writeHead(200, { 'content-type': MIME[ext], ...(ext === '.svg' ? { 'content-security-policy': "script-src 'none'" } : {}) });
        res.end(body);
        return;
      }
      const rel = route === '/' ? 'index.html' : route.slice(1);
      const abs = path.resolve(VIEWER_DIR, rel);
      if (!abs.startsWith(path.resolve(VIEWER_DIR) + path.sep)) { res.writeHead(403); res.end(); return; }
      const info = await stat(abs);
      if (!info.isFile()) throw new Error('not a file');
      res.writeHead(200, { 'content-type': MIME[path.extname(abs)] || 'application/octet-stream', 'cache-control': 'no-cache' });
      res.end(await readFile(abs));
    } catch {
      res.writeHead(404, { 'content-type': 'text/plain' });
      res.end('Not found');
    }
  });

  const actual = await listen(server, port);
  const address = `http://localhost:${actual}/`;
  console.log(`  Wikitary is orbiting at ${address}`);
  console.log('  Watching the wiki for changes — press Ctrl+C to stop.\n');
  if (open) openBrowser(address);

  // The wiki is alive: rebuild and notify the viewer whenever a page changes.
  let timer = null;
  const rebuild = () => {
    clearTimeout(timer);
    timer = setTimeout(async () => {
      try {
        graph = await buildGraph(graphOptions);
        payload = serialise(graph);
        for (const client of clients) client.write('event: graph\ndata: changed\n\n');
        console.log(`  Wiki changed — ${graph.pages.length} pages, ${graph.clusters.length} planets.`);
      } catch (e) {
        console.error(`  Rebuild failed: ${e.message}`);
      }
    }, 400);
  };
  try {
    watch(graph.rootDir, { recursive: true }, (_event, file) => {
      if (file && /\.(md|markdown|mdx)$/i.test(file)) rebuild();
    });
  } catch {
    console.log('  (File watching is unavailable on this platform; restart to see changes.)');
  }

  return server;
}

export function serialise(graph) {
  const { rootDir, ...rest } = graph;
  return JSON.stringify(rest);
}
