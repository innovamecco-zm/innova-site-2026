import type { ReactNode } from 'react'
import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion'
import { Nav } from './Nav'
import { Footer } from './Footer'
import { WhatsAppFab } from './WhatsAppFab'
import { Island } from '../ui/Island'
import { useSmoothScroll } from '../../lib/useSmoothScroll'
import { useSeo } from '../../lib/useSeo'

export function Layout({ children, notFound }: { children: ReactNode; notFound: boolean }) {
  useSmoothScroll()
  useSeo(notFound)

  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <a
          href="#main"
          className="sr-only z-[60] rounded-full bg-blue px-4 py-2 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <Island>
          <Footer />
        </Island>
        <WhatsAppFab />
      </MotionConfig>
    </LazyMotion>
  )
}
