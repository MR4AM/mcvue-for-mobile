import axios from "axios";
// import { message } from "ant-design-vue";
import DefaultSettings from "../defaultSettings";
const service = axios.create({
  withCredentials: true,
  timeout: DefaultSettings.ajaxTimout * 1000 //设置请求超时时长
});

if (!DefaultSettings.mock) {
  service.interceptors.request.use(
    config => {
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );
  
  service.interceptors.response.use(
    response => {
      const res = response.data;
      if (res.code * 1 !== 0) {
        // message.error(res.msg || "error")
        return Promise.reject(res.msg || "error").catch(() => { });
      } else {
        return res.data;
      }
    },
    error => {
      return Promise.reject(error).catch(() => {});
    }
  );
}

export default service;
