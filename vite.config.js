import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync } from 'fs'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-404',
      closeBundle() {
        copyFileSync('docs/index.html', 'docs/404.html')
      },
    },
  ],
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
  base: '/',
})
