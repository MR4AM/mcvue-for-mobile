/*
  公共参数配置
*/
module.exports = {
  devUrl: "http://47.106.68.255:8380", // 测试环境
  prodUrl: "https://test.zhfl.fabaogd.com", // 正式环境
  basePrefix: "/module/wx", // 接口共有前缀
  env: "prod", // 部署环境， dev 是测试，prod是生产
  ajaxTimout: 80, // ajax请求超时时长,单位s
  mock: false, //是否开启本地mock
  proxy: true, // 本地代理是否开启
  consoleDebug: false // 是否开启移动vConsole控制台输出
};
