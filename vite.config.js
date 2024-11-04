import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { APP_FOLDER_NAME } from './src/globals/globals'


export default defineConfig({
  base: `/${APP_FOLDER_NAME}/`, // Ensure this matches the subdirectory on Vercel
  build: {
    outDir: 'dist'
  },
  plugins: [react()],
})
