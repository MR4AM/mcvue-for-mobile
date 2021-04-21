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
  getVideoType: [], // 获取在线视频学习类型tab
  getEduVideoList: [], // 获取在线视频学习列表
  getSysDept: [], // 获取在线视频学习部门查询列表
  getEduVideoDetail: [], // 获取在线视频学习情况统计
  getEduVideoDetailCount: [], // 在线视频播放量统计
  getEduVideoDetailPeople: [], // 学习时长统计分析
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
    获取在线视频学习类型tab
  */
  async getVideoType({ commit },params) {
    let data = await request({
      url: Api.getVideoType,
      method: "POST",
      params: params && params
    })
    if (DefaultSettings.mock) {
      data = Utils.mockSpec(data)
    };
    commit("setData", {
      key: "getVideoType",
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
    获取在线视频学习列表
  */
  async getEduVideoList({ commit },params) {
    let data = await request({
      url: Api.getEduVideoList,
      method: "get",
      params: params && params
    })
    if (DefaultSettings.mock) {
      data = Utils.mockSpec(data)
    };
    commit("setData", {
      key: "getEduVideoList",
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
    新增在线视频学习数据
  */
    async insertVideoTime({ commit },params) {
      let data = await request({
        url: Api.insertVideoTime,
        method: "POST",
        data: params && params
      })
      if (DefaultSettings.mock) {
        data = Utils.mockSpec(data)
      };
      commit("setData", {
        key: "insertVideoTime",
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
  // 获取在线视频学习部门查询列表
  async getSysDept({ commit },params) {
    let data = await request({
      url: Api.getSysDept,
      method: "POST",
      data: params && params , // get 的参数名称叫params, post的参数名称叫data
    })
    if (DefaultSettings.mock) {
      data = Utils.mockSpec(data)
    };
    data.unshift({
      deptId: '',
      deptName: "全部"
    })
    commit("setData", {
      key: "getSysDept",
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
  // 获取在线视频学习情况统计
  async getEduVideoDetail({ commit },params) {
    let data = await request({
      url: Api.getEduVideoDetail,
      method: "POST",
      data: params && params
    })
    if (DefaultSettings.mock) {
      data = Utils.mockSpec(data)
    };
    commit("setData", {
      key: "getEduVideoDetail",
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
  // 在线视频播放量统计
  async getEduVideoDetailCount({ commit },params) {
    let data = await request({
      url: Api.getEduVideoDetailCount,
      method: "POST",
      data: params && params
    })
    if (DefaultSettings.mock) {
      data = Utils.mockSpec(data)
    };
    commit("setData", {
      key: "getEduVideoDetailCount",
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
  // 学习时长统计分析
  async getEduVideoDetailPeople({ commit },params) {
    let data = await request({
      url: Api.getEduVideoDetailPeople,
      method: "POST",
      data: params && params
    })
    if (DefaultSettings.mock) {
      data = Utils.mockSpec(data)
    };
    commit("setData", {
      key: "getEduVideoDetailPeople",
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