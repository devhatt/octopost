import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

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
  testDir: './e2e',
  use: {
    baseURL: 'http://localhost:5173/',
    trace: 'on-first-retry',
  },
  webServer: {
    command: 'pnpm start',
    reuseExistingServer: !process.env.CI,
    url: 'http://localhost:5173/',
  },
  workers: process.env.CI ? 1 : undefined,
});
