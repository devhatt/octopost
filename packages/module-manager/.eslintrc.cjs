const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  extends: ['../../.eslintrc.cjs'],
  ignorePatterns: ['node_modules', 'dist'],
  overrides: [
    {
      files: ['src/**/*.ts', 'src/**/*.tsx'],
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
    },
  ],
  rules: {
    '@typescript-eslint/naming-convention': 'off',
    'import-helpers/order-imports': 'off',
    'import/order': 'warn',
  },
});
