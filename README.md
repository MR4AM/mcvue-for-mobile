# 项目说明
```
  <h2>mcvue 基于vue-cli的基础增加更多面向业务的配置处理,包含特性如下：</h2>
  <p>1.集成了service服务、开发者可根据项目需要修改、service服务基于axios。</p>
  <p>2.集成mock.js服务,开发者可根据需要定义数据json,与后端开发协同,支持一键式切换mock和本地代理请求不同环境的接口地址。</p>
  <p>3.集成了移动端rem适配方案、flexible.js与postcss-pxtorem结合,前端开发者只需根据设计师设计稿定义基准值rootValue,mcvue默认根字体设置为37.5。</p>
  <p>4.集成使用了vant和mooncloud自身封装的ui组件,使用vant是考虑到目前大多数前端开发者使用参考的比较多，开发者可根据自身需要移出或自定义合适的ui组件。</p>
  <p>5.集成使用了移动端控制台工具vconsole,方便前端开发者定位检索输出,vconsole支持一键式切换</p>
  <p>6.集成使用了eslint代码格式校验</p>
  <p>7.集成使用了vuex全局状态管理,网络请求使用使用async/await定义在vuex中,开发者只需在对应的view调用$store对应的action</p>
  <p>8.集成使用了less样式预处理,前端开发者可对应嵌套式及函数式编写样式表</p>
```
## 项目目录

```
mcvue-for-mobile
├─.DS_Store
├─.browserslistrc
├─.env
├─.env.development
├─.env.production
├─.eslintrc.js
├─.gitignore
├─README.md
├─babel.config.js
├─package.json
├─postcss.config.js
├─vue.config.js
├─src
|  ├─.DS_Store
|  ├─App.vue
|  ├─main.js
|  ├─views
|  |   ├─test
|  |   |  └index.vue
|  |   ├─home
|  ├─utils
|  ├─style
|  |   ├─animate.less
|  |   └global.less
|  ├─store
|  |   ├─index.js
|  |   ├─test
|  |   |  └index.js
|  ├─router
|  |   ├─index.js
|  |   └router.config.js
|  ├─plugins
|  |    ├─index.js
|  |    ├─mcui.js
|  |    └vant.js
|  ├─mock
|  |  ├─mock.js
|  |  ├─dataSource
|  |  |     ├─test
|  |  |     |  └test.json
|  |  |     ├─login
|  ├─components
|  ├─bizComponent
|  |
|  ├─assets
|  ├─api
|  |  ├─api.js
|  |  └request.js
├─public
|   ├─.DS_Store
|   ├─favicon.ico
|   ├─index.html
|   ├─static
|   |   ├─js
|   |   | └flexible.js
|   |   ├─css
|   |   |  └loading.css
├─config
|   ├─default.config.js
|   └index.js
```
## Project setup
```
yarn add
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/)