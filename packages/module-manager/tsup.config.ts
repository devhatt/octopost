import { defineConfig } from 'tsup';

export default defineConfig({
  clean: true,
  dts: { entry: ['./src/index.ts'] },
  entry: ['./src/index.ts'],
  format: ['cjs', 'esm'],
  splitting: false,
});
