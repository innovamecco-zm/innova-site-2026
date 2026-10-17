import { lazy, Suspense } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { ROUTES } from './content/seo'

// Each page is its own chunk. During hydration the prerendered HTML stays in place
// (Suspense) until the page's chunk arrives, so there is no flash or mismatch.
const Home = lazy(() => import('./pages/Home'))
const ZedCrm = lazy(() => import('./pages/ZedCrm'))
const Services = lazy(() => import('./pages/Services'))
const Work = lazy(() => import('./pages/Work'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))

const KNOWN = new Set(ROUTES.filter((r) => r.path !== '/404').map((r) => r.path))

export default function App() {
  const { pathname } = useLocation()
  const clean = pathname !== '/' ? pathname.replace(/\/+$/, '') : pathname
  const notFound = !KNOWN.has(clean)

  return (
    <Layout notFound={notFound}>
      <Suspense fallback={<div className="min-h-[100svh]" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/zed-crm" element={<ZedCrm />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  )
}
