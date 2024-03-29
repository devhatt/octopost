import { createRequire } from 'node:module';
import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import { defineFlatConfig } from 'eslint-define-config';
import tsEslint from 'typescript-eslint';
// import arrayFuncPlugin from 'eslint-plugin-array-func';
// import eslintCommentsPlugin from 'eslint-plugin-eslint-comments';
import importPlugin from 'eslint-plugin-import';
import perfectionistPlugin from 'eslint-plugin-perfectionist';
import unicornPlugin, { configs as unicornConfig } from 'eslint-plugin-unicorn';
// import promisePlugin from 'eslint-plugin-promise';
// import noSecretsPlugin from 'eslint-plugin-no-secrets';
// import regexpPlugin from 'eslint-plugin-regexp';
// import writeGoodCommentsPlugin from 'eslint-plugin-write-good-comments';
import onlyWarnPlugin from 'eslint-plugin-only-warn';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';
import testingLibraryPlugin from 'eslint-plugin-testing-library';
import vitestPlugin from 'eslint-plugin-vitest';
// import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import globals from 'globals';

const require = createRequire(import.meta.url);
const reactConfig = require('eslint-plugin-react/configs/recommended');

export default defineFlatConfig([
  // global ignores
  {
    ignores: ['node_modules', 'dist', 'pnpm-lock.yaml', 'coverage'],
  },

  // override default eslint rules
  {
    ...js.configs.recommended,
    rules: {
      'arrow-body-style': ['warn', 'as-needed'],
      'class-methods-use-this': 'off',
      'dot-notation': 'off',
      'max-params': 'off',
      'no-loop-func': 'off',
      'no-loss-of-precision': 'off',
      'no-magic-numbers': 'off',
      'no-unused-vars': 'off',
    },
  },

  {
    files: ['**/*'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      import: importPlugin,
      'only-warn': onlyWarnPlugin,
      perfectionist: perfectionistPlugin,
      unicorn: unicornPlugin,
    },
    rules: {
      'import/consistent-type-specifier-style': ['warn', 'prefer-top-level'],
      'import/default': 'warn',
      'import/export': 'warn',
      'import/namespace': 'warn',
      'import/newline-after-import': 'warn',
      'import/no-absolute-path': 'warn',
      'import/no-duplicates': 'warn',
      'import/no-extraneous-dependencies': 'warn',
      'import/no-named-as-default': 'warn',
      'import/no-named-as-default-member': 'warn',
      'import/no-unused-modules': 'warn',
      'import/order': 'warn',

      'perfectionist/sort-array-includes': 'warn',
      'perfectionist/sort-classes': 'warn',
      'perfectionist/sort-enums': 'warn',
      'perfectionist/sort-exports': 'warn',
      'perfectionist/sort-interfaces': 'warn',
      'perfectionist/sort-jsx-props': 'warn',
      'perfectionist/sort-maps': 'warn',
      'perfectionist/sort-named-exports': 'warn',
      'perfectionist/sort-named-imports': 'warn',
      'perfectionist/sort-object-types': 'warn',
      'perfectionist/sort-objects': 'warn',
      'perfectionist/sort-union-types': 'warn',

      ...unicornConfig.recommended.rules,
      'unicorn/prevent-abbreviations': 'off',
    },
    settings: {
      'import/ignore': ['react-native'],
      'import/parsers': {
        espree: ['.js', '.cjs', '.mjs', '.jsx'],
      },
      'import/resolver': {
        node: true,
        typescript: true,
      },
    },
  },

  // React (jsx/tsx) config
  {
    ...reactConfig,
    files: ['src/**/*.tsx', 'src/**/*.jsx'],
    ignores: ['**/__tests__/**/*'],
    plugins: {
      ...reactConfig.plugins,
      'react-hooks': reactHooksPlugin,
      'react-refresh': reactRefreshPlugin,
    },
    rules: {
      ...reactConfig.rules,
      'react-hooks/exhaustive-deps': 'warn',
      'react-hooks/rules-of-hooks': 'warn',
      'react-refresh/only-export-components': 'warn',
      'react/react-in-jsx-scope': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },

  {
    // https://typescript-eslint.io/
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsEslint.parser,
      parserOptions: {
        project: [
          'tsconfig.json',
          'tsconfig.node.json',
          'packages/module-manager/tsconfig.json',
          'packages/ui/tsconfig.json',
          'apps/web/tsconfig.json',
        ],
      },
    },
    plugins: {
      '@typescript-eslint': tsEslint.plugin,
    },
    rules: {
      '@typescript-eslint/await-thenable': 'warn',
      '@typescript-eslint/ban-ts-comment': 'warn',
      '@typescript-eslint/ban-types': 'warn',
      '@typescript-eslint/no-array-constructor': 'warn',
      '@typescript-eslint/no-base-to-string': 'warn',
      '@typescript-eslint/no-duplicate-enum-values': 'warn',
      '@typescript-eslint/no-duplicate-type-constituents': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-extra-non-null-assertion': 'warn',
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-for-in-array': 'warn',
      '@typescript-eslint/no-implied-eval': 'warn',
      '@typescript-eslint/no-loss-of-precision': 'warn',
      '@typescript-eslint/no-misused-new': 'warn',
      '@typescript-eslint/no-misused-promises': 'warn',
      '@typescript-eslint/no-namespace': 'warn',
      '@typescript-eslint/no-non-null-asserted-optional-chain': 'warn',
      '@typescript-eslint/no-redundant-type-constituents': 'warn',
      '@typescript-eslint/no-this-alias': 'warn',
      '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
      '@typescript-eslint/no-unnecessary-type-constraint': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-var-requires': 'warn',
      '@typescript-eslint/prefer-as-const': 'warn',
      '@typescript-eslint/require-await': 'warn',
      '@typescript-eslint/restrict-plus-operands': 'warn',
      '@typescript-eslint/restrict-template-expressions': 'warn',
      '@typescript-eslint/triple-slash-reference': 'warn',
      '@typescript-eslint/unbound-method': 'warn',
    },
  },

  // testing with vitest and RTL
  {
    files: ['**/*.spec.ts', '**/*.spec.tsx'],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
    plugins: {
      'testing-library': testingLibraryPlugin,
      vitest: vitestPlugin,
    },
    rules: {
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

      'vitest/expect-expect': 'warn',
      'vitest/no-commented-out-tests': 'warn',
      'vitest/no-identical-title': 'warn',
      'vitest/no-import-node-test': 'warn',
      'vitest/require-local-test-context-for-concurrent-snapshots': 'warn',
      'vitest/valid-describe-callback': 'warn',
      'vitest/valid-expect': 'warn',
      'vitest/valid-title': 'warn',
    },
  },

  eslintConfigPrettier,
]);
