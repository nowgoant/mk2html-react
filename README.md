### Transform Markdown(and other static files with transformers) into a SPA website using React.

#### 目标：bisheng把Markdown转成SPA静态website

#### 技术：
 `bisheng` 基于 [dora](https://github.com/dora-js/dora) & [webpack](https://webpack.github.io/) & [React](https://facebook.github.io/react/) & [react-router](https://github.com/ReactTraining/react-router)
 
- 支持`browserHistory`，在[GitHub Pages](https://pages.github.com/)中也支持
- 异步加载Markdown数据
- [Plugin](https://github.com/benjycui/bisheng/blob/master/docs/plugin.md)扩展
- 支持服务端渲染,对SEO友好
 
#### 应用场景：博客，技术文档，静态官网等等

#### 工作流程：
![image](https://raw.githubusercontent.com/benjycui/bisheng/master/big-picture.jpg)
##### step1:输入
  输入Markdown文件和路由
  
##### step2:编译
  编译过程会生成markdown数据树
  
##### step3:运行
  匹配路由，读取markdown数据树，转交给react组件，渲染成页面。
  
  
### 使用

#### 安装 
 
```
$ npm install -g bisheng
$ bisheng -h
  Usage: bisheng [command] [options]

  Commands:

    start [options]     to start a server
    build [options]     to build and write static files to `config.output`
    gh-pages [options]  to deploy website to gh-pages
    help [cmd]          display help for [cmd]

  Options:

    -h, --help     output usage information
    -V, --version  output the version number

```

#### 配置
  
 配置文件 bisheng.config.js，可以使用 `bisheng --config another.config.js`生成
  
```
module.exports = {
  port: 8000, // 服务端口
  source: './posts', // 输入markdown源，支持string,object,array
  exclude:'',// 过滤不需要转化的markdown
  output: './_site', // 输出文件名
  theme: './_theme',// 页面主题，可自定义
  themeConfig: '',// theme配置信息,注入在props属性中
  htmlTemplate: path.join(__dirname, '../template.html'), // html公用模板
  doraConfig: {}, // dora配置
  webpackConfig(config) {  // webpack配置
    return config;
  },
  transformers:[],// markdown匹配  
  entryName: 'index', // 入口
  root: '/', // 站点目录
};
```
 

