#!/usr/bin/env node
import { parseArgs } from 'node:util';
import { buildGraph, describeGraph, loadConfig } from '../src/core/pipeline.mjs';
import { serve } from '../src/core/serve.mjs';
import { buildStatic } from '../src/core/static.mjs';
import { initProject } from '../src/core/init.mjs';

const HELP = `
  wikitary — explore an LLM wiki as a living solar system

  Usage
    wikitary [serve]        Start the viewer (live-reloads when pages change)
    wikitary build          Write a self-contained wikitary.html
    wikitary inspect        Print the planets and which pages live on them
    wikitary init           Add config, npm scripts and an agent skill to this wiki

  Options
    --wiki <dir>             Wiki folder (default: ./wiki if present, otherwise .)
    --port <n>               Server port (default: 4173)
    --no-open                Do not open the browser
    --out <file>             Output file for "build" (default: wikitary.html)
    --cluster <mode>         auto | graph | folders | frontmatter
    --planets <n>            Target number of planets
    --config <file>          Config file (default: wikitary.config.json in the
                             wiki folder, otherwise in the current folder)
    --json                   With "inspect": print the full graph as JSON
    -h, --help               Show this help
`;

let parsed;
try {
  parsed = parseArgs({
    allowPositionals: true,
    options: {
      wiki: { type: 'string' },
      port: { type: 'string' },
      'no-open': { type: 'boolean' },
      out: { type: 'string' },
      cluster: { type: 'string' },
      planets: { type: 'string' },
      config: { type: 'string' },
      json: { type: 'boolean' },
      help: { type: 'boolean', short: 'h' },
    },
  });
} catch (e) {
  console.error(`${e.message}\n${HELP}`);
  process.exit(1);
}

const { values: args, positionals } = parsed;
const command = positionals[0] || 'serve';
const cwd = process.cwd();

if (args.help) {
  console.log(HELP);
  process.exit(0);
}

const MODES = ['auto', 'graph', 'folders', 'frontmatter'];
if (args.cluster && !MODES.includes(args.cluster)) {
  console.error(`Unknown --cluster mode "${args.cluster}". Use one of: ${MODES.join(', ')}`);
  process.exit(1);
}

try {
  const config = loadConfig(cwd, args.config, args.wiki);
  const graphOptions = {
    cwd,
    config,
    wiki: args.wiki,
    mode: args.cluster,
    count: args.planets ? Number(args.planets) : undefined,
  };

  switch (command) {
    case 'serve':
      await serve(graphOptions, { port: Number(args.port) || Number(config.port) || 4173, open: !args['no-open'] });
      break;
    case 'build': {
      const file = await buildStatic(graphOptions, args.out || 'wikitary.html');
      console.log(`Wrote ${file}`);
      break;
    }
    case 'inspect': {
      const graph = await buildGraph(graphOptions);
      if (args.json) {
        const { rootDir, ...rest } = graph;
        console.log(JSON.stringify({ ...rest, pages: rest.pages.map(({ md, ...p }) => p) }, null, 2));
      } else {
        console.log(describeGraph(graph));
      }
      break;
    }
    case 'init':
      await initProject(cwd, { wiki: args.wiki });
      break;
    default:
      console.error(`Unknown command "${command}".\n${HELP}`);
      process.exit(1);
  }
} catch (e) {
  console.error(`wikitary: ${e.message}`);
  process.exit(1);
}
