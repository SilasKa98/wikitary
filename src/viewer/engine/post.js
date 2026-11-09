// HDR post-processing: bloom, warp streaks during flights, lens flare, film finish.
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';

const FinishShader = {
  uniforms: {
    tDiffuse: { value: null },
    uWarp: { value: 0 },
    uTime: { value: 0 },
    uSunUv: { value: new THREE.Vector2(0.5, 0.5) },
    uSunVis: { value: 0 },
    uAspect: { value: 1 },
    uFade: { value: 1 },
    uFlash: { value: 0 },
    uFlashColor: { value: new THREE.Color(1, 1, 1) },
  },
  vertexShader: /* glsl */`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,
  fragmentShader: /* glsl */`
    precision highp float;
    varying vec2 vUv;
    uniform sampler2D tDiffuse;
    uniform float uWarp, uTime, uSunVis, uAspect, uFade, uFlash;
    uniform vec2 uSunUv;
    uniform vec3 uFlashColor;
    float grain(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    float disc(vec2 uv, vec2 c, float r, float soft) { return smoothstep(r, r * soft, length((uv - c) * vec2(uAspect, 1.0))); }
    void main() {
      vec2 c = vUv - 0.5;
      float r2 = dot(c, c);
      vec3 col;
      if (uWarp > 0.002) {
        const int N = 12;
        vec3 sum = vec3(0.0);
        for (int i = 0; i < N; i++) {
          float k = float(i) / float(N - 1);
          float s = 1.0 - uWarp * 0.16 * k * smoothstep(0.0, 0.3, r2 * 2.2);
          vec3 tint = mix(vec3(1.0, 0.92, 0.9), vec3(0.85, 0.92, 1.0), k);
          sum += texture2D(tDiffuse, 0.5 + c * s).rgb * tint;
        }
        col = sum / float(N);
      } else {
        float ca = r2 * 0.0035;
        col = vec3(texture2D(tDiffuse, vUv + c * ca).r, texture2D(tDiffuse, vUv).g, texture2D(tDiffuse, vUv - c * ca).b);
      }
      if (uSunVis > 0.003) {
        vec2 axis = vec2(0.5) - uSunUv;
        vec3 flare = vec3(0.0);
        flare += vec3(1.0, 0.72, 0.45) * disc(vUv, uSunUv + axis * 0.55, 0.018, 0.5) * 0.10;
        flare += vec3(0.45, 0.72, 1.0) * disc(vUv, uSunUv + axis * 1.24, 0.042, 0.82) * 0.055;
        flare += vec3(0.8, 0.5, 1.0) * disc(vUv, uSunUv + axis * 1.62, 0.074, 0.92) * 0.035;
        flare += vec3(0.5, 1.0, 0.75) * disc(vUv, uSunUv + axis * 2.05, 0.028, 0.6) * 0.05;
        vec2 d = (vUv - uSunUv) * vec2(uAspect, 1.0);
        float streak = exp(-abs(d.y) * 260.0) * exp(-abs(d.x) * 5.5);
        flare += vec3(1.0, 0.82, 0.62) * streak * 0.1;
        col += flare * uSunVis;
      }
      col = mix(col, uFlashColor, uFlash);
      col *= 1.0 - smoothstep(0.26, 0.92, r2 * 1.75) * 0.5;
      col += (grain(vUv * 913.0 + fract(uTime) * 71.0) - 0.5) * 0.009;
      gl_FragColor = vec4(max(col, 0.0) * uFade, 1.0);
    }`,
};

// A single NaN pixel would be smeared over the whole screen by the bloom blur.
const SanitizeShader = {
  uniforms: { tDiffuse: { value: null } },
  vertexShader: /* glsl */`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,
  fragmentShader: /* glsl */`
    precision highp float;
    varying vec2 vUv;
    uniform sampler2D tDiffuse;
    void main() {
      // min/max return the non-NaN operand, which also defuses NaN and infinity.
      gl_FragColor = vec4(max(min(texture2D(tDiffuse, vUv).rgb, vec3(48.0)), vec3(0.0)), 1.0);
    }`,
};

export function createPipeline(renderer, scene, camera, { samples = 4, bloom = true } = {}) {
  const size = renderer.getDrawingBufferSize(new THREE.Vector2());
  const target = new THREE.WebGLRenderTarget(size.x, size.y, { type: THREE.HalfFloatType, samples });
  const composer = new EffectComposer(renderer, target);
  composer.addPass(new RenderPass(scene, camera));
  composer.addPass(new ShaderPass(SanitizeShader));
  const bloomPass = new UnrealBloomPass(new THREE.Vector2(size.x / 2, size.y / 2), 0.34, 0.6, 1.0);
  bloomPass.enabled = bloom;
  composer.addPass(bloomPass);
  const finish = new ShaderPass(FinishShader);
  composer.addPass(finish);
  composer.addPass(new OutputPass());
  return { composer, bloom: bloomPass, finish };
}
