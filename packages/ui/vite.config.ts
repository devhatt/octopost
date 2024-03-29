import { dirname, extname, relative, resolve } from 'node:path';

import { fileURLToPath } from 'node:url';
import { defineConfig, PluginOption } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import { glob } from 'glob';

const __dirname = dirname(fileURLToPath(import.meta.url));

const computeAllSrcFiles = (): Record<string, string> => {
  const files = glob.sync(['src/**/*.{ts,tsx}'], {
    ignore: [
      'src/**/*.stories.tsx',
      'src/**/*.{spec,test}.tsx',
      'src/setup-tests.ts',
    ],
  });

  const paths = files.map((file) => [
    /* key: */ relative(
      'src',
      file.slice(0, file.length - extname(file).length)
    ),

    /* value: */ fileURLToPath(new URL(file, import.meta.url)),
  ]);

  return Object.fromEntries(paths);
};

const removeEmptyFiles = (): PluginOption => ({
  generateBundle(_, bundle) {
    for (const name in bundle) {
      const file = bundle[name];
      if (file.type !== 'chunk') return;

      if (file.code.trim() === '') delete bundle[name];
      if (file.code.trim() === '"use strict";') delete bundle[name];
    }
  },
  name: 'remove-empty-files',
});

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      formats: ['es', 'cjs'],
      fileName(format, entryName) {
        if (format === 'es') return `${entryName}.js`;
        return `${entryName}.${format}`;
      },
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime', 'react-dom'],
      input: computeAllSrcFiles(),
      output: {
        assetFileNames: 'assets/[name][extname]',
      },
    },
  },
  css: {},
  plugins: [
    react(),
    tsconfigPaths({ projects: ['./tsconfig.json'] }),
    libInjectCss(),
    dts({
      exclude: [
        'node_modules',
        'src/**/*.{spec,test}.{ts,tsx}',
        'src/**/*.stories.tsx',
        'src/setup-tests.ts',
      ],
      include: ['src'],
    }),
    removeEmptyFiles(),
    {
      generateBundle(_, bundle) {
        for (const name in bundle) {
          console.log(name);
          const file = bundle[name];
          if (file.type !== 'asset') return;
        }
      },
      name: 'remove-empty-files',
    },
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
