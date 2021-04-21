/*
  vuex 在这里执行所有异步action及同步mutation的定义及commit操作
  数据化本地状态管理
*/
import request from "@/api/request";
import Api from "../api/api";
import Utils from "../utils/utils";
import DefaultSettings from "../defaultSettings";
if (DefaultSettings.mock) {
  require("../mock/mock"); //本地mock开启时要引入这个mock
}

const state = {
  getXzlfH5: [], // 获取行政立法数据
  getxzfyssH5: [], // 获取行政复议与诉讼数据
  getzfflswH5: [], // 获取政府法律事务数据
  getlsglH5: [], // 获取律所管理数据
  getxzzfH5: [], // 获取行政执法协调监督数据
  getpfxcH5: [], // 获取普法宣传数据
  getggflH5: [], // 获取公共法律服务数据
  getxxzxH5: [], // 获取刑事执行数据
};
const mutations = {
  setData: (state, { key, value }) => {
    state[key] = value;
  },
};
const actions = {
  /*
    异步获取数据之后再执行commit操作将数据设置到vuex的全局state中，然后在对应的页面组件中的computed属性中注入
  */
  /*
    获取行政立法数据
  */
  async getXzlfH5({ commit },params) {
    let data = await request({
      url: Api.getXzlfH5,
      method: "POST",
      params: params && params
    });
    if (DefaultSettings.mock) {
      data = Utils.mockSpec(data)
    };
    commit("setData", {
      key: "getXzlfH5",
      value: data || []
    });
    return new Promise((resolve, reject) => {
      if (data) {
        resolve(data);
      } else {
        reject();
      }
    })
  },
  /*
    获取行政复议与诉讼数据
  */
  async getxzfyssH5({ commit },params) {
    let data = await request({
      url: Api.getxzfyssH5,
      method: "POST",
      params: params && params
    });
    if (DefaultSettings.mock) {
      data = Utils.mockSpec(data)
    };
    commit("setData", {
      key: "getxzfyssH5",
      value: data || []
    });
    return new Promise((resolve, reject) => {
      if (data) {
        resolve(data);
      } else {
        reject();
      }
    })
  },
  /*
    获取政府法律事务数据
  */
  async getzfflswH5({ commit },params) {
    let data = await request({
      url: Api.getzfflswH5,
      method: "POST",
      params: params && params
    });
    if (DefaultSettings.mock) {
      data = Utils.mockSpec(data)
    };
    commit("setData", {
      key: "getzfflswH5",
      value: data || []
    });
    return new Promise((resolve, reject) => {
      if (data) {
        resolve(data);
      } else {
        reject();
      }
    })
  },
  /*
    获取律所管理数据
  */
  async getlsglH5({ commit },params) {
    let data = await request({
      url: Api.getlsglH5,
      method: "POST",
      params: params && params
    });
    if (DefaultSettings.mock) {
      data = Utils.mockSpec(data)
    };
    commit("setData", {
      key: "getlsglH5",
      value: data || []
    });
    return new Promise((resolve, reject) => {
      if (data) {
        resolve(data);
      } else {
        reject();
      }
    })
  },
  /*
    获取行政执法协调监督数据
  */
  async getxzzfH5({ commit },params) {
    let data = await request({
      url: Api.getxzzfH5,
      method: "POST",
      params: params && params
    });
    if (DefaultSettings.mock) {
      data = Utils.mockSpec(data)
    };
    commit("setData", {
      key: "getxzzfH5",
      value: data || []
    });
    return new Promise((resolve, reject) => {
      if (data) {
        resolve(data);
      } else {
        reject();
      }
    })
  },
  /*
    获取普法宣传数据
  */
  async getpfxcH5({ commit },params) {
    let data = await request({
      url: Api.getpfxcH5,
      method: "POST",
      params: params && params
    });
    if (DefaultSettings.mock) {
      data = Utils.mockSpec(data)
    };
    commit("setData", {
      key: "getpfxcH5",
      value: data || []
    });
    return new Promise((resolve, reject) => {
      if (data) {
        resolve(data);
      } else {
        reject();
      }
    })
  },
  /*
    获取公共法律服务数据
  */
  async getggflH5({ commit },params) {
    let data = await request({
      url: Api.getggflH5,
      method: "POST",
      params: params && params
    });
    if (DefaultSettings.mock) {
      data = Utils.mockSpec(data)
    };
    commit("setData", {
      key: "getggflH5",
      value: data || []
    });
    return new Promise((resolve, reject) => {
      if (data) {
        resolve(data);
      } else {
        reject();
      }
    })
  },
  /*
    获取刑事执行数据
  */
  async getxxzxH5({ commit },params) {
    let data = await request({
      url: Api.getxxzxH5,
      method: "POST",
      params: params && params
    });
    if (DefaultSettings.mock) {
      data = Utils.mockSpec(data)
    };
    commit("setData", {
      key: "getxxzxH5",
      value: data || []
    });
    return new Promise((resolve, reject) => {
      if (data) {
        resolve(data);
      } else {
        reject();
      }
    })
  },
};
export default {
  namespaced: true,
  state,
  mutations,
  actions
}