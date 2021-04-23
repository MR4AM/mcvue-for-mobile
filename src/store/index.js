/*
  vuex 在这里执行所有异步action及同步mutation的定义及commit操作
  数据化本地状态管理
*/
import Vue from "vue";
import Vuex from "vuex";
import request from "@/api/request";
import Api from "@/api/api";
import moment from "moment";
// import Utils from "../utils/utils";
// import bus from "../utils/bus";
import test from "./test/index";
import Config from "../../config/index";
const {
  DefaultConfig: { mock }
} = Config;
if (mock) {
  require("@/mock/mock"); //本地mock开启时要引入这个mock
}

Vue.use(Vuex);

export default new Vuex.Store({
  // 状态树state
  state: {
    test: {} // 测试api
  },
  // mutations 提交更改state
  mutations: {
    setData: (state, { key, value }) => {
      state[key] = value;
    },
    updateNow(state) {
      state.now = moment().format("YYYY-MM-DD HH:mm:ss");
    }
  },
  // 异步actions
  actions: {
    /*
      异步获取数据之后再执行commit操作将数据设置到vuex的全局state中，然后在对应的页面组件中的computed属性中注入
    */
    /*
      测试api
    */
    async expmle({ commit }, params) {
      let data = await request({
        url: Api.test,
        method: "get",
        params: params && params // 当请求为get时 请求参数为params,当请求为post时,请求参数为data
      });
      // 是否需要将状态更新到vuex 的state中, 这个过程通过commit 一个mutations来更改state
      commit("setData", {
        key: "test",
        value: data
      });
      return data;
    }
  },
  modules: {
    test
  }
});
