import { extname, relative, resolve } from 'node:path';

import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import { glob } from 'glob';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
      input: {
        ...Object.fromEntries(
          glob
            .sync(['src/**/*.{ts,tsx}'], {
              ignore: [
                'src/**/*.{spec,test}.{ts,tsx}',
                'src/**/*.stories.tsx',
                'src/setupTests.ts',
              ],
            })
            .map((file) => [
              relative(
                'src',
                file.slice(0, file.length - extname(file).length)
              ),
              fileURLToPath(new URL(file, import.meta.url)),
            ])
        ),
      },
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
      },
    },
  },
  plugins: [
    react(),
    tsconfigPaths({ projects: ['./tsconfig.json'] }),
    libInjectCss(),
    dts({
      exclude: [
        'node_modules',
        'src/**/*.{spec,test}.{ts,tsx}',
        'src/**/*.stories.tsx',
        'src/setupTests.ts',
      ],
      include: ['src'],
    }),
    {
      generateBundle(options, bundle) {
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
  resolve: {
    alias: {
      '@styles': resolve(__dirname, 'src/styles'),
    },
  },
});
