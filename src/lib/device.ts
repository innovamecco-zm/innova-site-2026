interface NetworkInformationLike {
  saveData?: boolean
  effectiveType?: string
}

export const prefersReducedMotion = (): boolean =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Decide whether this device should get the WebGL hero.
 * Falls back to the static poster on low-core CPUs, Save-Data, slow connections,
 * reduced motion, or missing WebGL.
 */
export function canRender3D(): boolean {
  if (typeof window === 'undefined') return false
  // Manual override for testing: ?3d=1 forces the scene, ?3d=0 forces the poster.
  const force = new URLSearchParams(window.location.search).get('3d')
  if (force === '0') return false
  if (prefersReducedMotion()) return false
  if (force === '1') return true

  const nav = navigator as Navigator & { connection?: NetworkInformationLike; deviceMemory?: number }
  if ((nav.hardwareConcurrency ?? 8) <= 4) return false
  if (nav.deviceMemory !== undefined && nav.deviceMemory < 4) return false

  const conn = nav.connection
  if (conn?.saveData) return false
  if (conn?.effectiveType && ['slow-2g', '2g', '3g'].includes(conn.effectiveType)) return false

  try {
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl2') ?? canvas.getContext('webgl')
    if (!gl) return false
  } catch {
    return false
  }
  return true
}

export const isFinePointer = (): boolean =>
  typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches
