const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  extends: ['../../.eslintrc.cjs', 'plugin:import/recommended'],
  files: ['*.ts', '*.tsx', '*.d.ts'],
  ignorePatterns: ['node_modules', 'dist'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  rules: {
    '@typescript-eslint/naming-convention': 'off',
    'import-helpers/order-imports': 'off',
    'import/order': 'warn',
  },
});
