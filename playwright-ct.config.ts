import { defineConfig, devices } from '@playwright/experimental-ct-react';
import tsconfigPaths from 'vite-tsconfig-paths';

import viteConfig from './vite.config';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  forbidOnly: !!process.env.CI,
  fullyParallel: true,
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  reporter: 'html',
  retries: process.env.CI ? 2 : 0,
  snapshotDir: './__snapshots__',
  testDir: './',
  testMatch: '**/*.ct.spec.tsx',
  timeout: 10 * 1000,

  use: {
    ctPort: 3100,

    ctViteConfig: {
      // @ts-expect-error The playwright-ct references vite of version 4.5.1, and the plugin is for vite 5.
      plugins: [tsconfigPaths()],
      // @ts-expect-error The playwright-ct references vite of version 4.5.1 and config resolves is for version 5.
      resolve: viteConfig.resolve,
    },
    trace: 'on-first-retry',
  },

  workers: process.env.CI ? 1 : undefined,
});
