var path = require('path');

module.exports = {
  source: ['./components'],
  output: './_site',
  entry: {
    index: {
      theme: './_theme',
      htmlTemplate: './_theme/static/template.html'
    }
  },
  plugins: [
    'bisheng-plugin-react?lang=__react',
    'bisheng-plugin-antd'
  ],
  port: 9000,
  webpackConfig(config) {
    config.resolve.alias = {
      // 'react-amap': path.join(process.cwd(), 'lib'),
      'react-router': 'react-router/umd/ReactRouter'
    };
    return config;
  },
  root: './'
};
