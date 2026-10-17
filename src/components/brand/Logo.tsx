import { useId } from 'react'

interface MarkProps {
  className?: string
  title?: string
}

/** The two overlapping circles: red left, blue right, purple where they overlap. */
export function LogoMark({ className, title }: MarkProps) {
  const id = useId().replace(/:/g, '')
  return (
    <svg
      viewBox="0 0 56 36"
      className={className}
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <defs>
        <clipPath id={`${id}-red`}>
          <circle cx="18" cy="18" r="16" />
        </clipPath>
      </defs>
      <circle cx="18" cy="18" r="16" fill="#FC1817" />
      <circle cx="38" cy="18" r="16" fill="#0075E2" />
      <circle cx="38" cy="18" r="16" fill="#A81E7D" clipPath={`url(#${id}-red)`} />
    </svg>
  )
}

interface LogoProps {
  className?: string
}

/** Full lockup: mark + "Meco Innova" wordmark with the gold dot. Sits directly on dark backgrounds. */
export function Logo({ className = '' }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-6 w-auto shrink-0" />
      <span className="text-[17px] font-semibold leading-none tracking-[-0.02em] text-fg">
        Meco Innova<span className="text-gold">.</span>
      </span>
    </span>
  )
}

/** Zed CRM lockup: blue rounded square with a white zigzag Z. */
export function ZedMark({ className }: MarkProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect width="24" height="24" rx="6" fill="#2563EB" />
      <polyline
        points="7,7.5 17,7.5 7,16.5 17,16.5"
        fill="none"
        stroke="#fff"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const ZED_SIZES = {
  sm: { mark: 'h-6 w-6', text: 'text-[16px]', by: 'text-[12px]' },
  md: { mark: 'h-9 w-9', text: 'text-[28px]', by: 'text-[13px]' },
  lg: { mark: 'h-11 w-11', text: 'text-[32px] sm:text-[40px]', by: 'text-[13px]' },
} as const

interface ZedLogoProps extends LogoProps {
  size?: keyof typeof ZED_SIZES
  /** Small muted "by Meco Innova" endorsement after the lockup (default on). */
  endorsed?: boolean
}

/** Zed CRM lockup. Carries a "by Meco Innova" endorsement so the product never reads as the company. */
export function ZedLogo({ className = '', size = 'sm', endorsed = true }: ZedLogoProps) {
  const s = ZED_SIZES[size]
  return (
    <span className={`inline-flex flex-wrap items-center gap-x-2 gap-y-1 ${className}`}>
      <ZedMark className={`${s.mark} shrink-0`} />
      <span className={`${s.text} font-semibold leading-none tracking-[-0.02em] text-fg`}>Zed CRM</span>
      {endorsed && <span className={`${s.by} font-normal leading-none tracking-normal text-muted`}>by Meco Innova</span>}
    </span>
  )
}
