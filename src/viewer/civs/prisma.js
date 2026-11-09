// PRISMA — the Lattice. Their cities are grown, not built: crystal spires on a glacier world
// where light itself is the road and auroras curtain the poles.
import { WIN, mix3 } from '../engine/builder.js';

const ICE = [0x8cb4dc, 0x7ca4d4, 0xa0c4e4, 0x7090cc];
const AMETHYST = [0x8c70d8, 0x7a5cd0, 0x9c84e0];
const GLOW = 0x8fe6ff, PINK = 0xffa6ec;

function spireCluster(b, { h, w, rng, spin, capital }) {
  const color = rng.pick(ICE);
  const n = rng.pick([5, 6, 6, 8]);
  b.paint(mix3(color, 0x304a70, 0.4), { rough: 0.3, metal: 0.25 });
  b.ngon(n, w * 1.36, 0.05, { top: 0.82 });
  // The great central shard with bands of inner light.
  b.paint(color, { rough: 0.08, metal: 0.55, win: WIN.CRYSTAL, cw: 0.07, ch: 0.16 });
  b.crystal(n, w * 0.72, h, { y: 0.04, tip: 0.24, rot: rng.range(0, 1) });
  // Attendant shards, leaning outward.
  const attendants = capital ? 8 : rng.int(4, 6);
  for (let i = 0; i < attendants; i++) {
    const a = (i / attendants) * Math.PI * 2 + rng.range(-0.2, 0.2);
    const scale = rng.range(0.32, 0.62);
    b.save().move(Math.cos(a) * w * 0.86, 0.02, Math.sin(a) * w * 0.86);
    b.rotZ(Math.cos(a) * -0.16).rotX(Math.sin(a) * 0.16);
    b.paint(i % 3 === 0 ? rng.pick(AMETHYST) : mix3(color, 0xffffff, 0.2), { rough: 0.08, metal: 0.5, win: WIN.CRYSTAL, cw: 0.05, ch: 0.12 });
    b.crystal(n, w * 0.3 * scale * 1.5, h * scale, { rot: rng.range(0, 2) });
    b.restore();
  }
  // A floating diamond turning above the tip.
  spin.save().move(0, h * 1.12, 0);
  spin.spinAbout(0, 0, 0, 0, 1, 0, capital ? 1.1 : 0.7);
  spin.paint(capital ? PINK : GLOW, { glow: 2.6 });
  const s = capital ? 0.13 : 0.08;
  spin.ngon(4, s, s * 1.3, { top: 0.001, cap: false });
  spin.save().rotX(Math.PI);
  spin.ngon(4, s, s * 1.3, { top: 0.001, cap: false });
  spin.restore();
  spin.restore();
}

function shard(b, { h, w, rng, spin }) {
  const col = rng.chance(0.3) ? rng.pick(AMETHYST) : rng.pick(ICE);
  b.paint(col, { rough: 0.1, metal: 0.45, win: WIN.CRYSTAL, cw: 0.05, ch: 0.12 });
  b.crystal(6, w * 0.5, h, { rot: rng.range(0, 1) });
  b.save().move(w * 0.42, 0, w * 0.1).rotZ(-0.16);
  b.crystal(5, w * 0.24, h * 0.55, {});
  b.restore();
  spin.save().move(0, h * 1.12, 0);
  spin.spinAbout(0, 0, 0, 0, 1, 0, 1.3);
  spin.paint(GLOW, { glow: 4 });
  spin.ngon(4, 0.022, 0.03, { top: 0.001, cap: false });
  spin.restore();
}

export default {
  id: 'prisma',
  name: { en: 'Prisma', de: 'Prisma' },
  people: { en: 'The Lattice', de: 'Das Gitter' },
  blurb: {
    en: 'A glacier world whose inhabitants are grown, not born. Their spires are crystal; their roads are ribbons of pure light above the ice.',
    de: 'Eine Gletscherwelt, deren Bewohner gewachsen sind, nicht geboren. Ihre Türme sind Kristall, ihre Straßen Bänder aus reinem Licht über dem Eis.',
  },
  bridge: { en: 'ribbons of light', de: 'Bänder aus Licht' },
  dayLength: 190,
  tilt: 0.42,
  palette: { accent: 0xa8e8ff, window: 0x9fe8ff, route: 0xc4b4ff, scaffold: 0x8fa8c8 },
  env: { zenith: 0x5a84d8, horizon: 0xf4e8ff, ground: 0xa8c4e4 },
  terrain: {
    amp: 1.2,
    power: 1.5,
    height(noise, x, y, z) {
      const c = noise.fbm(x * 1.4 + 9, y * 1.4, z * 1.4, 5, 2.05, 0.5);
      const r = noise.ridged(x * 2.2, y * 2.2 + 3, z * 2.2, 4, 2.1, 0.5);
      return c * 1.4 + r * r * 0.9 + 0.14;
    },
  },
  scatterDensity: 0.55,
  scatterMinH: 0.0,
  scatter(b, { rng, h }) {
    const s = rng.range(0.05, 0.16);
    const col = rng.chance(0.25) ? rng.pick(AMETHYST) : rng.pick(ICE);
    b.paint(col, { rough: 0.1, metal: 0.4 });
    const count = h > 0.3 ? rng.int(2, 4) : rng.int(1, 2);
    for (let i = 0; i < count; i++) {
      b.save().move(rng.range(-s, s) * 0.8, 0, rng.range(-s, s) * 0.8).rotZ(rng.range(-0.3, 0.3)).rotX(rng.range(-0.3, 0.3));
      b.crystal(rng.int(4, 6), s * rng.range(0.25, 0.5), s * rng.range(1.2, 3.4), { rot: rng.range(0, 3) });
      b.restore();
    }
  },
  surfaceGLSL: /* glsl */`
    void surface(vec3 p, float h, float mask, float dist, float day, inout vec3 albedo, inout float rough, inout float metal, inout vec3 emissive, inout vec3 bump) {
      float n = fbm5(p * 6.0);
      float fine = n3(p * 54.0);
      float hh = h + (n - 0.5) * 0.14;
      vec3 snow = vec3(0.5, 0.56, 0.68);
      vec3 ice = mix(vec3(0.16, 0.34, 0.54), vec3(0.3, 0.48, 0.66), fine);
      vec3 violet = vec3(0.33, 0.24, 0.62);
      float flow = fbm3(p * vec3(5.0, 16.0, 5.0));
      albedo = mix(ice, snow, smoothstep(0.42, 0.56, flow + hh * 0.2));
      // Crevasses cut deep and violet through the glacier.
      float c = 1.0 - abs(n3(p * 15.0 + 3.0) * 2.0 - 1.0);
      float crevasse = smoothstep(0.9, 0.99, c) * smoothstep(0.42, 0.55, n3(p * 5.0));
      albedo = mix(albedo, violet * 0.7, crevasse);
      emissive += vec3(0.3, 0.45, 1.0) * crevasse * 0.3 * smoothstep(0.3, -0.2, day);
      rough = mix(0.4, 0.75, smoothstep(0.42, 0.6, flow));
      metal = 0.0;
      bump += bumpOf(p, 28.0, 0.1);
      bump += bumpOf(p, 200.0, 0.05) * smoothstep(16.0, 2.0, dist);
      if (hh < 0.0 && mask < 0.6) {
        // Frozen sea, clear as glass, with pressure cracks.
        float d = clamp(-hh / 0.5, 0.0, 1.0);
        albedo = mix(vec3(0.14, 0.42, 0.62), vec3(0.015, 0.08, 0.24), pow(d, 0.7));
        float cracks = smoothstep(0.96, 1.0, 1.0 - abs(n3(p * 46.0) * 2.0 - 1.0));
        albedo = mix(albedo, vec3(0.75, 0.86, 0.96), cracks * 0.7);
        rough = 0.28;
        bump += bumpOf(p, 80.0, 0.03);
      }
      vec3 terrace = mix(vec3(0.34, 0.4, 0.54), vec3(0.42, 0.48, 0.6), n3(p * 120.0));
      albedo = mix(albedo, terrace, smoothstep(0.3, 0.9, mask));
      rough = mix(rough, 0.45, smoothstep(0.3, 0.9, mask));
    }`,
  atmosphere: {
    thickness: 1.24,
    rayleigh: [1.5, 1.7, 4.6],
    mie: [0.5, 0.5, 0.65],
    intensity: 5.5,
    haze: 0xbcc8ff,
    night: [0.006, 0.006, 0.02],
    fog: { density: 0.009, day: 0x9cacd0, dusk: 0xc080b8, night: 0x0a0a22 },
  },
  clouds: { cover: 0.62, scale: 3.4, opacity: 0.5, color: 0xdce4f8, shadow: 0x7a86b8, dusk: 0xff9ad4, speed: 0.7 },
  aurora: { colorA: 0x60ffb8, colorB: 0xd47bff, latitude: 0.78, gain: 0.5 },
  transit: { road: { en: 'Light ribbon', de: 'Lichtband' }, air: { en: 'Glider', de: 'Gleiter' } },
  map: { title: { en: 'Light lattice', de: 'Lichtgitter' }, paper: '#e6f3fb', edge: '#8cb7d4', ink: '#12324a', soft: '#5880a0', sea: ['#93bfdd', '#c1dff1'], land: ['#f0f9fe', '#ffffff'], contour: 'rgba(60,130,190,0.25)', grid: 'rgba(60,130,190,0.12)', road: '#2b7fc4', casing: '#ffffff', air: '#a35cf0', traffic: '#12324a', accent: '#2b7fc4', lines: 'beam', glyph: 'crystal', font: 'ui' },
  layout: 'rings',
  block: 0.46,
  street: { color: 0x6cc4ee, rough: 0.2, width: 0.018, glow: 1.0 },
  lot: [0x5c7094, 0x687ca0],
  road: {
    width: 0.16,
    elev: 0.22,
    laneOffset: 0.18,
    meander: 0.3,
    lampEvery: 0.9,
    lampChance: 0.35,
    pillarEvery: 0.9,
    pillar(b, { elev }) {
      b.paint(0xbcd8f0, { rough: 0.1, metal: 0.5 });
      b.ngon(4, 0.014, elev, { top: 0.35 });
    },
    glsl: /* glsl */`
      void roadSurface(float x, float s, float night, inout vec3 albedo, inout float rough, inout float metal, inout vec3 emissive) {
        albedo = vec3(0.65, 0.8, 0.95);
        rough = 0.05;
        metal = 0.2;
        float core = exp(-x * x * 7.0);
        float wave = 0.5 + 0.5 * sin(s * 3.4 - uTime * 2.2);
        vec3 tint = mix(vec3(0.5, 0.82, 1.0), vec3(0.85, 0.65, 1.0), 0.5 + 0.5 * sin(s * 0.7 + uTime * 0.3));
        emissive += tint * (0.18 + core * (0.35 + wave * 0.7));
      }`,
  },
  plaza(b, { r }) {
    b.paint(0x56688c, { rough: 0.25, metal: 0.3 });
    b.disc(r, { seg: 48 });
    b.paint(GLOW, { glow: 1.8 });
    b.disc(r * 0.99, { y: 0.003, seg: 48, inner: r * 0.95 });
  },
  landmark: spireCluster,
  section: shard,
  filler(b, { s, rng, tier }) {
    const col = rng.chance(0.28) ? rng.pick(AMETHYST) : rng.pick(ICE);
    const h = s * rng.range(1.2, 2.8) * (1 + tier * 1.7);
    b.paint(col, { rough: 0.09, metal: 0.45, win: WIN.CRYSTAL, cw: 0.04, ch: 0.1 });
    b.crystal(rng.int(5, 6), s * 0.46, h, { rot: rng.range(0, 3) });
    if (rng.chance(0.6)) {
      b.save().move(s * 0.5, 0, rng.range(-s, s) * 0.3).rotZ(-0.2);
      b.crystal(5, s * 0.24, h * 0.55, {});
      b.restore();
    }
  },
  roadside(b, { rng }) {
    b.paint(rng.pick(ICE), { rough: 0.1, metal: 0.4, glow: 0 });
    b.crystal(4, 0.016, rng.range(0.08, 0.14), {});
    b.paint(GLOW, { glow: 3 });
    b.save().move(0, 0.16, 0).ngon(4, 0.008, 0.012, { top: 0.01, cap: false }).restore();
  },
  vehicles: [
    {
      weight: 1,
      speed: 0.7,
      y: 0.03,
      shadow: false,
      build(b) {
        b.paint(0xffffff, { glow: 5, rough: 0.1 });
        b.ngon(4, 0.022, 0.03, { top: 0.001, cap: false });
        b.save().rotX(Math.PI);
        b.ngon(4, 0.022, 0.05, { top: 0.001, cap: false });
        b.restore();
      },
    },
    {
      weight: 1,
      speed: 0.55,
      y: 0.03,
      shadow: false,
      build(b) {
        b.paint(PINK, { glow: 5, rough: 0.1 });
        b.save().rotX(Math.PI / 2);
        b.crystal(5, 0.018, 0.1, { y: -0.05, tip: 0.5, foot: 0.3 });
        b.restore();
      },
    },
  ],
  flyer: {
    speed: 1.1,
    shadow: false,
    build(b) {
      // Prism kite.
      b.paint(0xd2e6f6, { rough: 0.06, metal: 0.6 });
      b.save().rotX(Math.PI / 2);
      b.crystal(4, 0.05, 0.26, { y: -0.13, tip: 0.5, foot: 0.45 });
      b.restore();
      b.paint(GLOW, { glow: 5 });
      b.sphere(0.012, { seg: 6, rings: 4, y: -0.012 });
    },
  },
  walker: {
    speed: 0.1,
    lift: 0.05,
    bob: 0.01,
    bobRate: 1.6,
    build(b) {
      b.paint(0xc8ecff, { glow: 2.2, rough: 0.1 });
      b.ngon(4, 0.008, 0.012, { top: 0.001, cap: false });
      b.save().rotX(Math.PI);
      b.ngon(4, 0.008, 0.018, { top: 0.001, cap: false });
      b.restore();
    },
  },
  ship(b) {
    b.paint(0xd2e6f6, { rough: 0.06, metal: 0.6 });
    b.save().rotX(Math.PI / 2);
    b.crystal(6, 0.34, 2.2, { y: -1.1, tip: 0.55, foot: 0.3 });
    b.restore();
    b.paint(GLOW, { glow: 4 });
    b.save().move(0, 0, -0.5).ring(0.5, 0.03, { seg: 18, tseg: 4 }).restore();
  },
};
