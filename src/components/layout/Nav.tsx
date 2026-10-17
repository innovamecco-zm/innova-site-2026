import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Logo, ZedMark } from '../brand/Logo'
import { NAV } from '../../content/nav'
import { WHATSAPP_URLS } from '../../content/site'
import { ButtonLink } from '../ui/ButtonLink'

export function Nav() {
  const { pathname } = useLocation()
  // The sheet remembers which page it was opened on, so navigating closes it.
  const [openOn, setOpenOn] = useState<string | null>(null)
  const open = openOn === pathname
  const setOpen = (next: boolean | ((v: boolean) => boolean)) =>
    setOpenOn((typeof next === 'function' ? next(open) : next) ? pathname : null)

  // Lock page scroll and close on Escape while the sheet is open.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpenOn(null)
    document.documentElement.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.documentElement.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/95 md:bg-bg/70 md:backdrop-blur-xl md:backdrop-saturate-150">
      <div className="container-x flex h-16 items-center justify-between gap-6">
        <Link to="/" aria-label="Meco Innova — home" className="rounded-md">
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-[14px] font-medium transition-colors ${isActive ? 'text-fg' : 'text-muted hover:text-fg'}`
                  }
                >
                  {item.zed && <ZedMark className="size-3.5 shrink-0" />}
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ButtonLink to={WHATSAPP_URLS.meco} variant="ghost" size="sm">
            WhatsApp
          </ButtonLink>
          <ButtonLink to="/contact" size="sm">
            Talk to us
          </ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full border border-line text-fg lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          data-lenis-prevent
          className="fixed inset-x-0 bottom-0 top-16 z-40 flex flex-col overflow-y-auto border-t border-line bg-bg lg:hidden"
        >
          <nav aria-label="Mobile" className="container-x flex-1 py-8">
            <ul className="flex flex-col">
              {NAV.map((item) => (
                <li key={item.to} className="border-b border-line">
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `flex h-16 items-center gap-3 text-[24px] font-semibold tracking-[-0.02em] ${isActive ? 'text-fg' : 'text-muted'}`
                    }
                  >
                    {item.zed && <ZedMark className="size-5 shrink-0" />}
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="container-x flex flex-col gap-3 pb-10">
            <ButtonLink to="/contact">Talk to us</ButtonLink>
            <ButtonLink to={WHATSAPP_URLS.meco} variant="ghost">
              WhatsApp
            </ButtonLink>
          </div>
        </div>
      )}
    </header>
  )
}
