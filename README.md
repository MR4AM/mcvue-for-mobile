# 项目说明

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