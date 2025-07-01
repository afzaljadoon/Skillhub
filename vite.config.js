import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  base: '/skillhub/',
  plugins: [
    tailwindcss(),
    
  ],
  fontFamily: {
    sans: ['"Open Sans"', 'sans-serif'],
    mono: ['"Courier Prime"', 'monospace'],
  },
})
