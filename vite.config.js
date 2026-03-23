import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Default to GitHub Pages path; allow override for forks/previews.
  base: process.env.BASE_URL || '/digiebooks/',
  plugins: [react()],
})
