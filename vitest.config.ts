import { defineConfig, mergeConfig } from 'vitest/config';

import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    server: { open: false },
    test: {
      globals: true,
      environment: 'jsdom',
      coverage: {
        provider: 'istanbul',
      },
      setupFiles: ['src/setupTests.ts'],
      include: ['src/**/*.spec.ts', 'src/**/*.spec.tsx'],
      css: {
        modules: { classNameStrategy: 'non-scoped' },
      },
    },
  })
);
