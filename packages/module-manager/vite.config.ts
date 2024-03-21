import { resolve } from 'node:path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/index.ts'),
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: { external: ['react', 'react/jsx-runtime'] },
  },
  plugins: [
    react(),
    tsconfigPaths({ projects: ['./tsconfig.json'] }),
    dts({ tsconfigPath: './tsconfig.json', include: ['lib'] }),
    {
      generateBundle(_, bundle) {
        for (const name in bundle) {
          const file = bundle[name];
          if (file.type === 'chunk' && file.code.trim() === '') {
            // eslint-disable-next-line @typescript-eslint/no-dynamic-delete -- no have problem
            delete bundle[name];
          }
        }
      },
      name: 'remove-empty-js',
    },
  ],
});
