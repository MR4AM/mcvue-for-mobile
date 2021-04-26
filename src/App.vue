<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  /*
    变量装载
  */
  data() {
    return {
      text: "null"
    };
  },
  /*
    组件声明
  */
  components: {},
  /*
    页面挂载
  */
  mounted() {
    console.log(process.env, "查看环境变量");
  },
  /*
    页面摧毁
  */
  destroyed() {},
  /*
    执行方法
  */
  methods: {
    checkUser() {}
  }
};
</script>

<style lang="less">
body {
  margin: 0;
}
.ant-modal {
  width: 80% !important;
}
p {
  margin: 0;
  padding: 0;
}
</style>
