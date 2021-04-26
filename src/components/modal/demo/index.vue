<template>
  <div class="demo">
    <div class="demo1">
      <mcModal
        :visable.sync="isVisible"
        :title="modalTitle"
        :content="modalContent"
      />
    </div>
    <div class="demo2">
      <mcModal
        :visable.sync="isVisible"
        :title="modalTitle"
        :slot="modalSlot"
        :content="modalContent"
      >
        <p class="selectedDay">自定义组件</p>
      </mcModal>
    </div>
  </div>
</template>
<script>
/*
  modal 组件
  属性参数说明
  visable.sync <Boolean> 弹窗的可视化状态,传入sync是modal在子组件内部在更改visage时通过$emit触发更改父组件传入的visable而更改
  即开发者只需考虑visable的打开状态,无需再手动更改关闭状态,默认值是false
  showTitle <Boolean> 是否显示弹窗的标题,默认值是true
  title <String> 弹窗标题,默认值是标题
  needSlot <Boolean> 是否增加自定义内容插槽, 默认不传入
  content <String> 弹窗内容,可传入string或者在组件闭合标签内放入自定义组件,组件会根据自定义组件插入到弹窗内容的slot插槽中。
  okText  <String> 确认按钮文案
  cancelText  <String> 取消按钮文案
  showFooter <Boolean> 是否显示弹窗的按钮页脚,默认值是true
  @ok <Funcition> 点击确认后的回调函数
  @ok <Funcition> 点击确认后的回调函数
*/
import Vue from "vue";
import mcModal from "../index";
Vue.use(mcModal);
export default {
  data() {
    return {
      selectedDay: "",
      selectedRange: []
    };
  }
};
</script>
<style scoped>
.demo {
  padding: 10px;
}
.demo .selectedDay {
  text-align: center;
  margin: 10px;
  font-size: 14px;
}
.demo2 {
  margin-top: 30px;
}
</style>
