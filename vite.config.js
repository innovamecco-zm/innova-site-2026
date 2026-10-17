// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    // Used by scripts/prerender.mjs to preload each route's page chunk.
    manifest: true,
    // The 3D chunk is lazy-loaded and intentionally large; keep the warning for everything else.
    chunkSizeWarningLimit: 1200,
  },
  ssr: {
    // Bundle these into the prerender build so Node doesn't trip over ESM/CJS edge cases.
    noExternal: ['framer-motion', 'lucide-react', 'react-router-dom', 'react-router'],
  },
})
