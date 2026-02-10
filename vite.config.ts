import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    allowedHosts: [
      '5173-01kgvvpyktf4qenpkj1frqj0s5.cloudspaces.litng.ai',
      '.litng.ai',
      '.cloudspaces.litng.ai'
    ]
  }
})