import antfu from '@antfu/eslint-config'

export default await antfu(
  {},
  {
    rules: {
      'curly': ['error', 'all'],
      'style/brace-style': ['error', '1tbs'],

      'ts/no-redeclare': 'off',

      // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
      'import/order': [
        'error',
        {
          groups: [
            'type',
            'builtin',
            'unknown',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
          ],
          pathGroups: [
            {
              pattern: '~/**',
              group: 'internal',
            },
          ],
        },
      ],
    },
  },
)
