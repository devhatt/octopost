import { defineConfig } from 'vite';
import dtsPlugin from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [dtsPlugin(), tsconfigPaths()],
  build: {
    lib: {
      entry: 'index.ts',
      name: 'index',
      fileName: 'index',
    },
  },
});
