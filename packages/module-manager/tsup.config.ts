import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['./src/index.ts'],
  dts: true,
  format: ['cjs', 'esm'],
  outExtension({ format }) {
    return {
      js: `.${format === 'cjs' ? 'cjs' : 'mjs'}`,
    };
  },
  external: ['axios', 'react', 'react-dom'],
  splitting: false,
  clean: true,
});
