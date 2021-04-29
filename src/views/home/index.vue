<template>
  <div class="welcome">
    <h1 class="title">欢迎使用mcvue</h1>
    <van-grid :column-num="3">
      <van-grid-item
        v-for="(item, index) in featureList"
        :key="index"
        icon="photo-o"
        :text="item.name"
        @click="item.clickFunction()"
      />
    </van-grid>
    <mc-modal
      :visable.sync="isVisible"
      :title="modalTitle"
      :needSlot="modalSlot"
      :content="modalContent"
    >
      <About v-if="currentComponent === 'About'" />
      <mc-calender
        title="日历组件选择日期区间"
        :minDate="new Date('2021-06-08')"
        :maxDate="new Date('2021-12-08')"
        @select="handleSelect"
        mode="range"
        rangeEndText="结束"
        v-if="currentComponent === 'mcCander'"
      />
    </mc-modal>
  </div>
</template>
<script>
import About from "./about";
export default {
  /*
    变量装载
  */
  data() {
    return {
      modalTitle: "",
      isVisible: false,
      currentComponent: "About",
      modalContent: "",
      modalSlot: false,
      featureList: [
        {
          name: "关于mcvue",
          src: "",
          clickFunction: () => {
            this.isVisible = true;
            this.modalSlot = true;
            this.modalTitle = "关于mcvue";
            this.currentComponent = "About";
          }
        },
        {
          name: "toast组件",
          src: "",
          clickFunction: () => {
            this.$toast("欢迎使用mcvue");
          }
        },
        {
          name: "modal页面自定义",
          src: "",
          clickFunction: () => {
            this.modalTitle = "modal组件";
            this.isVisible = true;
            this.modalSlot = false;
            this.modalContent = "欢迎使用mcvue,这是mocvue modal组件";
          }
        },
        {
          name: "modal全局使用",
          src: "",
          clickFunction: () => {
            this.$modal({
              title: "这是一个全局使用的modal",
              content: "全局modal使用实例",
              onOk: () => {
                this.$toast("点击了确认");
              },
              onCancel: () => {
                this.$toast("点击了取消");
              }
            });
          }
        },
        {
          name: "日历组件",
          src: "",
          clickFunction: () => {
            this.isVisible = true;
            this.modalSlot = true;
            this.modalTitle = "选择日期";
            this.currentComponent = "mcCander";
          }
        },
        {
          name: "移动端图表F2使用",
          src: "",
          clickFunction: () => {
            this.$router.push("/chart");
          }
        }
      ]
    };
  },
  /*
    组件声明
  */
  components: {
    // BstCanlendar
    About
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
  padding: 10px;
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
