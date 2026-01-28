import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// For GitHub Pages: Update the base path to match your repository name
// Example: If your repo is 'my-repo', change '/leptospirosis-case-study-slideshow/' to '/my-repo/'
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' 
    ? (process.env.VITE_BASE_PATH || '/leptospirosis-case-study-slideshow/')
    : '/',
})
