<template>
  <div class="welcome">
    <h1 class="title">该系统源码由mcvue提供技术底层框架支持</h1>
  </div>
</template>
<script>
export default {
  /*
    变量装载
  */
  data() {
    return {
      isVisible: false
    };
  },
  /*
    组件声明
  */
  components: {
    // BstCanlendar
  },
  /*
    页面挂载
  */
  mounted() {
    console.log(777)
  },
  /*
    页面摧毁
  */
  destroyed() {},
  /*
    执行方法
  */
  methods: {
    showPicker() {
      this.$message.warn("909090");
      this.isVisible = !this.isVisible;
    }
  }
};
</script>
<style scoped lang="less">
.welcome {
  padding: 20px 30px;
  .title {
    font-size: 16px;
    color: @primary-color;
  }
}
</style>
