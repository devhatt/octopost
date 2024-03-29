import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react(), tsconfigPaths({ root: __dirname })],
  server: { open: false },
  test: {
    coverage: {
      exclude: ['*.stories.*', 'setupTests.ts'],
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
    css: { modules: { classNameStrategy: 'non-scoped' } },
    environment: 'jsdom',
    globals: true,
    include: ['src/**/*.spec.ts', 'src/**/*.spec.tsx'],
    setupFiles: ['./src/setup-tests.ts'],
  },
});
