// Single-scattering atmosphere (Rayleigh + Mie), ray-marched per pixel. It works from
// orbit and from the ground, so sunsets and the blue sky are the same shader as the rim glow.
import * as THREE from 'three';
import { NOISE_GLSL } from './noise.js';

export function createAtmosphere(R, cfg, noiseTex) {
  const Ra = R * (cfg.thickness || 1.26);
  const material = new THREE.ShaderMaterial({
    uniforms: {
      uCam: { value: new THREE.Vector3() },
      uSun: { value: new THREE.Vector3(1, 0, 0) },
      uRp: { value: R },
      uRa: { value: Ra },
      uBetaR: { value: new THREE.Vector3(...cfg.rayleigh).multiplyScalar(1 / R) },
      uBetaM: { value: new THREE.Vector3(...(cfg.mie || [0.5, 0.5, 0.5])).multiplyScalar(1 / R) },
      uHR: { value: R * (cfg.scaleR || 0.07) },
      uHM: { value: R * (cfg.scaleM || 0.025) },
      uG: { value: cfg.g ?? 0.82 },
      uSunI: { value: cfg.intensity ?? 16 },
      uNight: { value: new THREE.Vector3(...(cfg.night || [0.002, 0.003, 0.008])) },
    },
    vertexShader: /* glsl */`
      varying vec3 vPos;
      void main() { vPos = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
    fragmentShader: /* glsl */`
      precision highp float;
      varying vec3 vPos;
      uniform vec3 uCam, uSun, uBetaR, uBetaM, uNight;
      uniform float uRp, uRa, uHR, uHM, uG, uSunI;
      vec2 rsi(vec3 ro, vec3 rd, float r) {
        float b = dot(ro, rd), c = dot(ro, ro) - r * r, d = b * b - c;
        if (d < 0.0) return vec2(1e9, -1e9);
        d = sqrt(d);
        return vec2(-b - d, -b + d);
      }
      void main() {
        vec3 rd = normalize(vPos - uCam);
        vec2 a = rsi(uCam, rd, uRa);
        if (a.x > a.y) discard;
        float t0 = max(a.x, 0.0), t1 = a.y;
        vec2 g = rsi(uCam, rd, uRp);
        if (g.x > 0.0 && g.x < g.y) t1 = min(t1, g.x);
        const int VS = 10;
        const int LS = 4;
        float ds = (t1 - t0) / float(VS);
        float mu = dot(rd, uSun);
        float pr = 3.0 / (16.0 * 3.14159) * (1.0 + mu * mu);
        float gg = uG * uG;
        float pm = 3.0 / (8.0 * 3.14159) * ((1.0 - gg) * (1.0 + mu * mu)) / ((2.0 + gg) * pow(max(1.0 + gg - 2.0 * uG * mu, 1e-3), 1.5));
        vec3 sumR = vec3(0.0), sumM = vec3(0.0);
        float odR = 0.0, odM = 0.0;
        float t = t0 + ds * 0.5;
        for (int i = 0; i < VS; i++) {
          vec3 p = uCam + rd * t;
          float h = max(length(p) - uRp, 0.0);
          float hr = exp(-h / uHR) * ds, hm = exp(-h / uHM) * ds;
          odR += hr; odM += hm;
          vec2 l = rsi(p, uSun, uRa);
          float dl = l.y / float(LS), lR = 0.0, lM = 0.0, lt = dl * 0.5;
          float shade = 1.0;
          for (int j = 0; j < LS; j++) {
            vec3 q = p + uSun * lt;
            float hq = length(q) - uRp;
            shade *= smoothstep(-uRp * 0.018, uRp * 0.006, hq);
            hq = max(hq, 0.0);
            lR += exp(-hq / uHR) * dl;
            lM += exp(-hq / uHM) * dl;
            lt += dl;
          }
          vec3 tau = uBetaR * (odR + lR) + uBetaM * 1.1 * (odM + lM);
          vec3 att = exp(-tau) * shade;
          sumR += att * hr;
          sumM += att * hm;
          t += ds;
        }
        vec3 col = uSunI * (sumR * uBetaR * pr + sumM * uBetaM * pm);
        col += uNight * (1.0 - exp(-odR * 0.1 / uHR));
        float lum = max(col.r, max(col.g, col.b));
        float alpha = clamp(lum * 2.2, 0.0, 1.0);
        gl_FragColor = vec4(col, alpha);
      }`,
    side: THREE.BackSide,
    transparent: true,
    depthWrite: false,
    blending: THREE.CustomBlending,
    blendEquation: THREE.AddEquation,
    blendSrc: THREE.OneFactor,
    blendDst: THREE.OneMinusSrcAlphaFactor,
  });
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(Ra, 96, 64), material);
  mesh.renderOrder = 2;
  mesh.frustumCulled = false;
  return mesh;
}

export function createClouds(R, cfg, noiseTex, shared) {
  const r = R * (cfg.altitude || 1.115);
  const material = new THREE.ShaderMaterial({
    uniforms: {
      uNoise: { value: noiseTex },
      uTime: shared.uTime,
      uSunLocal: shared.uSunLocal,
      uCover: { value: cfg.cover ?? 0.5 },
      uScale: { value: cfg.scale ?? 4.2 },
      uSpeed: { value: cfg.speed ?? 1 },
      uColor: { value: new THREE.Color(cfg.color || 0xffffff) },
      uShadow: { value: new THREE.Color(cfg.shadow || 0x4a5a78) },
      uDusk: { value: new THREE.Color(cfg.dusk || 0xff9a66) },
      uOpacity: { value: cfg.opacity ?? 0.92 },
      uCamAlt: { value: 10 },
      uAlt: { value: r - R },
      uRp: { value: R },
      uGlow: { value: new THREE.Color(cfg.glow || 0x000000) },
      uBand: { value: cfg.banded ?? 0 },
    },
    vertexShader: /* glsl */`
      varying vec3 vP; varying vec3 vN; varying vec3 vView;
      void main() {
        vP = normalize(position);
        vN = normalize(normalMatrix * normal);
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vView = -mv.xyz;
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: /* glsl */`
      precision highp float;
      varying vec3 vP; varying vec3 vN; varying vec3 vView;
      uniform vec3 uSunLocal, uColor, uShadow, uDusk, uGlow;
      uniform float uTime, uCover, uScale, uOpacity, uCamAlt, uAlt, uSpeed, uBand, uRp;
      ${NOISE_GLSL}
      float field(vec3 p) {
        vec3 q = p * uScale + vec3(uTime * 0.006 * uSpeed, 0.0, uTime * 0.003 * uSpeed);
        q.y *= 1.0 + uBand * 2.0;
        float warp = n3(q * 0.7 + 11.0) - 0.5;
        float d = fbm5(q + warp * 1.3);
        // Crisp small puffs on the edges of the big weather systems.
        return d + (n3(q * 11.0) - 0.5) * 0.045 + (n3(q * 27.0) - 0.5) * 0.02;
      }
      void main() {
        float d = field(vP);
        float a = smoothstep(uCover, uCover + 0.17, d);
        if (a < 0.01) discard;
        float lightD = field(normalize(vP + uSunLocal * 0.035));
        float selfShadow = smoothstep(uCover - 0.04, uCover + 0.24, lightD);
        float ndl = dot(vP, uSunLocal);
        float day = smoothstep(-0.14, 0.26, ndl);
        float dusk = smoothstep(-0.2, 0.05, ndl) * smoothstep(0.34, 0.08, ndl);
        vec3 lit = mix(uShadow, uColor, 1.0 - selfShadow * 0.75);
        vec3 col = lit * day * 1.02 + uDusk * dusk * 0.8 * (1.0 - selfShadow * 0.4);
        col += uGlow * a;
        col += uShadow * 0.012;
        // Thin out on approach, so that the city stays visible once you are near the ground.
        float fade = uCamAlt > uAlt
          ? mix(0.03, 1.0, smoothstep(uAlt * 2.6, uRp * 1.25, uCamAlt))
          : smoothstep(0.0, uAlt * 0.6, uAlt - uCamAlt) * 0.8;
        float view = dot(normalize(vN), normalize(vView));
        float limb = smoothstep(0.0, 0.25, abs(view));
        float opacity = a * uOpacity * fade * mix(0.55, 1.0, limb);
        gl_FragColor = vec4(col * opacity, opacity);
      }`,
    side: THREE.DoubleSide,
    transparent: true,
    depthWrite: false,
    blending: THREE.CustomBlending,
    blendEquation: THREE.AddEquation,
    blendSrc: THREE.OneFactor,
    blendDst: THREE.OneMinusSrcAlphaFactor,
  });
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(r, 128, 96), material);
  mesh.renderOrder = 3;
  return mesh;
}

/** Planetary rings, with the planet's shadow falling across them. */
export function createRings(R, cfg, noiseTex, sunUniform) {
  const inner = R * (cfg.inner || 1.45), outer = R * (cfg.outer || 2.35);
  const geo = new THREE.RingGeometry(inner, outer, 196, 8);
  const material = new THREE.ShaderMaterial({
    uniforms: {
      uInner: { value: inner },
      uOuter: { value: outer },
      uR: { value: R },
      uSun: sunUniform,
      uNoise: { value: noiseTex },
      uA: { value: new THREE.Color(cfg.colorA || 0xe8c98a) },
      uB: { value: new THREE.Color(cfg.colorB || 0x8a6a48) },
    },
    vertexShader: /* glsl */`
      varying vec3 vLocal;
      void main() { vLocal = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
    fragmentShader: /* glsl */`
      precision highp float;
      varying vec3 vLocal;
      uniform float uInner, uOuter, uR;
      uniform vec3 uSun, uA, uB;
      ${NOISE_GLSL}
      void main() {
        float r = length(vLocal);
        float t = (r - uInner) / (uOuter - uInner);
        float bands = n3(vec3(t * 15.0, 2.0, 0.0)) * 0.6 + n3(vec3(t * 62.0, 9.0, 0.0)) * 0.4;
        float gaps = 0.25 + 0.75 * smoothstep(0.34, 0.56, bands);
        float edge = smoothstep(0.0, 0.04, t) * smoothstep(1.0, 0.92, t);
        float cassini = 1.0 - 0.85 * smoothstep(0.022, 0.0, abs(t - 0.63));
        float a = gaps * edge * cassini * 0.5;
        if (a < 0.01) discard;
        vec3 col = mix(uB, uA, bands);
        vec3 p = vLocal;
        float along = dot(p, uSun);
        float perp = length(p - uSun * along);
        float shadow = along < 0.0 ? smoothstep(uR * 0.97, uR * 1.04, perp) : 1.0;
        col *= shadow * 0.9 + 0.012;
        gl_FragColor = vec4(col * a, a);
      }`,
    side: THREE.DoubleSide,
    transparent: true,
    depthWrite: false,
    blending: THREE.CustomBlending,
    blendEquation: THREE.AddEquation,
    blendSrc: THREE.OneFactor,
    blendDst: THREE.OneMinusSrcAlphaFactor,
  });
  const mesh = new THREE.Mesh(geo, material);
  mesh.renderOrder = 1;
  return mesh;
}

/** Curtains of light over the poles, for worlds that have them. */
export function createAurora(R, cfg, noiseTex, shared) {
  const r = R * (cfg.radius || 1.17);
  const geo = new THREE.SphereGeometry(r, 96, 32, 0, Math.PI * 2, 0, Math.PI);
  const material = new THREE.ShaderMaterial({
    uniforms: {
      uNoise: { value: noiseTex },
      uTime: shared.uTime,
      uSunLocal: shared.uSunLocal,
      uA: { value: new THREE.Color(cfg.colorA || 0x56ffb4) },
      uB: { value: new THREE.Color(cfg.colorB || 0xb26cff) },
      uLat: { value: cfg.latitude ?? 0.72 },
      uGain: { value: cfg.gain ?? 3.2 },
    },
    vertexShader: /* glsl */`
      varying vec3 vP;
      void main() { vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
    fragmentShader: /* glsl */`
      precision highp float;
      varying vec3 vP;
      uniform vec3 uA, uB, uSunLocal;
      uniform float uTime, uLat, uGain;
      ${NOISE_GLSL}
      void main() {
        float lat = abs(vP.y);
        float lon = atan(vP.z, vP.x);
        float wob = (n3(vec3(lon * 1.6, uTime * 0.05, vP.y * 2.0)) - 0.5) * 0.18;
        float band = smoothstep(0.075, 0.0, abs(lat - uLat + wob));
        float curtain = 0.35 + 0.65 * n3(vec3(lon * 14.0, uTime * 0.16, 3.0));
        float dark = smoothstep(0.35, -0.2, dot(vP, uSunLocal));
        vec3 col = mix(uA, uB, smoothstep(0.0, 0.08, abs(lat - uLat + wob))) * band * curtain * uGain * (0.15 + dark);
        gl_FragColor = vec4(col, 0.0);
      }`,
    side: THREE.DoubleSide,
    transparent: true,
    depthWrite: false,
    blending: THREE.CustomBlending,
    blendEquation: THREE.AddEquation,
    blendSrc: THREE.OneFactor,
    blendDst: THREE.OneFactor,
  });
  const mesh = new THREE.Mesh(geo, material);
  mesh.renderOrder = 4;
  return mesh;
}
