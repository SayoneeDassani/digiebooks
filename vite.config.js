/*import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Default to GitHub Pages path; allow override for forks/previews.
  base: process.env.BASE_URL || 'https://SayoneeDassani.github.io/digiebooks/',
  plugins: [react()],
})*/
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',
  plugins: [react()],
})
