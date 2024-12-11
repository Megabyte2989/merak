import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import compression from 'vite-plugin-compression';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [
    react(),
    compression(),
    eslintPlugin({
      include: ['src/**/*.js', 'src/**/*.jsx'], // Files to lint
    }),
  ],
});
