import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = fileURLToPath(new URL('.', import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        home: resolve(projectRoot, 'index.html'),
        visaGuidance: resolve(projectRoot, 'visa-guidance.html'),
        flightsAndStays: resolve(projectRoot, 'flights-and-stays.html'),
        studyTravel: resolve(projectRoot, 'study-travel.html'),
      },
    },
  },
})
