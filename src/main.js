import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Config from "../config/index";
const {
  DefaultConfig: { consoleDebug }
} = Config;
import "./plugins/vant";
import "./plugins/mcui";
import "lib-flexible/flexible.js";
import F2 from "@antv/f2";
const ScrollBar = require("@antv/f2/lib/plugin/scroll-bar");
// 注册插件 ScrollBar
F2.Chart.plugins.register(ScrollBar); // 这里进行全局注册，也可以给 chart 的实例注册
import VConsole from "vconsole";
Vue.prototype.F2 = F2;
if (consoleDebug) {
  new VConsole();
}
/*
  使用百度地图
*/
// Vue.use(BaiduMap, {
//   ak: 'naGZWXzhfKt5UC4Z8NXNYVntgisqQZZN'
// })
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
