import { defineConfig, mergeConfig } from 'vitest/config';

import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    server: { open: false },
    test: {
      coverage: {
        branches: 0,
        functions: 0,
        lines: 0,
        provider: 'istanbul',
        reporter: ['json', 'json-summary'],
        reportOnFailure: true,
        statements: 0,
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
