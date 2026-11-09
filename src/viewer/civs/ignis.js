// IGNIS — the Forge-Clans. On a world of basalt and magma they raise stepped ziggurats
// over the furnaces and haul ore along canals of living fire.
import { WIN } from '../engine/builder.js';

const BASALT = [0x24201e, 0x2c2622, 0x1c1917, 0x332b26];
const IRON = 0x4a403a;
const FIRE = 0xff7a1c, HOT = 0xffc35a;

function ziggurat(b, { h, w, rng, capital }) {
  const tiers = 4 + (capital ? 2 : rng.int(0, 1));
  let width = w * 2.1, y = 0;
  const stepH = (h * 0.8) / tiers;
  for (let i = 0; i < tiers; i++) {
    b.paint(BASALT[i % BASALT.length], { rough: 0.92, win: WIN.SPOTS, cw: 0.11, ch: 0.11 });
    b.box(width, stepH, width, { y, top: 0.9 });
    y += stepH;
    // A seam of molten metal runs around every tier.
    // Only a thin ring of it shows, right where the next tier begins.
    b.paint(FIRE, { glow: 1.5 });
    b.box(width * 0.79, 0.012, width * 0.79, { y });
    y += 0.012;
    width *= 0.74;
  }
  // Ceremonial stairs up the front.
  b.paint(0x38302a, { rough: 0.85 });
  b.save().move(0, 0, w * 1.02).rotX(-0.62);
  b.box(w * 0.28, 0.02, h * 0.9);
  b.restore();
  // Furnace crown and its great chimney.
  b.paint(IRON, { rough: 0.5, metal: 0.8 });
  b.cyl(width * 0.46, width * 0.34, h * 0.2, 12, { y, caps: false });
  b.paint(HOT, { glow: 3.5 });
  b.disc(width * 0.34, { y: y + h * 0.195, seg: 12 });
  // Glowing furnace mouth.
  b.paint(FIRE, { glow: 5 });
  b.save().move(0, 0.02, w * 1.06).box(w * 0.44, 0.1, 0.012).restore();
}

function forge(b, { h, w, rng }) {
  b.paint(rng.pick(BASALT), { rough: 0.88, win: WIN.SPOTS, cw: 0.07, ch: 0.08 });
  b.box(w * 1.2, h * 0.6, w, { top: 0.88 });
  b.paint(IRON, { rough: 0.55, metal: 0.8 });
  const stacks = rng.int(1, 3);
  for (let i = 0; i < stacks; i++) {
    b.save().move((i - (stacks - 1) / 2) * w * 0.34, h * 0.6, 0);
    b.cyl(w * 0.1, w * 0.07, h * 0.5, 8, { caps: false });
    b.paint(HOT, { glow: 3 });
    b.disc(w * 0.07, { y: h * 0.5, seg: 8 });
    b.paint(IRON, { rough: 0.55, metal: 0.8 });
    b.restore();
  }
  b.paint(FIRE, { glow: 4 });
  b.save().move(0, 0.01, w * 0.5).box(w * 0.4, h * 0.2, 0.01).restore();
}

export default {
  id: 'ignis',
  name: { en: 'Ignis', de: 'Ignis' },
  people: { en: 'The Forge-Clans', de: 'Die Schmiede-Clans' },
  blurb: {
    en: 'Basalt, magma and ceaseless labour. Stepped ziggurats crown the furnaces; ore carts follow canals of living fire.',
    de: 'Basalt, Magma und unablässige Arbeit. Stufen-Zikkurate krönen die Hochöfen; Erzkarren folgen Kanälen aus lebendigem Feuer.',
  },
  bridge: { en: 'magma canals & cinder barges', de: 'Magmakanäle & Glutbarken' },
  dayLength: 230,
  tilt: 0.1,
  palette: { accent: 0xff8a2c, window: 0xff8c2e, route: 0xff9a3c, scaffold: 0x6c5a4c },
  env: { zenith: 0x2a1410, horizon: 0xc0562a, ground: 0x120a08 },
  terrain: {
    amp: 1.0,
    power: 1.15,
    height(noise, x, y, z) {
      const c = noise.fbm(x * 1.7 + 4, y * 1.7, z * 1.7, 5, 2.1, 0.55);
      const crag = noise.ridged(x * 3.1, y * 3.1 + 8, z * 3.1, 4, 2.1, 0.45);
      return c * 2.0 + crag * crag * 0.85 + 0.3;
    },
  },
  scatterDensity: 0.3,
  scatterMinH: 0.03,
  scatter(b, { rng, h }) {
    const roll = rng.next();
    if (roll < 0.55) {
      const s = rng.range(0.05, 0.18);
      b.paint(rng.pick(BASALT), { rough: 0.95 });
      b.ngon(rng.int(3, 5), s, s * rng.range(1.5, 4.5), { top: 0.05, rot: rng.range(0, 6) });
    } else if (roll < 0.86) {
      const s = rng.range(0.05, 0.13);
      b.paint(0x1c1917, { rough: 0.9, metal: 0.1 });
      b.sphere(s, { seg: 5, rings: 3, sy: 0.7 });
    } else if (h > 0.2) {
      // A fumarole.
      b.paint(0x2c2622, { rough: 0.95 });
      b.cyl(0.08, 0.025, 0.09, 7, { caps: false, smooth: false });
      b.paint(HOT, { glow: 10 });
      b.disc(0.025, { y: 0.088, seg: 7 });
    }
  },
  surfaceGLSL: /* glsl */`
    void surface(vec3 p, float h, float mask, float dist, float day, inout vec3 albedo, inout float rough, inout float metal, inout vec3 emissive, inout vec3 bump) {
      float n = fbm5(p * 8.0);
      float fine = n3(p * 70.0);
      float hh = h + (n - 0.5) * 0.14;
      vec3 basalt = mix(vec3(0.03, 0.026, 0.024), vec3(0.09, 0.075, 0.066), fine);
      vec3 ash = vec3(0.17, 0.15, 0.14);
      albedo = mix(basalt, ash, smoothstep(0.75, 1.2, hh + (fine - 0.5) * 0.3));
      rough = 0.95;
      bump += bumpOf(p, 38.0, 0.16) * smoothstep(90.0, 10.0, dist);
      bump += bumpOf(p, 190.0, 0.12) * smoothstep(16.0, 2.0, dist);
      // Cracks in the crust glow from beneath.
      float cr = 1.0 - abs(n3(p * 26.0 + 5.0) * 2.0 - 1.0);
      float cr2 = 1.0 - abs(n3(p * 66.0 + 13.0) * 2.0 - 1.0);
      float crack = smoothstep(0.93, 1.0, cr) * smoothstep(0.42, 0.56, n3(p * 7.0));
      crack += smoothstep(0.96, 1.0, cr2) * 0.5 * smoothstep(0.45, 0.6, n3(p * 11.0 + 3.0));
      float heat = smoothstep(0.55, 0.0, hh);
      emissive += vec3(1.0, 0.28, 0.04) * crack * (0.3 + heat * 1.3);
      if (hh < 0.0 && mask < 0.6) {
        // Magma sea: crusted plates drifting on incandescent rock.
        float t = uTime * 0.018;
        float plate = fbm5(p * 13.0 + vec3(t, 0.0, -t));
        float crust = smoothstep(0.43, 0.56, plate);
        vec3 lava = mix(vec3(1.0, 0.3, 0.02), vec3(1.0, 0.72, 0.18), smoothstep(0.4, 0.2, plate));
        albedo = mix(vec3(0.0), vec3(0.03, 0.022, 0.02), crust);
        emissive += lava * (1.0 - crust) * 1.35;
        emissive += vec3(1.0, 0.25, 0.03) * crust * 0.05;
        rough = mix(0.5, 0.95, crust);
      } else if (hh < 0.07) {
        emissive += vec3(1.0, 0.3, 0.04) * smoothstep(0.07, 0.0, hh) * 0.5;
      }
      vec3 yard = mix(vec3(0.05, 0.043, 0.038), vec3(0.085, 0.07, 0.06), n3(p * 130.0));
      albedo = mix(albedo, yard, smoothstep(0.3, 0.9, mask));
    }`,
  atmosphere: {
    thickness: 1.2,
    rayleigh: [3.4, 1.4, 0.5],
    mie: [1.1, 0.7, 0.4],
    g: 0.72,
    intensity: 4.8,
    haze: 0xff7a3a,
    night: [0.03, 0.009, 0.002],
    fog: { density: 0.011, day: 0x5c3020, dusk: 0x8a3a18, night: 0x140804 },
  },
  clouds: { cover: 0.54, scale: 3.4, opacity: 0.78, color: 0x7b6a60, shadow: 0x17100c, dusk: 0xb9471c, glow: 0x1a0702, speed: 1.6 },
  transit: { road: { en: 'Magma canal', de: 'Magmakanal' }, air: { en: 'Cinder barge', de: 'Aschekahn' } },
  map: { title: { en: 'Forge ledger', de: 'Schmiedebuch' }, paper: '#140c09', edge: '#5a2c14', ink: '#ffdcb6', soft: '#b07a50', sea: ['#a83a0c', '#ff8a24'], land: ['#241714', '#4f342c'], contour: 'rgba(255,140,60,0.16)', grid: 'rgba(255,170,90,0.06)', road: '#ff7a1c', casing: '#5a1d06', air: '#ffc477', traffic: '#fff0c8', accent: '#ff7a1c', lines: 'magma', glyph: 'ember', font: 'ui' },
  layout: 'grid',
  block: 0.52,
  street: { color: 0x3a1608, rough: 0.8, width: 0.045, glow: 0.8 },
  lot: [0x2c2622, 0x362e28],
  road: {
    width: 0.24,
    laneOffset: 0.2,
    meander: 0.32,
    lampEvery: 0.85,
    lampChance: 0.5,
    glsl: /* glsl */`
      void roadSurface(float x, float s, float night, inout vec3 albedo, inout float rough, inout float metal, inout vec3 emissive) {
        // Iron-banked canal: flowing magma between two channels of slag.
        float bank = smoothstep(0.62, 0.72, abs(x));
        vec3 q = vec3(x * 1.4, s * 1.6 - uTime * 0.42, 3.0);
        float flow = fbm3(q);
        vec3 lava = mix(vec3(1.0, 0.24, 0.02), vec3(1.0, 0.68, 0.14), smoothstep(0.42, 0.62, flow));
        albedo = mix(vec3(0.0), vec3(0.06, 0.05, 0.045), bank);
        rough = mix(0.6, 0.8, bank);
        metal = bank * 0.7;
        emissive += lava * (1.0 - bank) * (0.5 + flow * 1.0);
        float rivet = step(0.8, fract(s * 3.0)) * bank;
        albedo += vec3(0.05, 0.04, 0.035) * rivet;
      }`,
  },
  plaza(b, { r }) {
    b.paint(0x231e1a, { rough: 0.9 });
    b.ngon(8, r, 0.014);
    b.paint(FIRE, { glow: 2.2 });
    b.ngon(8, r * 1.01, 0.003, { y: 0.014 });
    b.paint(0x2c2622, { rough: 0.9 });
    b.ngon(8, r * 0.96, 0.003, { y: 0.0165 });
  },
  landmark: ziggurat,
  section: forge,
  filler(b, { s, rng, tier }) {
    const h = s * rng.range(0.7, 1.5) * (1 + tier * 1.3);
    if (rng.chance(0.3)) {
      // Smelter: a cylinder with a burning top.
      b.paint(IRON, { rough: 0.55, metal: 0.8 });
      b.cyl(s * 0.5, s * 0.34, h * 1.2, 9, { caps: false });
      b.paint(HOT, { glow: 2.2 });
      b.disc(s * 0.34, { y: h * 1.2 - 0.002, seg: 9 });
      return;
    }
    b.paint(rng.pick(BASALT), { rough: 0.92, win: WIN.SPOTS, cw: 0.06, ch: 0.07 });
    b.box(s * 1.6, h, s * 1.4, { top: 0.82 });
    if (tier > 0.4) {
      b.box(s * 0.9, h * 0.5, s * 0.8, { y: h, top: 0.8 });
    }
    b.paint(0x1c1917, { rough: 0.9 });
    b.box(s * 1.1, 0.006, s * 1.0, { y: h + (tier > 0.4 ? h * 0.5 : 0) });
    b.paint(FIRE, { glow: 1.0 });
    b.box(s * 0.3, 0.012, s * 0.3, { y: h + (tier > 0.4 ? h * 0.5 : 0) });
  },
  roadside(b, { rng }) {
    b.paint(IRON, { rough: 0.55, metal: 0.8 });
    b.box(0.018, 0.1, 0.018, { top: 0.6 });
    b.paint(rng.chance(0.5) ? HOT : FIRE, { glow: 7 });
    b.save().move(0, 0.1, 0).ngon(4, 0.012, 0.02, { top: 0.2 }).restore();
  },
  vehicles: [
    {
      weight: 2,
      speed: 0.3,
      y: 0.005,
      build(b) {
        // Ore cart riding the canal's iron rails.
        b.paint(IRON, { rough: 0.5, metal: 0.85 });
        b.box(0.05, 0.03, 0.09, { y: 0.012, top: 1.12 });
        b.paint(HOT, { glow: 8 });
        b.box(0.04, 0.006, 0.075, { y: 0.041 });
      },
    },
    {
      weight: 1,
      speed: 0.24,
      y: 0.005,
      build(b) {
        // Forge tractor with a smoking stack.
        b.paint(0x332b26, { rough: 0.7, metal: 0.5 });
        b.box(0.055, 0.04, 0.12, { y: 0.01, top: 0.9 });
        b.paint(IRON, { rough: 0.5, metal: 0.85 });
        b.save().move(0, 0.05, -0.03).cyl(0.008, 0.01, 0.04, 6).restore();
        b.paint(FIRE, { glow: 8 });
        b.save().move(0, 0.03, 0.06).box(0.04, 0.012, 0.002).restore();
      },
    },
  ],
  flyer: {
    speed: 0.7,
    shadow: false,
    build(b) {
      // Cinder barge: a hulking hull under a glowing belly.
      b.paint(0x2c2622, { rough: 0.75, metal: 0.4 });
      b.box(0.08, 0.04, 0.24, { top: 0.82 });
      b.paint(IRON, { rough: 0.5, metal: 0.8 });
      b.box(0.11, 0.012, 0.09, { y: 0.02 });
      b.paint(FIRE, { glow: 6 });
      b.save().move(0, -0.006, 0).box(0.05, 0.006, 0.16).restore();
    },
  },
  walker: {
    speed: 0.075,
    lift: 0.008,
    bob: 0.003,
    bobRate: 5,
    colors: [0x8a7a6c, 0x6c5e52, 0x9c8878],
    build(b) {
      // Stout stone golem.
      b.paint(0xffffff, { rough: 0.95 });
      b.box(0.013, 0.015, 0.009, { y: 0.005 });
      b.box(0.009, 0.005, 0.007, { y: 0 });
      b.box(0.009, 0.008, 0.008, { y: 0.02 });
      b.paint(HOT, { glow: 6 });
      b.save().move(0, 0.024, 0.0042).box(0.006, 0.0016, 0.0005).restore();
    },
  },
  ship(b) {
    b.paint(0x2c2622, { rough: 0.7, metal: 0.5 });
    b.box(0.8, 0.5, 1.8, { y: -0.25, top: 0.72 });
    b.paint(IRON, { rough: 0.5, metal: 0.8 });
    b.box(1.3, 0.14, 0.7, { y: -0.08 });
    b.paint(FIRE, { glow: 5 });
    b.save().move(0.26, -0.1, -0.92).box(0.22, 0.2, 0.05).restore();
    b.save().move(-0.26, -0.1, -0.92).box(0.22, 0.2, 0.05).restore();
  },
};
