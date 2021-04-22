import axios from "axios";
import Mooncloud from "@/components/index";
import Config from "../../config/index";
const {
  DefaultConfig: { mock, ajaxTimout }
} = Config;
const service = axios.create({
  withCredentials: true,
  timeout: ajaxTimout * 1000 //设置请求超时时长
});

if (!mock) {
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
        Mooncloud.showToast(res.msg || "error");
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
