import { useId } from 'react'

/**
 * Static SVG stand-in for the 3D hero: two lit spheres (red, blue) with a purple glow
 * where they overlap. Renders instantly, is crisp at any DPR, and is what low-end,
 * Save-Data and reduced-motion visitors see.
 */
export function HeroPoster({ className = '' }: { className?: string }) {
  const id = useId().replace(/:/g, '')
  const r = `${id}r`
  const b = `${id}b`
  const g = `${id}g`
  const s = `${id}s`
  const clip = `${id}c`
  return (
    <svg viewBox="0 0 600 600" className={className} aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id={r} cx="38%" cy="32%" r="75%">
          <stop offset="0" stopColor="#ff7a6e" />
          <stop offset="0.35" stopColor="#FC1817" />
          <stop offset="0.8" stopColor="#7a0a10" />
          <stop offset="1" stopColor="#2a0306" />
        </radialGradient>
        <radialGradient id={b} cx="38%" cy="32%" r="75%">
          <stop offset="0" stopColor="#7cc0ff" />
          <stop offset="0.35" stopColor="#0075E2" />
          <stop offset="0.8" stopColor="#002f66" />
          <stop offset="1" stopColor="#020c1d" />
        </radialGradient>
        <radialGradient id={g} cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#e05ab8" stopOpacity="0.95" />
          <stop offset="0.45" stopColor="#A81E7D" stopOpacity="0.55" />
          <stop offset="1" stopColor="#A81E7D" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={s} cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#fff" stopOpacity="0.7" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <clipPath id={clip}>
          <circle cx="232" cy="300" r="150" />
        </clipPath>
      </defs>

      {/* ambient glow */}
      <ellipse cx="300" cy="300" rx="280" ry="200" fill={`url(#${g})`} opacity="0.35" />

      <circle cx="232" cy="300" r="150" fill={`url(#${r})`} />
      <circle cx="368" cy="300" r="150" fill={`url(#${b})`} opacity="0.96" />
      {/* overlap */}
      <g clipPath={`url(#${clip})`}>
        <circle cx="368" cy="300" r="150" fill="#A81E7D" opacity="0.85" />
        <ellipse cx="300" cy="300" rx="70" ry="130" fill={`url(#${g})`} />
      </g>

      {/* rim light */}
      <circle cx="232" cy="300" r="149.5" fill="none" stroke="#fff" strokeOpacity="0.12" />
      <circle cx="368" cy="300" r="149.5" fill="none" stroke="#fff" strokeOpacity="0.12" />

      {/* speculars */}
      <ellipse cx="180" cy="232" rx="46" ry="28" fill={`url(#${s})`} transform="rotate(-30 180 232)" />
      <ellipse cx="316" cy="232" rx="46" ry="28" fill={`url(#${s})`} transform="rotate(-30 316 232)" opacity="0.8" />

      {/* orbit rings */}
      <ellipse cx="300" cy="300" rx="270" ry="70" fill="none" stroke="#fff" strokeOpacity="0.08" transform="rotate(-14 300 300)" />
      <ellipse cx="300" cy="300" rx="240" ry="54" fill="none" stroke="#C9A24B" strokeOpacity="0.18" transform="rotate(10 300 300)" />
    </svg>
  )
}
