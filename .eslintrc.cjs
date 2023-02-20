module.exports = {
  plugins: [
    'css-import-order',
  ],
  extends: ['@antfu', 'plugin:css-import-order/recommended'],
  rules: {
    'import/order': [
      'error',
      {
        'groups': ['builtin', 'external', 'internal', 'sibling', 'index', 'object', 'type'],
        'pathGroups': [
          {
            pattern: '*.css',
            group: 'type',
            position: 'after',
          },
        ],
        'newlines-between': 'always',
        'alphabetize': {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
}
