// The shared physically-based materials for everything a civilisation builds:
// procedural facades that light up at dusk, hover highlights, spinning parts, roads.
import * as THREE from 'three';
import { NOISE_GLSL } from './noise.js';

const FACADE_GLSL = /* glsl */`
float hash2(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
// Returns emissive light; darkens or glazes the base where a window is.
vec3 facade(vec2 uv, float style, float seed, float night, float pixel, vec3 winColor, inout vec3 base, inout float rough, inout float metal) {
  vec2 id = floor(uv);
  vec2 f = fract(uv);
  float detail = smoothstep(1.1, 0.35, pixel);
  float m = 0.0;
  float rnd = hash2(id + seed * 17.3);
  float lit = step(0.36, rnd);
  float power = 0.45 + rnd * 1.0;
  if (style < 1.5) {
    m = step(0.17, f.x) * step(f.x, 0.83) * step(0.22, f.y) * step(f.y, 0.78);
  } else if (style < 2.5) {
    m = step(0.28, f.y) * step(f.y, 0.72);
    rnd = hash2(vec2(floor(uv.x * 0.2), id.y) + seed * 9.1);
    lit = step(0.3, rnd);
    power = 0.5 + rnd * 0.9;
  } else if (style < 3.5) {
    m = step(0.3, f.x) * step(f.x, 0.7);
    rnd = hash2(vec2(id.x, floor(uv.y * 0.25)) + seed * 5.7);
    lit = step(0.25, rnd);
    power = 0.5 + rnd * 0.9;
  } else if (style < 4.5) {
    float d = length(f - 0.5);
    m = smoothstep(0.24, 0.19, d);
    power = 0.4 + rnd * 0.9;
  } else if (style < 5.5) {
    float band = fract(uv.y * 0.11 - uTime * 0.18 + hash2(vec2(id.x, seed)) * 3.0);
    m = step(0.2, f.x) * step(f.x, 0.8);
    lit = 1.0;
    power = smoothstep(0.65, 1.0, band) * 1.7 + 0.05;
    night = 1.0;
  } else {
    float d = length(f - 0.5);
    m = smoothstep(0.42, 0.14, d);
    lit = 1.0;
    power = (0.25 + 0.75 * pow(0.5 + 0.5 * sin(uTime * 1.3 + rnd * 6.28 + uv.y * 0.3), 3.0)) * 1.4;
    night = max(night, 0.45);
  }
  if (style > 6.5) {
    // Crystal: no openings at all, just veins of light rising through the solid.
    float vein = smoothstep(0.42, 0.5, abs(f.x - 0.5));
    float rise = pow(0.5 + 0.5 * sin(uv.y * 0.55 - uTime * 0.6 + rnd * 6.28), 3.0);
    base *= 0.92 + 0.16 * rnd;
    return winColor * vein * (0.05 + rise * 0.5) * detail * (0.25 + night * 1.2);
  }
  float glaze = m * detail;
  // Weathering, floor lines and a recessed frame around each opening.
  float floorLine = 1.0 - 0.14 * smoothstep(0.12, 0.0, abs(f.y - 0.03)) * detail;
  float weather = 0.9 + 0.2 * hash2(vec2(floor(uv.x * 0.25), floor(uv.y * 0.2)) + seed);
  base *= floorLine * weather;
  float frame = m * (1.0 - smoothstep(0.0, 0.06, min(min(f.x - 0.17, 0.83 - f.x), min(f.y - 0.22, 0.78 - f.y))));
  base = mix(base, base * 0.45, clamp(frame, 0.0, 1.0) * detail * (style < 1.5 ? 1.0 : 0.0));
  float tint = hash2(id + seed * 3.1);
  vec3 pane = mix(vec3(0.012, 0.016, 0.024), vec3(0.05, 0.075, 0.1), tint);
  base = mix(base, pane, glaze * (style > 3.5 && style < 4.5 ? 0.6 : 0.93));
  rough = mix(rough, 0.07 + tint * 0.12, glaze);
  metal = mix(metal, 0.9, glaze);
  float avg = 0.13;
  return winColor * mix(avg, m * lit * power, detail) * night * 1.15;
}
`;

/** @param uniforms planet-wide shared uniform objects */
export function createCityMaterial(civ, uniforms, { spin = false, instanced = false } = {}) {
  const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 1, metalness: 0, vertexColors: true });
  mat.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, uniforms);
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', `#include <common>
        attribute vec2 aPbr; attribute float aGlow; attribute vec3 aWin; attribute float aPage;
        uniform highp sampler2D uFocusTex; uniform float uFocusAmt;
        uniform highp sampler2D uSecTex; uniform float uSecPage, uSecIdx;
        varying float vDim; varying float vKin; varying float vSecRead; varying float vSecNow;
        ${spin ? 'attribute vec3 aPivot; attribute vec4 aAxis;' : ''}
        varying vec2 vPbr; varying float vGlow; varying vec3 vWin; varying float vPage; varying float vDay; varying float vAbove; varying vec3 vLP;
        uniform vec3 uSunLocal; uniform float uTime, uGrow, uGround;
        ${spin ? `vec3 rodrigues(vec3 v, vec3 k, float a) { float c = cos(a), s = sin(a); return v * c + cross(k, v) * s + k * dot(k, v) * (1.0 - c); }` : ''}`)
      .replace('#include <beginnormal_vertex>', `#include <beginnormal_vertex>
        ${spin ? 'objectNormal = rodrigues(objectNormal, aAxis.xyz, uTime * aAxis.w);' : ''}`)
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        ${spin ? 'transformed = aPivot + rodrigues(transformed - aPivot, aAxis.xyz, uTime * aAxis.w);' : ''}
        ${instanced ? '' : `
        { float rr = length(transformed);
          if (uGrow < 0.999) transformed *= (uGround + (rr - uGround) * uGrow) / max(rr, 1e-4); }`}
        vPbr = aPbr; vGlow = aGlow; vWin = aWin; vPage = aPage; vLP = transformed;
        // What isn't connected to the page in focus steps back; its neighbours step forward.
        vDim = 0.0; vKin = 0.0;
        // Section buildings carry their number in the fraction of the page id (see city.js).
        vSecRead = 0.0; vSecNow = 0.0;
        float cFrac = fract(aPage);
        if (aPage > -0.5 && cFrac > 0.39) {
          int cIdx = int((cFrac - 0.4) / 0.004 + 0.5);
          float cPageId = floor(aPage);
          vec4 cMask = texelFetch(uSecTex, ivec2(int(cPageId), 0), 0);
          int cByte = int(cMask[cIdx / 8] * 255.0 + 0.5);
          vSecRead = float((cByte >> (cIdx - (cIdx / 8) * 8)) & 1);
          vSecNow = (abs(cPageId - uSecPage) < 0.5 && abs(float(cIdx) - uSecIdx) < 0.5) ? 1.0 : 0.0;
        }
        if (uFocusAmt > 0.001) {
          if (aPage > -0.5) {
            vec4 rel = texelFetch(uFocusTex, ivec2(int(aPage + 0.5), 0), 0);
            vKin = max(rel.g * 0.42, rel.b * 0.8);
            vDim = uFocusAmt * (1.0 - max(max(rel.r, rel.g), rel.b)) * 0.66;
            vKin *= uFocusAmt;
          } else {
            vDim = uFocusAmt * 0.3;
          }
        }
        #ifdef USE_INSTANCING
          vDay = dot(normalize((instanceMatrix * vec4(transformed, 1.0)).xyz), uSunLocal);
          vAbove = 1.0;
        #else
          vDay = dot(normalize(transformed), uSunLocal);
          // Walls darken toward the ground; flat pieces of ground themselves stay as painted.
          float facingUp = dot(normalize(objectNormal), normalize(transformed));
          vAbove = mix(length(transformed) - uGround, 1.0, smoothstep(0.8, 0.97, facingUp));
        #endif`);
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', `#include <common>
        varying vec2 vPbr; varying float vGlow; varying vec3 vWin; varying float vPage; varying float vDay; varying float vAbove; varying vec3 vLP;
        varying float vDim; varying float vKin; varying float vSecRead; varying float vSecNow;
        uniform float uTime, uHover, uSelected, uFogD;
        uniform vec3 uWinColor, uAccent, uFogC;
        ${NOISE_GLSL}
        ${FACADE_GLSL}`)
      .replace('#include <color_fragment>', `#include <color_fragment>
        float cNight = smoothstep(0.16, -0.08, vDay);
        float cRough = vPbr.x, cMetal = vPbr.y;
        vec3 cEmissive = vec3(0.0);
        if (vWin.z > 0.5) {
          float px = clamp((fwidth(vWin.x) + fwidth(vWin.y)) * 0.75, 0.0, 2.0);
          // Rounded: interpolation jitters the value slightly, and the window hash would amplify that.
          cEmissive += facade(vWin.xy, floor(vWin.z + 0.5), floor(vPage + 0.5) + 2.0, max(cNight, vSecRead * 0.85), px, uWinColor, diffuseColor.rgb, cRough, cMetal);
        }
        // Weathering at two scales, so that no surface reads as flat paint from up close.
        #ifndef USE_INSTANCING
          float cCloseUp = 1.0 - smoothstep(4.0, 26.0, length(vViewPosition));
          if (cCloseUp > 0.0) {
            float grime = n3(vLP * 7.0) * 0.55 + n3(vLP * 31.0) * 0.3 + n3(vLP * 110.0) * 0.15;
            diffuseColor.rgb *= mix(1.0, 0.72 + grime * 0.56, cCloseUp);
            cRough = clamp(cRough + (grime - 0.5) * 0.25 * cCloseUp, 0.03, 1.0);
          }
        #endif
        // Ambient occlusion where walls meet the ground: cheap, and it seats buildings in the world.
        diffuseColor.rgb *= 0.42 + 0.58 * smoothstep(0.0, 0.1, vAbove);
        if (vGlow > 0.0) cEmissive += vColor.rgb * vGlow;
        else if (vGlow < 0.0) cEmissive += vColor.rgb * -vGlow * cNight;`)
      .replace('#include <roughnessmap_fragment>', `#include <roughnessmap_fragment>
        roughnessFactor = cRough;`)
      .replace('#include <metalnessmap_fragment>', `#include <metalnessmap_fragment>
        metalnessFactor = cMetal;`)
      .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
        totalEmissiveRadiance += cEmissive;
        if (vPage >= 0.0) {
          float hl = max(step(abs(vPage - uHover), 0.5) * 0.7, step(abs(vPage - uSelected), 0.5));
          // Neighbourhood buildings are marked by a quarter on their page id.
          float cOwn = abs(fract(vPage) - 0.25) < 0.12 ? 0.1 : 1.0;
          hl *= cOwn;
          if (hl > 0.0) {
            float rim = pow(1.0 - saturate(dot(normalize(vNormal), normalize(vViewPosition))), 2.0);
            totalEmissiveRadiance += uAccent * hl * (0.015 + rim * 0.55) * (0.8 + 0.2 * sin(uTime * 3.0));
          }
          if (vKin > 0.001) {
            float rim = pow(1.0 - saturate(dot(normalize(vNormal), normalize(vViewPosition))), 2.0);
            totalEmissiveRadiance += uAccent * vKin * cOwn * (0.01 + rim * 0.5);
          }
          if (vSecNow + vSecRead > 0.01) {
            float rim = pow(1.0 - saturate(dot(normalize(vNormal), normalize(vViewPosition))), 2.0);
            totalEmissiveRadiance += uAccent * vSecNow * (0.42 + rim * 2.2) * (0.8 + 0.2 * sin(uTime * 3.0));
            // Bright enough to tell by day, when the lit windows alone would drown in the sun.
            totalEmissiveRadiance += uWinColor * vSecRead * (1.0 - vSecNow) * (0.05 + rim * 0.5);
          }
        }`)
      .replace('#include <lights_fragment_maps>', `#include <lights_fragment_maps>
        { float iblDay = 0.04 + 0.96 * smoothstep(-0.2, 0.3, vDay);
          #if defined(USE_ENVMAP) && defined(RE_IndirectSpecular)
            radiance *= iblDay;
          #endif
          #if defined(RE_IndirectDiffuse) && defined(USE_ENVMAP)
            iblIrradiance *= iblDay;
          #endif
        }`)
      .replace('#include <fog_fragment>', `
        gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(dot(gl_FragColor.rgb, vec3(0.3, 0.59, 0.11))) * 0.42, vDim);
        gl_FragColor.rgb = mix(gl_FragColor.rgb, uFogC, 1.0 - exp(-uFogD * uFogD * dot(vViewPosition, vViewPosition)));`);
  };
  mat.customProgramCacheKey = () => `city${spin ? '-spin' : ''}${instanced ? '-inst' : ''}`;
  return mat;
}

export function createRoadMaterial(civ, uniforms) {
  const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 1, metalness: 0 });
  mat.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, uniforms);
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', `#include <common>
        attribute vec2 aRoad; attribute vec2 aEnds;
        varying vec2 vRoad; varying vec2 vEnds; varying float vDay; varying vec3 vRP;
        uniform highp sampler2D uFocusTex; uniform float uFocusAmt;
        varying float vDim; varying float vOnRoute;
        uniform vec3 uSunLocal; uniform float uGrow, uGround;`)
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        vRoad = aRoad; vEnds = aEnds;
        vDay = dot(normalize(transformed), uSunLocal);
        vRP = normalize(transformed);
        vDim = 0.0; vOnRoute = 0.0;
        if (uFocusAmt > 0.001) {
          vec4 ra = texelFetch(uFocusTex, ivec2(int(aEnds.x + 0.5), 0), 0);
          vec4 rb = texelFetch(uFocusTex, ivec2(int(aEnds.y + 0.5), 0), 0);
          vOnRoute = ra.b * rb.b * uFocusAmt;
          vDim = uFocusAmt * (1.0 - max(max(ra.r, rb.r), vOnRoute)) * 0.6;
        }`);
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', `#include <common>
        varying vec2 vRoad; varying vec2 vEnds; varying float vDay; varying vec3 vRP;
        varying float vDim; varying float vOnRoute;
        uniform float uTime, uSelected, uHover, uFogD;
        uniform vec3 uAccent, uFogC;
        ${NOISE_GLSL}
        ${civ.road.glsl}`)
      .replace('#include <color_fragment>', `#include <color_fragment>
        float rNight = smoothstep(0.16, -0.08, vDay);
        vec3 rAlbedo = vec3(0.1); float rRough = 0.9, rMetal = 0.0; vec3 rEmissive = vec3(0.0);
        roadSurface(vRoad.x, vRoad.y, rNight, rAlbedo, rRough, rMetal, rEmissive);
        diffuseColor.rgb = rAlbedo;`)
      .replace('#include <roughnessmap_fragment>', `#include <roughnessmap_fragment>
        roughnessFactor = rRough;`)
      .replace('#include <metalnessmap_fragment>', `#include <metalnessmap_fragment>
        metalnessFactor = rMetal;`)
      .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
        totalEmissiveRadiance += rEmissive;
        float rSel = max(max(step(abs(vEnds.x - uSelected), 0.5), step(abs(vEnds.y - uSelected), 0.5)),
                         max(step(abs(vEnds.x - uHover), 0.5), step(abs(vEnds.y - uHover), 0.5)) * 0.6);
        if (rSel > 0.0) {
          float pulse = 0.5 + 0.5 * sin(vRoad.y * 5.0 - uTime * 5.0);
          totalEmissiveRadiance += uAccent * rSel * (0.1 + pulse * 0.55) * smoothstep(1.0, 0.55, abs(vRoad.x));
        }
        if (vOnRoute > 0.01) {
          float dash = 0.5 + 0.5 * sin(vRoad.y * 3.0 - uTime * 7.0);
          totalEmissiveRadiance += uAccent * vOnRoute * (0.25 + dash * 1.1) * smoothstep(1.0, 0.5, abs(vRoad.x));
        }`)
      .replace('#include <fog_fragment>', `
        gl_FragColor.rgb *= 1.0 - vDim;
        gl_FragColor.rgb = mix(gl_FragColor.rgb, uFogC, 1.0 - exp(-uFogD * uFogD * dot(vViewPosition, vViewPosition)));`);
  };
  mat.customProgramCacheKey = () => `road-${civ.id}`;
  return mat;
}

/** Faint glowing arcs for flight routes, with dashes moving in the link's direction. */
export function createArcMaterial(uniforms, color) {
  return new THREE.ShaderMaterial({
    uniforms: {
      uTime: uniforms.uTime,
      uSelected: uniforms.uSelected,
      uHover: uniforms.uHover,
      uColor: { value: new THREE.Color(color) },
      uAccent: uniforms.uAccent,
      uFade: { value: 1 },
    },
    vertexShader: /* glsl */`
      attribute float aS; attribute vec2 aEnds;
      varying float vS; varying vec2 vEnds;
      void main() { vS = aS; vEnds = aEnds; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
    fragmentShader: /* glsl */`
      varying float vS; varying vec2 vEnds;
      uniform float uTime, uSelected, uHover, uFade;
      uniform vec3 uColor, uAccent;
      void main() {
        float sel = max(step(abs(vEnds.x - uSelected), 0.5), step(abs(vEnds.y - uSelected), 0.5));
        sel = max(sel, max(step(abs(vEnds.x - uHover), 0.5), step(abs(vEnds.y - uHover), 0.5)) * 0.7);
        float dash = smoothstep(0.4, 0.6, fract(vS * 1.6 - uTime * 0.7));
        vec3 col = mix(uColor * (0.015 + dash * 0.11), uAccent * (0.8 + dash * 2.2), sel);
        gl_FragColor = vec4(col, 1.0) * uFade;
      }`,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
}

/** Sprite-like points for the city glow seen from afar on the night side. */
export function createLightsMaterial(uniforms, color) {
  return new THREE.ShaderMaterial({
    uniforms: {
      uSunLocal: uniforms.uSunLocal,
      uColor: { value: new THREE.Color(color) },
      uScale: { value: 1 },
      uFade: { value: 1 },
    },
    vertexShader: /* glsl */`
      attribute float aSize;
      uniform vec3 uSunLocal; uniform float uScale;
      varying float vN;
      void main() {
        vN = smoothstep(0.1, -0.2, dot(normalize(position), uSunLocal));
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = max(1.2, aSize * uScale / -mv.z);
      }`,
    fragmentShader: /* glsl */`
      varying float vN;
      uniform vec3 uColor; uniform float uFade;
      void main() {
        float d = length(gl_PointCoord - 0.5) * 2.0;
        float a = pow(max(1.0 - d, 0.0), 2.0) * vN * uFade;
        if (a < 0.01) discard;
        gl_FragColor = vec4(uColor * a * 2.6, a);
      }`,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
}
