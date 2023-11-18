const { antfu } = require('@antfu/eslint-config')

module.exports = antfu(
  {},
  {
    rules: {
      "curly": ["error", "all"],
      "style/brace-style": ["error", "1tbs"],
      "ts/consistent-type-definitions": ["error", "type"],
    },
  },
)
