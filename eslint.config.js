import js from '@eslint/js';
import globals from 'globals';

export default [
  {
    ignores: ['src/game/**', 'dist/**'],
  },
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    rules: {
      'no-console': 0,
      camelcase: 2,
      curly: 2,
      eqeqeq: 2,
      'guard-for-in': 2,
      indent: [
        2,
        2,
        {
          SwitchCase: 1,
        },
      ],
      semi: ['error', 'always'],
      'no-unreachable': 'error',
      'no-caller': 2,
      quotes: [1, 'single'],
      'no-undef': 2,
      strict: 0,
      'no-unused-vars': 2,
      'no-else-return': 2,
      'space-before-function-paren': [
        'error',
        { anonymous: 'always', named: 'never' },
      ],
    },
  },
];
