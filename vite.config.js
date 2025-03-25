import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Important for deployment
  build: {
    outDir: 'dist', // Ensure this is your Render "Publish Directory"
  },
});
