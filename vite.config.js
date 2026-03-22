import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Use BASE_URL for GitHub Pages (e.g. "/repo-name/"); defaults to root for other hosts.
  base: process.env.BASE_URL || '/',
  plugins: [react()],
})
