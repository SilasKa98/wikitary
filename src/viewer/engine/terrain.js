// Planet surface: a cube-sphere displaced on the CPU (so buildings can sit exactly on it)
// and shaded per pixel by a civilisation-specific GLSL function.
import * as THREE from 'three';
import { NOISE_GLSL } from './noise.js';

const FACES = [
  [[0, 0, -1], [0, 1, 0], [1, 0, 0]],
  [[0, 0, 1], [0, 1, 0], [-1, 0, 0]],
  [[1, 0, 0], [0, 0, -1], [0, 1, 0]],
  [[1, 0, 0], [0, 0, 1], [0, -1, 0]],
  [[1, 0, 0], [0, 1, 0], [0, 0, 1]],
  [[-1, 0, 0], [0, 1, 0], [0, 0, -1]],
];

/**
 * @param sample (x,y,z,out) writes [altitude, rawHeight, cityMask] for a unit direction.
 * Each face carries a one-vertex ghost ring, so normals stay continuous across cube seams.
 */
export function buildCubeSphere(R, N, sample) {
  const vertsPerFace = (N + 1) * (N + 1);
  const count = vertsPerFace * 6;
  const position = new Float32Array(count * 3);
  const normal = new Float32Array(count * 3);
  const info = new Float32Array(count * 2);
  const index = new Uint32Array(N * N * 6 * 6);
  const G = N + 3;
  const px = new Float32Array(G * G * 3);
  const out = [0, 0, 0];
  let vi = 0, ii = 0;

  for (let f = 0; f < 6; f++) {
    const [right, up, nor] = FACES[f];
    const faceStart = vi;
    const hRaw = new Float32Array(G * G), hMask = new Float32Array(G * G);
    for (let j = 0; j < G; j++) {
      const v = Math.tan((((j - 1) / N) * 2 - 1) * (Math.PI / 4));
      for (let i = 0; i < G; i++) {
        const u = Math.tan((((i - 1) / N) * 2 - 1) * (Math.PI / 4));
        let x = nor[0] + right[0] * u + up[0] * v;
        let y = nor[1] + right[1] * u + up[1] * v;
        let z = nor[2] + right[2] * u + up[2] * v;
        const l = Math.hypot(x, y, z);
        x /= l; y /= l; z /= l;
        sample(x, y, z, out);
        const r = R + out[0];
        const k = (j * G + i) * 3;
        px[k] = x * r; px[k + 1] = y * r; px[k + 2] = z * r;
        hRaw[j * G + i] = out[1];
        hMask[j * G + i] = out[2];
      }
    }
    for (let j = 1; j <= N + 1; j++) {
      for (let i = 1; i <= N + 1; i++) {
        const c = (j * G + i) * 3, l = (j * G + i - 1) * 3, rr = (j * G + i + 1) * 3, d = ((j - 1) * G + i) * 3, t = ((j + 1) * G + i) * 3;
        const ax = px[rr] - px[l], ay = px[rr + 1] - px[l + 1], az = px[rr + 2] - px[l + 2];
        const bx = px[t] - px[d], by = px[t + 1] - px[d + 1], bz = px[t + 2] - px[d + 2];
        let nx = ay * bz - az * by, ny = az * bx - ax * bz, nz = ax * by - ay * bx;
        const nl = Math.hypot(nx, ny, nz) || 1;
        nx /= nl; ny /= nl; nz /= nl;
        position[vi * 3] = px[c]; position[vi * 3 + 1] = px[c + 1]; position[vi * 3 + 2] = px[c + 2];
        normal[vi * 3] = nx; normal[vi * 3 + 1] = ny; normal[vi * 3 + 2] = nz;
        info[vi * 2] = hRaw[j * G + i];
        info[vi * 2 + 1] = hMask[j * G + i];
        vi++;
      }
    }
    for (let j = 0; j < N; j++) {
      for (let i = 0; i < N; i++) {
        const a = faceStart + j * (N + 1) + i, b = a + 1, d = a + N + 1, c = d + 1;
        index[ii++] = a; index[ii++] = b; index[ii++] = c;
        index[ii++] = a; index[ii++] = c; index[ii++] = d;
      }
    }
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(position, 3));
  geo.setAttribute('normal', new THREE.BufferAttribute(normal, 3));
  geo.setAttribute('aInfo', new THREE.BufferAttribute(info, 2));
  geo.setIndex(new THREE.BufferAttribute(index, 1));
  geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(), R * 1.3);
  return geo;
}

/** Lighting-independent helpers available to every civilisation's surface() function. */
export const SURFACE_LIB = /* glsl */`
vec3 bumpOf(vec3 p, float f, float amp) {
  const float e = 0.35;
  float c = n3(p * f);
  return amp * vec3(n3(p * f + vec3(e, 0.0, 0.0)) - c, n3(p * f + vec3(0.0, e, 0.0)) - c, n3(p * f + vec3(0.0, 0.0, e)) - c);
}
void liquid(vec3 p, float h, vec3 deep, vec3 shallow, float waveSize, inout vec3 albedo, inout float rough, inout float metal, inout vec3 bump) {
  float d = clamp(-h / 0.42, 0.0, 1.0);
  albedo = mix(shallow, deep, pow(d, 0.65));
  rough = 0.09;
  metal = 0.0;
  vec3 q = p * waveSize;
  bump += bumpOf(q + vec3(uTime * 0.05, 0.0, uTime * 0.04), 1.0, 0.13);
  bump += bumpOf(q * 3.1 - vec3(0.0, uTime * 0.09, uTime * 0.06), 1.0, 0.07);
}
`;

export function createTerrainMaterial(civ, uniforms) {
  const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 1, metalness: 0 });
  mat.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, uniforms);
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', `#include <common>
        attribute vec2 aInfo;
        varying vec2 vInfo;
        varying vec3 vLocal;`)
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        vInfo = aInfo;
        vLocal = position;`);
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', `#include <common>
        varying vec2 vInfo;
        varying vec3 vLocal;
        uniform mat3 normalMatrix;
        uniform vec3 uSunLocal;
        uniform float uTime;
        uniform float uHazeAmt;
        uniform float uCloudCover;
        uniform float uCloudScale;
        uniform vec3 uHazeColor;
        uniform float uFogD;
        uniform vec3 uFogC;
        ${NOISE_GLSL}
        ${SURFACE_LIB}
        ${civ.surfaceGLSL}
      `)
      .replace('#include <color_fragment>', `#include <color_fragment>
        vec3 sP = normalize(vLocal);
        vec3 sAlbedo = vec3(0.5);
        float sRough = 0.9, sMetal = 0.0;
        vec3 sEmissive = vec3(0.0), sBump = vec3(0.0);
        float sDist = length(vViewPosition);
        float sDay = dot(sP, uSunLocal);
        surface(sP, vInfo.x, vInfo.y, sDist, sDay, sAlbedo, sRough, sMetal, sEmissive, sBump);
        if (uCloudCover > 0.0) {
          vec3 cp = sP * uCloudScale + vec3(uTime * 0.006, 0.0, uTime * 0.003);
          float shadow = smoothstep(uCloudCover, uCloudCover + 0.2, fbm3(cp));
          sAlbedo *= 1.0 - shadow * 0.42;
        }
        diffuseColor.rgb = sAlbedo;`)
      .replace('#include <roughnessmap_fragment>', `#include <roughnessmap_fragment>
        roughnessFactor = sRough;`)
      .replace('#include <metalnessmap_fragment>', `#include <metalnessmap_fragment>
        metalnessFactor = sMetal;`)
      .replace('#include <normal_fragment_maps>', `#include <normal_fragment_maps>
        normal = normalize(normal + normalMatrix * sBump);`)
      .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
        totalEmissiveRadiance += sEmissive;`)
      .replace('#include <opaque_fragment>', `
        float hazeF = pow(1.0 - saturate(dot(normal, normalize(vViewPosition))), 2.6);
        outgoingLight += uHazeColor * hazeF * smoothstep(-0.25, 0.45, sDay) * uHazeAmt;
        #include <opaque_fragment>`)
      .replace('#include <fog_fragment>', `
        gl_FragColor.rgb = mix(gl_FragColor.rgb, uFogC, 1.0 - exp(-uFogD * uFogD * dot(vViewPosition, vViewPosition)));`);
  };
  mat.customProgramCacheKey = () => `terrain-${civ.id}`;
  return mat;
}
