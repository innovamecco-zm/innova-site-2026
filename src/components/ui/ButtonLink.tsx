import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

export type Brand = 'meco' | 'zed'

interface ButtonLinkProps {
  to: string
  children: ReactNode
  variant?: 'primary' | 'ghost'
  size?: 'md' | 'sm'
  /** `zed` = Zed CRM blue (#2563EB); `meco` = company styles. */
  brand?: Brand
  className?: string
  /** Accessible label override, e.g. when the visible text is short. */
  ariaLabel?: string
}

const isExternal = (to: string) => /^(https?:|mailto:|tel:)/.test(to)

export function ButtonLink({ to, children, variant = 'primary', size = 'md', brand = 'meco', className = '', ariaLabel }: ButtonLinkProps) {
  const cls = `btn ${variant === 'primary' ? 'btn-primary' : 'btn-ghost'} ${brand === 'zed' ? 'btn-zed' : ''} ${size === 'sm' ? 'btn-sm' : ''} ${className}`
  if (isExternal(to)) {
    const newTab = to.startsWith('http')
    return (
      <a
        href={to}
        className={cls}
        aria-label={ariaLabel}
        {...(newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    )
  }
  return (
    <Link to={to} className={cls} aria-label={ariaLabel}>
      {children}
    </Link>
  )
}
