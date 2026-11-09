// VEKTOR — the Collective. A machine civilisation on a world of black glass, where the
// ground itself is a circuit board and every building is a server dreaming in light.
import { WIN } from '../engine/builder.js';

const CYAN = 0x38e8ff, MAG = 0xff3ea5, VIOLET = 0x8a6bff;
const OBSIDIAN = [0x0e1218, 0x12161e, 0x0a0d13, 0x161b24];

function monolith(b, { h, w, rng, spin, capital }) {
  const accent = rng.pick([CYAN, CYAN, VIOLET]);
  const dark = rng.pick(OBSIDIAN);
  b.paint(dark, { rough: 0.22, metal: 0.9 });
  b.ngon(6, w * 1.35, 0.06);
  b.paint(accent, { glow: 1.6 });
  b.ngon(6, w * 1.38, 0.012, { y: 0.06 });
  b.paint(dark, { rough: 0.16, metal: 0.95, win: WIN.DATA, cw: 0.075, ch: 0.12 });
  b.ngon(6, w * 0.92, h * 0.88, { y: 0.07, top: 0.62, cap: false, rot: 0.4 });
  b.paint(accent, { glow: 2.2 });
  b.ngon(6, w * 0.56, 0.02, { y: h * 0.95, rot: 0.4 });
  b.paint(dark, { rough: 0.2, metal: 0.95 });
  b.ngon(6, w * 0.56, h * 0.06, { y: h * 0.95 + 0.02, top: 0.02, rot: 0.4, cap: false });

  // Levitating data rings, turning slowly around the shaft.
  const rings = capital ? 3 : 2;
  for (let i = 0; i < rings; i++) {
    const y = h * (0.34 + i * 0.24);
    spin.save().move(0, y, 0);
    spin.spinAbout(0, 0, 0, 0, 1, 0, (i % 2 ? -1 : 1) * (0.5 + i * 0.25));
    spin.paint(accent, { glow: 2.6 });
    const radius = w * (1.22 - i * 0.2);
    spin.ring(radius, 0.012, { seg: 32, tseg: 4 });
    spin.paint(dark, { rough: 0.2, metal: 0.9 });
    for (let k = 0; k < 6; k++) {
      const a = (k / 6) * Math.PI * 2;
      spin.save().move(Math.cos(a) * radius, -0.018, Math.sin(a) * radius).box(0.05, 0.036, 0.05).restore();
    }
    spin.restore();
  }
  if (capital) {
    b.paint(MAG, { glow: 9 });
    b.save().move(0, h * 1.01, 0).sphere(0.03, { seg: 10, rings: 6 }).restore();
  }
}

function serverBlock(b, { h, w, rng }) {
  const accent = rng.pick([CYAN, VIOLET, MAG]);
  const dark = rng.pick(OBSIDIAN);
  b.paint(dark, { rough: 0.25, metal: 0.85, win: WIN.STRIPES, cw: 0.05, ch: 0.2 });
  b.box(w * 1.1, h, w, { top: 0.94 });
  b.paint(accent, { glow: 1.4 });
  b.box(w * 1.12, 0.01, w * 1.02, { y: h * 0.5 });
  b.paint(dark, { rough: 0.25, metal: 0.9 });
  b.box(w * 1.0, 0.012, w * 0.9, { y: h });
  b.paint(accent, { glow: 1.4 });
  b.box(w * 0.5, 0.016, 0.014, { y: h });
}

export default {
  id: 'vektor',
  name: { en: 'Vektor', de: 'Vektor' },
  people: { en: 'The Collective', de: 'Das Kollektiv' },
  blurb: {
    en: 'A machine mind on a world of black glass. The ground is a circuit board; packets of light hurry between server-monoliths.',
    de: 'Ein Maschinengeist auf einer Welt aus schwarzem Glas. Der Boden ist eine Platine; Lichtpakete eilen zwischen Server-Monolithen.',
  },
  bridge: { en: 'light traces & drone lanes', de: 'Leiterbahnen & Drohnenkorridore' },
  dayLength: 150,
  tilt: 0.12,
  palette: { accent: CYAN, window: 0x48e0ff, route: 0x46e6ff, scaffold: 0x39414f },
  env: { zenith: 0x0b1030, horizon: 0x3a2f70, ground: 0x05070c },
  terrain: {
    amp: 0.45,
    power: 1,
    height(noise, x, y, z) {
      const c = noise.fbm(x * 1.5, y * 1.5, z * 1.5, 4, 2.0, 0.5);
      const plates = Math.round((c * 2.2 + 0.2) * 5) / 5; // terraced plateaus
      return plates + c * 0.25 + 0.03;
    },
  },
  scatterDensity: 0.3,
  scatterMinH: 0.0,
  scatter(b, { rng, spin }) {
    const roll = rng.next();
    if (roll < 0.5) {
      const h = rng.range(0.1, 0.34);
      b.paint(rng.pick(OBSIDIAN), { rough: 0.2, metal: 0.9, win: WIN.DATA, cw: 0.05, ch: 0.08 });
      b.ngon(4, rng.range(0.03, 0.06), h, { top: 0.6, rot: rng.range(0, 3) });
    } else if (roll < 0.8) {
      b.paint(0x1a2030, { rough: 0.3, metal: 0.8 });
      b.cyl(0.008, 0.004, 0.3, 4, { caps: false, smooth: false });
      b.paint(rng.pick([CYAN, MAG]), { glow: 6 });
      b.save().move(0, 0.3, 0).sphere(0.012, { seg: 6, rings: 4 }).restore();
    } else {
      spin.save().move(0, 0.2, 0);
      spin.spinAbout(0, 0, 0, 0.3, 1, 0.2, 0.9);
      spin.paint(CYAN, { glow: 2.2 });
      spin.ring(0.09, 0.005, { seg: 20, tseg: 3 });
      spin.restore();
    }
  },
  surfaceGLSL: /* glsl */`
    float gridLine(vec3 q, float w) {
      vec3 g = abs(fract(q) - 0.5);
      return smoothstep(w, 0.0, 0.5 - max(g.x, max(g.y, g.z)));
    }
    void surface(vec3 p, float h, float mask, float dist, float day, inout vec3 albedo, inout float rough, inout float metal, inout vec3 emissive, inout vec3 bump) {
      float night = smoothstep(0.25, -0.15, day);
      vec3 q = p * 24.0;
      vec3 cell = floor(q);
      float rnd = hash31(cell);
      albedo = mix(vec3(0.012, 0.015, 0.022), vec3(0.03, 0.036, 0.05), rnd);
      rough = 0.16 + rnd * 0.2;
      metal = 0.9;
      float coarse = gridLine(q, 0.05);
      float fine = gridLine(p * 96.0, 0.06) * smoothstep(40.0, 8.0, dist);
      float gate = step(0.42, hash31(cell + 3.0));
      float pulse = smoothstep(0.82, 1.0, fract(dot(p, vec3(9.0, 7.0, 11.0)) * 1.4 - uTime * 0.45 + rnd * 9.0));
      vec3 cyan = vec3(0.05, 0.75, 1.0), mag = vec3(1.0, 0.12, 0.5);
      vec3 trace = mix(cyan, mag, step(0.86, hash31(cell + 7.0)));
      emissive += trace * coarse * gate * (0.06 + night * 0.25 + pulse * 1.2);
      emissive += cyan * fine * 0.03 * (0.4 + night);
      albedo = mix(albedo, trace * 0.2, coarse * gate);
      bump += bumpOf(p, 60.0, 0.05);
      if (h < 0.015) {
        // Lowlands: pools of liquid data.
        float depth = smoothstep(0.015, -0.2, h);
        albedo = mix(albedo, vec3(0.004, 0.012, 0.03), depth);
        rough = mix(rough, 0.05, depth);
        emissive += cyan * pow(n3(p * 30.0 + uTime * 0.12), 6.0) * depth * 0.45;
      }
      float plaza = smoothstep(0.3, 0.9, mask);
      albedo = mix(albedo, vec3(0.018, 0.022, 0.03), plaza * 0.7);
    }`,
  atmosphere: {
    thickness: 1.17,
    rayleigh: [1.1, 0.9, 3.8],
    mie: [0.4, 0.3, 0.7],
    scaleR: 0.05,
    intensity: 6.5,
    haze: 0x6a7bff,
    night: [0.004, 0.006, 0.02],
    fog: { density: 0.011, day: 0x26305c, dusk: 0x7c3fa0, night: 0x040612 },
  },
  clouds: { cover: 0.66, scale: 7.5, opacity: 0.32, color: 0xbfd8ff, shadow: 0x101838, dusk: 0xb060ff, groundShadow: false, glow: 0x041226, speed: 2 },
  transit: { road: { en: 'Light trace', de: 'Lichtbahn' }, air: { en: 'Drone', de: 'Drohne' } },
  map: { title: { en: 'Schematic', de: 'Schaltplan' }, paper: '#050a0e', edge: '#0f3a44', ink: '#bff6ff', soft: '#4fa0b0', sea: ['#020507', '#061015'], land: ['#0a1319', '#14282f'], contour: 'rgba(56,232,255,0.13)', grid: 'rgba(56,232,255,0.07)', road: '#38e8ff', casing: '#0b3b48', air: '#ff3ea5', traffic: '#ffffff', accent: '#38e8ff', lines: 'trace', glyph: 'chip', font: 'mono' },
  layout: 'grid',
  block: 0.4,
  street: { color: 0x0d3a48, rough: 0.3, width: 0.022, glow: 0.9 },
  road: {
    width: 0.2,
    laneOffset: 0.2,
    meander: 0.05,
    lampEvery: 0.7,
    lampChance: 0.6,
    glsl: /* glsl */`
      void roadSurface(float x, float s, float night, inout vec3 albedo, inout float rough, inout float metal, inout vec3 emissive) {
        albedo = vec3(0.012, 0.015, 0.02);
        rough = 0.12;
        metal = 0.9;
        float edge = smoothstep(0.74, 0.86, abs(x)) * smoothstep(1.0, 0.92, abs(x));
        float pulse = smoothstep(0.78, 1.0, fract(s * 0.8 - uTime * 0.9));
        emissive += vec3(0.1, 0.8, 1.0) * edge * (0.35 + pulse * 1.5);
        float mid = step(abs(x), 0.03) * step(fract(s * 5.0 - uTime * 2.0), 0.3);
        emissive += vec3(1.0, 0.25, 0.65) * mid * 0.7;
      }`,
  },
  plaza(b, { r }) {
    b.paint(0x0b0e14, { rough: 0.14, metal: 0.95 });
    b.ngon(6, r, 0.012, { cap: true });
    b.paint(CYAN, { glow: 1.1 });
    b.ngon(6, r * 1.005, 0.003, { y: 0.012 });
    b.paint(0x0b0e14, { rough: 0.14, metal: 0.95 });
    b.ngon(6, r * 0.97, 0.003, { y: 0.0145 });
  },
  lot: [0x0c0f15, 0x10141c],
  landmark: monolith,
  section: serverBlock,
  filler(b, { s, rng, spin, tier }) {
    const h = s * rng.range(0.9, 2) * (1 + tier * 1.9);
    if (rng.chance(0.14)) {
      b.paint(0x10141c, { rough: 0.2, metal: 0.9 });
      b.cyl(s * 0.3, s * 0.34, h * 0.5, 8, { caps: true });
      spin.save().move(0, h * 0.5 + s * 0.45, 0);
      spin.spinAbout(0, 0, 0, 0, 1, 0, 1.4);
      spin.paint(CYAN, { glow: 2.6 });
      spin.ngon(4, s * 0.3, s * 0.3, { y: -s * 0.15, top: 0.02 });
      spin.restore();
      return;
    }
    b.paint(rng.pick(OBSIDIAN), { rough: 0.2, metal: 0.92, win: rng.chance(0.5) ? WIN.DATA : WIN.STRIPES, cw: 0.05, ch: 0.1 });
    b.box(s * 1.5, h, s * 1.5, { top: rng.range(0.74, 1) });
    b.paint(0x0a0d13, { rough: 0.25, metal: 0.9 });
    b.box(s * 1.2, 0.008, s * 1.2, { y: h });
    b.paint(rng.pick([CYAN, VIOLET]), { glow: 1.1 });
    b.box(s * 0.5, 0.012, 0.012, { y: h });
  },
  roadside(b, { rng }) {
    b.paint(0x141822, { rough: 0.3, metal: 0.9 });
    b.ngon(4, 0.012, 0.12, { top: 0.4 });
    b.paint(rng.chance(0.2) ? MAG : CYAN, { glow: 5 });
    b.save().move(0, 0.12, 0).ngon(4, 0.01, 0.02, { top: 0.01 }).restore();
  },
  vehicles: [
    {
      weight: 2,
      speed: 0.85,
      y: 0.03,
      shadow: false,
      build(b) {
        b.paint(CYAN, { glow: 2.6 });
        b.box(0.045, 0.022, 0.1, { top: 0.8 });
        b.paint(0xffffff, { glow: 4 });
        b.box(0.02, 0.006, 0.05, { y: 0.022 });
      },
    },
    {
      weight: 1,
      speed: 0.65,
      y: 0.03,
      shadow: false,
      build(b) {
        b.paint(MAG, { glow: 5 });
        b.box(0.04, 0.04, 0.04);
        b.paint(0x10141c, { rough: 0.2, metal: 0.9 });
        b.box(0.05, 0.012, 0.05, { y: 0.014 });
      },
    },
  ],
  flyer: {
    speed: 1.5,
    shadow: false,
    build(b) {
      b.paint(0x10141c, { rough: 0.2, metal: 0.95 });
      b.prism([[0.09, -0.07], [0, 0.11], [-0.09, -0.07], [0, -0.03]], 0.012);
      b.paint(CYAN, { glow: 7 });
      b.save().move(0, 0.003, -0.05).box(0.05, 0.006, 0.012).restore();
    },
  },
  walker: {
    speed: 0.17,
    lift: 0.045,
    bob: 0.006,
    bobRate: 3,
    build(b) {
      b.paint(0x1a2030, { rough: 0.2, metal: 0.9 });
      b.sphere(0.0085, { seg: 7, rings: 4 });
      b.paint(CYAN, { glow: 5 });
      b.ring(0.012, 0.0016, { y: 0.008, seg: 10, tseg: 3 });
    },
  },
  ship(b) {
    b.paint(0x12161e, { rough: 0.2, metal: 0.95 });
    b.prism([[0.65, -0.8], [0, 1.1], [-0.65, -0.8], [0, -0.45]], 0.18, { top: 0.85 });
    b.paint(CYAN, { glow: 5 });
    b.save().move(0, 0.05, -0.62).box(0.5, 0.08, 0.1).restore();
    b.save().move(0, 0.19, 0.1).box(0.02, 0.01, 1.1).restore();
  },
};
