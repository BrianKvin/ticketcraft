import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isStaging = mode === 'staging'
  
  return {
    plugins: [react()],
    define: {
      __APP_ENV__: JSON.stringify(mode),
    },
    build: {
      outDir: isStaging ? 'dist-staging' : 'dist',
      sourcemap: isStaging,
    },
    server: {
      port: isStaging ? 5175 : 5173,
    },
    preview: {
      port: isStaging ? 4175 : 4173,
    }
  }
})
