/*
  前后端api映射
*/
import DefaultSettings from "../defaultSettings";
let baseUrl;
if (!DefaultSettings.mock) {
  if (DefaultSettings.env === "dev") {
    baseUrl = DefaultSettings.devUrl + "/module/wx";
  } else {
    baseUrl = DefaultSettings.prodUrl + "/module/wx";
  }
  if (!DefaultSettings.mock && DefaultSettings.proxy) {
    baseUrl = "/module/wx";
  }
} else {
  baseUrl = "/module/wx";
}
export default {
  checkUser: `${baseUrl}/checkUser`, // 校验是否有菜单权限
  insertLegalAffairs: `${baseUrl}/insertLegalAffairs`, //新增法律事务
  selectLegalAffairsList: `${baseUrl}/selectLegalAffairsList`, //查询法律事务列表
  updateLegalAffairs: `${baseUrl}/updateLegalAffairs`, //修改法律事务
  delLegalAffairs: `${baseUrl}/delLegalAffairs`, //删除法律事务
  getLegalAffairs: `${baseUrl}/getLegalAffairs`, //查询法律事务详情页
  selectRelatedMeeting: `${baseUrl}/selectRelatedMeeting`, //查询设法会议
  insertRelatedMeeting: `${baseUrl}/insertRelatedMeeting`, // 新增设法会议
  getRelatedMeeting: `${baseUrl}/getRelatedMeeting`, // 查询设法会议详情
  updateRelatedMeeting: `${baseUrl}/updateRelatedMeeting`, // 修改设法会议
  insertConsulDay: `${baseUrl}/insertConsulDay`,// 插入法律咨询日报
  selectConsulDay: `${baseUrl}/selectConsulDay`,// 查询法律咨询日报
  getDeptTree: `${baseUrl}/getDeptTree`, //获取部门树
  getConsuleReport: `${baseUrl}/getConsuleReport`, // 获取法律咨询日报所有部门的统计数据
  getVideoType: `${baseUrl}/getVideoType`, // 获取在线视频学习类型tab
  getEduVideoList: `${baseUrl}/getEduVideoList`, // 获取在线视频学习列表
  insertVideoTime: `${baseUrl}/insertVedioTime`, // 新增在线视频学习数据
  getSysDept: `${baseUrl}/getSysDept`, // 获取在线视频学习部门查询列表
  getEduVideoDetail: `${baseUrl}/getEduVideoDetail`, // 获取在线视频学习情况统计
  getEduVideoDetailCount: `${baseUrl}/getEduVideoDetailCount`, // 在线视频播放量统计
  getEduVideoDetailPeople: `${baseUrl}/getEduVideoDetailPeople`, // 学习时长统计分析
  getXzlfH5: `${baseUrl}/getH5One`, // 获取行政立法数据
  getxzfyssH5: `${baseUrl}/getH5Two`, // 获取行政复议与诉讼数据
  getzfflswH5: `${baseUrl}/getH5Three`, // 获取政府法律事务数据
  getlsglH5: `${baseUrl}/getH5Four`, // 获取律所管理数据
  getxzzfH5: `${baseUrl}/getH5Five`, // 获取行政执法协调监督数据
  getpfxcH5: `${baseUrl}/getH5Six`, // 获取普法宣传数据
  getggflH5: `${baseUrl}/getH5Seven`, // 获取公共法律服务数据
  getxxzxH5: `${baseUrl}/getH5Eight`, // 获取刑事执行数据
}
