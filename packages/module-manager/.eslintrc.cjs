const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  extends: ['../../.eslintrc.cjs', 'plugin:import/recommended'],
  ignorePatterns: ['node_modules', 'dist'],
});
