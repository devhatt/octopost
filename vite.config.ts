import react from '@vitejs/plugin-react-swc';
import path from 'node:path';
import { defineConfig } from 'vite';
import electron from 'vite-plugin-electron/simple';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  build: {
    target: ['edge88', 'firefox85', 'chrome88', 'safari14', 'ios14'],
  },
  plugins: [
    react(),
    tsconfigPaths(),
    electron({
      main: { entry: 'electron/main.ts' },
      preload: { input: 'electron/preload.ts' },
    }),
  ],
  resolve: {
    alias: {
      '~styles': path.join(__dirname, 'src/styles'),
    },
  },
});
