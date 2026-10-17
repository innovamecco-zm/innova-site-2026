import { Link } from 'react-router-dom'
import { ZedLogo } from '../brand/Logo'
import { ButtonLink } from '../ui/ButtonLink'
import { ZED_SUBNAV } from '../../content/nav'
import { ZED_CRM } from '../../content/site'

/** Sticky product bar under the main nav, on /products/zed-crm only. Brand `zed`. */
export function ZedSubBar() {
  return (
    <div className="zed-scope sticky top-16 z-40 border-b border-zed/30 bg-bg/95 md:bg-bg/80 md:backdrop-blur-xl">
      <div className="container-x flex h-14 items-center justify-between gap-4">
        <Link to="/products/zed-crm" className="rounded-md">
          <ZedLogo />
        </Link>
        <nav aria-label="Zed CRM sections" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {ZED_SUBNAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="rounded-full px-3 py-2 text-[14px] font-medium text-muted transition-colors hover:text-fg">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <ButtonLink to={ZED_CRM.signupUrl} size="sm" brand="zed">
          Start free trial
        </ButtonLink>
      </div>
    </div>
  )
}
