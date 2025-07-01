import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  base: './Skillhub/',
  plugins: [
    tailwindcss(),
    
  ],
  fontFamily: {
    sans: ['"Open Sans"', 'sans-serif'],
    mono: ['"Courier Prime"', 'monospace'],
  },
})
