// The whole solar system: creates renderer and worlds, runs the frame loop, handles input.
import * as THREE from 'three';
import { createNoiseVolume, RNG, hashString } from './noise.js';
import { bakeSky, createStarfield, createSun } from './space.js';
import { createPipeline } from './post.js';
import { Planet } from './planet.js';
import { CameraRig } from './camera.js';
import { createOrbitLine, Route, createBelt, createComet, createShipPool } from './system.js';
import { CIVS } from '../civs/index.js';

const clamp = (x, a, b) => Math.max(a, Math.min(b, x));
const sstep = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
const _v = new THREE.Vector3(), _v2 = new THREE.Vector3(), _v3 = new THREE.Vector3(), _s = new THREE.Vector3(), _up = new THREE.Vector3();
const _inv = new THREE.Matrix4();

const QUALITY = {
  low: { detail: 0.45, terrain: 96, terrainPerR: 5, shadow: 0, samples: 0, bloom: true, maxDpr: 1, cityRange: 14, vertices: 2.5e6 },
  medium: { detail: 0.75, terrain: 150, terrainPerR: 7, shadow: 2048, samples: 2, bloom: true, maxDpr: 1.5, cityRange: 26, vertices: 5e6 },
  high: { detail: 1, terrain: 200, terrainPerR: 9.5, shadow: 3072, samples: 4, bloom: true, maxDpr: 2, cityRange: 50, vertices: 8e6 },
};
export const QUALITY_LEVELS = Object.keys(QUALITY);

/**
 * When frames run slow, the load comes off in this order: first what the eye barely misses,
 * resolution last, because a blurred picture is what makes a weak machine look weak.
 * Geometry is never touched; it was sized for the machine when the worlds were built.
 */
const RELIEF = [
  'bloom', // glow computed at a quarter of the resolution instead of half: it is a blur anyway
  'msaa', // no multisampling; at high pixel density edges stay smooth without it
  'range', // distant cities fade out sooner
  'shadow', // no cast shadows
  'dpr', // only now: fewer pixels
  'dpr',
];

export class World extends EventTarget {
  constructor(canvas, graph, { quality = 'high' } = {}) {
    super();
    this.canvas = canvas;
    this.graph = graph;
    this.qualityName = QUALITY[quality] ? quality : 'high';
    this.quality = QUALITY[this.qualityName];
    this.planets = [];
    this.bodies = [];
    this.routes = [];
    this.keys = new Set();
    this.time = 0;
    this.timeScale = 1;
    this.sunWorld = new THREE.Vector3(0, 0, 0);
    this.sunRadius = 21;
    this.hover = null;
    this.selected = null;
    this.res = new THREE.Vector2(1, 1);
    this.pointer = new THREE.Vector2(-9, -9);
    this.pointerPx = { x: 0, y: 0 };
    this.raycaster = new THREE.Raycaster();
    this.viewOffset = 0;
    this.viewOffsetT = 0;
    this.dayGoal = null;
    this.frameInfo = { cityRange: this.quality.cityRange, pixelScale: 1 };
    this.fps = 60;
    this.dprScale = 1;
    this.relief = 0;
    this.reliefFloor = 0;
  }

  async init(onProgress = () => {}) {
    const { graph, quality } = this;
    const renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: false,
      powerPreference: 'high-performance',
      stencil: false,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, quality.maxDpr));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.95;
    renderer.shadowMap.enabled = quality.shadow > 0;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    this.renderer = renderer;

    const scene = new THREE.Scene();
    this.scene = scene;
    const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 16000);
    this.camera = camera;
    this.rig = new CameraRig(camera, this);

    onProgress(0.02, 'noise');
    await tick();
    this.noiseTex = createNoiseVolume();

    onProgress(0.05, 'sky');
    await tick();
    const skySeed = hashString(graph.meta.title);
    scene.background = bakeSky(renderer, this.noiseTex, skySeed);
    scene.backgroundIntensity = 1;
    this.stars = createStarfield(5200, skySeed + 1);
    scene.add(this.stars);

    this.sun = createSun(this.sunRadius, this.noiseTex);
    scene.add(this.sun);
    this.sunBody = {
      isSun: true, R: this.sunRadius, G: this.sunRadius, node: this.sun, spin: this.sun,
      minD: this.sunRadius * 1.5, maxD: this.sunRadius * 6, maxTilt: 0.35,
    };

    this.pointLight = new THREE.PointLight(0xfff1dc, 3.4, 0, 0);
    scene.add(this.pointLight);
    this.dirLight = new THREE.DirectionalLight(0xfff1dc, 0);
    scene.add(this.dirLight, this.dirLight.target);
    if (quality.shadow) {
      const shadow = this.dirLight.shadow;
      shadow.mapSize.set(quality.shadow, quality.shadow);
      shadow.bias = -0.0004;
      shadow.normalBias = 0.012;
      shadow.radius = 2.2;
      shadow.camera.near = 1;
      shadow.camera.far = 220;
      this.dirLight.castShadow = true;
    }
    this.hemi = new THREE.HemisphereLight(0x9db2e6, 0x26232e, 0.42);
    scene.add(this.hemi);

    // ---- worlds ---------------------------------------------------------------
    this.createFocus();
    const clusters = graph.clusters;
    const steps = clusters.length * 4;
    let done = 0;
    const advance = (label) => onProgress(0.08 + (done++ / Math.max(steps, 1)) * 0.86, label);
    clusters.forEach((cluster, index) => {
      const civ = CIVS[cluster.civ] || CIVS.terra;
      const planet = new Planet({ cluster, civ, graph, noiseTex: this.noiseTex, renderer, index, quality, focus: this.focus });
      // Memory stays bounded however large the wiki is: worlds share a fixed vertex budget.
      planet.vertexCap = Math.round(quality.vertices / clusters.length / 2);
      this.planets.push(planet);
      scene.add(planet.node);
    });

    for (const planet of this.planets) {
      advance({ step: 'plan', planet });
      await tick();
      planet.plan();
      advance({ step: 'terrain', planet });
      await tick();
      planet.buildTerrain();
      advance({ step: 'city', planet });
      await tick();
      planet.buildCivilisation();
      advance({ step: 'sky', planet });
      await tick();
      planet.buildSky();
    }

    this.layoutSystem();
    this.buildRoutes();
    this.buildOutskirts();

    onProgress(0.97, 'compile');
    await tick();
    this.setupPipeline();
    this.bindInput();
    // Also on resize: moving the window to another display changes its pixel density.
    this.applyRelief();
    window.addEventListener('resize', () => this.applyRelief());

    // Warm up every shader before the first frame the user sees.
    const lodBackup = this.planets.map((p) => [p.terrainHi.visible, p.detailMesh.visible, p.traffic.group.visible]);
    this.planets.forEach((p) => { p.terrainHi.visible = true; p.detailMesh.visible = true; p.traffic.group.visible = true; });
    try { renderer.compile(scene, camera); } catch { /* compile is only an optimisation */ }
    this.planets.forEach((p, i) => {
      [p.terrainHi.visible, p.detailMesh.visible, p.traffic.group.visible] = lodBackup[i];
    });

    onProgress(1, 'done');
    this.rig.sys.dist = this.rig.sys.distT * 1.55;
    this.rig.sys.el = this.rig.sys.elT + 0.26;
    this.lastTime = performance.now();
    this.running = true;
    this.fade = 0;
    renderer.setAnimationLoop(() => this.frame());
  }

  layoutSystem() {
    const rng = new RNG(hashString(this.graph.meta.title));
    // Worlds get a shuffled orbit order so that the largest isn't always closest in.
    const order = [...this.planets].sort((a, b) => hashString(a.cluster.name) - hashString(b.cluster.name));
    let radius = this.sunRadius * 2.4;
    order.forEach((p, i) => {
      const reach = p.R * (p.civ.rings ? (p.civ.rings.outer || 2.35) : 1.32);
      radius += reach + 7 + i * 1.5;
      const inclination = rng.range(-0.05, 0.05), ascending = rng.range(0, 6.28);
      p.setOrbit({
        radius,
        angle: rng.range(0, 6.283),
        speed: 0.42 / Math.pow(radius, 1.2) * 1.6,
        inclination,
        ascending,
      });
      p.orbitLine = createOrbitLine(radius, inclination, ascending, p.civ.palette.accent);
      this.scene.add(p.orbitLine);
      radius += reach;
    });
    this.outerRadius = radius;
    this.rig.setSystemFit(radius);
  }

  buildRoutes() {
    const { graph, planets } = this;
    const pair = new Map();
    for (const e of graph.edges) {
      const a = graph.pages[e.s].cluster, b = graph.pages[e.t].cluster;
      if (a < 0 || b < 0 || a === b) continue;
      const key = `${a}>${b}`;
      pair.set(key, (pair.get(key) || 0) + e.w);
    }
    const shipsNeeded = new Map();
    const routeGroup = new THREE.Group();
    this.scene.add(routeGroup);
    const rng = new RNG(99);
    this.spaceUniforms = {
      uTime: { value: 0 },
      uSunLocal: { value: new THREE.Vector3(0, 1, 0) },
      uGrow: { value: 1 },
      uGround: { value: 1 },
      uHover: { value: -9 },
      uSelected: { value: -9 },
      uAccent: { value: new THREE.Color(0xffffff) },
      uWinColor: { value: new THREE.Color(0xffffff) },
      uFogD: { value: 0 },
      uFogC: { value: new THREE.Color(0) },
      // Ships share the city shader, whose weathering reads the noise volume.
      uNoise: { value: this.noiseTex },
      uFocusTex: this.focus.texture,
      uFocusAmt: this.focus.amount,
      uSecTex: this.focus.sections,
      uSecPage: this.focus.secPage,
      uSecIdx: this.focus.secIdx,
    };
    for (const [key, count] of pair) {
      const [a, b] = key.split('>').map(Number);
      const from = planets[a], to = planets[b];
      if (!from || !to) continue;
      const route = new Route({
        from, to, count,
        color: from.civ.palette.route || from.civ.palette.accent,
        reverse: a > b,
        group: routeGroup,
        rng,
      });
      this.routes.push(route);
      shipsNeeded.set(from, (shipsNeeded.get(from) || 0) + route.ships.length);
    }
    this.shipPools = new Map();
    for (const [planet, n] of shipsNeeded) {
      const mesh = createShipPool(planet.civ, n, this.spaceUniforms);
      this.scene.add(mesh);
      this.shipPools.set(planet, mesh);
    }
  }

  /** One texel per page: R = in focus, G = linked to it, B = on the current journey. */
  createFocus() {
    const n = Math.max(1, this.graph.pages.length);
    const data = new Uint8Array(n * 4);
    const texture = new THREE.DataTexture(data, n, 1, THREE.RGBAFormat);
    texture.magFilter = texture.minFilter = THREE.NearestFilter;
    texture.needsUpdate = true;
    this.focus = { data, tex: texture, texture: { value: texture }, amount: { value: 0 }, id: null, journey: new Set() };
    // One more texel per page: 32 bits for its sections that have been read.
    const secData = new Uint8Array(n * 4);
    const secTex = new THREE.DataTexture(secData, n, 1, THREE.RGBAFormat);
    secTex.magFilter = secTex.minFilter = THREE.NearestFilter;
    secTex.needsUpdate = true;
    Object.assign(this.focus, { secData, secTex, sections: { value: secTex }, secPage: { value: -9 }, secIdx: { value: -9 } });
    this.neighbours = new Map();
    const link = (a, b) => {
      if (!this.neighbours.has(a)) this.neighbours.set(a, new Set());
      this.neighbours.get(a).add(b);
    };
    for (const e of this.graph.edges) { link(e.s, e.t); link(e.t, e.s); }
  }

  /** The building a section of a page stands in, if the city had room for it. */
  sectionBuilding(pageId, slug) {
    const planet = this.planets[this.graph.pages[pageId]?.cluster];
    return planet?.pickables.find((p) => p.kind === 'section' && p.id === pageId && p.slug === slug) ?? null;
  }

  /** Lights up the building of the section being read. */
  setSectionFocus(pageId, slug) {
    const building = slug == null ? null : this.sectionBuilding(pageId, slug);
    this.focus.secPage.value = building ? pageId : -9;
    this.focus.secIdx.value = building ? building.index : -9;
  }

  /** Lights the windows of the sections of a page that have been read. */
  setSectionsRead(pageId, slugs) {
    const { secData, secTex } = this.focus;
    secData.fill(0, pageId * 4, pageId * 4 + 4);
    for (const slug of slugs) {
      const building = this.sectionBuilding(pageId, slug);
      if (!building) continue;
      secData[pageId * 4 + (building.index >> 3)] |= 1 << (building.index & 7);
    }
    secTex.needsUpdate = true;
  }

  /** Stops the keyboard from flying the camera, while the reader needs the keys for scrolling. */
  setKeysLocked(locked) {
    this.keysLocked = locked;
    if (locked) this.keys.clear();
  }

  /** Marks the stops of a route or expedition; they stay lit until the journey ends. */
  setJourneyStops(ids) {
    this.focus.journey = new Set(ids || []);
    this.writeFocus();
  }

  writeFocus() {
    const f = this.focus;
    f.data.fill(0);
    if (f.id != null) {
      for (const other of this.neighbours.get(f.id) || []) f.data[other * 4 + 1] = 255;
      f.data[f.id * 4] = 255;
    }
    for (const id of f.journey) f.data[id * 4 + 2] = 255;
    f.tex.needsUpdate = true;
  }

  updateFocus(dt) {
    const f = this.focus;
    const hovered = this.hover && (this.hover.kind === 'page' || this.hover.kind === 'section') ? this.hover.id : null;
    const id = this.selected ?? hovered;
    if (id !== f.id) { f.id = id; this.writeFocus(); }
    // A passing mouse only hints at the connections; an open page commits to them.
    const target = this.selected != null || f.journey.size ? 1 : hovered != null ? 0.55 : 0;
    const a = f.amount;
    a.value += (target - a.value) * (1 - Math.exp(-dt * (target > a.value ? 3.5 : 7)));
    if (a.value < 0.002 && target === 0) a.value = 0;
  }

  buildOutskirts() {
    const { graph } = this;
    const beltRadius = this.outerRadius + 26;
    const belt = createBelt({
      radius: beltRadius,
      width: 22,
      count: this.quality.detail >= 1 ? 2200 : 1100,
      orphans: graph.orphans,
      graph,
    });
    this.belt = belt;
    this.scene.add(belt.group);
    this.rig.setSystemFit(beltRadius);
    for (const b of belt.beacons) {
      b.body = { isBeacon: true, pageId: b.pageId, R: b.size, G: b.size * 1.05, node: b.holder, spin: b.holder, minD: b.size * 2, maxD: b.size * 14, maxTilt: 0.4 };
    }

    if (graph.comet != null) {
      const comet = createComet({ pageId: graph.comet, a: this.outerRadius * 0.94, b: this.outerRadius * 0.46, noiseTex: this.noiseTex });
      this.comet = comet;
      this.scene.add(comet.group);
    }
  }

  setupPipeline() {
    const { renderer, scene, camera, quality } = this;
    const pipeline = createPipeline(renderer, scene, camera, { samples: quality.samples, bloom: quality.bloom });
    // Below the top level the glow starts at a quarter resolution: it is a blur, nobody sees the difference.
    const bloom = pipeline.bloom;
    const bloomSize = bloom.setSize.bind(bloom);
    this.bloomScale = this.qualityName === 'high' ? 1 : 0.5;
    bloom.setSize = (w, h) => bloomSize(Math.max(2, w * this.bloomScale), Math.max(2, h * this.bloomScale));
    this.composer = pipeline.composer;
    this.bloom = pipeline.bloom;
    this.bloomBase = pipeline.bloom?.strength ?? 0;
    this.finish = pipeline.finish;
  }

  resize() {
    const w = window.innerWidth, h = window.innerHeight;
    this.renderer.setSize(w, h);
    this.composer.setSize(w, h);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.res.set(w, h);
    this.finish.uniforms.uAspect.value = w / h;
    const dpr = this.renderer.getPixelRatio();
    this.finish.uniforms.uTexel.value.set(1 / Math.max(1, w * dpr), 1 / Math.max(1, h * dpr));
    this.frameInfo.pixelScale = (h * dpr) / 1000;
    this.stars.material.uniforms.uPixel.value = dpr;
    this.applyViewOffset();
  }

  applyViewOffset() {
    const w = this.res.x, h = this.res.y;
    if (Math.abs(this.viewOffset) > 0.5) this.camera.setViewOffset(w, h, this.viewOffset, 0, w, h);
    else this.camera.clearViewOffset();
  }

  /** Slide the scene sideways to keep the subject visible next to the reader panel. */
  setSideInset(px) { this.viewOffsetT = px / 2; }

  // ---- input ------------------------------------------------------------------
  bindInput() {
    const el = this.canvas;
    let down = null, moved = 0, rotating = false;
    const touches = new Map();
    let pinch = 0;
    el.addEventListener('contextmenu', (e) => e.preventDefault());
    el.addEventListener('pointerdown', (e) => {
      touches.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (touches.size === 2) {
        const [a, b] = [...touches.values()];
        pinch = Math.hypot(a.x - b.x, a.y - b.y);
        moved = 100; // A pinch is never a click.
      }
      down = { x: e.clientX, y: e.clientY };
      moved = 0;
      rotating = e.button === 2 || e.button === 1 || e.shiftKey;
      el.setPointerCapture(e.pointerId);
      el.classList.add('dragging');
    });
    el.addEventListener('pointermove', (e) => {
      this.pointerPx.x = e.clientX; this.pointerPx.y = e.clientY;
      this.pointer.set((e.clientX / window.innerWidth) * 2 - 1, -(e.clientY / window.innerHeight) * 2 + 1);
      if (touches.has(e.pointerId)) touches.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (touches.size === 2) {
        const [a, b] = [...touches.values()];
        const dist = Math.hypot(a.x - b.x, a.y - b.y);
        if (pinch > 0) this.handleWheel((pinch - dist) * 6);
        pinch = dist;
        return;
      }
      if (!down) return;
      const dx = e.clientX - down.x, dy = e.clientY - down.y;
      down.x = e.clientX; down.y = e.clientY;
      moved += Math.abs(dx) + Math.abs(dy);
      if (rotating) this.rig.rotateDrag(dx, dy);
      else this.rig.drag(dx, dy, window.innerHeight);
    });
    const up = (e) => {
      touches.delete(e.pointerId);
      if (!down) return;
      const wasClick = moved < 6 && e.button === 0;
      down = null;
      el.classList.remove('dragging');
      if (wasClick) this.handleClick();
    };
    el.addEventListener('pointerup', up);
    el.addEventListener('pointercancel', (e) => { touches.delete(e.pointerId); down = null; el.classList.remove('dragging'); });
    el.addEventListener('pointerleave', () => { if (!down) this.pointer.set(-9, -9); });
    el.addEventListener('dblclick', () => {
      const hit = this.hover;
      if (!hit && this.rig.mode === 'body' && this.rig.body.isPlanet) this.rig.dT = Math.max(this.rig.body.minD ?? 0.35, this.rig.dT * 0.45);
    });
    el.addEventListener('wheel', (e) => {
      e.preventDefault();
      this.handleWheel(e.deltaY * (e.deltaMode === 1 ? 32 : 1));
    }, { passive: false });
    window.addEventListener('keydown', (e) => {
      if (this.inputLocked || this.keysLocked || /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement?.tagName || '')) return;
      this.keys.add(e.code);
    });
    window.addEventListener('keyup', (e) => this.keys.delete(e.code));
    window.addEventListener('blur', () => this.keys.clear());
  }

  handleWheel(delta) {
    const rig = this.rig;
    if (rig.busy) return;
    if (rig.mode === 'system') {
      // Scrolling toward a world takes you to it.
      if (delta < 0) {
        const hit = this.hover?.planet ? this.hover.planet : null;
        if (hit) { this.enterPlanet(hit); return; }
        if (rig.sys.distT <= rig.sysMin * 1.02) {
          const nearest = this.planetNearestView();
          if (nearest) { this.enterPlanet(nearest); return; }
        }
      }
      rig.zoom(delta);
    } else {
      const body = rig.body;
      const max = body.maxD ?? body.R * 7;
      if (delta > 0 && rig.dT >= max * 0.985) { this.goToSystem(); return; }
      rig.zoom(delta);
    }
  }

  planetNearestView() {
    let best = null, bestD = Infinity;
    for (const p of this.planets) {
      _v.copy(p.node.position).project(this.camera);
      if (_v.z > 1) continue;
      const d = _v.x * _v.x + _v.y * _v.y;
      if (d < bestD) { bestD = d; best = p; }
    }
    return best;
  }

  pickUnderPointer() {
    if (Math.abs(this.pointer.x) > 1.5) return null;
    this.raycaster.setFromCamera(this.pointer, this.camera);
    const ray = this.raycaster.ray;
    const rig = this.rig;

    if (rig.mode === 'body' && rig.body.isPlanet) {
      const p = rig.body;
      _inv.copy(p.spin.matrixWorld).invert();
      _v.copy(ray.origin).applyMatrix4(_inv);
      _v2.copy(ray.direction).transformDirection(_inv).normalize();
      const hit = p.pick(_v, _v2);
      // Up close, the traffic can be boarded.
      if (rig.d < 7 && !rig.ride && p.traffic.group.visible) {
        const vehicle = p.traffic.pick(_v, _v2, Math.max(0.1, rig.d * 0.03));
        if (vehicle && (!hit || vehicle.t < _v3.copy(hit.local).sub(_v).length())) {
          return { kind: 'vehicle', item: vehicle.item, planet: p, id: vehicle.item.from, key: vehicle.item.to };
        }
      }
      if (hit) return { ...hit, planet: p };
      return null;
    }

    let best = null, bestT = Infinity;
    const pixel = 2 * Math.tan((this.camera.fov * Math.PI) / 360) / window.innerHeight;
    const test = (center, radius, result) => {
      _v.copy(center).sub(ray.origin);
      const t = _v.dot(ray.direction);
      if (t < 0) return;
      const r = Math.max(radius, t * pixel * 16);
      const d2 = _v.lengthSq() - t * t;
      if (d2 < r * r && t < bestT) { bestT = t; best = result; }
    };
    if (rig.mode === 'system') {
      for (const p of this.planets) test(p.node.position, p.R * 1.2, { kind: 'planet', planet: p });
      test(this.sunWorld, this.sunRadius * 1.05, { kind: 'sun' });
      if (this.comet) test(this.comet.group.position, 5, { kind: 'comet', pageId: this.graph.comet });
      for (const b of this.belt.beacons) {
        b.holder.getWorldPosition(_v3);
        test(_v3.clone(), b.size * 1.5, { kind: 'orphan', pageId: b.pageId, beacon: b });
      }
    } else {
      test(rig.body.node.getWorldPosition(_v3).clone(), rig.body.R * 1.2, { kind: 'self' });
    }
    return best;
  }

  handleClick() {
    const hit = this.pickUnderPointer();
    this.dispatchEvent(new CustomEvent('pick', { detail: hit }));
  }

  // ---- navigation ----------------------------------------------------------------
  enterPlanet(planet, { orbit = false, onArrive } = {}) {
    const site = planet.sites[0];
    const dir = site.dir.clone();
    this.arriveInDaylight(planet, dir);
    this.rig.flyToBody(planet, {
      dir,
      fwd: this.approachForward(planet, dir),
      d: orbit ? planet.R * 2.6 : site.h * 2.2 + 2.6,
      onArrive,
    });
    this.dispatchEvent(new CustomEvent('focus', { detail: planet }));
  }

  /** While the camera is still far away, turn the landing site toward a low, flattering sun. */
  arriveInDaylight(planet, dir) {
    if (this.rig.mode === 'body' && this.rig.body === planet) return;
    const sun = planet.uniforms.uSunLocal.value;
    const best = dir.y * sun.y + Math.sqrt(Math.max(0, 1 - dir.y * dir.y) * Math.max(0, 1 - sun.y * sun.y));
    this.dayGoal = { planet, target: Math.min(0.55, best * 0.8), budget: Math.PI * 2, dir: dir.clone(), speed: 2.4, far: true };
  }

  /** Pick the heading from which the sun lights the scene nicely. */
  approachForward(planet, dir) {
    const sun = planet.uniforms.uSunLocal.value;
    const t = sun.clone().addScaledVector(dir, -sun.dot(dir));
    if (t.lengthSq() < 1e-4) t.set(0, 1, 0).addScaledVector(dir, -dir.y);
    return t.normalize().applyAxisAngle(dir, 0.8);
  }

  goToSystem() {
    this.rig.flyToSystem({});
    this.dispatchEvent(new CustomEvent('focus', { detail: null }));
  }

  /** Fly to a page wherever it lives; opens the right world along the way. */
  flyToPage(pageId, { slug = null, onArrive } = {}) {
    const page = this.graph.pages[pageId];
    if (!page) return;
    if (pageId === this.graph.star) {
      this.rig.flyToBody(this.sunBody, { dir: new THREE.Vector3(0.4, 0.5, 0.75), d: this.sunRadius * 3.6, onArrive });
      this.dispatchEvent(new CustomEvent('focus', { detail: null }));
      return;
    }
    if (pageId === this.graph.comet && this.comet) {
      this.rig.flyToBody(this.comet.body, { dir: new THREE.Vector3(0.6, 0.5, 0.6), d: 22, onArrive });
      this.dispatchEvent(new CustomEvent('focus', { detail: null }));
      return;
    }
    const beacon = this.belt?.beacons.find((b) => b.pageId === pageId);
    if (beacon) {
      this.rig.flyToBody(beacon.body, { dir: new THREE.Vector3(0.3, 0.7, 0.6), d: beacon.size * 4.5, onArrive });
      this.dispatchEvent(new CustomEvent('focus', { detail: null }));
      return;
    }
    const planet = this.planets[page.cluster];
    if (!planet) return;
    const site = planet.siteByPage.get(pageId);
    if (!site) return;
    let dir = site.dir.clone();
    let d = site.h * 2.3 + 1.1;
    let lookIn = null;
    if (slug) {
      const pick = planet.pickables.find((p) => p.kind === 'section' && p.id === pageId && p.slug === slug);
      if (pick) {
        dir = pick.local.clone().normalize();
        // High enough to see the building among its neighbours, even between tall towers.
        d = Math.max(2.8, pick.r * 8, site.h * 1.7 + 1);
        // From the outside looking in: the building in front, the landmark behind it, nothing tall between.
        lookIn = site.dir.clone().sub(dir);
        lookIn.addScaledVector(dir, -lookIn.dot(dir));
        lookIn = lookIn.lengthSq() > 1e-8 ? lookIn.normalize() : null;
      }
    }
    const sameWorld = this.rig.mode === 'body' && this.rig.body === planet;
    if (!sameWorld) this.arriveInDaylight(planet, dir);
    const fwd = lookIn ?? (sameWorld ? this.rig.fwd.clone() : this.approachForward(planet, dir));
    this.rig.flyToBody(planet, { dir, fwd, d, tiltOffset: -0.1, onArrive });
    this.dispatchEvent(new CustomEvent('focus', { detail: planet }));
  }

  // ---- riding along -------------------------------------------------------------------
  /** Fly to the start of a link, then board the next vehicle along it. */
  rideLink(from, to) {
    const page = this.graph.pages[from];
    const planet = this.planets[page?.cluster];
    if (!planet || page.cluster !== this.graph.pages[to]?.cluster) return false;
    const item = planet.traffic.vehicleOn(from, to);
    if (!item || this.rig.reducedMotion) return false;
    const pts = item.path.pts;
    const n = Math.min(3, item.path.n - 1);
    const dir = new THREE.Vector3(pts[0], pts[1], pts[2]).normalize();
    const fwd = new THREE.Vector3(pts[n * 3] - pts[0], pts[n * 3 + 1] - pts[1], pts[n * 3 + 2] - pts[2]);
    fwd.addScaledVector(dir, -fwd.dot(dir)).normalize();
    this.endRide(false);
    this.rig.flyToBody(planet, {
      dir,
      fwd,
      d: item.air ? 1.8 : 1,
      tiltOffset: -0.16,
      onArrive: () => {
        item.s = 0;
        this.boardVehicle(item, planet);
      },
    });
    this.dispatchEvent(new CustomEvent('focus', { detail: planet }));
    return true;
  }

  boardVehicle(item, planet) {
    this.endRide(false);
    const cruise = clamp(item.path.length / 11, 1, 3.4);
    this.ride = { item, planet, v0: item.v, to: item.to, from: item.from, air: !!item.air };
    item.v = cruise;
    item.ridden = true;
    item.arrived = false;
    this.rig.ride = this.ride;
    this.dispatchEvent(new CustomEvent('ride', { detail: { state: 'start', ride: this.ride } }));
  }

  endRide(arrived) {
    const ride = this.ride;
    if (!ride) return;
    this.ride = null;
    this.rig.ride = null;
    this.rig.liftT = 0;
    ride.item.ridden = false;
    ride.item.arrived = false;
    ride.item.v = ride.v0;
    this.dispatchEvent(new CustomEvent('ride', { detail: { state: 'end', arrived, ride } }));
  }

  updateRide(dt) {
    const ride = this.ride;
    if (!ride) return;
    const it = ride.item, rig = this.rig;
    if (rig.body !== ride.planet || rig.mode !== 'body') { this.endRide(false); return; }
    if (it.arrived) { this.endRide(true); return; }
    if (it.x === undefined || rig.busy) return;
    const k = 1 - Math.exp(-dt * 9);
    const G = ride.planet.G;
    _v.set(it.x, it.y, it.z);
    const altitude = Math.max(0, _v.length() - G);
    // Looking slightly ahead cancels the lag of the smoothing, so the vehicle stays in frame.
    _v.x += it.fx * it.v * 0.12; _v.y += it.fy * it.v * 0.12; _v.z += it.fz * it.v * 0.12;
    _v.normalize();
    rig.dir.lerp(_v, k).normalize();
    _v2.set(it.fx, it.fy, it.fz);
    rig.fwd.lerp(_v2, k * 0.6);
    rig.fwd.addScaledVector(rig.dir, -rig.fwd.dot(rig.dir)).normalize();
    rig.dT = ride.air ? 1.8 : 1;
    rig.tiltOffsetT = -0.16;
    rig.liftT = ride.air ? altitude : 0;
  }

  setSelected(pageId) {
    this.selected = pageId;
    for (const p of this.planets) p.setSelected(pageId);
  }

  /** Time-lapse the current world to day or night. */
  setDayPhase(phase) {
    const body = this.rig.body;
    if (!body?.isPlanet) return;
    // At high latitudes the sun never climbs far, so aim for what this spot can actually reach.
    const { dir } = this.rig;
    const sun = body.uniforms.uSunLocal.value;
    const mid = dir.y * sun.y;
    const swing = Math.sqrt(Math.max(0, 1 - dir.y * dir.y) * Math.max(0, 1 - sun.y * sun.y));
    const target = phase === 'night' ? Math.max(-0.5, mid - swing * 0.8) : Math.min(0.68, mid + swing * 0.8);
    this.dayGoal = { planet: body, target, budget: Math.PI * 2, speed: 1.7 };
  }

  get currentPhase() {
    const b = this.rig.body;
    if (!b?.isPlanet) return null;
    return this.rig.dir.dot(b.uniforms.uSunLocal.value) < 0.05 ? 'night' : 'day';
  }

  project(world, target = new THREE.Vector3()) {
    target.copy(world).project(this.camera);
    return target;
  }

  // ---- frame -------------------------------------------------------------------
  frame() {
    const now = performance.now();
    const dt = Math.min((now - this.lastTime) / 1000, 0.066);
    this.lastTime = now;
    this.step(dt);
    this.renderFrame();
    this.adaptQuality(dt);
    this.dispatchEvent(new CustomEvent('frame', { detail: dt }));
  }

  step(dt) {
    this.time += dt;
    const time = this.time;
    const rig = this.rig;
    const { camera } = this;

    // Slow the system while on the ground, so the sky drifts rather than races.
    const onGround = rig.mode === 'body' && rig.body.isPlanet && rig.d < rig.body.R * 1.2;
    const ts = this.timeScale * (onGround ? 0.45 : 1);

    this.frameInfo.dt = dt;
    if (this.dayGoal) {
      const g = this.dayGoal;
      const p = g.planet;
      const dot = (g.dir || rig.dir).dot(p.uniforms.uSunLocal.value);
      const speed = g.speed || 1.15;
      if (Math.abs(dot - g.target) < 0.06 || g.budget <= 0 || (!g.far && p !== rig.body)) this.dayGoal = null;
      else {
        p.spin.rotation.y += speed * dt;
        g.budget -= speed * dt;
      }
    }

    for (const p of this.planets) {
      p.update(dt, time, camera, this.sunWorld, ts, this.frameInfo);
      if (p.orbitLine) {
        p.orbitLine.material.uniforms.uAt.value = p.orbit.angle;
        p.orbitLine.material.uniforms.uBoost.value = this.hover?.planet === p ? 1 : 0;
      }
    }
    this.comet?.body.update(dt * ts, time);
    this.belt.group.rotation.y += dt * 0.0035 * ts;
    this.belt.group.updateMatrixWorld(true);

    this.updateRide(dt);
    rig.update(dt, this.inputLocked ? null : this.keys);
    camera.updateMatrixWorld();

    // Things that need the camera, now that it has moved.
    this.sun.userData.update(time, camera);
    this.stars.position.copy(camera.position);
    this.stars.material.uniforms.uTime.value = time;
    for (const p of this.planets) {
      const c = _v.copy(camera.position).sub(p.node.position);
      p.atmosphere.material.uniforms.uCam.value.copy(c);
      if (p.clouds) p.clouds.material.uniforms.uCamAlt.value = c.length() - p.R;
    }

    this.updateRoutes(dt, time);
    this.updateLights();
    this.updateFlare();

    if (Math.abs(this.viewOffsetT - this.viewOffset) > 0.5) {
      this.viewOffset += (this.viewOffsetT - this.viewOffset) * (1 - Math.exp(-dt * 6));
      this.applyViewOffset();
    }

    // Hover is resolved once per frame rather than on every mouse event.
    if (!rig.busy && !this.inputLocked) {
      const hit = this.pickUnderPointer();
      const key = hit?.kind === 'vehicle' ? 'vehicle' : hit ? `${hit.kind}:${hit.id ?? ''}:${hit.slug ?? ''}:${hit.key ?? ''}:${hit.pageId ?? ''}:${hit.planet?.index ?? ''}` : '';
      if (key !== this.hoverKey) {
        this.hoverKey = key;
        this.hover = hit;
        for (const p of this.planets) p.setHover(hit && (hit.kind === 'page' || hit.kind === 'section') ? hit.id : null);
        this.canvas.classList.toggle('pointing', !!hit && hit.kind !== 'self');
        this.dispatchEvent(new CustomEvent('hover', { detail: hit }));
      }
    } else if (this.hover) {
      this.hover = null;
      this.hoverKey = '';
      for (const p of this.planets) p.setHover(null);
      this.canvas.classList.remove('pointing');
      this.dispatchEvent(new CustomEvent('hover', { detail: null }));
    }

    this.updateFocus(dt);

    if (this.fade < 1) {
      this.fade = Math.min(1, this.fade + dt / 2.2);
      this.finish.uniforms.uFade.value = this.fade * this.fade;
    }
    // Glow is tuned for the view from above; down among the traffic it would drown everything.
    if (this.bloom) {
      const low = rig.mode === 'body' && rig.body.isPlanet ? 1 - sstep(0.7, 3.2, rig.d) : 0;
      this.bloom.strength = this.bloomBase * (1 - low * 0.72);
    }
    const fin = this.finish.uniforms;
    fin.uTime.value = time;
    fin.uWarp.value = rig.warp;
  }

  updateRoutes(dt, time) {
    const focusPlanet = this.rig.mode === 'body' && this.rig.body?.isPlanet ? this.rig.body : this.hover?.planet || null;
    const selectedPlanet = this.selected != null ? this.planets[this.graph.pages[this.selected]?.cluster] : null;
    const highlight = selectedPlanet || focusPlanet;
    const counters = new Map();
    const camPos = this.camera.position;
    for (const route of this.routes) {
      const touches = highlight && (route.from === highlight || route.to === highlight);
      route.update(this.sunWorld, time, this.res, touches ? 1.15 : (highlight ? 0.1 : 0.34));
      const pool = this.shipPools.get(route.from);
      if (!pool) continue;
      let i = counters.get(pool) || 0;
      const arr = pool.instanceMatrix.array;
      for (const ship of route.ships) {
        ship.t += ship.v * dt * this.timeScale;
        if (ship.t > 1) ship.t -= 1;
        route.sample(ship.t, _v, _v2);
        const dist = _v.distanceTo(camPos);
        const scale = clamp(dist * 0.0036, 0.4, 2.6) * Math.min(1, Math.min(ship.t, 1 - ship.t) * 12);
        _up.set(0, 1, 0);
        _s.crossVectors(_up, _v2).normalize();
        _v3.crossVectors(_v2, _s).normalize();
        const o = i * 16;
        arr[o] = _s.x * scale; arr[o + 1] = _s.y * scale; arr[o + 2] = _s.z * scale; arr[o + 3] = 0;
        arr[o + 4] = _v3.x * scale; arr[o + 5] = _v3.y * scale; arr[o + 6] = _v3.z * scale; arr[o + 7] = 0;
        arr[o + 8] = _v2.x * scale; arr[o + 9] = _v2.y * scale; arr[o + 10] = _v2.z * scale; arr[o + 11] = 0;
        arr[o + 12] = _v.x; arr[o + 13] = _v.y; arr[o + 14] = _v.z; arr[o + 15] = 1;
        i++;
      }
      counters.set(pool, i);
    }
    for (const [pool, n] of counters) {
      pool.count = n;
      pool.instanceMatrix.needsUpdate = true;
    }
    this.spaceUniforms.uTime.value = time;
  }

  updateLights() {
    // Near a world, a shadow-casting directional light takes over from the point light.
    const rig = this.rig;
    let near = null, nearAlt = Infinity;
    for (const p of this.planets) {
      const rel = p.altitude / p.R;
      if (rel < nearAlt) { nearAlt = rel; near = p; }
    }
    this.nearPlanet = near;
    const w = 1 - sstep(1.2, 3.0, nearAlt);
    const I = 3.4;
    this.pointLight.intensity = I * (1 - w);
    this.dirLight.intensity = I * w;
    if (w > 0 && near) {
      const focus = _v.set(0, 0, 0);
      let extent;
      if (rig.mode === 'body' && rig.body === near) {
        focus.copy(rig.pose.look);
        extent = clamp(rig.d * 1.6, 6, near.R * 2.2);
      } else {
        focus.copy(near.node.position);
        extent = near.R * 2.2;
      }
      const sunDir = _v2.copy(this.sunWorld).sub(near.node.position).normalize();
      this.dirLight.position.copy(focus).addScaledVector(sunDir, 90);
      this.dirLight.target.position.copy(focus);
      this.dirLight.target.updateMatrixWorld();
      this.dirLight.updateMatrixWorld();
      const cam = this.dirLight.shadow.camera;
      if (Math.abs(cam.right - extent) > extent * 0.05) {
        cam.left = -extent; cam.right = extent; cam.top = extent; cam.bottom = -extent;
        cam.updateProjectionMatrix();
      }
      this.dirLight.castShadow = !!this.quality.shadow && !this.reliefHas('shadow') && nearAlt < 1.4;
    } else {
      this.dirLight.castShadow = false;
    }

    // Ground fog: every world tints its own air.
    for (const p of this.planets) {
      const fog = p.civ.atmosphere.fog;
      const alt = p.altitude;
      const dens = fog ? fog.density * (1 - sstep(p.R * 0.05, p.R * 0.55, alt)) : 0;
      p.uniforms.uFogD.value = dens;
      if (dens > 0 && p === near) {
        const camLocal = _v3.copy(this.camera.position).sub(p.node.position).normalize();
        const sunDot = camLocal.dot(_s.copy(this.sunWorld).sub(p.node.position).normalize());
        const day = sstep(-0.05, 0.45, sunDot);
        const dusk = sstep(-0.24, 0.0, sunDot) * (1 - sstep(0.06, 0.42, sunDot));
        const c = p.uniforms.uFogC.value;
        c.copy(p.fogNight).lerp(p.fogDay, day).lerp(p.fogDusk, dusk * 0.7);
      }
    }
  }

  updateFlare() {
    const fin = this.finish.uniforms;
    _v.copy(this.sunWorld).project(this.camera);
    let vis = 0;
    if (_v.z < 1 && Math.abs(_v.x) < 1.25 && Math.abs(_v.y) < 1.25) {
      vis = 1;
      // Hidden behind a planet? No flare.
      const dir = _v2.copy(this.sunWorld).sub(this.camera.position);
      const len = dir.length();
      dir.divideScalar(len);
      for (const p of this.planets) {
        _v3.copy(p.node.position).sub(this.camera.position);
        const t = _v3.dot(dir);
        if (t < 0 || t > len) continue;
        const d = Math.sqrt(Math.max(_v3.lengthSq() - t * t, 0));
        vis = Math.min(vis, sstep(p.R * 0.96, p.R * 1.14, d));
      }
      vis *= 1 - sstep(0.9, 1.25, Math.max(Math.abs(_v.x), Math.abs(_v.y)));
    }
    fin.uSunUv.value.set(_v.x * 0.5 + 0.5, _v.y * 0.5 + 0.5);
    fin.uSunVis.value += (vis - fin.uSunVis.value) * 0.12;
  }

  renderFrame() {
    // Behind the opaque planet map the scene would only burn GPU time.
    if (this.paused) return;
    if (this.portraitQueue?.length) this.takePortrait(this.portraitQueue.shift());
    this.composer.render();
  }

  /** Asks for a small picture of every world, one per frame, as it really looks. */
  capturePortraits(onPortrait) {
    this.onPortrait = onPortrait;
    this.portraitQueue = [...this.planets];
  }

  /** Between two frames: hide everything else, photograph the world, and put it all back. */
  takePortrait(planet) {
    const { scene, composer, renderer, sunWorld, frameInfo } = this;
    const pass = composer.passes[0];
    const time = this.spaceUniforms.uTime.value;
    const sun = planet.node.position.clone().sub(sunWorld).negate().normalize();
    const side = new THREE.Vector3(0, 1, 0).cross(sun).normalize();
    const size = renderer.domElement;
    const cam = new THREE.PerspectiveCamera(26, size.width / size.height, Math.max(0.05, planet.R * 0.2), planet.R * 60);
    // Three-quarters lit, from slightly above: the way planets look in a good photograph.
    const view = sun.clone().addScaledVector(side, 0.62).add(new THREE.Vector3(0, 0.34, 0)).normalize();
    cam.position.copy(planet.node.position).addScaledVector(view, (planet.R * 1.16) / Math.tan((13 * Math.PI) / 180));
    cam.lookAt(planet.node.position);
    cam.updateMatrixWorld();

    const hidden = [];
    for (const child of scene.children) {
      if (child === planet.node || child.isLight || !child.visible) continue;
      child.visible = false;
      hidden.push(child);
    }
    const fin = this.finish.uniforms;
    const saved = { fade: fin.uFade.value, warp: fin.uWarp.value, sun: fin.uSunVis.value, flash: fin.uFlash.value, point: this.pointLight.intensity, dir: this.dirLight.intensity, cast: this.dirLight.castShadow, bloom: this.bloom?.strength };
    fin.uFade.value = 1; fin.uWarp.value = 0; fin.uSunVis.value = 0; fin.uFlash.value = 0;
    this.pointLight.intensity = 3.4; this.dirLight.intensity = 0; this.dirLight.castShadow = false;
    if (this.bloom) this.bloom.strength = this.bloomBase;
    const focus = { id: this.focus.amount.value };
    this.focus.amount.value = 0;
    pass.camera = cam;
    planet.update(0, time, cam, sunWorld, 0, frameInfo);
    composer.render();

    const out = document.createElement('canvas');
    out.width = out.height = 160;
    const side2 = Math.min(size.width, size.height);
    out.getContext('2d').drawImage(size, (size.width - side2) / 2, (size.height - side2) / 2, side2, side2, 0, 0, 160, 160);

    pass.camera = this.camera;
    for (const child of hidden) child.visible = true;
    fin.uFade.value = saved.fade; fin.uWarp.value = saved.warp; fin.uSunVis.value = saved.sun; fin.uFlash.value = saved.flash;
    this.pointLight.intensity = saved.point; this.dirLight.intensity = saved.dir; this.dirLight.castShadow = saved.cast;
    if (this.bloom) this.bloom.strength = saved.bloom;
    this.focus.amount.value = focus.id;
    planet.update(0, time, this.camera, sunWorld, 0, frameInfo);
    this.onPortrait?.(planet, out.toDataURL('image/jpeg', 0.86));
  }

  reliefHas(kind) { return RELIEF.slice(0, this.relief).includes(kind); }

  /** Keeps things smooth on weaker GPUs, one step of RELIEF at a time, and gives it back when there is headroom. */
  adaptQuality(dt) {
    this.fps += (1 / Math.max(dt, 0.001) - this.fps) * 0.03;
    this.qualityTimer = (this.qualityTimer || 0) + dt;
    if (this.qualityTimer < 3 || this.rig.busy || this.paused) return;
    const fps = this.fps;
    // Two steps in a row that bought nothing: it is not the GPU holding the frame rate back
    // (a refresh rate capped to save power, a busy CPU). Take them back and leave it there.
    if (this.reliefCheck) {
      const helped = fps > this.reliefCheck * 1.04;
      this.reliefCheck = 0;
      this.idleSteps = helped ? 0 : (this.idleSteps || 0) + 1;
      if (this.idleSteps >= 2) {
        this.reliefCeiling = Math.max(this.reliefFloor, this.relief - 2);
        this.setRelief(this.reliefCeiling);
        return;
      }
    }
    const ceiling = this.reliefCeiling ?? RELIEF.length;
    if (fps < 40 && this.relief < ceiling) {
      // Needed again soon after it was given back: keep this step from now on.
      if (this.gaveBackAt != null && this.time - this.gaveBackAt < 12) this.reliefFloor = this.relief + 1;
      this.reliefCheck = fps;
      this.setRelief(this.relief + 1);
    } else if (fps > 57 && this.relief > this.reliefFloor && this.qualityTimer > 8) {
      this.gaveBackAt = this.time;
      this.setRelief(this.relief - 1);
    }
  }

  setRelief(level) {
    this.relief = level;
    this.qualityTimer = 0;
    this.applyRelief();
  }

  applyRelief() {
    const q = this.quality;
    this.bloomScale = this.qualityName === 'high' && !this.reliefHas('bloom') ? 1 : 0.5;
    const dprSteps = RELIEF.slice(0, this.relief).filter((k) => k === 'dpr').length;
    this.dprScale = [1, 0.8, 0.67][dprSteps];
    const native = window.devicePixelRatio || 1;
    const ratio = Math.min(native, q.maxDpr) * this.dprScale;
    // Multisampling is the costliest effect by far, and on a dense display hardly visible.
    const samples = this.reliefHas('msaa') || (this.qualityName !== 'high' && ratio >= 1.5) ? 0 : q.samples;
    for (const target of [this.composer.renderTarget1, this.composer.renderTarget2]) {
      if (target.samples !== samples) { target.samples = samples; target.dispose(); }
    }
    this.frameInfo.cityRange = q.cityRange * (this.reliefHas('range') ? 0.6 : 1);
    this.finish.uniforms.uSharpen.value = Math.min(0.6, Math.max(0, native / ratio - 1) * 1.2);
    this.renderer.setPixelRatio(ratio);
    this.composer.setPixelRatio(ratio);
    this.resize();
  }
}

function tick() {
  return new Promise((resolve) => requestAnimationFrame(() => resolve()));
}
