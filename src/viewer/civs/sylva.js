// SYLVA — the Treefolk. They never cut a tree on this soft green world: they live inside them,
// in lantern-lit halls within giant trunks, linked by vine bridges high above the moss.
import { WIN, mix3 } from '../engine/builder.js';

const BARK = [0x5a4030, 0x6c4c38, 0x4c3626];
const LEAF = [0x3f9a5c, 0x54ac5e, 0x2f8a5c, 0x74b45a, 0x3aa080];
const BLOSSOM = [0xf0a0c8, 0xf4b4d4, 0xe88cc0, 0xf6c8a0];
const LANTERN = 0xffd27a;

function canopy(b, rng, r, y, colors, blobs = 7) {
  // Lots of overlapping leaf-masses, shaded darker underneath, read as foliage rather than as balls.
  const count = blobs * 3;
  for (let i = 0; i < count; i++) {
    const a = rng.range(0, 6.28), t = Math.sqrt((i + 0.5) / count);
    const d = t * r * 0.95;
    const size = r * (0.44 - t * 0.2) * rng.range(0.85, 1.15);
    const lift = (1 - t * t) * r * 0.42 + rng.range(-0.05, 0.05) * r;
    const shade = 0.72 + (lift / (r * 0.5)) * 0.3;
    b.paint(mix3(rng.pick(colors), 0x000000, Math.max(0, 1 - shade)), { rough: 0.88 });
    b.save().move(Math.cos(a) * d, y + lift, Math.sin(a) * d);
    b.sphere(size, { y: -size, seg: 8, rings: 5, sy: 0.74 });
    b.restore();
  }
}

function worldTree(b, { h, w, rng, spin, capital }) {
  const bark = rng.pick(BARK);
  const trunkR = w * 0.72;
  // A flared trunk full of lit windows.
  b.paint(bark, { rough: 0.9, win: WIN.SPOTS, cw: 0.085, ch: 0.11 });
  b.lathe([[trunkR * 1.9, 0], [trunkR * 1.25, h * 0.05], [trunkR, h * 0.16], [trunkR * 0.82, h * 0.42], [trunkR * 0.74, h * 0.68], [trunkR * 0.86, h * 0.76]], 14);
  // Roots spread across the plaza.
  b.paint(bark, { rough: 0.95 });
  for (let i = 0; i < 7; i++) {
    const a = (i / 7) * Math.PI * 2 + rng.range(-0.2, 0.2);
    const c = Math.cos(a), s = Math.sin(a), R = trunkR;
    b.tube([[c * R * 1.0, h * 0.06, s * R * 1.0], [c * R * 1.9, 0.02, s * R * 1.9], [c * R * 2.7, -0.01, s * R * 2.7]], R * 0.13, { seg: 5, taper: 0.3 });
  }
  // Boughs that reach out and hold the crown.
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    const c = Math.cos(a), s = Math.sin(a), R = trunkR;
    b.tube([[c * R * 0.7, h * 0.7, s * R * 0.7], [c * R * 1.8, h * 0.84, s * R * 1.8], [c * R * 2.7, h * 0.86, s * R * 2.7]], R * 0.16, { seg: 5, taper: 0.35 });
  }
  // Galleries ringing the trunk, with hanging lanterns.
  for (let i = 0; i < (capital ? 4 : 3); i++) {
    const y = h * (0.26 + i * 0.15);
    const radius = trunkR * (1.34 - i * 0.05);
    b.paint(0x8a6a48, { rough: 0.8 });
    b.cyl(radius, radius, 0.012, 18, { y });
    b.paint(LANTERN, { glow: -5 });
    for (let k = 0; k < 8; k++) {
      const a = (k / 8) * Math.PI * 2;
      b.save().move(Math.cos(a) * radius, y - 0.016, Math.sin(a) * radius).sphere(0.009, { seg: 5, rings: 3 }).restore();
    }
  }
  // The crown, blossoming on the capital.
  canopy(b, rng, w * 1.9, h * 0.88, capital ? BLOSSOM : LEAF, capital ? 10 : 8);
  // Fireflies circle the canopy.
  for (let i = 0; i < 10; i++) {
    const a = (i / 10) * Math.PI * 2, r = w * rng.range(1.8, 2.5);
    spin.save().move(0, h * rng.range(0.52, 0.72), 0);
    spin.spinAbout(0, 0, 0, 0, 1, 0, rng.range(0.15, 0.5) * (i % 2 ? 1 : -1));
    spin.paint(0xe8ff88, { glow: 9 });
    spin.save().move(Math.cos(a) * r, 0, Math.sin(a) * r).sphere(0.008, { seg: 5, rings: 3 }).restore();
    spin.restore();
  }
}

function hollowTree(b, { h, w, rng }) {
  const bark = rng.pick(BARK);
  b.paint(bark, { rough: 0.92, win: WIN.SPOTS, cw: 0.07, ch: 0.09 });
  b.lathe([[w * 0.72, 0], [w * 0.48, h * 0.12], [w * 0.38, h * 0.55], [w * 0.42, h * 0.7]], 10);
  canopy(b, rng, w * 1.1, h * 0.88, rng.chance(0.2) ? BLOSSOM : LEAF, 5);
  b.paint(0x8a6a48, { rough: 0.8 });
  b.cyl(w * 0.58, w * 0.58, 0.01, 12, { y: h * 0.38 });
}

function hut(b, s, rng, tier) {
  // Round wooden hall under a thatched cone.
  const h = s * rng.range(0.8, 1.2) * (1 + tier * 0.7);
  b.paint(rng.pick(BARK), { rough: 0.9, win: WIN.SPOTS, cw: 0.045, ch: 0.05 });
  b.cyl(s * 0.68, s * 0.6, h, 10);
  b.paint(rng.pick([0x8a7a44, 0x9c8a50, 0x4c7a4a]), { rough: 0.95 });
  b.cone(s * 0.92, s * 0.9, 10, { y: h });
}

export default {
  id: 'sylva',
  name: { en: 'Sylva', de: 'Sylva' },
  people: { en: 'The Treefolk', de: 'Das Baumvolk' },
  blurb: {
    en: 'They never cut a tree on this soft green world: they live inside them, in lantern-lit halls linked by vine bridges high above the moss.',
    de: 'Auf dieser sanften grünen Welt wird nie ein Baum gefällt: Man wohnt in ihnen, in laternenhellen Hallen, verbunden durch Rankenbrücken hoch über dem Moos.',
  },
  bridge: { en: 'vine bridges & seed gliders', de: 'Rankenbrücken & Samensegler' },
  dayLength: 220,
  tilt: 0.24,
  palette: { accent: 0xb8f07a, window: 0xffcf72, route: 0xc8f088, scaffold: 0x7a5c3e },
  env: { zenith: 0x5ca8c8, horizon: 0xeaf4c8, ground: 0x28482c },
  terrain: {
    amp: 0.85,
    power: 1.2,
    height(noise, x, y, z) {
      const c = noise.fbm(x * 1.7 + 6, y * 1.7, z * 1.7, 5, 2.0, 0.5);
      return c * 1.7 + 0.26;
    },
  },
  scatterDensity: 2.2,
  scatterMinH: 0.012,
  scatter(b, { rng, h, x, y, z, noise }) {
    const stand = noise.simplex(x * 8 + 1, y * 8, z * 8) + 0.3;
    if (stand < 0 && !rng.chance(0.08)) return;
    const s = rng.range(0.12, 0.28) * (h > 0.5 ? 0.8 : 1);
    if (rng.chance(0.08)) {
      // Blossom tree.
      b.paint(rng.pick(BARK), { rough: 0.95 });
      b.cyl(s * 0.08, s * 0.05, s * 0.55, 3, { smooth: false, caps: false });
      b.paint(rng.pick(BLOSSOM), { rough: 0.85 });
      b.sphere(s * 0.42, { y: s * 0.32, seg: 6, rings: 3, sy: 1.0 });
      return;
    }
    b.paint(rng.pick(BARK), { rough: 0.95 });
    b.cyl(s * 0.075, s * 0.05, s * 0.6, 3, { smooth: false, caps: false });
    b.paint(rng.pick(LEAF), { rough: 0.9 });
    b.sphere(s * 0.34, { y: s * 0.4, seg: 6, rings: 3, sy: 1.25 });
    if (rng.chance(0.4)) {
      b.paint(mix3(rng.pick(LEAF), 0xffffff, 0.12), { rough: 0.9 });
      b.save().move(s * 0.16, s * 0.32, s * 0.08).sphere(s * 0.2, { seg: 5, rings: 3 }).restore();
    }
  },
  surfaceGLSL: /* glsl */`
    void surface(vec3 p, float h, float mask, float dist, float day, inout vec3 albedo, inout float rough, inout float metal, inout vec3 emissive, inout vec3 bump) {
      float night = smoothstep(0.3, -0.15, day);
      float n = fbm5(p * 6.0);
      float fine = n3(p * 62.0);
      float hh = h + (n - 0.5) * 0.14;
      if (hh < 0.0 && mask < 0.6) {
        liquid(p, hh, vec3(0.006, 0.06, 0.07), vec3(0.08, 0.36, 0.28), 24.0, albedo, rough, metal, bump);
      } else {
        vec3 moss = mix(vec3(0.07, 0.24, 0.09), vec3(0.2, 0.42, 0.12), n);
        vec3 fern = vec3(0.05, 0.2, 0.15);
        vec3 meadow = vec3(0.4, 0.5, 0.15);
        float m = fbm3(p * 4.0 + 5.0);
        albedo = mix(moss, fern, smoothstep(0.46, 0.58, m));
        albedo = mix(albedo, meadow, smoothstep(0.54, 0.66, fbm3(p * 7.0 + 1.0)) * 0.7);
        albedo = mix(vec3(0.42, 0.38, 0.22), albedo, smoothstep(0.004, 0.04, hh));
        albedo = mix(albedo, vec3(0.26, 0.26, 0.2), smoothstep(0.75, 1.1, hh));
        // Wildflower meadows, and glowworms after dark.
        float blossom = smoothstep(0.6, 0.68, n3(p * 88.0)) * smoothstep(0.5, 0.6, n3(p * 11.0));
        albedo = mix(albedo, vec3(0.86, 0.5, 0.7), blossom * 0.55 * smoothstep(40.0, 8.0, dist));
        emissive += vec3(0.6, 1.0, 0.3) * pow(n3(p * 210.0), 12.0) * night * 3.5 * smoothstep(40.0, 6.0, dist);
        albedo *= 0.82 + fine * 0.36;
        rough = 0.9;
        bump += bumpOf(p, 46.0, 0.08) * smoothstep(90.0, 10.0, dist);
        bump += bumpOf(p, 280.0, 0.12) * smoothstep(14.0, 2.0, dist);
        vec3 clearing = mix(vec3(0.13, 0.28, 0.08), vec3(0.2, 0.34, 0.1), n3(p * 110.0));
        albedo = mix(albedo, clearing, smoothstep(0.3, 0.9, mask));
      }
    }`,
  atmosphere: {
    thickness: 1.23,
    rayleigh: [1.1, 2.4, 3.1],
    mie: [0.6, 0.65, 0.5],
    intensity: 8.2,
    haze: 0xbcf0b4,
    fog: { density: 0.016, day: 0xc4e0b8, dusk: 0xf0b078, night: 0x081410 },
  },
  clouds: { cover: 0.56, scale: 4.2, opacity: 0.88, color: 0xfffff0, shadow: 0x6a8a84, dusk: 0xffb080 },
  transit: { road: { en: 'Vine bridge', de: 'Rankenbrücke' }, air: { en: 'Seed glider', de: 'Samengleiter' } },
  map: { title: { en: 'Leaf map', de: 'Blattkarte' }, paper: '#dfe8c8', edge: '#7c9a60', ink: '#223a1e', soft: '#5a7a4c', sea: ['#8fb7a6', '#b6d4bf'], land: ['#c9daa2', '#7fa561'], contour: 'rgba(50,90,40,0.22)', grid: 'rgba(50,90,40,0.1)', road: '#3f6e2c', casing: '#dfe8c8', air: '#a0722f', traffic: '#1d2f18', accent: '#3f6e2c', lines: 'vine', glyph: 'leaf', font: 'serif' },
  layout: 'organic',
  block: 0.56,
  lot: null,
  road: {
    width: 0.1,
    elev: 0.3,
    laneOffset: 0.0,
    meander: 0.5,
    lampEvery: 0.48,
    lampChance: 0.9,
    pillarEvery: 1.1,
    pillar(b, { elev }) {
      // Living pylons: slim trees holding up the bridge.
      b.paint(0x4c3626, { rough: 0.95 });
      b.cyl(0.018, 0.009, elev + 0.02, 5, { caps: false, smooth: false });
      b.paint(0x3f9a5c, { rough: 0.9 });
      b.save().move(0, elev + 0.05, 0).sphere(0.042, { y: -0.042, seg: 6, rings: 3, sy: 0.72 }).restore();
    },
    glsl: /* glsl */`
      void roadSurface(float x, float s, float night, inout vec3 albedo, inout float rough, inout float metal, inout vec3 emissive) {
        float plank = step(0.14, fract(s * 15.0));
        float vary = n3(vec3(floor(s * 15.0) * 3.0, 0.0, 1.0));
        albedo = mix(vec3(0.02, 0.015, 0.01), mix(vec3(0.3, 0.2, 0.11), vec3(0.42, 0.3, 0.17), vary), plank);
        rough = 0.9;
        float rope = smoothstep(0.82, 0.95, abs(x));
        albedo = mix(albedo, vec3(0.2, 0.34, 0.12), rope);
        float lantern = smoothstep(0.1, 0.0, abs(fract(s * 1.1) - 0.5)) * rope;
        emissive += vec3(1.0, 0.76, 0.38) * lantern * night * 2.8;
      }`,
  },
  plaza(b, { r }) {
    b.paint(0x4c6a38, { rough: 0.9 });
    b.disc(r, { seg: 48 });
    b.paint(0x8a7a54, { rough: 0.9 });
    b.disc(r * 0.98, { y: 0.003, seg: 48, inner: r * 0.86 });
  },
  landmark: worldTree,
  section: hollowTree,
  filler(b, { s, rng, tier }) {
    const roll = rng.next();
    if (roll < 0.34) {
      hut(b, s, rng, tier);
    } else if (roll < 0.75) {
      hollowTree(b, { h: s * rng.range(2.4, 4.4) * (1 + tier * 1.0), w: s * 0.78, rng });
    } else {
      // Tree-pod: a little home on stilts.
      b.paint(rng.pick(BARK), { rough: 0.9 });
      for (const [x, z] of [[1, 0], [-0.5, 0.86], [-0.5, -0.86]]) {
        b.save().move(x * s * 0.5, 0, z * s * 0.5).cyl(0.007, 0.007, s * 1.1, 4, { caps: false, smooth: false }).restore();
      }
      b.paint(0x8a6a48, { rough: 0.85, win: WIN.SPOTS, cw: 0.04, ch: 0.04 });
      b.save().move(0, s * 0.95, 0).sphere(s * 0.52, { y: -s * 0.52, seg: 9, rings: 6 }).restore();
      b.paint(0x4c7a4a, { rough: 0.95 });
      b.cone(s * 0.62, s * 0.5, 9, { y: s * 1.32 });
    }
  },
  roadside(b, { elev }) {
    // Lanterns hang from posts rising through the bridge.
    b.paint(0x4c3626, { rough: 0.95 });
    b.cyl(0.005, 0.004, elev + 0.09, 3, { caps: false, smooth: false });
    b.paint(LANTERN, { glow: -7 });
    b.save().move(0, elev + 0.075, 0).sphere(0.01, { seg: 6, rings: 3 }).restore();
  },
  vehicles: [
    {
      weight: 1,
      speed: 0.2,
      y: 0.002,
      build(b) {
        // Glow-beetle, plodding along the planks.
        b.paint(0x2a4a3a, { rough: 0.2, metal: 0.65 });
        b.sphere(0.02, { y: -0.004, seg: 8, rings: 5, sx: 0.85, sy: 0.75 });
        b.paint(0xe8ff88, { glow: 6 });
        b.save().move(0, 0.008, -0.02).sphere(0.007, { seg: 5, rings: 3 }).restore();
      },
    },
    {
      weight: 1,
      speed: 0.15,
      y: 0.002,
      build(b) {
        // Forest porter with a basket on its back.
        b.paint(0x6c4c38, { rough: 0.9 });
        b.cyl(0.01, 0.012, 0.03, 6, {});
        b.paint(0x9c8a50, { rough: 0.9 });
        b.save().move(0, 0.03, -0.008).sphere(0.012, { y: -0.012, seg: 6, rings: 4 }).restore();
      },
    },
  ],
  flyer: {
    speed: 0.55,
    shadow: false,
    build(b) {
      // Seed-glider: a pilot beneath a maple-wing.
      b.paint(0x8a6a48, { rough: 0.85 });
      b.sphere(0.014, { y: -0.014, seg: 6, rings: 4 });
      b.paint(0xb4d870, { rough: 0.7 });
      b.prism([[0.15, -0.03], [0.02, 0.06], [-0.02, 0.06], [-0.15, -0.03], [0, -0.005]], 0.002);
      b.paint(0xe8ff88, { glow: 6 });
      b.save().move(0, -0.012, 0).sphere(0.006, { seg: 5, rings: 3 }).restore();
    },
  },
  walker: {
    speed: 0.05,
    lift: 0.005,
    bob: 0.003,
    bobRate: 8,
    colors: [0x7a9c4c, 0xa87c4c, 0x5c8a6a, 0xc8a05c],
    build(b) {
      // Hooded forest-dweller.
      b.paint(0xffffff, { rough: 0.9 });
      b.cone(0.0075, 0.022, 6, { smooth: false });
      b.paint(0x8c6a4c, { rough: 0.8 });
      b.save().move(0, 0.019, 0).sphere(0.0045, { seg: 5, rings: 3 }).restore();
      b.paint(LANTERN, { glow: -5 });
      b.save().move(0.0075, 0.011, 0).sphere(0.002, { seg: 4, rings: 2 }).restore();
    },
  },
  ship(b) {
    b.paint(0x6c4c38, { rough: 0.7 });
    b.save().rotX(Math.PI / 2);
    b.lathe([[0, -1.1], [0.32, -0.7], [0.42, -0.1], [0.28, 0.7], [0, 1.1]], 10);
    b.restore();
    b.paint(0xb4d870, { rough: 0.75 });
    b.prism([[1.6, -0.5], [0.1, 0.7], [-0.1, 0.7], [-1.6, -0.5], [0, -0.1]], 0.02);
    b.paint(0xe8ff88, { glow: 4.5 });
    b.save().move(0, 0, -1.1).sphere(0.16, { y: -0.16, seg: 7, rings: 4 }).restore();
  },
};
