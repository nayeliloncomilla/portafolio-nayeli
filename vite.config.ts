import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Configuración de archivos públicos
  publicDir: 'public',
  
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
    // Asegurar que los archivos estáticos se copien
    copyPublicDir: true,
    // Configuración de chunks para mejor caching
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
        // Asegurar que los favicons mantengan sus nombres
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.includes('favicon')) {
            return 'assets/[name][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
})
