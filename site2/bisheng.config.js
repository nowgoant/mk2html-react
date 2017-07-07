const path = require('path');
const CSSSplitWebpackPlugin = require('css-split-webpack-plugin').default;

module.exports = {
  port: 9000,
  source: {
    posts: './posts',
  },
  exclude: /should-be-ignore/,
  theme: './site2/theme',
  htmlTemplate: './site2/theme/static/template.html',
  themeConfig: {
    home: '/',
    archiveTitle: '文章列表',
    tagline: 'The one theme for bisheng',
    // navigation: [{
    //   title: 'BiSheng',
    //   link: 'https://github.com/benjycui/bisheng',
    // }],
    // footer: 'Copyright and so on...',
    // hideBisheng: true,
    github: 'https://github.com/benjycui/bisheng',
  }
};
