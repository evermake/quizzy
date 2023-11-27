import antfu from '@antfu/eslint-config'

export default await antfu(
  {},
  {
    rules: {
      'curly': ['error', 'all'],
      'style/brace-style': ['error', '1tbs'],
    },
  },
)
