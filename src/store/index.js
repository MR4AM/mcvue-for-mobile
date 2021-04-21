/*
  vuex 在这里执行所有异步action及同步mutation的定义及commit操作
  数据化本地状态管理
*/
import Vue from "vue";
import Vuex from "vuex";
import request from "@/api/request";
import Api from "../api/api";
import moment from "moment";
import Utils from "../utils/utils";
// import bus from "../utils/bus";
import videoLearning from "./videoLearning";
import dataReport from "./dataReport";
import DefaultSettings from "../defaultSettings";
if (DefaultSettings.mock) {
  require("../mock/mock"); //本地mock开启时要引入这个mock
}

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    checkUser: {}, // 校验是否有菜单权限
    selectLegalAffairsList: [], // 查询法律事务列表
    insertLegalAffairs: [], // 新增法律事务
    selectRelatedMeeting: [], // 查询设法会议
    getRelatedMeeting: {}, //查询设法会议详情
    getLegalAffairs: {}, // 查询法律事务详情页
    selectConsulDay: [], // 查询法律咨询日报
  },
  mutations: {
    setData: (state, { key, value }) => {
      state[key] = value;
    },
    updateNow(state) {
      state.now = moment().format("YYYY-MM-DD HH:mm:ss");
    },
    yAiaxsClick(state, data) {
      state.yAxiasIndex = data;
    },
    showMiddleModal(state, data) {
      state.showMiddleModal = !state.showMiddleModal;
      let tempObj = Utils.dataTends(data, this);
      state.modalChartObj = tempObj;
    }
  },
  actions: {
    /*
      异步获取数据之后再执行commit操作将数据设置到vuex的全局state中，然后在对应的页面组件中的computed属性中注入
    */
    /*
      校验是否有菜单权限
    */
    async checkUser({ commit },params) {
      let data = await request({
        url: Api.checkUser,
        method: "get",
        params: params && params
      })
      if (DefaultSettings.mock) {
        data = Utils.mockSpec(data)
      };
      commit("setData", {
        key: "checkUser",
        value: data
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
      查询法律事务列表
    */
    async selectLegalAffairsList({ commit },params) {
      let data = await request({
        url: Api.selectLegalAffairsList,
        method: "post",
        params: params && params
      })
      if (DefaultSettings.mock) {
        data = Utils.mockSpec(data)
      };
      commit("setData", {
        key: "selectLegalAffairsList",
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
      新增法律事务
    */
    async insertLegalAffairs({ commit },params) {
      let data = await request({
        url: Api.insertLegalAffairs,
        method: "post",
        data: params && params
      })
      if (DefaultSettings.mock) {
        data = Utils.mockSpec(data)
      };
      commit("setData", {
        key: "insertLegalAffairs",
        value: data
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
      查询法律事务详情页
    */
    async getLegalAffairs({ commit },params) {
      let data = await request({
        url: Api.getLegalAffairs,
        method: "get",
        params: params && params
      })
      if (DefaultSettings.mock) {
        data = Utils.mockSpec(data)
      };
      commit("setData", {
        key: "getLegalAffairs",
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
      修改法律事务
    */
    async updateLegalAffairs({ commit },params) {
      let data = await request({
        url: Api.updateLegalAffairs,
        method: "post",
        data: params && params
      })
      if (DefaultSettings.mock) {
        data = Utils.mockSpec(data)
      };
      commit("setData", {
        key: "updateLegalAffairs",
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
      删除法律事务
    */
    async delLegalAffairs({ commit },params) {
      let data = await request({
        url: Api.delLegalAffairs,
        method: "post",
        data: params && params
      })
      if (DefaultSettings.mock) {
        data = Utils.mockSpec(data)
      };
      commit("setData", {
        key: "delLegalAffairs",
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
      查询设法会议列表
    */
    async selectRelatedMeeting({ commit },params) {
      let data = await request({
        url: Api.selectRelatedMeeting,
        method: "get",
        params: params && params
      })
      if (DefaultSettings.mock) {
        data = Utils.mockSpec(data)
      };
      commit("setData", {
        key: "selectRelatedMeeting",
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
      新增设法会议
    */
    async insertRelatedMeeting({ commit },params) {
      let data = await request({
        url: Api.insertRelatedMeeting,
        method: "post",
        data: params && params
      })
      if (DefaultSettings.mock) {
        data = Utils.mockSpec(data)
      };
      commit("setData", {
        key: "insertRelatedMeeting",
        value: data
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
      查询设法会议详情
    */
    async getRelatedMeeting({ commit },params) {
      let data = await request({
        url: Api.getRelatedMeeting,
        method: "get",
        params: params && params
      })
      if (DefaultSettings.mock) {
        data = Utils.mockSpec(data)
      };
      commit("setData", {
        key: "getRelatedMeeting",
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
      修改设法会议
    */
    async updateRelatedMeeting({ commit },params) {
      let data = await request({
        url: Api.updateRelatedMeeting,
        method: "post",
        data: params && params
      })
      if (DefaultSettings.mock) {
        data = Utils.mockSpec(data)
      };
      commit("setData", {
        key: "updateRelatedMeeting",
        value: data
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
      插入法律咨询日报
    */
    async insertConsulDay({ commit },params) {
      let data = await request({
        url: Api.insertConsulDay,
        method: "post",
        data: params && params
      })
      if (DefaultSettings.mock) {
        data = Utils.mockSpec(data)
      };
      commit("setData", {
        key: "insertConsulDay",
        value: data
      });
    },
    /*
      查询法律咨询日报
    */
    async selectConsulDay({ commit },params) {
      let data = await request({
        url: Api.selectConsulDay,
        method: "post",
        data: params && params
      })
      if (DefaultSettings.mock) {
        data = Utils.mockSpec(data)
      };
      commit("setData", {
        key: "selectConsulDay",
        value: data || []
      });
      return new Promise((resolve, reject) => {
        if (data) {
          resolve(data);
        } else {
          reject();
        }
      });
    },
    /*
      获取部门树
    */
    async getDeptTree({ commit },params) {
      let data = await request({
        url: Api.getDeptTree,
        method: "get",
        data: params && params
      })
      if (DefaultSettings.mock) {
        data = Utils.mockSpec(data)
      };
      commit("setData", {
        key: "getDeptTree",
        value: [data] || []
      });
      return new Promise((resolve, reject) => {
        if (data) {
          resolve(data);
        } else {
          reject();
        }
      });
    },
    /*
      获取法律咨询日报所有部门的统计数据
    */
    async getConsuleReport({ commit },params) {
      let data = await request({
        url: Api.getConsuleReport,
        method: "post",
        data: params && params
      })
      if (DefaultSettings.mock) {
        data = Utils.mockSpec(data)
      };
      commit("setData", {
        key: "getConsuleReport",
        value: data || []
      });
      return new Promise((resolve, reject) => {
        if (data) {
          resolve(data);
        } else {
          reject();
        }
      });
    },
  },
  modules: {
    videoLearning,
    dataReport
  }
});
