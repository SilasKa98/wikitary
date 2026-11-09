// One topic cluster, as a world. A planet is generated in steps so loading can show progress.
import * as THREE from 'three';
import { Noise3, RNG, hashString } from './noise.js';
import { buildCubeSphere, createTerrainMaterial } from './terrain.js';
import { createAtmosphere, createClouds, createRings, createAurora } from './atmosphere.js';
import { createCityMaterial, createRoadMaterial, createArcMaterial, createLightsMaterial } from './materials.js';
import { placeSites, classifyLinks, routeRoad, FlattenField, Occupancy, offsetDir } from './layout.js';
import { sitePlan, buildCity, buildArcs } from './city.js';
import { Traffic } from './traffic.js';

export const GROUND = 0.1;

function smoothstep(a, b, x) {
  const t = Math.max(0, Math.min(1, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
}

function makeEnvMap(renderer, env) {
  const scene = new THREE.Scene();
  scene.add(new THREE.Mesh(
    new THREE.SphereGeometry(10, 24, 16),
    new THREE.ShaderMaterial({
      side: THREE.BackSide,
      uniforms: {
        uZ: { value: new THREE.Color(env.zenith) },
        uH: { value: new THREE.Color(env.horizon) },
        uG: { value: new THREE.Color(env.ground) },
      },
      vertexShader: 'varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
      fragmentShader: `varying vec3 vD; uniform vec3 uZ, uH, uG;
        void main(){ float y = vD.y;
          vec3 c = y > 0.0 ? mix(uH, uZ, pow(y, 0.55)) : mix(uH, uG, pow(-y, 0.4));
          gl_FragColor = vec4(c * 1.5, 1.0); }`,
    }),
  ));
  const pmrem = new THREE.PMREMGenerator(renderer);
  const rt = pmrem.fromScene(scene, 0.02);
  pmrem.dispose();
  return rt.texture;
}

export class Planet {
  constructor({ cluster, civ, graph, noiseTex, renderer, index, quality, focus }) {
    this.cluster = cluster;
    this.civ = civ;
    this.graph = graph;
    this.noiseTex = noiseTex;
    this.renderer = renderer;
    this.index = index;
    this.quality = quality;
    this.seed = hashString(`${civ.id}:${cluster.name}`);
    this.noise = new Noise3(this.seed);
    this.rng = new RNG(this.seed);
    const n = cluster.pageIds.length;
    this.R = (11 + 2.5 * Math.sqrt(n)) * (civ.sizeScale || 1);
    this.G = this.R + GROUND;
    this.isPlanet = true;
    this.minD = 0.6;
    this.minEye = 0.07;
    // Small wikis get every detail; large ones trade neighbourhoods for headroom.
    this.budget = Math.min(1, 20 / Math.max(n, 1)) * quality.detail;

    this.pickables = [];
    this.roadPaths = [];
    this.airPaths = [];
    this.ghostLabels = [];
    this.flatten = new FlattenField();
    this.flattenRoads = new FlattenField();
    this.occ = new Occupancy();

    this.node = new THREE.Group();
    this.tilt = new THREE.Group();
    this.spin = new THREE.Group();
    this.node.add(this.tilt);
    this.tilt.add(this.spin);
    this.tilt.rotation.z = (civ.tilt ?? 0.22) * (this.rng.chance(0.5) ? 1 : -1);
    this.tilt.rotation.x = this.rng.range(-0.08, 0.08);
    this.spin.rotation.y = this.rng.range(0, Math.PI * 2);

    this.uniforms = {
      uTime: { value: 0 },
      uSunLocal: { value: new THREE.Vector3(1, 0, 0) },
      uNoise: { value: noiseTex },
      uHazeAmt: { value: 1 },
      uHazeColor: { value: new THREE.Color(civ.atmosphere.haze || 0x88aaff) },
      uCloudCover: { value: civ.clouds && civ.clouds.groundShadow !== false ? civ.clouds.cover : 0 },
      uCloudScale: { value: civ.clouds?.scale ?? 4.2 },
      uGrow: { value: 1 },
      uGround: { value: this.G },
      uHover: { value: -9 },
      uSelected: { value: -9 },
      uAccent: { value: new THREE.Color(civ.palette.accent) },
      uWinColor: { value: new THREE.Color(civ.palette.window) },
      uFogD: { value: 0 },
      uFogC: { value: new THREE.Color(0) },
      uFocusTex: focus.texture,
      uFocusAmt: focus.amount,
      uSecTex: focus.sections,
      uSecPage: focus.secPage,
      uSecIdx: focus.secIdx,
    };
    const fog = civ.atmosphere.fog || {};
    this.fogDay = new THREE.Color(fog.day ?? 0x8fb2dc);
    this.fogDusk = new THREE.Color(fog.dusk ?? 0xd98a66);
    this.fogNight = new THREE.Color(fog.night ?? 0x070a14);
    this.spinRate = (Math.PI * 2) / (civ.dayLength || 170);
  }

  /** altitude, raw height and city mask at a unit direction. */
  sampleSurface(x, y, z, out) {
    const h = this.civ.terrain.height(this.noise, x, y, z);
    const amp = (this.civ.terrain.amp ?? 1.4) * (this.R / 15);
    const land = h > 0 ? Math.pow(h, this.civ.terrain.power ?? 1.2) * amp : 0;
    // Districts get an irregular edge; a perfect circle of ground looks artificial.
    const G = this.G;
    const wx = this.noise.simplex(x * 7 + 31, y * 7, z * 7) * (0.75 / G);
    const wy = this.noise.simplex(x * 7, y * 7 + 47, z * 7) * (0.75 / G);
    const wz = this.noise.simplex(x * 7, y * 7, z * 7 + 59) * (0.75 / G);
    const mask = Math.max(this.flatten.sample(x + wx, y + wy, z + wz), this.flattenRoads.sample(x, y, z));
    out[0] = land + (GROUND - land) * mask;
    out[1] = h;
    out[2] = mask;
  }

  /** Step 1: decide where everything goes. */
  plan() {
    const { graph, cluster, G, R } = this;
    const pages = cluster.pageIds.map((id) => graph.pages[id]);
    const maxRank = Math.max(...pages.map((p) => p.rank), 0.001);
    const ordered = [...pages].sort((a, b) => (b.importance ?? b.rank) - (a.importance ?? a.rank));
    this.sites = ordered.map((page, i) => ({ page, capital: i === 0, ...sitePlan(page, maxRank, R, this.budget) }));
    this.siteByPage = new Map(this.sites.map((s) => [s.page.id, s]));

    const indexOf = new Map(this.sites.map((s, i) => [s.page.id, i]));
    const pair = new Map();
    for (const e of graph.edges) {
      if (!indexOf.has(e.s) || !indexOf.has(e.t)) continue;
      const a = indexOf.get(e.s), b = indexOf.get(e.t);
      const key = a < b ? `${a}|${b}` : `${b}|${a}`;
      if (!pair.has(key)) pair.set(key, { a: Math.min(a, b), b: Math.max(a, b), ab: 0, ba: 0 });
      const l = pair.get(key);
      if (a < b) l.ab += e.w; else l.ba += e.w;
    }
    const links = [...pair.values()];
    for (const l of links) l.weight = Math.log2(1 + l.ab + l.ba);

    const landScore = (dir) => {
      let s = 0;
      for (let i = 0; i < 6; i++) {
        const q = i === 0 ? dir : offsetDir(dir, i * 1.05, 2 / G);
        s += this.civ.terrain.height(this.noise, q.x, q.y, q.z) > 0.02 ? 1 : 0;
      }
      return s / 6;
    };
    placeSites(this.sites, links, G, this.rng, landScore);
    const { roads, air } = classifyLinks(this.sites, links);
    this.roads = roads;
    this.airLinks = air;
    for (const l of roads) {
      l.dirs = routeRoad(this.sites[l.a].dir, this.sites[l.b].dir, this.sites, [l.a, l.b], G, this.rng.fork(`${l.a}-${l.b}`), this.civ.road.meander ?? 0.4);
    }

    for (const s of this.sites) this.flatten.add(s.dir, (s.rD * 1.08 + 0.75) / G, 1.1 / G);
    // Roads level their way across land, but stay up on piers over open water.
    const fw = (this.civ.road.width * 0.5 + 0.1) / G;
    for (const l of roads) {
      for (let i = 0; i < l.dirs.length; i += 1) {
        const p = l.dirs[i];
        if (this.civ.terrain.height(this.noise, p.x, p.y, p.z) > -0.04) this.flattenRoads.add(p, fw, 0.42 / G);
      }
    }

    // Only a handful of the most-referenced missing pages become visible construction sites.
    this.ghosts = graph.ghosts
      .filter((g) => g.cluster === cluster.id)
      .sort((a, b) => b.refs.length - a.refs.length)
      .slice(0, 14);
    for (const g of this.ghosts) {
      // Reserve some flat ground around the page that references it.
      const host = this.sites.find((s) => g.refs.includes(s.page.id));
      if (host) this.flatten.add(host.dir, (host.rD + 1.9) / G, 0.9 / G);
    }
  }

  /** Step 2: the ground. */
  buildTerrain() {
    const { R, quality, civ } = this;
    this.envMap = makeEnvMap(this.renderer, civ.env);
    const sample = (x, y, z, out) => this.sampleSurface(x, y, z, out);
    const N = Math.min(quality.terrain, Math.round(R * quality.terrainPerR));
    const mat = createTerrainMaterial(civ, this.uniforms);
    mat.envMap = this.envMap;
    mat.envMapIntensity = 0.2;
    this.terrainMaterial = mat;
    this.terrainHi = new THREE.Mesh(buildCubeSphere(R, N, sample), mat);
    this.terrainHi.receiveShadow = true;
    this.terrainLo = new THREE.Mesh(buildCubeSphere(R, 36, sample), mat);
    this.terrainLo.receiveShadow = false;
    this.terrainHi.frustumCulled = this.terrainLo.frustumCulled = true;
    this.terrainHi.userData.planet = this;
    this.terrainLo.userData.planet = this;
    this.spin.add(this.terrainHi, this.terrainLo);
    this.terrainHi.visible = false;
  }

  /** Step 3: the civilisation. */
  buildCivilisation() {
    const { civ, uniforms, G } = this;
    const { main, detail, spin } = buildCity(this);
    const cityMat = createCityMaterial(civ, uniforms);
    cityMat.envMap = this.envMap;
    cityMat.envMapIntensity = 0.4;
    this.cityMaterial = cityMat;

    this.cityMesh = new THREE.Mesh(main.toGeometry(), cityMat);
    this.cityMesh.castShadow = this.cityMesh.receiveShadow = true;
    this.detailMesh = new THREE.Mesh(detail.toGeometry(), cityMat);
    this.detailMesh.castShadow = this.detailMesh.receiveShadow = true;
    this.detailMesh.visible = false;
    this.spin.add(this.cityMesh, this.detailMesh);

    if (spin.vertexCount) {
      const mat = createCityMaterial(civ, uniforms, { spin: true });
      mat.envMap = this.envMap;
      mat.envMapIntensity = 0.4;
      this.spinMesh = new THREE.Mesh(spin.toGeometry(), mat);
      this.spinMesh.frustumCulled = false;
      this.spin.add(this.spinMesh);
    }

    // Cranes are separate meshes, so that reading a page can take its crane down.
    this.craneGroup = new THREE.Group();
    this.spin.add(this.craneGroup);
    this.cranes = new Map();
    if (this.craneBuilders.size) {
      this.craneMaterial = createCityMaterial(civ, uniforms, { spin: true });
      this.craneMaterial.envMap = this.envMap;
      this.craneMaterial.envMapIntensity = 0.4;
      for (const [id, builder] of this.craneBuilders) {
        const mesh = new THREE.Mesh(builder.toGeometry(), this.craneMaterial);
        mesh.frustumCulled = false;
        mesh.castShadow = true;
        this.craneGroup.add(mesh);
        this.cranes.set(id, mesh);
      }
    }
    this.craneBuilders = null;

    const roadMat = createRoadMaterial(civ, uniforms);
    roadMat.side = THREE.DoubleSide;
    roadMat.envMap = this.envMap;
    roadMat.envMapIntensity = 0.2;
    this.roadMesh = new THREE.Mesh(this.roadGeometry, roadMat);
    this.roadMesh.receiveShadow = true;
    this.spin.add(this.roadMesh);

    const arcGeo = buildArcs(this);
    this.arcMaterial = createArcMaterial(uniforms, civ.palette.route || civ.palette.accent);
    this.arcs = new THREE.LineSegments(arcGeo, this.arcMaterial);
    this.arcs.renderOrder = 6;
    this.spin.add(this.arcs);

    // Night-side glow, for when the buildings are too small to resolve.
    const lightRng = new RNG(this.seed + 5);
    const pos = [], size = [];
    for (const s of this.sites) {
      // A metropolis is a blaze seen from orbit, a hamlet a few sparks.
      const n = Math.round(4 + s.rD * s.rD * 3.4);
      for (let i = 0; i < n; i++) {
        const d = offsetDir(s.dir, lightRng.range(0, 6.28), (Math.sqrt(lightRng.next()) * s.rD * 1.5) / G).multiplyScalar(G + 0.2);
        pos.push(d.x, d.y, d.z);
        size.push(lightRng.range(0.5, 1.6) * (0.75 + s.importance * 0.6));
      }
    }
    for (const p of this.roadPaths) {
      for (let i = 0; i < p.dirs.length; i += 3) {
        const d = p.dirs[i].clone().multiplyScalar(G + 0.2);
        pos.push(d.x, d.y, d.z);
        size.push(0.45);
      }
    }
    const lg = new THREE.BufferGeometry();
    lg.setAttribute('position', new THREE.BufferAttribute(new Float32Array(pos), 3));
    lg.setAttribute('aSize', new THREE.BufferAttribute(new Float32Array(size), 1));
    this.lightsMaterial = createLightsMaterial(uniforms, civ.palette.window);
    this.lights = new THREE.Points(lg, this.lightsMaterial);
    this.lights.renderOrder = 1;
    this.spin.add(this.lights);

    this.traffic = new Traffic(this, this.spin, uniforms);

    this.links = new Map();
    const key = (a, b) => (a < b ? `${a}|${b}` : `${b}|${a}`);
    for (const path of this.roadPaths) this.links.set(key(path.a, path.b), { kind: 'road', path });
    for (const path of this.airPaths) this.links.set(key(path.a, path.b), { kind: 'air', path });
  }

  /** How two pages of this world are connected, if they are. */
  linkBetween(a, b) {
    return this.links.get(a < b ? `${a}|${b}` : `${b}|${a}`) || null;
  }

  /** The page has been read: its crane comes down. */
  clearFresh(id) {
    const mesh = this.cranes.get(id);
    if (!mesh) return;
    this.craneGroup.remove(mesh);
    mesh.geometry.dispose();
    this.cranes.delete(id);
  }

  /** Step 4: the sky. */
  buildSky() {
    const { civ, R, noiseTex, uniforms } = this;
    this.atmosphere = createAtmosphere(R, civ.atmosphere, noiseTex);
    this.atmosphere.userData.planet = this;
    this.node.add(this.atmosphere);
    if (civ.clouds) {
      this.clouds = createClouds(R, civ.clouds, noiseTex, uniforms);
      this.spin.add(this.clouds);
    }
    if (civ.rings) {
      this.ringSun = { value: new THREE.Vector3(1, 0, 0) };
      this.rings = createRings(R, civ.rings, noiseTex, this.ringSun);
      this.rings.rotation.x = Math.PI / 2 + (civ.rings.tilt ?? 0);
      this.tilt.add(this.rings);
    }
    if (civ.aurora) {
      this.aurora = createAurora(R, civ.aurora, noiseTex, uniforms);
      this.spin.add(this.aurora);
    }
    if (civ.customize) this.custom = civ.customize(this);
  }

  /** Sets where this planet sits in the system. */
  setOrbit({ radius, angle, speed, inclination, ascending }) {
    this.orbit = { radius, angle, speed, inclination, ascending };
    this.applyOrbit(0);
  }

  applyOrbit(dt) {
    const o = this.orbit;
    o.angle += o.speed * dt;
    const x = Math.cos(o.angle) * o.radius, z = Math.sin(o.angle) * o.radius;
    this.node.position.set(x, 0, z)
      .applyAxisAngle(_axisZ, o.inclination)
      .applyAxisAngle(_axisY, o.ascending);
  }

  setHover(id) { this.uniforms.uHover.value = id == null ? -9 : id; }
  setSelected(id) { this.uniforms.uSelected.value = id == null ? -9 : id; }

  /** Height the camera must stay above at this position, rising smoothly around landmarks. */
  eyeFloor(pos) {
    const len = pos.length() || 1;
    let floor = this.G;
    for (const p of this.pickables) {
      if (p.top === undefined || p.top <= floor) continue;
      const d = _v.copy(p.local).multiplyScalar(len / p.local.length()).distanceTo(pos);
      const reach = p.foot * 1.5;
      if (d >= reach) continue;
      const t = Math.min(1, (reach - d) / (reach - p.foot * 0.9));
      const s = t * t * (3 - 2 * t);
      floor = Math.max(floor, this.G + (p.top - this.G) * s);
    }
    return floor;
  }

  worldPositionOf(local, target = new THREE.Vector3()) {
    return target.copy(local).applyMatrix4(this.spin.matrixWorld);
  }

  /** Nearest pickable under a ray given in planet-local coordinates. */
  pick(origin, dir) {
    const b = origin.dot(dir);
    const c = origin.lengthSq() - this.R * this.R;
    const disc = b * b - c;
    const tPlanet = disc > 0 ? -b - Math.sqrt(disc) : Infinity;
    let best = null, bestScore = Infinity;
    for (const p of this.pickables) {
      _v.copy(p.local).sub(origin);
      const t = _v.dot(dir);
      if (t < 0 || t > tPlanet + 0.6) continue;
      const d2 = _v.lengthSq() - t * t;
      const r = p.r * p.r;
      if (d2 > r) continue;
      // Prefer the object the ray passes closest to its axis, breaking ties by depth.
      const score = t + (d2 / r) * 1.5;
      if (score < bestScore) { bestScore = score; best = p; }
    }
    return best;
  }

  update(dt, time, camera, sunWorld, timeScale, frame) {
    this.applyOrbit(dt * timeScale);
    this.spin.rotation.y += this.spinRate * dt * timeScale;
    this.node.updateMatrixWorld(true);

    const u = this.uniforms;
    u.uTime.value = time;
    _v.copy(sunWorld).applyMatrix4(_inv.copy(this.spin.matrixWorld).invert()).normalize();
    u.uSunLocal.value.copy(_v);

    const cam = _v2.copy(camera.position).sub(this.node.position);
    const camDist = cam.length();
    const altitude = camDist - this.R;
    this.camDist = camDist;
    this.altitude = altitude;
    const au = this.atmosphere.material.uniforms;
    au.uCam.value.copy(cam);
    au.uSun.value.copy(sunWorld).sub(this.node.position).normalize();
    if (this.clouds) this.clouds.material.uniforms.uCamAlt.value = altitude;
    if (this.ringSun) {
      this.rings.updateMatrixWorld();
      this.ringSun.value.copy(sunWorld).applyMatrix4(_inv.copy(this.rings.matrixWorld).invert()).sub(_v3.set(0, 0, 0)).normalize();
    }
    if (this.custom?.update) this.custom.update(dt, time, camera);

    // Atmospheric haze across the disc only makes sense from space.
    u.uHazeAmt.value = smoothstep(this.R * 0.05, this.R * 0.7, altitude) * 0.5;

    // Level of detail.
    const R = this.R;
    const tooFar = camDist > R * frame.cityRange;
    this.terrainHi.visible = camDist < R * 7;
    this.terrainLo.visible = !this.terrainHi.visible;
    this.cityMesh.visible = !tooFar;
    this.roadMesh.visible = camDist < R * 12;
    if (this.spinMesh) this.spinMesh.visible = camDist < R * 9;
    this.craneGroup.visible = camDist < R * 9;
    this.detailMesh.visible = camDist < R * 8;
    this.arcs.visible = camDist < R * 6;
    this.arcMaterial.uniforms.uFade.value = 1 - smoothstep(R * 3.5, R * 6, camDist);
    u.uGrow.value = Math.max(0.0001, 1 - smoothstep(R * (frame.cityRange * 0.55), R * frame.cityRange, camDist));
    if (this.custom?.setVisible) this.custom.setVisible(camDist);

    const lightFade = smoothstep(R * 5, R * 14, camDist);
    this.lights.visible = lightFade > 0.01;
    this.lightsMaterial.uniforms.uFade.value = lightFade;
    this.lightsMaterial.uniforms.uScale.value = frame.pixelScale * 62;

    const showTraffic = camDist < R * 3.2;
    this.traffic.group.visible = showTraffic;
    if (showTraffic) this.traffic.update(dt);
  }
}

const _v = new THREE.Vector3(), _v2 = new THREE.Vector3(), _v3 = new THREE.Vector3();
const _inv = new THREE.Matrix4();
const _axisZ = new THREE.Vector3(0, 0, 1), _axisY = new THREE.Vector3(0, 1, 0);
