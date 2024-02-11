const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  extends: ['../../.eslintrc.cjs'],
  overrides: [
    {
      files: ['src/**/*.{ts,tsx}', 'setupTests.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
      },
    },
    // test files with vitest
    {
      env: { jest: true },
      extends: ['plugin:vitest/recommended'],
      files: ['**/*.spec.*', './src/setupTests.ts'],
      globals: { vi: true },
      plugins: ['vitest', 'testing-library'],
      rules: {
        '@typescript-eslint/no-magic-numbers': 'off',
        'testing-library/await-async-events': 'warn',
        'testing-library/await-async-queries': 'warn',
        'testing-library/await-async-utils': 'warn',
        'testing-library/no-await-sync-events': 'warn',
        'testing-library/no-await-sync-queries': 'warn',
        'testing-library/no-container': 'warn',
        'testing-library/no-debugging-utils': 'warn',
        'testing-library/no-dom-import': 'warn',
        'testing-library/no-global-regexp-flag-in-query': 'warn',
        'testing-library/no-manual-cleanup': 'warn',
        'testing-library/no-node-access': 'warn',
        'testing-library/no-promise-in-fire-event': 'warn',
        'testing-library/no-render-in-lifecycle': 'warn',
        'testing-library/no-unnecessary-act': 'warn',
        'testing-library/no-wait-for-multiple-assertions': 'warn',
        'testing-library/no-wait-for-side-effects': 'warn',
        'testing-library/no-wait-for-snapshot': 'warn',
        'testing-library/prefer-explicit-assert': 'warn',
        'testing-library/prefer-find-by': 'warn',
        'testing-library/prefer-implicit-assert': 'warn',
        'testing-library/prefer-presence-queries': 'warn',
        'testing-library/prefer-query-by-disappearance': 'warn',
        'testing-library/prefer-query-matchers': 'warn',
        'testing-library/prefer-screen-queries': 'warn',
        'testing-library/prefer-user-event': 'warn',
        'testing-library/render-result-naming-convention': 'warn',
        'unicorn/consistent-function-scoping': 'warn',
      },
    },
  ],
});
