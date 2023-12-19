const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  extends: ['../../.eslintrc.js'],
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['node_modules', 'dist'],
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: [
    '@typescript-eslint',
    'typescript-sort-keys',
    'import',
    'sort-keys-fix',
  ],
  extends: ['plugin:import/recommended'],
  rules: {
    'import-helpers/order-imports': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/consistent-type-exports': 'error',
    'import/order': ['error', { 'newlines-between': 'always' }],
    'sort-imports': ['error', { ignoreDeclarationSort: true }],
    'typescript-sort-keys/interface': 'error',
    'typescript-sort-keys/string-enum': 'error',
    'sort-keys-fix/sort-keys-fix': 'error',
    'sort-keys': ['error', 'asc', { caseSensitive: false, natural: true }],
    '@typescript-eslint/explicit-function-return-type': 'error',
  },
  overrides: [
    {
      files: ['**/vite.config.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: '../../tsconfig.node.json',
      },
    },
  ],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
});
