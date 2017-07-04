const path = require('path');

module.exports = {
  lazyLoad: true,
  pick: {
    posts(markdownData) {
      return {
        meta: markdownData.meta,
        description: markdownData.description,
      };
    },
  },
  plugins: [
    'bisheng-plugin-description',
    'bisheng-plugin-toc?maxDepth=2&keepElem',
    'bisheng-plugin-antd',
    'bisheng-plugin-react?lang=__react',
  ],
  routes: [{
    path: '/',
    component: './template/Archive',
  }, {
    path: '/posts/:post',
    component: './template/Post',
  }, {
    path: '/tags',
    component: './template/TagCloud',
  }],
};
