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
  extends: ['eslint:recommended'],
  plugins: ['prettier', 'eslint-plugin-import-helpers'],
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
  },
  overrides: [
    {
      files: ['src/services/fetchModules/fetchModules.ts'],
      rules: {
        'no-console': 'off',
      },
    },
    // test files with vitest
    {
      files: ['**/*.spec.*'],
      extends: ['plugin:vitest/recommended'],
      plugins: ['vitest'],
    },
    // react rules
    {
      files: ['src/**.(ts|tsx)'],
      extends: ['plugin:react-hooks/recommended', 'plugin:react/recommended'],
      plugins: ['react'],
    },

    // stories
    {
      files: ['**/*.stories.tsx'],
      rules: {
        'no-console': 'off',
      },
    },
    // configuration files
    {
      files: '.eslintrc.js',
      rules: {
        'no-undef': 'off',
      },
    },
    // validate typescript files
    {
      extends: ['plugin:@typescript-eslint/recommended'],
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json', './packages/*/tsconfig.json'],
      },
      plugins: ['@typescript-eslint'],
      rules: {
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
    },
    {
      files: ['./src/types/*.ts', '*.d.ts'],
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
      files: [
        './**/vite.config.ts',
        './**/vitest.config.ts',
        './**/playwright.config.ts',
        '**/playwright-ct.config.ts',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: './tsconfig.node.json',
      },
    },
  ],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
});
