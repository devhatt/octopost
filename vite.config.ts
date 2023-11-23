/// <reference types="vitest" />
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';
import electron from 'vite-plugin-electron/simple';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    electron({
      main: {
        entry: 'electron/main.ts',
      },
      preload: {
        input: 'electron/preload.ts',
      },
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
              @use "./src/styles/global.scss";
              @use "./src/styles/base.scss";
            `,
      },
    },
  },
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
    css: {
      modules: {
        classNameStrategy: 'non-scoped',
      },
    },
  },
});
