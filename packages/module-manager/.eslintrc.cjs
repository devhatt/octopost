const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  extends: ['../../.eslintrc.cjs', 'plugin:import/recommended'],
  ignorePatterns: ['node_modules', 'dist'],
  rules: {
    '@typescript-eslint/naming-convention': 'off',
    'import-helpers/order-imports': 'off',
    'import/order': 'warn',
  },
});
