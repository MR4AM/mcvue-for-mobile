/*
  基于mock.js的本地mock处理
*/
import Mock from "mockjs";
import Api from "../api/api";
import getXzlfH5 from "./dataSource/dataReport/getXzlfH5.json";
import getxzfyssH5 from "./dataSource/dataReport/getxzfyssH5.json";
import getzfflswH5 from "./dataSource/dataReport/getzfflswH5.json";
import getlsglH5 from "./dataSource/dataReport/getlsglH5.json";
import getxzzfH5 from "./dataSource/dataReport/getxzzfH5.json";
import getpfxcH5 from "./dataSource/dataReport/getpfxcH5.json";
import getggflH5 from "./dataSource/dataReport/getggflH5.json";
import getxxzxH5 from "./dataSource/dataReport/getxxzxH5.json";


Mock.mock(Api.getXzlfH5, "get", getXzlfH5);
Mock.mock(Api.getxzfyssH5, "get", getxzfyssH5);
Mock.mock(Api.getzfflswH5, "get", getzfflswH5);
Mock.mock(Api.getlsglH5, "get", getlsglH5);
Mock.mock(Api.getxzzfH5, "get", getxzzfH5);
Mock.mock(Api.getpfxcH5, "get", getpfxcH5);
Mock.mock(Api.getggflH5, "get", getggflH5);
Mock.mock(Api.getggflH5, "get", getggflH5);
Mock.mock(Api.getxxzxH5, "get", getxxzxH5);

export default Mock;
