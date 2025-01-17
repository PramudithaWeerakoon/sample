import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // Ensure the output directory is 'build'
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
