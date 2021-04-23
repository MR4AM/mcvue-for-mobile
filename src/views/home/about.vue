<template>
  <div class="welcome">
    <h1 class="title">欢迎使用mcvue</h1>
    <div class="paper-dec">
      <h2>mcvue 基于vue-cli的基础增加更多面向业务的配置处理,包含特性如下：</h2>
      <p>1.集成了service服务、开发者可根据项目需要修改、service服务基于axios。</p>
      <p>2.集成mock.js服务,开发者可根据需要定义数据json,与后端开发协同,支持一键式切换mock和本地代理请求不同环境的接口地址。</p>
      <p>3.集成了移动端rem适配方案、flexible.js与postcss-pxtorem结合,前端开发者只需根据设计师设计稿定义基准值rootValue,mcvue默认根字体设置为37.5。</p>
      <p>4.集成使用了vant和mooncloud自身封装的ui组件,使用vant是考虑到目前大多数前端开发者使用参考的比较多，开发者可根据自身需要移出或自定义合适的ui组件。</p>
      <p>5.集成使用了移动端控制台工具vconsole,方便前端开发者定位检索输出,vconsole支持一键式切换</p>
      <p>6.集成使用了eslint代码格式校验</p>
      <p>7.集成使用了vuex全局状态管理,网络请求使用使用async/await定义在vuex中,开发者只需在对应的view调用$store对应的action</p>
      <p>8.集成使用了less样式预处理,前端开发者可对应嵌套式及函数式编写样式表</p>
    </div>
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
    console.log(data);
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
    handleSelect() {
      this.$toast("111");
    }
  }
};
</script>
<style scoped lang="less">
.welcome {
  padding: 20px 30px;
  .title {
    font-size: 20px;
    color: @primary-color;
    text-align: center;
  }
  .paper-dec {
    h2 {
      font-size: 18px;
    }
    p {
      font-size: 16px;
      padding: 10px 0;
    }
  }
}
</style>
