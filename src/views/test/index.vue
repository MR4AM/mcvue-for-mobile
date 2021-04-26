<template>
  <div class="welcome">
    <h1 class="title">该系统源码由mcvue提供技术底层框架支持</h1>
    <mc-calender
      title="日历组件选择日期区间"
      :minDate="new Date('2021-06-08')"
      :maxDate="new Date('2021-12-08')"
      @select="handleSelect"
      mode="range"
      rangeEndText="结束"
    />
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
  async mounted() {
    // const { dispatch } = this.$store;
    let data = await this.$store.dispatch("test/testApi");
    console.log(data, "888");
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
    },
    handleSelect(e) {
      console.log(e);
      this.$toast("111");
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
