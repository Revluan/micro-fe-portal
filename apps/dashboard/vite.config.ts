import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'http://localhost:5174/',
  server: {
    port: 5174,
    cors: true,
    origin: 'http://localhost:5174',
  },
})
