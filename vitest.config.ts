import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'
 
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    coverage: {
      reporter: ['text', 'json', 'html'],
      include:['src/**/*.{ts,tsx}'],
    },
    setupFiles: ['./src/tests/setupTests.ts'],
    env:{
      BACKEND_URL: 'http://localhost:3000'
    }
  },
})