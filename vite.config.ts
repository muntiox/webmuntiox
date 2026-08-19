import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import contentCollections from '@content-collections/vite'

export default defineConfig({
  plugins: [
    TanStackRouterVite(),
    contentCollections(),
    react(),
  ],
  server: {
    watch: {
      usePolling: true,
    },
  },
})