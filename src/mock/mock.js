/*
  基于mock.js的本地mock处理
*/
import Mock from "mockjs";
import Api from "@/service/api";
import test from "./dataSource/test/test.json";
Mock.mock(Api.test, "get", test);

export default Mock;
