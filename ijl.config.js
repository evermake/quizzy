const process = require('node:process')
const path = require('node:path')
const pkg = require('./package')

module.exports = {
  apiPath: 'stubs/api',
  webpackConfig: {
    output: {
      publicPath: `/static/${pkg.name}/${process.env.VERSION || pkg.version}/`,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  },
  navigations: {
    'quizzy.main': '/quizzy',
  },
  features: {
    quizzy: {
      // add your features here in the format [featureName]: { value: string }
    },
  },
  config: {
    'quizzy.api.base.url': 'https://defiant-tuna-turtleneck.cyclic.app/api',
  },
}
