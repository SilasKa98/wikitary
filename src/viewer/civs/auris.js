// AURIS — the Sunweavers. Desert nomads turned astronomers on a ringed golden world:
// adobe domes and wind-towers, fields of turning mirrors, sail-sleds crossing the dunes.
import { WIN, mix3 } from '../engine/builder.js';

const ADOBE = [0xc99a64, 0xd4aa74, 0xb98a58, 0xdcb684, 0xa97a4c];
const TERRA = [0xa8583a, 0xb86a44, 0x8c4a32];
const TURQ = 0x2fa8a0, GOLD = 0xe8b84a, SAIL = 0xf0e4c8;

function mirrorField(spin, r, count, rng) {
  for (let i = 0; i < count; i++) {
    const a = (i / count) * Math.PI * 2;
    spin.save().move(Math.cos(a) * r, 0, Math.sin(a) * r);
    spin.paint(0x7c6444, { rough: 0.7 });
    spin.spinAbout(0, 0, 0, 0, 1, 0, 0);
    spin.cyl(0.006, 0.006, 0.06, 4, { caps: false, smooth: false });
    spin.save().move(0, 0.065, 0);
    spin.spinAbout(0, 0, 0, 0, 1, 0, rng.range(0.14, 0.26));
    spin.rotX(-0.8);
    spin.paint(0xe4eef4, { rough: 0.04, metal: 1 });
    spin.box(0.09, 0.004, 0.09);
    spin.restore();
    spin.restore();
  }
}

function sunTemple(b, { h, w, rng, spin, capital }) {
  const adobe = rng.pick(ADOBE);
  const W = w * 1.7;
  // Broad terraced base.
  b.paint(mix3(adobe, 0x000000, 0.14), { rough: 0.95, win: WIN.SPOTS, cw: 0.1, ch: 0.1 });
  b.box(W * 1.4, h * 0.14, W * 1.4, { top: 0.94 });
  b.paint(adobe, { rough: 0.94, win: WIN.SPOTS, cw: 0.085, ch: 0.095 });
  b.box(W, h * 0.2, W, { y: h * 0.14, top: 0.92 });
  // Colonnade of wind-towers at the corners.
  for (const [sx, sz] of [[1, 1], [-1, 1], [1, -1], [-1, -1]]) {
    b.save().move((sx * W) / 2, h * 0.14, (sz * W) / 2);
    b.paint(mix3(adobe, 0xffffff, 0.14), { rough: 0.9, win: WIN.STRIPES, cw: 0.04, ch: 0.2 });
    b.box(w * 0.26, h * 0.46, w * 0.26, { top: 0.84 });
    b.paint(TURQ, { rough: 0.35, metal: 0.25 });
    b.save().move(0, h * 0.46, 0).dome(w * 0.12, { seg: 10, rings: 4, sy: 1.35 }).restore();
    b.restore();
  }
  // Drum and the great ribbed dome.
  const dr = W * 0.42;
  b.paint(adobe, { rough: 0.9, win: WIN.SPOTS, cw: 0.07, ch: 0.08 });
  b.cyl(dr, dr * 0.96, h * 0.16, 24, { y: h * 0.34, caps: false });
  b.paint(capital ? GOLD : TURQ, { rough: capital ? 0.25 : 0.32, metal: capital ? 1 : 0.3 });
  const y0 = h * 0.5;
  b.save().move(0, y0, 0).dome(dr * 0.98, { seg: 24, rings: 8, sy: Math.min(1.25, (h * 0.44) / dr) }).restore();
  b.paint(GOLD, { rough: 0.25, metal: 1 });
  b.save().move(0, y0 + Math.min(dr * 1.22, h * 0.43), 0).cyl(0.012, 0.002, h * 0.1, 6, { caps: false }).restore();
  // The solar array on the roof tracks the sun.
  mirrorField(spin, W * 0.74, capital ? 12 : 8, rng);
}

export default {
  id: 'auris',
  name: { en: 'Auris', de: 'Auris' },
  people: { en: 'The Sunweavers', de: 'Die Sonnenweber' },
  blurb: {
    en: 'Desert nomads turned astronomers under a golden ring. Adobe domes and wind-towers, fields of turning mirrors, sail-sleds on the dunes.',
    de: 'Wüstennomaden, die unter einem goldenen Ring zu Astronomen wurden. Lehmkuppeln und Windtürme, Felder drehender Spiegel, Segelschlitten auf den Dünen.',
  },
  bridge: { en: 'caravan tracks & solar kites', de: 'Karawanenpfade & Sonnendrachen' },
  dayLength: 210,
  tilt: 0.34,
  rings: { inner: 1.42, outer: 2.2, colorA: 0xf0d8a8, colorB: 0x9a7650 },
  palette: { accent: 0xffc76a, window: 0xffb45e, route: 0xffcf7e, scaffold: 0x9a8058 },
  env: { zenith: 0x4e88c8, horizon: 0xf2d8ac, ground: 0x8c6a42 },
  terrain: {
    amp: 0.75,
    power: 1.1,
    height(noise, x, y, z) {
      const base = noise.fbm(x * 1.3, y * 1.3, z * 1.3 + 2, 4, 2.0, 0.5);
      const dune = Math.abs(noise.simplex(x * 7 + base * 2, y * 2.4, z * 7));
      const mesa = Math.min(1, Math.max(0, (noise.fbm(x * 2.5 + 7, y * 2.5, z * 2.5, 3) - 0.16) * 6));
      return 0.14 + base * 0.34 + dune * 0.18 + mesa * mesa * 0.75;
    },
  },
  scatterDensity: 0.2,
  scatterMinH: 0.04,
  scatter(b, { rng, h, spin }) {
    const roll = rng.next();
    if (h > 0.62 && roll < 0.5) {
      const s = rng.range(0.1, 0.2);
      b.paint(rng.pick(TERRA), { rough: 0.95 });
      b.ngon(rng.int(5, 7), s, s * rng.range(0.7, 1.8), { top: 0.6, rot: rng.range(0, 3) });
    } else if (roll < 0.4) {
      const s = rng.range(0.04, 0.09);
      b.paint(rng.pick(TERRA), { rough: 0.95 });
      b.sphere(s, { seg: 5, rings: 3, sy: 0.62 });
    } else if (roll < 0.6) {
      // Sun-palm.
      const t = rng.range(0.13, 0.23);
      b.paint(0x7a5c3c, { rough: 0.9 });
      b.tube([[0, 0, 0], [0.012, t * 0.6, 0], [0.024, t, 0]], 0.0065, { seg: 4, taper: 0.7 });
      b.paint(0x4c8a48, { rough: 0.7 });
      for (let i = 0; i < 6; i++) {
        const a = (i / 6) * Math.PI * 2;
        b.tube([[0.024, t, 0], [0.024 + Math.cos(a) * 0.04, t + 0.012, Math.sin(a) * 0.04], [0.024 + Math.cos(a) * 0.08, t - 0.03, Math.sin(a) * 0.08]], 0.005, { seg: 3, taper: 0.2 });
      }
    } else if (roll < 0.68) {
      // Wind-catcher.
      b.paint(0xc99a64, { rough: 0.9 });
      b.cyl(0.012, 0.008, 0.24, 5, { caps: false, smooth: false });
      spin.save().move(0, 0.24, 0.01);
      spin.spinAbout(0, 0, 0, 0, 0, 1, 1.0);
      spin.paint(SAIL, { rough: 0.7 });
      for (let i = 0; i < 4; i++) {
        spin.save().rotZ((i / 4) * Math.PI * 2).box(0.016, 0.1, 0.002).restore();
      }
      spin.restore();
    }
  },
  surfaceGLSL: /* glsl */`
    void surface(vec3 p, float h, float mask, float dist, float day, inout vec3 albedo, inout float rough, inout float metal, inout vec3 emissive, inout vec3 bump) {
      float n = fbm5(p * 5.0);
      vec3 sand = mix(vec3(0.62, 0.42, 0.2), vec3(0.78, 0.58, 0.3), n);
      vec3 pale = vec3(0.82, 0.68, 0.46);
      vec3 rust = mix(vec3(0.4, 0.17, 0.09), vec3(0.54, 0.26, 0.13), n3(p * vec3(14.0, 66.0, 14.0)));
      float strat = smoothstep(0.38, 0.6, h + (n - 0.5) * 0.25);
      albedo = mix(mix(sand, pale, smoothstep(0.4, 0.62, fbm3(p * 9.0))), rust, strat);
      rough = 0.96;
      // Wind ripples, running across every dune.
      float rip = sin((p.x * 86.0 + p.z * 60.0 + p.y * 40.0) + n * 34.0);
      float rip2 = sin((p.x * 300.0 - p.z * 240.0) + n * 60.0);
      vec3 grad = normalize(vec3(86.0, 40.0, 60.0));
      bump += grad * rip * 0.05 * smoothstep(60.0, 6.0, dist) * (1.0 - strat);
      bump += vec3(0.76, 0.0, -0.64) * rip2 * 0.05 * smoothstep(9.0, 1.0, dist) * (1.0 - strat);
      bump += bumpOf(p, 36.0, 0.1) * strat;
      // Oases.
      float oasis = smoothstep(0.08, 0.015, h + (n - 0.5) * 0.1);
      albedo = mix(albedo, mix(vec3(0.06, 0.25, 0.14), vec3(0.03, 0.22, 0.3), smoothstep(0.03, 0.0, h)), oasis);
      rough = mix(rough, 0.35, oasis);
      vec3 yard = mix(vec3(0.6, 0.43, 0.25), vec3(0.72, 0.56, 0.36), n3(p * 120.0));
      albedo = mix(albedo, yard, smoothstep(0.3, 0.9, mask));
    }`,
  atmosphere: {
    thickness: 1.2,
    rayleigh: [1.5, 2.0, 3.5],
    mie: [1.1, 0.9, 0.6],
    g: 0.78,
    intensity: 7.5,
    haze: 0xffcf9a,
    fog: { density: 0.014, day: 0xe8cda0, dusk: 0xe88a4a, night: 0x0c0a14 },
  },
  clouds: { cover: 0.64, scale: 3.2, opacity: 0.42, color: 0xfff0d8, shadow: 0xa08868, dusk: 0xff9a56, banded: 1, speed: 2.4, groundShadow: false },
  transit: { road: { en: 'Caravan track', de: 'Karawanenpfad' }, air: { en: 'Solar kite', de: 'Sonnendrachen' } },
  map: { title: { en: 'Sun scroll', de: 'Sonnenrolle' }, paper: '#e9cf95', edge: '#9a7433', ink: '#4a2f10', soft: '#8a6a38', sea: ['#b58a45', '#d0ab66'], land: ['#f0deb0', '#c79a55'], contour: 'rgba(120,80,30,0.3)', grid: 'rgba(120,80,30,0.14)', road: '#8a3f12', casing: '#e9cf95', air: '#b4630f', traffic: '#3a2208', accent: '#a8480e', lines: 'caravan', glyph: 'sun', font: 'serif' },
  layout: 'rings',
  block: 0.48,
  street: { color: 0xa98a5c, rough: 0.9, width: 0.05 },
  lot: [0xb89464, 0xc4a070, 0xa88654],
  road: {
    width: 0.2,
    laneOffset: 0.22,
    meander: 0.6,
    lampEvery: 0.8,
    lampChance: 0.6,
    glsl: /* glsl */`
      void roadSurface(float x, float s, float night, inout vec3 albedo, inout float rough, inout float metal, inout vec3 emissive) {
        float n = n3(vRP * 400.0);
        albedo = mix(vec3(0.5, 0.36, 0.22), vec3(0.62, 0.46, 0.3), n);
        rough = 0.92;
        float kerb = smoothstep(0.84, 0.9, abs(x));
        albedo = mix(albedo, vec3(0.32, 0.22, 0.14), kerb);
        float rut = smoothstep(0.1, 0.0, abs(abs(x) - 0.45));
        albedo *= 1.0 - rut * 0.3;
        float studs = step(0.7, fract(s * 1.6)) * smoothstep(0.08, 0.0, abs(abs(x) - 0.96));
        emissive += vec3(1.0, 0.72, 0.3) * studs * night * 1.8;
      }`,
  },
  plaza(b, { r }) {
    b.paint(0xc29c6c, { rough: 0.9 });
    b.disc(r, { seg: 48 });
    b.paint(TURQ, { rough: 0.3, metal: 0.3 });
    b.disc(r * 0.97, { y: 0.003, seg: 48, inner: r * 0.91 });
    b.paint(0xa97a4c, { rough: 0.9 });
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2;
      b.save().rotY(a).move(0, 0.003, r * 0.72).box(0.026, 0.002, r * 0.28).restore();
    }
  },
  landmark: sunTemple,
  section(b, { h, w, rng }) {
    const adobe = rng.pick(ADOBE);
    b.paint(adobe, { rough: 0.94, win: WIN.SPOTS, cw: 0.06, ch: 0.075 });
    b.box(w * 1.15, h * 0.72, w * 1.15, { top: 0.92 });
    b.paint(rng.chance(0.5) ? TURQ : rng.pick(TERRA), { rough: 0.4, metal: 0.15 });
    b.save().move(0, h * 0.72, 0).dome(w * 0.48, { seg: 14, rings: 5, sy: 0.9 }).restore();
  },
  filler(b, { s, rng, tier }) {
    const adobe = rng.pick(ADOBE);
    if (rng.chance(0.2)) {
      // Wind-tower.
      const h = s * rng.range(2.4, 3.8) * (1 + tier * 0.9);
      b.paint(adobe, { rough: 0.92, win: WIN.STRIPES, cw: 0.04, ch: 0.2 });
      b.box(s * 0.6, h, s * 0.6, { top: 0.72 });
      b.paint(TURQ, { rough: 0.35, metal: 0.25 });
      b.save().move(0, h, 0).dome(s * 0.22, { seg: 8, rings: 3, sy: 1.3 }).restore();
      return;
    }
    if (rng.chance(0.25)) {
      // Sail-canopy market.
      b.paint(0x7c6444, { rough: 0.8 });
      for (const [x, z] of [[1, 1], [-1, 1], [1, -1], [-1, -1]]) {
        b.save().move((x * s) / 1.5, 0, (z * s) / 1.5).cyl(0.005, 0.005, s * 0.9, 4, { caps: false, smooth: false }).restore();
      }
      b.paint(rng.pick([SAIL, 0xd8583a, 0x2fa8a0, GOLD]), { rough: 0.7 });
      b.box(s * 1.6, 0.003, s * 1.6, { y: s * 0.86, top: 0.5 });
      return;
    }
    const h = s * rng.range(0.7, 1.4) * (1 + tier * 1.1);
    b.paint(adobe, { rough: 0.96, win: WIN.SPOTS, cw: 0.05, ch: 0.065 });
    b.box(s * 1.5, h, s * 1.5, { top: 0.93 });
    b.paint(mix3(adobe, 0xffffff, 0.18), { rough: 0.9 });
    if (rng.chance(0.55)) b.save().move(0, h, 0).dome(s * 0.6, { seg: 10, rings: 4, sy: 0.76 }).restore();
    else b.box(s * 1.55, 0.016, s * 1.55, { y: h });
  },
  roadside(b, { rng }) {
    if (rng.chance(0.5)) {
      b.paint(0x8c6a42, { rough: 0.9 });
      b.cyl(0.009, 0.006, 0.09, 5, { caps: false, smooth: false });
      b.paint(0xffb45e, { glow: -7 });
      b.save().move(0, 0.09, 0).sphere(0.011, { seg: 6, rings: 4 }).restore();
    } else {
      b.paint(rng.pick(TERRA), { rough: 0.95 });
      b.sphere(rng.range(0.012, 0.03), { seg: 5, rings: 3, sy: 0.7 });
    }
  },
  vehicles: [
    {
      weight: 2,
      speed: 0.32,
      y: 0.022,
      build(b) {
        // Hover-sled with a triangular sail.
        b.paint(0x8c6a42, { rough: 0.7 });
        b.box(0.05, 0.012, 0.14, { top: 0.72 });
        b.paint(0x5c4630, { rough: 0.7 });
        b.cyl(0.0025, 0.0025, 0.09, 4, { y: 0.01, caps: false, smooth: false });
        b.paint(SAIL, { rough: 0.8 });
        b.quad([0, 0.098, 0], [0, 0.02, 0.06], [0, 0.02, 0.06], [0, 0.02, -0.03]);
        b.quad([0, 0.02, -0.03], [0, 0.02, 0.06], [0, 0.02, 0.06], [0, 0.098, 0]);
        b.paint(0xffb45e, { glow: -6 });
        b.save().move(0, 0.006, 0.068).box(0.02, 0.006, 0.002).restore();
      },
    },
    {
      weight: 1,
      speed: 0.22,
      y: 0.02,
      build(b) {
        // Caravan wagon, canvas-topped.
        b.paint(0x7c5c3a, { rough: 0.8 });
        b.box(0.05, 0.022, 0.13, {});
        b.paint(SAIL, { rough: 0.8 });
        b.save().rotX(Math.PI / 2).cyl(0.024, 0.024, 0.11, 8, { y: -0.055 }).restore();
      },
    },
  ],
  flyer: {
    speed: 0.62,
    shadow: false,
    build(b) {
      // Solar kite: enormous, gossamer, slow.
      b.paint(0x201810, { rough: 0.4, metal: 0.6 });
      b.box(0.012, 0.008, 0.11);
      b.paint(GOLD, { rough: 0.2, metal: 0.9 });
      const wing = [[0.2, -0.05], [0.02, 0.09], [-0.02, 0.09], [-0.2, -0.05], [0, 0.01]];
      b.save().move(0, 0.008, 0).prism(wing, 0.003).restore();
    },
  },
  walker: {
    speed: 0.075,
    lift: 0.004,
    bob: 0.002,
    bobRate: 7,
    colors: [0xe8dcc0, 0x2fa8a0, 0xc25a3a, 0x3a3a5a],
    build(b) {
      // Robed figure.
      b.paint(0xffffff, { rough: 0.9 });
      b.cone(0.009, 0.026, 6, { smooth: false });
      b.paint(0x8c5c3a, { rough: 0.7 });
      b.save().move(0, 0.022, 0).sphere(0.0045, { seg: 5, rings: 3 }).restore();
    },
  },
  ship(b) {
    b.paint(0x8c6a42, { rough: 0.5, metal: 0.4 });
    b.box(0.34, 0.2, 1.6, { y: -0.1, top: 0.6 });
    b.paint(GOLD, { rough: 0.2, metal: 1 });
    b.prism([[1.5, -0.3], [0.05, 0.9], [-0.05, 0.9], [-1.5, -0.3], [0, 0.1]], 0.02);
    b.paint(0xffc76a, { glow: 4.5 });
    b.save().move(0, 0, -0.85).box(0.26, 0.12, 0.05).restore();
  },
};
