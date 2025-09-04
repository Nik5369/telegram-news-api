module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', 'import', 'prettier', 'unused-imports'],

  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    '@typescript-eslint/no-explicit-any': 'error',

    // import
    'import/no-unresolved': 'off',
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling']],
        pathGroups: [{ pattern: 'react', group: 'external', position: 'before' }],
        pathGroupsExcludedImportTypes: ['builtin'],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],

    'no-restricted-imports': [
      'error',
      {
        patterns: ['@mui/*/*/*', '!@mui/material/test-utils/*'],
      },
    ],
    'unused-imports/no-unused-imports': 'warn',

    ///
    'no-console': 'warn',
    quotes: ['warn', 'single'],
    semi: ['warn', 'always'],
  },
};
