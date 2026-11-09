// APIS — the Hive. A honey-amber world of black basalt columns, golden meadows of giant flowers
// and glowing resin seas. Everything is built in comb: clusters of hexagonal wax towers.
import { WIN, mix3 } from '../engine/builder.js';

const WAX = [0xf4d488, 0xeec46a, 0xf8e0a4, 0xe2b45a];
const HONEY = 0xf0a018, AMBER = 0xff9a14, DARK = 0x24160c, BASALT = 0x2a211c;
const PETAL = [0xfff0c8, 0xffc430, 0xf08a1c, 0xffd8a0, 0xffe070, 0xd8641c];
const POLLEN = 0xffb428;
// Every hexagon shares one orientation, so ngon prisms, hex domes and hex discs line up,
// and neighbouring cells tile exactly at a distance of r * sqrt(3).
const ROT = Math.PI / 6;
const SQ3 = Math.sqrt(3);

/** One comb cell: a hexagonal tower with a dark rim and one of several roofs. */
function cell(b, x, z, r, h, rng, { glass = false, roof = rng.int(0, 3) } = {}) {
  b.save().move(x, 0, z);
  if (glass) b.paint(AMBER, { rough: 0.16, metal: 0.15, glow: 0.22, win: WIN.BANDS, cw: 0.16, ch: 0.05 });
  else b.paint(rng.pick(WAX), { rough: 0.5, win: WIN.SPOTS, cw: 0.062, ch: 0.07 });
  b.ngon(6, r, h, { rot: ROT, cap: false });
  // A dark rim, like the capped edge of a comb.
  const band = Math.max(0.012, r * 0.12);
  b.paint(DARK, { rough: 0.55 });
  b.ngon(6, r * 1.07, band, { y: h, rot: ROT });
  const y = h + band;
  if (roof === 0) {
    // Hex-faceted wax dome.
    b.paint(rng.pick(WAX), { rough: 0.42 });
    b.save().move(0, y, 0).dome(r * 0.98, { seg: 6, rings: 3, sy: 0.85 }).restore();
  } else if (roof === 1) {
    b.paint(HONEY, { rough: 0.3, metal: 0.25 });
    b.ngon(6, r, r * 0.9, { y, top: 0.001, rot: ROT, cap: false });
  } else if (roof === 2) {
    // Amber skylight lantern, lit from within.
    b.paint(AMBER, { rough: 0.2, glow: 1.1 });
    b.ngon(6, r * 0.62, r * 0.42, { y, rot: ROT });
  } else {
    b.paint(rng.pick(WAX), { rough: 0.5 });
    b.ngon(6, r, 0.004, { y, rot: ROT });
  }
  b.restore();
}

/** A striped capsule lying along +Z: honey and black bands. */
function stripedPod(b, len, rad, { seg = 7, bands = 5, a = HONEY, c = DARK } = {}) {
  b.save().rotX(Math.PI / 2);
  const prof = [];
  for (let i = 0; i <= bands; i++) {
    const t = i / bands;
    prof.push([rad * Math.pow(Math.sin(Math.PI * t), 0.55), -len / 2 + t * len]);
  }
  for (let i = 0; i < bands; i++) {
    b.paint(i % 2 ? c : a, { rough: i % 2 ? 0.45 : 0.32, metal: i % 2 ? 0 : 0.25 });
    b.lathe([prof[i], prof[i + 1]], seg);
  }
  b.restore();
}

/** A pair of translucent wings on either side of a body. */
function wings(b, span, chord, y, z = 0, lift = 0.35) {
  b.paint(0xfff6dc, { rough: 0.18, metal: 0.1, glow: 0.18 });
  for (const s of [1, -1]) {
    b.save().move(0, y, z).rotZ(s * lift).move((s * span) / 2, 0, 0).box(span, 0.0016, chord).restore();
  }
}

function starPoints(n, outer, inner) {
  const pts = [];
  for (let i = 0; i < n * 2; i++) {
    const a = -(i / (n * 2)) * Math.PI * 2;
    const r = i % 2 ? inner : outer;
    pts.push([Math.cos(a) * r, Math.sin(a) * r]);
  }
  return pts;
}

/** A giant meadow flower, its head tipped toward the light. */
function flower(b, rng, s) {
  b.paint(0x6a7a24, { rough: 0.85 });
  b.cyl(s * 0.035, s * 0.022, s, 4, { caps: false, smooth: false });
  b.save().move(0, s, 0).rotX(rng.range(-0.45, 0.45)).rotZ(rng.range(-0.45, 0.45));
  b.paint(rng.pick(PETAL), { rough: 0.72 });
  b.prism(starPoints(rng.pick([5, 6]), s * 0.44, s * 0.2), s * 0.02);
  b.paint(rng.chance(0.5) ? 0x3a2008 : POLLEN, { rough: 0.85, glow: -1.4 });
  b.sphere(s * 0.13, { y: s * 0.004, seg: 6, rings: 3, sy: 0.55 });
  b.restore();
}

/** A straw-banded wild hive mound with a glowing door. */
function skep(b, s) {
  b.paint(0xc89a4c, { rough: 0.9 });
  b.lathe([[s * 0.5, 0], [s * 0.52, s * 0.22], [s * 0.46, s * 0.46], [s * 0.34, s * 0.66], [s * 0.16, s * 0.78], [0, s * 0.81]], 10);
  b.paint(mix3(0xc89a4c, 0x000000, 0.4), { rough: 0.9 });
  b.ring(s * 0.505, s * 0.025, { y: s * 0.22, seg: 10, tseg: 3 });
  b.ring(s * 0.42, s * 0.025, { y: s * 0.5, seg: 10, tseg: 3 });
  b.paint(AMBER, { glow: -4 });
  b.save().move(0, 0, s * 0.49).box(s * 0.14, s * 0.12, s * 0.04).restore();
}

function basaltColumns(b, rng, s) {
  const r = s * 0.22, d = r * SQ3;
  b.paint(mix3(BASALT, 0x000000, rng.range(0, 0.4)), { rough: 0.75, metal: 0.1 });
  b.ngon(6, r, s * rng.range(0.4, 1.0), { rot: ROT });
  const n = rng.int(2, 4);
  for (let i = 0; i < n; i++) {
    const a = rng.int(0, 5) * (Math.PI / 3);
    b.save().move(Math.cos(a) * d, 0, Math.sin(a) * d).ngon(6, r * 0.98, s * rng.range(0.1, 0.6), { rot: ROT }).restore();
  }
}

function hive(b, { h, w, rng, spin, capital }) {
  const r = w * 0.6;
  const d = r * SQ3 * 1.03;
  // Basalt plinth with a wax rim.
  b.paint(BASALT, { rough: 0.8 });
  b.ngon(6, d * 1.9, 0.04, { rot: ROT });
  b.paint(DARK, { rough: 0.6 });
  b.ngon(6, d * 1.8, 0.01, { y: 0.04, rot: ROT });
  // The core tower.
  const coreH = h * 0.78;
  cell(b, 0, 0, r, coreH, rng, { roof: 3 });
  // Crown: amber glass drum, a faceted wax dome and a glowing spire.
  let y = coreH + Math.max(0.012, r * 0.12) + 0.004;
  b.paint(AMBER, { rough: 0.15, metal: 0.2, glow: 0.6, win: WIN.BANDS, cw: 0.12, ch: 0.04 });
  b.ngon(6, r * 0.86, h * 0.09, { y, rot: ROT, cap: false });
  y += h * 0.09;
  b.paint(DARK, { rough: 0.5 });
  b.ngon(6, r * 0.94, 0.014, { y, rot: ROT });
  y += 0.014;
  b.paint(capital ? HONEY : WAX[0], { rough: 0.35, metal: capital ? 0.5 : 0 });
  b.save().move(0, y, 0).dome(r * 0.9, { seg: 6, rings: 3, sy: 1.25 }).restore();
  y += r * 0.9 * 1.25;
  b.paint(DARK, { rough: 0.5 });
  b.cyl(0.012, 0.003, h * 0.1, 5, { y: y - 0.01, caps: false });
  b.paint(POLLEN, { glow: 6 });
  b.save().move(0, y + h * 0.1 - 0.01, 0).sphere(0.014, { seg: 6, rings: 3 }).restore();
  // First ring of cells, stepping down around the core.
  for (let k = 0; k < 6; k++) {
    if (!capital && rng.chance(0.18)) continue;
    const a = k * (Math.PI / 3);
    cell(b, Math.cos(a) * d, Math.sin(a) * d, r, h * rng.range(0.24, 0.62), rng, { glass: rng.chance(0.3) });
  }
  // Second ring: low cells nestled between the first.
  const outer = capital ? 6 : rng.int(1, 3);
  const start = rng.int(0, 5);
  for (let k = 0; k < outer; k++) {
    const a = (start + k) * (Math.PI / 3) + Math.PI / 6;
    cell(b, Math.cos(a) * d * SQ3, Math.sin(a) * d * SQ3, r, h * rng.range(0.1, 0.26), rng, { roof: rng.pick([0, 2, 3]) });
  }
  // Pollen motes circle the crown.
  const motes = capital ? 10 : 6;
  for (let i = 0; i < motes; i++) {
    const a = (i / motes) * Math.PI * 2, rr = r * rng.range(1.6, 2.4);
    spin.save().move(0, h * rng.range(0.7, 1.0), 0);
    spin.spinAbout(0, 0, 0, 0, 1, 0, rng.range(0.3, 0.7) * (i % 2 ? 1 : -1));
    spin.paint(POLLEN, { glow: 7 });
    spin.save().move(Math.cos(a) * rr, 0, Math.sin(a) * rr).sphere(0.01, { seg: 5, rings: 3 }).restore();
    spin.restore();
  }
}

function combHouse(b, { h, w, rng }) {
  const r = w * 0.46, d = r * SQ3 * 1.03;
  cell(b, 0, 0, r, h * 0.9, rng, { roof: rng.pick([0, 1, 2]) });
  const n = rng.int(1, 3), start = rng.int(0, 5);
  for (let i = 0; i < n; i++) {
    const a = (start + i * 2) * (Math.PI / 3);
    cell(b, Math.cos(a) * d, Math.sin(a) * d, r, h * rng.range(0.35, 0.7), rng, { glass: rng.chance(0.25) });
  }
}

export default {
  id: 'apis',
  name: { en: 'Apis', de: 'Apis' },
  people: { en: 'The Hive', de: 'Der Schwarm' },
  blurb: {
    en: 'A honey-amber world of basalt columns, giant flowers and glowing resin seas. The Hive builds in comb: clustered hexagonal towers of wax and amber glass.',
    de: 'Eine honiggoldene Welt aus Basaltsäulen, Riesenblumen und leuchtenden Harzmeeren. Der Schwarm baut in Waben: dicht gedrängte Sechseck-Türme aus Wachs und Bernsteinglas.',
  },
  bridge: { en: 'comb lanes & pollen haulers', de: 'Wabenwege & Pollenfrachter' },
  dayLength: 210,
  tilt: 0.26,
  palette: { accent: 0xffb830, window: 0xffb03c, route: 0xffcc58, scaffold: 0x8a6a3a },
  env: { zenith: 0xc89238, horizon: 0xfff0c8, ground: 0x3a2614 },
  terrain: {
    amp: 0.8,
    power: 1.15,
    height(noise, x, y, z) {
      const c = noise.fbm(x * 1.6 + 2, y * 1.6, z * 1.6 - 4, 5, 2.0, 0.5);
      const h = c * 2.1 + 0.1;
      if (h < 0.2) return h;
      // Above the meadows, the land breaks into flat basalt plateaus with sheer steps.
      const t = (h - 0.2) * 4.5, f = Math.floor(t), fr = t - f;
      const k = fr < 0.6 ? 0 : (fr - 0.6) / 0.4;
      return 0.2 + (f + k * k * (3 - 2 * k)) / 4.5 + noise.simplex(x * 9, y * 9, z * 9) * 0.015;
    },
  },
  scatterDensity: 0.9,
  scatterMinH: 0.012,
  scatter(b, { rng, h, x, y, z, noise }) {
    if (h > 0.24) {
      // Up on the plateaus: basalt columns and lumps of resin.
      if (rng.chance(0.6)) basaltColumns(b, rng, rng.range(0.12, 0.3));
      else {
        b.paint(AMBER, { rough: 0.15, glow: 1.2 });
        b.crystal(6, rng.range(0.012, 0.024), rng.range(0.04, 0.1), { rot: ROT });
      }
      return;
    }
    const meadow = noise.simplex(x * 10 + 4, y * 10, z * 10) + 0.25;
    if (meadow < 0 && !rng.chance(0.1)) return;
    if (rng.chance(0.06)) {
      skep(b, rng.range(0.07, 0.11));
      return;
    }
    // Flowers grow in clumps.
    const n = rng.int(1, 3);
    for (let i = 0; i < n; i++) {
      const a = rng.range(0, 6.28), rr = i ? rng.range(0.03, 0.08) : 0;
      b.save().move(Math.cos(a) * rr, 0, Math.sin(a) * rr);
      flower(b, rng, rng.range(0.09, 0.2));
      b.restore();
    }
  },
  surfaceGLSL: /* glsl */`
    // Hex cell around p: x = distance to the cell's edge (0 at the edge, 0.5 at the centre), y = cell hash.
    vec2 apisHex(vec2 p) {
      const vec2 s = vec2(1.0, 1.7320508);
      vec4 hc = floor(vec4(p, p - vec2(0.5, 1.0)) / s.xyxy) + 0.5;
      vec4 hq = vec4(p - hc.xy * s, p - (hc.zw + 0.5) * s);
      vec4 c = dot(hq.xy, hq.xy) < dot(hq.zw, hq.zw) ? vec4(hq.xy, hc.xy) : vec4(hq.zw, hc.zw + 0.5);
      vec2 a = abs(c.xy);
      return vec2(0.5 - max(dot(a, s * 0.5), a.x), hash21(c.zw));
    }
    // Cube-face projection: cheap planar coordinates for the hex pattern.
    vec2 apisFace(vec3 p) {
      vec3 a = abs(p);
      if (a.x > a.y && a.x > a.z) return p.yz / a.x;
      if (a.y > a.z) return p.xz / a.y;
      return p.xy / a.z;
    }
    void surface(vec3 p, float h, float mask, float dist, float day, inout vec3 albedo, inout float rough, inout float metal, inout vec3 emissive, inout vec3 bump) {
      float night = smoothstep(0.3, -0.15, day);
      float n = fbm5(p * 6.0);
      float fine = n3(p * 64.0);
      float hh = h + (n - 0.5) * 0.08;
      vec2 uv = apisFace(p);
      if (hh < 0.0 && mask < 0.6) {
        // Resin seas: deep amber, glowing from below.
        liquid(p, hh, vec3(0.32, 0.09, 0.004), vec3(1.0, 0.56, 0.08), 14.0, albedo, rough, metal, bump);
        rough = 0.14;
        float depth = clamp(-hh / 0.3, 0.0, 1.0);
        float swirl = fbm3(p * 9.0 + vec3(uTime * 0.01, 0.0, uTime * 0.008));
        // Darker veins of older resin swirl through the amber.
        albedo *= 0.72 + swirl * 0.5;
        emissive += vec3(1.0, 0.42, 0.04) * (0.07 + swirl * 0.14 + night * 0.34) * (1.0 - depth * 0.5);
        // Trapped bubbles catch the light near the shore.
        emissive += vec3(1.0, 0.75, 0.3) * pow(n3(p * 70.0 + uTime * 0.03), 9.0) * (0.4 + night) * smoothstep(-0.12, 0.0, hh);
      } else {
        vec2 big = apisHex(uv * 9.0);
        vec2 col = apisHex(uv * 36.0);
        // Golden meadows with darker olive drifts.
        vec3 gold = mix(vec3(0.42, 0.26, 0.04), vec3(0.62, 0.42, 0.08), n);
        vec3 olive = vec3(0.26, 0.22, 0.05);
        vec3 meadow = mix(gold, olive, smoothstep(0.46, 0.6, fbm3(p * 5.0 + 3.0)));
        meadow = mix(vec3(0.72, 0.6, 0.38), meadow, smoothstep(0.004, 0.03, hh));
        // Flower carpets resolve from close by.
        float fl = smoothstep(0.62, 0.7, n3(p * 95.0)) * smoothstep(0.45, 0.6, n3(p * 13.0));
        meadow = mix(meadow, mix(vec3(0.95, 0.85, 0.6), vec3(0.9, 0.4, 0.06), n3(p * 31.0)), fl * 0.6 * smoothstep(40.0, 8.0, dist));
        // Basalt plateaus split into hexagonal columns.
        vec3 basalt = mix(vec3(0.035, 0.027, 0.022), vec3(0.09, 0.066, 0.05), col.y * 0.7 + big.y * 0.3);
        float seam = smoothstep(0.045, 0.0, col.x) * smoothstep(90.0, 15.0, dist);
        float bigSeam = smoothstep(0.02, 0.0, big.x);
        basalt *= 1.0 - seam * 0.6 - bigSeam * 0.4;
        float rock = smoothstep(0.22, 0.3, hh + (fine - 0.5) * 0.06);
        albedo = mix(meadow, basalt, rock);
        albedo *= 0.84 + fine * 0.32;
        rough = mix(0.88, 0.62, rock);
        // Resin seeps up between the columns and glows after dark.
        float town = smoothstep(0.3, 0.9, mask);
        float seep = step(0.62, big.y) * rock * (1.0 - town);
        emissive += vec3(1.0, 0.45, 0.05) * (seam * 0.6 + bigSeam) * seep * (0.03 + night * 0.7);
        bump += bumpOf(p, 44.0, 0.09) * smoothstep(90.0, 10.0, dist);
        bump += bumpOf(p, 260.0, 0.12) * smoothstep(14.0, 2.0, dist);
        // Town ground: honeycomb paving of wax slabs, its grout lit with honey after dark.
        vec2 tile = apisHex(uv * 70.0);
        vec3 pave = mix(vec3(0.36, 0.22, 0.07), vec3(0.5, 0.33, 0.1), tile.y) * (0.9 + fine * 0.2);
        float grout = smoothstep(0.035, 0.0, tile.x) * smoothstep(60.0, 8.0, dist);
        pave = mix(pave, vec3(0.08, 0.045, 0.02), grout * 0.8);
        albedo = mix(albedo, pave, town);
        rough = mix(rough, 0.55, town);
        emissive += vec3(1.0, 0.5, 0.06) * grout * town * night * 0.45;
      }
    }`,
  atmosphere: {
    thickness: 1.22,
    rayleigh: [2.6, 1.85, 0.8],
    mie: [1.0, 0.82, 0.45],
    g: 0.76,
    intensity: 7.6,
    haze: 0xffc458,
    night: [0.016, 0.01, 0.004],
    fog: { density: 0.016, day: 0xe6b866, dusk: 0xe0782c, night: 0x140a04 },
  },
  clouds: { cover: 0.6, scale: 5.0, opacity: 0.72, color: 0xfff2d4, shadow: 0x7a5a2c, dusk: 0xff9a40 },
  transit: { road: { en: 'Comb lane', de: 'Wabenweg' }, air: { en: 'Pollen hauler', de: 'Pollenfrachter' } },
  map: { title: { en: 'Comb chart', de: 'Wabenkarte' }, paper: '#f6e7c0', edge: '#c8963a', ink: '#3a2410', soft: '#8a6a3a', sea: ['#d8902c', '#f0c070'], land: ['#f4e6b8', '#c8a060'], contour: 'rgba(120,70,10,0.22)', grid: 'rgba(120,70,10,0.1)', road: '#e8a018', casing: '#4a2c0c', air: '#7a4a14', traffic: '#2a1806', accent: '#d88a10', lines: 'honey', glyph: 'hex', font: 'ui' },
  layout: 'grid',
  block: 0.46,
  street: { color: 0x5a3a14, rough: 0.6, width: 0.05, glow: -0.5 },
  // No lots: the honeycomb paving of the town ground shows between the cells.
  lot: null,
  road: {
    width: 0.17,
    laneOffset: 0.22,
    meander: 0.3,
    lampEvery: 0.55,
    lampChance: 0.75,
    glsl: /* glsl */`
      vec2 apisRoadHex(vec2 p) {
        const vec2 s = vec2(1.0, 1.7320508);
        vec4 hc = floor(vec4(p, p - vec2(0.5, 1.0)) / s.xyxy) + 0.5;
        vec4 hq = vec4(p - hc.xy * s, p - (hc.zw + 0.5) * s);
        vec4 c = dot(hq.xy, hq.xy) < dot(hq.zw, hq.zw) ? vec4(hq.xy, hc.xy) : vec4(hq.zw, hc.zw + 0.5);
        vec2 a = abs(c.xy);
        return vec2(0.5 - max(dot(a, s * 0.5), a.x), hash21(c.zw));
      }
      void roadSurface(float x, float s, float night, inout vec3 albedo, inout float rough, inout float metal, inout vec3 emissive) {
        // Hexagonal wax tiles with dark grout.
        vec2 t = apisRoadHex(vec2(x * 3.4, s * 40.0));
        albedo = mix(vec3(0.36, 0.22, 0.07), vec3(0.5, 0.33, 0.1), t.y);
        albedo *= 1.0 - smoothstep(0.07, 0.0, t.x) * 0.75;
        rough = 0.5;
        // Black and honey hazard stripes along both kerbs.
        float kerb = smoothstep(0.8, 0.86, abs(x));
        float stripe = step(0.5, fract(s * 9.0 + x * 0.6));
        albedo = mix(albedo, mix(vec3(0.03, 0.02, 0.012), vec3(0.8, 0.5, 0.08), stripe), kerb);
        // A seam of glowing honey down the middle.
        float seam = smoothstep(0.07, 0.02, abs(x));
        float flow = 0.6 + 0.4 * sin(s * 7.0 - uTime * 1.6);
        emissive += vec3(1.0, 0.55, 0.08) * seam * flow * (0.15 + night * 1.2);
        emissive += vec3(1.0, 0.6, 0.15) * kerb * stripe * night * 0.25;
      }`,
  },
  plaza(b, { r }) {
    // A hexagonal court of honeycomb tiles.
    b.paint(BASALT, { rough: 0.8 });
    b.save().rotY(ROT).disc(r, { seg: 6 }).restore();
    b.paint(AMBER, { glow: 1.2, rough: 0.3 });
    b.save().rotY(ROT).disc(r * 0.97, { y: 0.003, seg: 6, inner: r * 0.92 }).restore();
    const t = r * 0.15, d = t * SQ3 * 1.08;
    for (let ring = 0; ring < 2; ring++) {
      const count = ring ? 12 : 6;
      for (let i = 0; i < count; i++) {
        let x, z;
        if (ring === 0) {
          const a = (i / 6) * Math.PI * 2;
          x = Math.cos(a) * d * 2.6; z = Math.sin(a) * d * 2.6;
        } else {
          const a = (i / 12) * Math.PI * 2 + Math.PI / 12;
          x = Math.cos(a) * d * 3.8; z = Math.sin(a) * d * 3.8;
        }
        b.paint(i % 2 ? WAX[1] : WAX[3], { rough: 0.5 });
        b.save().move(x, 0, z).ngon(6, t, 0.006, { rot: ROT }).restore();
      }
    }
  },
  landmark: hive,
  section: combHouse,
  filler(b, { s, rng, tier }) {
    if (tier > 0.42) {
      // Downtown: three cells grown together, taller toward the centre.
      const r = s * 0.42, d = r * SQ3 * 1.03;
      const pts = [[0, 0], [d, 0], [d * 0.5, d * 0.866]];
      for (const [x, z] of pts) {
        const h = s * rng.range(1.0, 2.1) * (1 + tier * 1.3);
        cell(b, x - d * 0.5, z - d * 0.29, r, h, rng, { glass: rng.chance(0.2) });
      }
      return;
    }
    const roll = rng.next();
    if (roll < 0.5) {
      // A low wax dwelling, sometimes with a twin.
      const count = rng.chance(0.4) ? 2 : 1;
      const r = s * 0.5;
      for (let i = 0; i < count; i++) {
        const x = count === 2 ? (i - 0.5) * r * SQ3 * 1.03 : 0;
        cell(b, x, 0, r, s * rng.range(0.5, 0.9) * (1 + tier), rng, { roof: rng.pick([0, 0, 1, 2]) });
      }
    } else if (roll < 0.78) {
      for (let i = 0; i < 3; i++) {
        const a = rng.range(0, 6.28), rr = rng.range(0, s * 0.5);
        b.save().move(Math.cos(a) * rr, 0, Math.sin(a) * rr);
        flower(b, rng, s * rng.range(0.9, 1.5));
        b.restore();
      }
    } else {
      skep(b, s * rng.range(0.8, 1.1));
    }
  },
  roadside(b, { rng }) {
    if (rng.chance(0.3)) {
      flower(b, rng, rng.range(0.08, 0.13));
      return;
    }
    // Hex lantern on a dark post.
    b.paint(DARK, { rough: 0.5, metal: 0.3 });
    b.cyl(0.004, 0.005, 0.085, 4, { caps: false, smooth: false });
    b.paint(AMBER, { rough: 0.2, glow: -7 });
    b.ngon(6, 0.011, 0.016, { y: 0.075, rot: ROT });
    b.paint(DARK, { rough: 0.5 });
    b.ngon(6, 0.013, 0.004, { y: 0.091, top: 0.4, rot: ROT });
  },
  vehicles: [
    {
      weight: 2,
      speed: 0.4,
      y: 0.03,
      shadow: false,
      build(b) {
        // Pod-drone: a striped capsule on a blur of wings.
        stripedPod(b, 0.07, 0.016);
        wings(b, 0.03, 0.022, 0.012, -0.004);
        b.paint(0xfff2c8, { glow: -8 });
        b.save().move(0, 0.002, 0.035).sphere(0.005, { seg: 5, rings: 3 }).restore();
      },
    },
    {
      weight: 1,
      speed: 0.3,
      y: 0.036,
      shadow: false,
      build(b) {
        // Cargo drone carrying a sealed comb cell.
        stripedPod(b, 0.06, 0.014, { bands: 4 });
        wings(b, 0.026, 0.02, 0.011, -0.004);
        b.paint(AMBER, { rough: 0.2, glow: 0.7 });
        b.ngon(6, 0.014, 0.018, { y: -0.034, rot: ROT });
        b.paint(DARK, { rough: 0.5 });
        b.ngon(6, 0.0155, 0.003, { y: -0.016, rot: ROT });
      },
    },
  ],
  flyer: {
    speed: 0.55,
    shadow: false,
    build(b) {
      // Pollen hauler: a long striped body, two pairs of wings, a rack of honey cells below.
      stripedPod(b, 0.2, 0.032, { seg: 8, bands: 7 });
      wings(b, 0.13, 0.06, 0.02, 0.03, 0.22);
      wings(b, 0.09, 0.04, 0.018, -0.04, 0.3);
      b.paint(AMBER, { rough: 0.2, glow: 0.9 });
      for (let i = -1; i <= 1; i++) {
        b.save().move(0, 0, i * 0.034).ngon(6, 0.016, 0.026, { y: -0.058, rot: ROT }).restore();
      }
      b.paint(0xfff2c8, { glow: 6 });
      b.save().move(0, 0.004, 0.1).sphere(0.008, { seg: 5, rings: 3 }).restore();
    },
  },
  walker: {
    speed: 0.07,
    lift: 0.012,
    bob: 0.006,
    bobRate: 9,
    colors: [0xffb830, 0xf0a020, 0xffd060, 0xe89028],
    build(b) {
      // Little round worker with a dark stripe and a dark head.
      b.paint(0xffffff, { rough: 0.5 });
      b.sphere(0.0085, { seg: 7, rings: 4 });
      b.paint(DARK, { rough: 0.5 });
      b.cyl(0.0087, 0.0087, 0.003, 7, { y: 0.0075, caps: false });
      b.save().move(0, 0.0105, 0.0085).sphere(0.0045, { seg: 5, rings: 3 }).restore();
      b.paint(0xfff6dc, { rough: 0.2, glow: 0.3 });
      b.save().move(0, 0.016, -0.003).box(0.018, 0.0008, 0.006).restore();
    },
  },
  ship(b) {
    stripedPod(b, 2.4, 0.38, { seg: 10, bands: 7 });
    wings(b, 1.5, 0.7, 0.24, 0.3, 0.2);
    wings(b, 1.0, 0.45, 0.22, -0.45, 0.28);
    b.paint(AMBER, { glow: 4 });
    b.save().move(0, 0, -1.2).sphere(0.16, { y: -0.16, seg: 7, rings: 4 }).restore();
  },
};
