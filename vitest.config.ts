import { defineConfig, mergeConfig } from 'vitest/config';

import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    server: { open: false },
    test: {
      coverage: {
        provider: 'istanbul',
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
