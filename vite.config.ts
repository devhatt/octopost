/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import electron from 'vite-plugin-electron';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    electron({
      entry: 'electron/main.ts',
      vite: {
        build: {
          rollupOptions: {
            // Here are some C/C++ modules them can't be built properly
            external: [],
          },
        },
      },
    }),
  ],
  resolve: {
    alias: {
      '~styles/global.scss': path.join(__dirname, 'src/styles/global.scss'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/setupTests.js'],
    include: ['src/**/*.spec.ts', 'src/**/*.spec.tsx'],
  },
});
