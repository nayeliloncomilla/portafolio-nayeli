import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Configuración de seguridad
  server: {
    headers: {
      // Prevenir ataques de clickjacking
      'X-Frame-Options': 'DENY',
      // Prevenir ataques de MIME sniffing
      'X-Content-Type-Options': 'nosniff',
      // Política de referrer
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      // Forzar HTTPS en producción
      'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
    }
  },
  
  // Optimizaciones de build
  build: {
    // Minimizar el output
    minify: 'terser',
    // Configuración de chunks para mejor caching
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
})
