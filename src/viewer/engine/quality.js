// Which quality level a machine starts on. The world still adapts while it runs (see RELIEF
// in world.js); this only decides how much geometry is built up front, which cannot change later.

export const QUALITY_KEY = 'wikitary:quality';

const SOFTWARE = /swiftshader|llvmpipe|softpipe|basic render|software/i;
// Graphics built into the processor share its memory and power budget. Intel's Arc cards and
// AMD's numbered Radeon cards are discrete; "AMD Radeon(TM) Graphics" alone is an APU.
const INTEGRATED = /intel(?!.*\barc\b)|iris|uhd graphics|hd graphics|radeon\(tm\) graphics|radeon graphics|vega \d+ graphics|mali|adreno|powervr|videocore|apple a\d/i;

/**
 * @param {{gpu?: string, mobile?: boolean, memory?: number, cores?: number}} machine
 * @returns {'low'|'medium'|'high'}
 */
export function pickQuality({ gpu = '', mobile = false, memory = 8, cores = 8 }) {
  if (SOFTWARE.test(gpu)) return 'low';
  if (mobile) return 'low';
  if (INTEGRATED.test(gpu)) return memory <= 4 || cores <= 4 ? 'low' : 'medium';
  return memory <= 4 || cores <= 4 ? 'medium' : 'high';
}

/** The graphics card's name, where the browser tells it. */
export function gpuName() {
  try {
    const gl = document.createElement('canvas').getContext('webgl2');
    if (!gl) return '';
    const ext = gl.getExtension('WEBGL_debug_renderer_info');
    const name = String(gl.getParameter(ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER) || '');
    gl.getExtension('WEBGL_lose_context')?.loseContext();
    return name;
  } catch {
    return '';
  }
}

/** A level chosen in the help panel outlives the page; 'auto' or nothing means: decide here. */
export function storedQuality() {
  try { return localStorage.getItem(QUALITY_KEY) || 'auto'; } catch { return 'auto'; }
}

export function storeQuality(level) {
  try {
    if (level === 'auto') localStorage.removeItem(QUALITY_KEY);
    else localStorage.setItem(QUALITY_KEY, level);
  } catch { /* storage blocked: the choice lasts as long as the page */ }
}

export function autoQuality() {
  return pickQuality({
    gpu: gpuName(),
    mobile: /Android|iPhone|iPad|Mobile/i.test(navigator.userAgent),
    memory: navigator.deviceMemory || 8,
    cores: navigator.hardwareConcurrency || 8,
  });
}
