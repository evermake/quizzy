module.exports = {
  plugins: {
    // https://mantine.dev/styles/postcss-preset
    'postcss-preset-mantine': {},

    'postcss-simple-vars': {
      // https://mantine.dev/styles/responsive#breakpoints-variables-in-css-modules
      variables: {
        'mantine-breakpoint-xs': '36em',
        'mantine-breakpoint-sm': '48em',
        'mantine-breakpoint-md': '62em',
        'mantine-breakpoint-lg': '75em',
        'mantine-breakpoint-xl': '88em',
      },
    },
  },
}
