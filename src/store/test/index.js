/*
  vuex 在这里执行所有异步action及同步mutation的定义及commit操作
  数据化本地状态管理
*/
import request from "@/service/request";
import Api from "@/service/api";
// import Utils from "../utils/utils";
import Config from "../../../config/index";
const {
  DefaultConfig: { mock }
} = Config;
if (mock) {
  require("@/mock/mock"); //本地mock开启时要引入这个mock
}

const state = {
  getXzlfH5: [] // 获取行政立法数据
};
const mutations = {
  setData: (state, { key, value }) => {
    state[key] = value;
  }
};
const actions = {
  /*
    异步获取数据之后再执行commit操作将数据设置到vuex的全局state中，然后在对应的页面组件中的computed属性中注入
  */
  /*
    测试api
  */
  async testApi({ commit }, params) {
    let data = await request({
      url: Api.test,
      method: "get",
      params: params && params // 当请求为get时 请求参数为params,当请求为post时,请求参数为data
    });
    commit("setData", {
      key: "test",
      value: data
    });
    return data;
  }
};
export default {
  namespaced: true,
  state,
  mutations,
  actions
};
