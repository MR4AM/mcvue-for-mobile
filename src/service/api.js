/*
  前后端api映射
*/
import Config from "../../config/index";
const {
  DefaultConfig: { mock, env, devUrl, prodUrl, proxy, basePrefix }
} = Config;
let baseUrl;
if (!mock) {
  if (env === "dev") {
    baseUrl = devUrl + basePrefix;
  } else {
    baseUrl = prodUrl + basePrefix;
  }
  if (!mock && proxy) {
    baseUrl = basePrefix;
  }
} else {
  baseUrl = "";
}
export default {
  test: `${baseUrl}/test`,
  checkUser: `${baseUrl}/checkUser` // 校验是否有菜单权限
};
