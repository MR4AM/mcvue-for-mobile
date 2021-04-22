const path = require("path");
const WebpackBar = require("webpackbar");
const { name } = require("./package.json");
const Config = require("./config/index");
const {
  DefaultConfig: { env, devUrl, prodUrl, basePrefix }
} = Config;
module.exports = {
  // 基本路径
  publicPath: "/",
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, "./src/style/global.less")]
    }
  },
  configureWebpack() {
    return {
      plugins: [
        new WebpackBar({
          name: name
        })
      ]
    };
  },
  devServer: {
    // open: process.platform === 'darwin',
    // host: 'localhost',
    // port: 8071,
    // open: true, //配置自动启动浏览器
    proxy: {
      // vue-cli3 代理是从指定的target后面开始匹配的，不是任意位置；配置pathRewrite可以做替换
      "/module/wx": {
        target: env === "prod" ? prodUrl : devUrl, //服务器真实地址
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/module/wx": `${env === "prod" ? prodUrl : devUrl}${basePrefix}` // 后面的/api根据实际请求地址决定，即我的请求url：/api/test/test，被代理后请求的则是服务器真实地址+'/api/test/test'
        }
      }
    }
  }
};
