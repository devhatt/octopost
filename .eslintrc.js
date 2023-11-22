const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  root: true,
  env: { browser: true, es2020: true },
  ignorePatterns: [
    'dist',
    '.eslintrc.cjs',
    '.next',
    '.vscode',
    'node_modules',
    '!*.scss',
  ],
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
    'plugin:react-hooks/recommended',
  ],
  plugins: ['prettier', '@typescript-eslint', 'eslint-plugin-import-helpers'],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'no-console': 'error',
    'import-helpers/order-imports': [
      'error',
      {
        newlinesBetween: 'always',
        groups: [
          '/^react.*/',
          '/^next/',
          'module',
          [
            '/^\\~interfaces/',
            '/^\\~store/',
            '/^\\~snippets/',
            '/^\\~hooks/',
            '/^\\~services/',
            '/^\\~transformers/',
            '/^\\~constants/',
            '/^\\~utils/',
            '/^\\~enums/',
            '/^\\~types/',
            '/^\\~config/',
          ],
          '/^(\\.|\\.\\.)(\\/[a-z]{1}\\w+)*$/',
          '/^\\~components/',
          '/^(\\.|\\.\\.)(\\/[\\w]+)*((\\/[A-Z]{1}\\w+)){1}$/',
          '/\\~styles/',
          '/^(\\.|\\.\\.).*(\\.scss)$/',
          '/^(\\.|\\.\\.).*(\\.(svg|png|jpg|jpeg))$/',
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],

    //  TODO: Colocar regra de underscore em variaveis membro e regra de nomeclatura de classe abstrata
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        prefix: ['I'],
        format: ['PascalCase'],
      },
      {
        selector: 'enum',
        prefix: ['E'],
        format: ['PascalCase'],
      },
      {
        selector: 'typeAlias',
        prefix: ['T'],
        format: ['PascalCase'],
      },
    ],

    '@typescript-eslint/no-non-null-assertion': 'off',
  },
  overrides: [
    {
      files: '.eslintrc.js',
      rules: {
        'no-undef': 'off',
      },
    },
    {
      files: 'vite.config.ts',
      extends: ['plugin:@typescript-eslint/recommended-type-checked'],
      parserOptions: {
        project: ['./tsconfig.node.json'],
      },
    },
    {
      files: ['./src/types/*.ts'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
    {
      files: ['*.js'],
      rules: {
        'no-console': 'off',
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: ['**/*.stories.tsx'],
      rules: {
        'no-console': 'off',
      },
    },
  ],
});
