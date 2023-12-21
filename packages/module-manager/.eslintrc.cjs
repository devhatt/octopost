const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  extends: ['../../.eslintrc.cjs', 'plugin:import/recommended'],
  ignorePatterns: ['node_modules', 'dist'],
  plugins: [
    '@typescript-eslint',
    'typescript-sort-keys',
    'import',
    'sort-keys-fix',
  ],
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
});
