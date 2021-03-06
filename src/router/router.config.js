/**
 * router配置
 * https://router.vuejs.org/zh/guide/
 */

const routes = [
  {
    path: "/",
    name: "欢迎使用mcvue",
    component: () => import("@/views/home/index.vue")
  },
  {
    path: "/test",
    name: "欢迎使用mcvue",
    component: () => import("@/views/test/index.vue"),
    children: [
      {
        path: "test",
        name: "欢迎使用mcvue",
        component: () => import("@/views/test/index.vue")
      }
    ]
  },
  {
    path: "/chart",
    name: "f2图表示例",
    component: () => import("@/views/home/chartIndex.vue")
  }
];

export default routes;
