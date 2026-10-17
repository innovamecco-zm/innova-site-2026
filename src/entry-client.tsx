import { StrictMode, startTransition } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import { ROUTES } from './content/seo'

const root = document.getElementById('root')!
const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

/**
 * Hydrate only when the static HTML was rendered for this URL. If a host falls back to
 * another page's HTML (SPA rewrite), render fresh instead of hydrating mismatched markup.
 */
function prerenderedForThisUrl(): boolean {
  const rendered = root.dataset.path
  if (!rendered || !root.firstElementChild) return false
  const here = location.pathname !== '/' ? location.pathname.replace(/\/+$/, '') : '/'
  const known = ROUTES.some((r) => r.path === here && r.path !== '/404')
  return rendered === (known ? here : '/404')
}

if (prerenderedForThisUrl()) {
  // Transition hydration is time-sliced, so it never blocks the main thread in one long task.
  startTransition(() => {
    hydrateRoot(root, app)
  })
} else {
  root.textContent = ''
  createRoot(root).render(app)
}
