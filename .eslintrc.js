module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jest/recommended',
    'plugin:testing-library/react'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2021,
    sourceType: 'module'
  },
  plugins: [
    'import'
  ],
  root: true,
  rules: {
    indent: [
      'error',
      2
    ],
    quotes: [
      'warn',
      'single'
    ],
    'semi': [2, 'always'],
    'import/order': [
      1,
      {
        'groups': ['builtin', 'external', 'internal'],
        'pathGroups': [
          {
            'pattern': 'react',
            'group': 'external',
            'position': 'before'
          }
        ],
        'pathGroupsExcludedImportTypes': ['react'],
        'newlines-between': 'always',
        'alphabetize': {
          'order': 'asc',
          'caseInsensitive': true
        }
      }
    ],
    'max-len': [
      'warn',
      {
        code: 120
      }
    ],
    'no-debugger': 1,
    'no-trailing-spaces': 1,
    'react-hooks/exhaustive-deps': 0,
    'react/prop-types': 0,
    'react/display-name': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'no-duplicate-imports': 'warn',
    'no-unused-vars': 'warn',
    'object-curly-spacing': [
      'warn',
      'always'
    ],
    'react/jsx-curly-spacing': [
      0,
      {
        allowMultiline: true,
        children: {
          when: 'always'
        },
        spacing: {
          objectLiterals: 'always'
        },
        when: 'always'
      }
    ],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx'
        ]
      }
    ],
    'react/jsx-indent': [
      'warn',
      2,
      {
        checkAttributes: true,
        indentLogicalExpressions:
          true
      }
    ],
    'react/jsx-indent-props': [
      'warn',
      2
    ],
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};