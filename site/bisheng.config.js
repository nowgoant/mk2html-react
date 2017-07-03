var path = require('path');

module.exports = {
  source: ['./components', './articles', 'CHANGELOG.md'],
  output: './_site',
  entry: {
    index: {
      theme: './theme',
      htmlTemplate: './theme/static/template.html'
    }
  },
  plugins: [
    'bisheng-plugin-react?lang=__react',
    'bisheng-plugin-antd'
  ],
  port: 9001,
  webpackConfig(config) {
    config.resolve.alias = {
      // 'react-amap': path.join(process.cwd(), 'lib'),
      'react-router': 'react-router/umd/ReactRouter'
    };
    return config;
  },
  root: '/mk2html-react/'
};
