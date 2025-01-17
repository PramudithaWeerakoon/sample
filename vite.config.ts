import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    rollupOptions: {
      input: './index.html' // Ensures the build starts from the correct entry
    }
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  publicDir: 'public' // Ensure the 'public' directory is included for static assets
});
