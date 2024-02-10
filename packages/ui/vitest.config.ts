import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

import viteConfig from './vite.config';

export default defineConfig({
  plugins: [tsconfigPaths()],
  resolve: viteConfig.resolve,
  server: { open: false },
  test: {
    coverage: {
      exclude: ['*.stories.*'],
      include: ['src'],
      provider: 'istanbul',
      reporter: ['json', 'json-summary', 'html'],
      reportOnFailure: true,
      thresholds: {
        branches: 60,
        functions: 60,
        lines: 60,
        statements: 60,
      },
    },
    css: {
      modules: { classNameStrategy: 'non-scoped' },
    },
    environment: 'jsdom',
    globals: true,
    include: ['src/**/*.spec.ts', 'src/**/*.spec.tsx'],
    setupFiles: ['setupTests.ts'],
  },
});
