import { defineConfig, mergeConfig } from 'vitest/config';

import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    server: { open: false },
    test: {
      coverage: {
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
      setupFiles: ['src/setupTests.ts'],
    },
  })
);
