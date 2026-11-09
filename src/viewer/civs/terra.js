// TERRA — humanity. Glass and stone, asphalt and headlights, wind over green hills.
import { WIN, mix3, shade } from '../engine/builder.js';

const STONE = [0xb9b0a0, 0xa89f92, 0x968c7e, 0xc6bfb1, 0x8a7f71];
const BRICK = [0xa45a44, 0x8d4a3a, 0xb56b50, 0x7e4436];
const GLASS = [0x4f7696, 0x3f6a8a, 0x5d8aa8, 0x31506a];
const ROOF = [0x7c4638, 0x5e5a5e, 0x8e5742, 0x4a4d55, 0x6b3a30];
const CARS = [0xc8332d, 0xe7e7ea, 0x20242c, 0x2d5fa8, 0xd6a924, 0x8d9299];

function setbackTower(b, { h, w, rng }) {
  // Art-deco setbacks, crown and spire: the skyline's anchor.
  const stone = rng.pick(STONE);
  const tiers = 3 + (h > 3 ? 1 : 0);
  let y = 0, ww = w * 1.5;
  b.paint(mix3(stone, 0x000000, 0.25), { rough: 0.9 });
  b.box(ww * 1.15, h * 0.035, ww * 1.15);
  y = h * 0.035;
  for (let i = 0; i < tiers; i++) {
    const seg = (h * 0.76) * [0.44, 0.28, 0.17, 0.11][i] * (tiers === 3 ? 1.1 : 1);
    b.paint(stone, { rough: 0.72, win: WIN.GRID, cw: 0.052, ch: 0.066 });
    b.box(ww, seg, ww, { y, top: i === tiers - 1 ? 0.92 : 0.98 });
    y += seg;
    b.paint(mix3(stone, 0xffffff, 0.3), { rough: 0.6 });
    b.box(ww * 1.03, seg * 0.03 + 0.012, ww * 1.03, { y });
    y += seg * 0.03 + 0.012;
    // Vertical piers on the corners give it that 1930s silhouette.
    b.paint(mix3(stone, 0xffffff, 0.14), { rough: 0.6 });
    for (const [sx, sz] of [[1, 1], [-1, 1], [1, -1], [-1, -1]]) {
      b.save().move((sx * ww) / 2, y - seg - seg * 0.03, (sz * ww) / 2).box(0.03, seg, 0.03).restore();
    }
    ww *= 0.73;
  }
  // Stepped crown.
  b.paint(0xc8a45a, { rough: 0.3, metal: 0.95 });
  b.ngon(8, ww * 0.62, h * 0.07, { y, top: 0.72 });
  y += h * 0.07;
  b.ngon(8, ww * 0.42, h * 0.05, { y, top: 0.42 });
  y += h * 0.05;
  b.paint(0xd6d8dc, { rough: 0.35, metal: 0.9 });
  b.cyl(0.018, 0.003, h * 0.12, 6, { y });
  b.paint(0xff3b30, { glow: 8 });
  b.save().move(0, y + h * 0.12, 0).sphere(0.014, { seg: 6, rings: 4 }).restore();
}

function glassTower(b, { h, w, rng }) {
  // A contemporary curtain-wall tower with a sliced top.
  const glass = rng.pick(GLASS);
  const r = w * 0.74;
  const n = rng.pick([8, 12, 24]);
  b.paint(0x2c3238, { rough: 0.5, metal: 0.6 });
  b.ngon(n, r * 1.28, 0.06);
  b.paint(glass, { rough: 0.14, metal: 0.85, win: WIN.BANDS, cw: 0.26, ch: 0.05 });
  b.ngon(n, r, h * 0.82, { y: 0.06, top: 0.8, cap: false });
  b.ngon(n, r * 0.8, h * 0.18, { y: 0.06 + h * 0.82, top: 0.05, cap: false });
  b.paint(0xdfe5ea, { rough: 0.4, metal: 0.8 });
  for (let i = 1; i < 5; i++) {
    const t = i / 5;
    b.ngon(n, r * (1 - t * 0.2) * 1.015, 0.012, { y: 0.06 + h * 0.82 * t });
  }
  b.paint(0xff4438, { glow: 6 });
  b.save().move(0, h + 0.05, 0).sphere(0.012, { seg: 6, rings: 3 }).restore();
}

function slabTower(b, { h, w, rng }) {
  // Postwar slab with a podium and rooftop plant.
  const concrete = rng.pick(STONE);
  b.paint(mix3(concrete, 0x000000, 0.2), { rough: 0.85, win: WIN.STRIPES, cw: 0.11, ch: 0.11 });
  b.box(w * 1.9, h * 0.1, w * 1.5);
  b.paint(concrete, { rough: 0.7, win: WIN.GRID, cw: 0.06, ch: 0.072 });
  b.box(w * 1.3, h * 0.8, w * 0.8, { y: h * 0.1 });
  b.paint(0x3c4046, { rough: 0.6, metal: 0.5 });
  b.box(w * 0.6, h * 0.05, w * 0.4, { y: h * 0.9 });
  b.paint(0xf2f2f2, { rough: 0.5 });
  b.save().move(w * 0.3, h * 0.95, 0).cyl(0.03, 0.03, h * 0.05, 8).restore();
  b.paint(0x3c4046, { rough: 0.6 });
  b.save().move(-w * 0.32, h * 0.9, 0.05).cyl(0.012, 0.004, h * 0.12, 5).restore();
}

function museum(b, { h, w, rng }) {
  // Short pages become civic halls: columns, pediment, a green copper dome.
  const stone = mix3(rng.pick(STONE), 0xffffff, 0.25);
  const W = w * 2.3, D = w * 1.7, H = Math.max(0.34, h * 0.42);
  b.paint(mix3(stone, 0x000000, 0.14), { rough: 0.9 });
  b.box(W * 1.16, 0.04, D * 1.2);
  b.box(W * 1.08, 0.04, D * 1.12, { y: 0.04 });
  b.paint(stone, { rough: 0.75, win: WIN.GRID, cw: 0.085, ch: 0.12 });
  b.box(W, H, D, { y: 0.08 });
  b.paint(mix3(stone, 0xffffff, 0.2), { rough: 0.7 });
  const cols = 8;
  for (let i = 0; i < cols; i++) {
    const x = (i / (cols - 1) - 0.5) * W * 0.92;
    b.save().move(x, 0.08, D * 0.58).cyl(0.02, 0.016, H, 8, { caps: false }).restore();
  }
  b.box(W * 1.04, 0.04, D * 1.3, { y: 0.08 + H });
  b.gable(W * 1.04, 0.09, D * 1.3, { y: 0.12 + H });
  b.paint(0x5a9c88, { rough: 0.55, metal: 0.6 });
  b.save().move(0, 0.14 + H, 0).dome(w * 0.58, { sy: 1.1 }).restore();
  b.paint(0xc8a45a, { rough: 0.3, metal: 0.9 });
  b.save().move(0, 0.14 + H + w * 0.64, 0).cyl(0.012, 0.002, 0.12, 6).restore();
}

function section(b, { h, w, rng }) {
  const kind = rng.next();
  const facade = kind < 0.45 ? rng.pick(BRICK) : rng.pick(STONE);
  if (kind < 0.3) {
    // Brick walk-up with a pitched roof.
    b.paint(facade, { rough: 0.9, win: WIN.GRID, cw: 0.05, ch: 0.06 });
    b.box(w * 1.2, h, w, {});
    b.paint(rng.pick(ROOF), { rough: 0.85 });
    b.gable(w * 1.2, w * 0.3, w, { y: h });
  } else if (kind < 0.7) {
    // Office block with rooftop plant.
    b.paint(facade, { rough: 0.7, win: WIN.GRID, cw: 0.045, ch: 0.055 });
    b.box(w * 1.1, h, w * 1.1);
    b.paint(0x4c5056, { rough: 0.7 });
    b.box(w * 1.14, 0.012, w * 1.14, { y: h });
    b.paint(0x8a8e94, { rough: 0.5, metal: 0.6 });
    b.save().move(w * 0.2, h, -w * 0.15).box(w * 0.35, 0.03, w * 0.3).restore();
  } else {
    // Glass mid-rise.
    b.paint(rng.pick(GLASS), { rough: 0.16, metal: 0.8, win: WIN.BANDS, cw: 0.2, ch: 0.044 });
    b.box(w, h, w * 1.05, {});
    b.paint(0xe2e5e8, { rough: 0.5, metal: 0.6 });
    b.box(w * 1.04, 0.012, w * 1.09, { y: h });
  }
}

function filler(b, { s, rng, tier }) {
  if (tier > 0.42) {
    // Downtown: apartment and office blocks, taller toward the landmark.
    const h = s * rng.range(1.3, 2.2) * (1 + tier * 1.5);
    const w = s * rng.range(1.15, 1.6), d = s * rng.range(1.15, 1.6);
    const glass = rng.chance(0.3);
    if (glass) b.paint(rng.pick(GLASS), { rough: 0.16, metal: 0.8, win: WIN.BANDS, cw: 0.2, ch: 0.05 });
    else b.paint(rng.chance(0.45) ? rng.pick(BRICK) : rng.pick(STONE), { rough: 0.85, win: WIN.GRID, cw: 0.046, ch: 0.058 });
    b.box(w, h, d);
    if (rng.chance(0.4)) b.box(w * 0.6, h * 0.25, d * 0.6, { y: h });
    b.paint(0x4c5056, { rough: 0.7 });
    b.box(w * 1.03, 0.008, d * 1.03, { y: h });
    return;
  }
  if (rng.chance(0.3)) {
    // A garden: a couple of trees on a patch of lawn.
    tree(b, rng, s * 1.5, false);
    b.save().move(s * 0.7, 0, -s * 0.5);
    tree(b, rng, s * 1.05, false);
    b.restore();
    return;
  }
  // Suburbia: detached houses with pitched roofs, sometimes a pair of them.
  const count = rng.chance(0.5) ? 2 : 1;
  for (let i = 0; i < count; i++) {
    const w = s * rng.range(0.85, 1.15), d = s * rng.range(0.9, 1.3), h = s * rng.range(0.55, 1.05);
    b.save().move(count === 2 ? (i - 0.5) * s * 1.25 : 0, 0, 0);
    b.paint(rng.chance(0.6) ? rng.pick(STONE) : rng.pick(BRICK), { rough: 0.92, win: WIN.GRID, cw: 0.04, ch: 0.05 });
    b.box(w, h, d);
    b.paint(rng.pick(ROOF), { rough: 0.85 });
    b.save().rotY(Math.PI / 2).gable(d, s * 0.5, w, { y: h, over: 0.012 }).restore();
    b.restore();
  }
}

function tree(b, rng, s, conifer) {
  if (conifer) {
    const c = rng.pick([0x173a27, 0x1c422c, 0x234c33, 0x143223]);
    b.paint(0x3a2d22, { rough: 1 });
    b.cyl(s * 0.06, s * 0.04, s * 0.24, 3, { smooth: false, caps: false });
    b.paint(c, { rough: 0.95 });
    b.cone(s * 0.38, s * 0.72, 5, { y: s * 0.18, smooth: false });
    b.cone(s * 0.26, s * 0.62, 5, { y: s * 0.56, smooth: false });
  } else {
    const c = rng.pick([0x2f6a2c, 0x3b7a32, 0x28602a, 0x4a8438, 0x5a8a38, 0x3a6c34]);
    b.paint(0x3f3024, { rough: 1 });
    b.cyl(s * 0.06, s * 0.045, s * 0.4, 3, { smooth: false, caps: false });
    b.paint(c, { rough: 0.9 });
    b.sphere(s * 0.34, { y: s * 0.3, seg: 6, rings: 3, sy: 1.1 });
    if (rng.chance(0.45)) {
      b.paint(mix3(c, 0xffffff, 0.08), { rough: 0.9 });
      b.save().move(s * 0.15, s * 0.26, s * 0.1).sphere(s * 0.2, { seg: 5, rings: 3 }).restore();
    }
  }
}

function car(color) {
  return (b) => {
    b.paint(color, { rough: 0.28, metal: 0.7 });
    b.box(0.052, 0.018, 0.105, { y: 0.008 });
    b.paint(mix3(color, 0x101820, 0.55), { rough: 0.15, metal: 0.8 });
    b.box(0.046, 0.016, 0.054, { y: 0.026, top: 0.82, topZ: 0.7 });
    b.paint(0xfff2cc, { glow: -9 });
    b.save().move(0.017, 0.017, 0.053).box(0.01, 0.006, 0.002).restore();
    b.save().move(-0.017, 0.017, 0.053).box(0.01, 0.006, 0.002).restore();
    b.paint(0xff2418, { glow: -6 });
    b.save().move(0.018, 0.018, -0.053).box(0.01, 0.005, 0.002).restore();
    b.save().move(-0.018, 0.018, -0.053).box(0.01, 0.005, 0.002).restore();
  };
}

export default {
  id: 'terra',
  name: { en: 'Terra', de: 'Terra' },
  people: { en: 'Humans', de: 'Menschen' },
  blurb: {
    en: 'Home. Glass towers, brick walk-ups and wind farms; cars carry knowledge along asphalt, airliners take the long way round.',
    de: 'Die Heimat. Glastürme, Backsteinhäuser und Windparks; Autos tragen das Wissen über den Asphalt, Linienflieger nehmen die langen Wege.',
  },
  bridge: { en: 'streets & air corridors', de: 'Straßen & Flugkorridore' },
  dayLength: 200,
  tilt: 0.3,
  palette: { accent: 0x7fc4ff, window: 0xffd9a0, route: 0x8ccaff, scaffold: 0xc8cdd4 },
  env: { zenith: 0x4f86d8, horizon: 0xe2ecf7, ground: 0x47533e },
  terrain: {
    amp: 0.8,
    power: 1.3,
    height(noise, x, y, z) {
      const wx = noise.simplex(x * 1.5 + 11, y * 1.5, z * 1.5) * 0.3;
      const wy = noise.simplex(x * 1.5, y * 1.5 + 23, z * 1.5) * 0.3;
      const c = noise.fbm(x * 1.25 + wx, y * 1.25 + wy, z * 1.25, 6, 2.05, 0.52);
      let h = c * 2.5 - 0.1;
      if (h > 0) {
        const m = noise.ridged(x * 2.6 + 40, y * 2.6, z * 2.6, 4, 2.0, 0.42);
        h += m * m * Math.min(1, h * 1.8) * 1.1;
      }
      return h;
    },
  },
  scatterDensity: 1.2,
  scatter(b, { rng, h, lat, spin, x, y, z, noise }) {
    if (h > 1.05) return;
    // Forests come in stands, with open meadows between them.
    const stand = noise.simplex(x * 11 + 3, y * 11, z * 11) + noise.simplex(x * 27, y * 27 + 9, z * 27) * 0.4;
    if (stand < -0.05 && !rng.chance(0.04)) return;
    if (h > 0.5 && rng.chance(0.012) && lat < 0.7) {
      // Wind farm on the ridges.
      const s = 0.42;
      b.paint(0xeef1f4, { rough: 0.5 });
      b.cyl(0.014, 0.007, s, 6, { caps: false });
      spin.paint(0xf6f7f9, { rough: 0.4 });
      spin.save().move(0, s, 0.012);
      spin.spinAbout(0, 0, 0, 0, 0, 1, 1.6);
      for (let i = 0; i < 3; i++) {
        spin.save().rotZ((i / 3) * Math.PI * 2);
        spin.box(0.012, 0.2, 0.004);
        spin.restore();
      }
      spin.restore();
      return;
    }
    const conifer = lat > 0.55 || h > 0.42;
    tree(b, rng, rng.range(0.11, 0.2) * (conifer ? 1.1 : 1), conifer);
  },
  surfaceGLSL: /* glsl */`
    void surface(vec3 p, float h, float mask, float dist, float day, inout vec3 albedo, inout float rough, inout float metal, inout vec3 emissive, inout vec3 bump) {
      float n = fbm5(p * 7.0);
      float fine = n3(p * 58.0);
      float hh = h + (n - 0.5) * 0.16;
      float lat = abs(p.y);
      if (hh < 0.0 && mask < 0.5) {
        liquid(p, hh, vec3(0.006, 0.03, 0.095), vec3(0.03, 0.2, 0.3), 26.0, albedo, rough, metal, bump);
        float foam = smoothstep(-0.016, -0.003, hh) * (0.55 + 0.45 * sin(uTime * 0.9 + n * 30.0));
        albedo = mix(albedo, vec3(0.6), foam * 0.35);
      } else {
        vec3 sand = vec3(0.5, 0.43, 0.3);
        vec3 grass = mix(vec3(0.16, 0.3, 0.08), vec3(0.3, 0.38, 0.12), n);
        vec3 forest = vec3(0.05, 0.14, 0.05);
        vec3 dry = vec3(0.45, 0.36, 0.2);
        vec3 rock = mix(vec3(0.24, 0.21, 0.19), vec3(0.38, 0.34, 0.3), fine);
        vec3 snow = vec3(0.72, 0.75, 0.8);
        float moist = fbm3(p * 3.2 + 7.0);
        vec3 low = mix(grass, forest, smoothstep(0.46, 0.56, moist));
        low = mix(dry, low, smoothstep(0.34, 0.47, moist + (lat - 0.2) * 0.28));
        albedo = mix(sand, low, smoothstep(0.004, 0.034, hh));
        albedo = mix(albedo, rock, smoothstep(0.55, 0.95, hh + (fine - 0.5) * 0.25));
        float snowLine = 1.42 - lat * 1.25 + (n - 0.5) * 0.5;
        albedo = mix(albedo, snow, smoothstep(snowLine, snowLine + 0.1, hh));
        albedo = mix(albedo, snow, smoothstep(0.82, 0.92, lat + (n - 0.5) * 0.16));
        albedo *= 0.82 + fine * 0.36;
        rough = 0.93;
        bump += bumpOf(p, 46.0, 0.09) * smoothstep(70.0, 10.0, dist);
        // Micro detail that only resolves once you are close to the ground.
        float near = smoothstep(14.0, 2.0, dist);
        if (near > 0.0) {
          float tuft = n3(p * 240.0) * 0.6 + n3(p * 620.0) * 0.4;
          albedo *= 1.0 + (tuft - 0.5) * 0.55 * near;
          bump += bumpOf(p, 300.0, 0.12) * near;
        }
        // Town ground: mown parks and paved plots.
        vec3 town = mix(vec3(0.11, 0.2, 0.06), vec3(0.17, 0.26, 0.09), n3(p * 90.0));
        town *= 0.86 + n3(p * 420.0) * 0.3;
        albedo = mix(albedo, town, smoothstep(0.3, 0.9, mask));
      }
    }`,
  atmosphere: {
    thickness: 1.22,
    rayleigh: [0.8, 1.95, 4.8],
    mie: [0.4, 0.4, 0.4],
    intensity: 8.5,
    haze: 0x82b4ff,
    fog: { density: 0.0125, day: 0xa8c6ea, dusk: 0xe8a57e, night: 0x070b16 },
  },
  clouds: { cover: 0.56, scale: 4.6, opacity: 0.93, shadow: 0x5a6a88, dusk: 0xffa26a },
  road: {
    width: 0.2,
    laneOffset: 0.24,
    meander: 0.45,
    lampEvery: 0.56,
    lampChance: 0.8,
    glsl: /* glsl */`
      void roadSurface(float x, float s, float night, inout vec3 albedo, inout float rough, inout float metal, inout vec3 emissive) {
        albedo = vec3(0.028, 0.03, 0.034) + 0.012 * n3(vRP * 300.0);
        rough = 0.82;
        float edge = smoothstep(0.82, 0.86, abs(x)) * smoothstep(0.96, 0.92, abs(x));
        float dash = step(abs(x), 0.05) * step(fract(s * 6.0), 0.52);
        albedo = mix(albedo, vec3(0.62, 0.58, 0.46), max(edge, dash));
        emissive += vec3(1.0, 0.72, 0.42) * night * 0.035 * (1.0 + 0.6 * sin(s * 11.2));
        emissive += vec3(1.0, 0.9, 0.7) * max(edge, dash) * night * 0.05;
      }`,
  },
  transit: { road: { en: 'Street', de: 'Straße' }, air: { en: 'Air corridor', de: 'Flugkorridor' } },
  map: { title: { en: 'Road atlas', de: 'Straßenatlas' }, paper: '#efe7d3', edge: '#b4a585', ink: '#2b2a26', soft: '#6f6a5b', sea: ['#9dc3d6', '#c6dee5'], land: ['#e3e6c4', '#b9a77c'], contour: 'rgba(120,100,60,0.3)', grid: 'rgba(60,80,110,0.16)', road: '#d8482f', casing: '#7c2a1c', air: '#2f5f9e', traffic: '#1f1e1b', accent: '#c8321e', lines: 'atlas', glyph: 'atlas', font: 'serif' },
  layout: 'grid',
  block: 0.46,
  street: { color: 0x34363a, rough: 0.85, width: 0.05, glow: -0.22 },
  lotFor(tier, rng) {
    if (tier > 0.42) return rng.pick([0x56565a, 0x5e5e60, 0x4e4f54]);
    return rng.pick([0x3c5a2c, 0x46662f, 0x35522a, 0x4f6c36, 0x57605a]);
  },
  plaza(b, { r }) {
    b.paint(0x6e6c68, { rough: 0.8 });
    b.disc(r, { seg: 64 });
    b.paint(0x8c887f, { rough: 0.75 });
    b.disc(r * 0.97, { y: 0.002, seg: 64, inner: r * 0.88 });
  },
  landmark(b, s) {
    if (s.h < 1.15) museum(b, s);
    else if (s.capital || s.rng.chance(0.34)) setbackTower(b, s);
    else if (s.rng.chance(0.62)) glassTower(b, s);
    else slabTower(b, s);
  },
  section,
  filler,
  roadside(b, { rng, side }) {
    if (rng.chance(0.42)) {
      tree(b, rng, rng.range(0.1, 0.16), false);
      return;
    }
    b.paint(0x383c42, { rough: 0.5, metal: 0.7 });
    b.cyl(0.0045, 0.0035, 0.09, 4, { caps: false, smooth: false });
    b.box(0.004, 0.004, 0.03, { y: 0.088 });
    b.paint(0xffdba0, { glow: -14 });
    b.save().move(0, 0.082, side * 0).box(0.009, 0.004, 0.012).restore();
  },
  vehicles: [
    ...CARS.map((c) => ({ build: car(c), speed: 0.42, weight: 1 })),
    {
      weight: 0.6,
      speed: 0.3,
      build(b) {
        b.paint(0xf1b320, { rough: 0.4, metal: 0.3, win: WIN.BANDS, cw: 0.05, ch: 0.03 });
        b.box(0.056, 0.05, 0.17, { y: 0.008 });
        b.paint(0xfff2cc, { glow: -9 });
        b.save().move(0.018, 0.018, 0.086).box(0.01, 0.007, 0.002).restore();
        b.save().move(-0.018, 0.018, 0.086).box(0.01, 0.007, 0.002).restore();
        b.paint(0xff2418, { glow: -6 });
        b.save().move(0, 0.02, -0.086).box(0.04, 0.006, 0.002).restore();
      },
    },
  ],
  flyer: {
    speed: 1.05,
    shadow: false,
    build(b) {
      b.paint(0xf1f3f6, { rough: 0.35, metal: 0.4 });
      b.save().rotX(Math.PI / 2).cyl(0.016, 0.012, 0.2, 8, { y: -0.1 }).restore();
      b.save().move(0, 0, 0.1).rotX(Math.PI / 2).cone(0.016, 0.03, 8).restore();
      b.prism([[0.15, -0.01], [0.015, 0.045], [-0.015, 0.045], [-0.15, -0.01], [-0.015, -0.015], [0.015, -0.015]], 0.005);
      b.save().move(0, 0.005, -0.09).prism([[0.05, -0.012], [0, 0.018], [-0.05, -0.012]], 0.003).restore();
      b.paint(0x2d5fa8, { rough: 0.4 });
      b.save().move(0, 0.008, -0.092).box(0.003, 0.04, 0.03).restore();
      b.paint(0xff3322, { glow: 6 });
      b.save().move(-0.15, 0, -0.01).sphere(0.004, { seg: 5, rings: 3 }).restore();
      b.paint(0x44ff66, { glow: 6 });
      b.save().move(0.15, 0, -0.01).sphere(0.004, { seg: 5, rings: 3 }).restore();
    },
  },
  walker: {
    speed: 0.1,
    lift: 0.012,
    bob: 0.004,
    bobRate: 10,
    colors: [0x3a4a6a, 0x7a3a3a, 0x2f2f33, 0xb8b4a8, 0x4a6a4a, 0xc08a3a],
    build(b) {
      b.paint(shade(0xffffff, 0.8), { rough: 0.8 });
      b.cyl(0.0065, 0.0075, 0.021, 5, { caps: false });
      b.paint(0xe8c2a0, { rough: 0.7 });
      b.save().move(0, 0.021, 0).sphere(0.0048, { seg: 5, rings: 3 }).restore();
    },
  },
  ship(b) {
    b.paint(0xe9edf2, { rough: 0.3, metal: 0.6 });
    b.save().rotX(Math.PI / 2).cyl(0.2, 0.28, 1.4, 10, { y: -0.7 }).restore();
    b.save().move(0, 0, 0.7).rotX(Math.PI / 2).cone(0.2, 0.5, 10).restore();
    b.prism([[0.8, -0.6], [0.2, 0.2], [-0.2, 0.2], [-0.8, -0.6]], 0.05);
    b.paint(0x8cd0ff, { glow: 5 });
    b.save().move(0, 0, -0.72).rotX(-Math.PI / 2).cone(0.2, 0.55, 8).restore();
  },
};
