const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  extends: ['../../.eslintrc.cjs'],
  overrides: [
    {
      files: ['./src/**/*.{ts,tsx}'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
    },
  ],
});
