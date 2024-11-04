import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'CineFlix',  // Adjust this as needed
  build: {
    outDir: 'dist' // Change 'CineFlix' to 'dist'
  },
  plugins: [react()],
})
