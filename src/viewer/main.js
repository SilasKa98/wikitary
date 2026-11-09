import './ui/style.css';
import { World } from './engine/world.js';
import { createUI } from './ui/ui.js';

async function loadGraph() {
  const inline = document.getElementById('wikitary-data');
  if (inline) return JSON.parse(inline.textContent);
  const res = await fetch('graph.json', { cache: 'no-store' });
  if (!res.ok) throw new Error(`Could not load graph.json (${res.status})`);
  return res.json();
}

function supportsWebGL2() {
  try {
    return !!document.createElement('canvas').getContext('webgl2');
  } catch {
    return false;
  }
}

async function main() {
  const params = new URLSearchParams(location.search);
  const ui = createUI(document.getElementById('ui'), document.getElementById('labels'));
  if (!supportsWebGL2()) {
    ui.fatal('WebGL 2 is not available in this browser, so the solar system cannot be drawn. Try a current Chrome, Edge, Firefox or Safari with hardware acceleration enabled.');
    return;
  }
  let graph;
  try {
    graph = await loadGraph();
  } catch (e) {
    ui.fatal(e.message);
    return;
  }
  ui.setGraph(graph);
  const world = new World(document.getElementById('scene'), graph, { quality: params.get('q') || autoQuality() });
  try {
    await world.init((progress, label) => ui.progress(progress, label));
  } catch (e) {
    console.error(e);
    ui.fatal(`Could not build the world: ${e.message}`);
    return;
  }
  ui.attach(world);
  window.__wikitary = { world, ui, graph };

  // The wiki is alive: when its pages change, offer to land in the new version.
  if (!document.getElementById('wikitary-data')) {
    try {
      const events = new EventSource('events');
      events.addEventListener('graph', () => ui.notifyChanged());
    } catch { /* live reload is a nicety */ }
  }
}

function autoQuality() {
  const mobile = /Android|iPhone|iPad|Mobile/i.test(navigator.userAgent);
  if (mobile) return 'low';
  const memory = navigator.deviceMemory || 8;
  const cores = navigator.hardwareConcurrency || 8;
  return memory <= 4 || cores <= 4 ? 'medium' : 'high';
}

main();
