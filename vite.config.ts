import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set base to './' so that paths are relative and work on GitHub Pages
  base: './',
  define: {
    'process.env': {}
  }
});