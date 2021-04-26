<template>
  <div class="demo">
    <div class="demo1">
      <mcCanlendar title="日历组件选择单个日期" @select="handleSelect" />
      <p class="selectedDay">{{ selectedDay }}</p>
    </div>
    <div class="demo2">
      <mcCanlendar
        title="日历组件选择日期区间"
        :minDate="new Date('2021-06-08')"
        :maxDate="new Date('2021-12-08')"
        @select="handleSelect"
        mode="range"
        rangeEndText="结束"
      />
      <p class="selectedDay">{{ selectedRange }}</p>
    </div>
  </div>
</template>
<script>
/*
  canlendar 组件
  属性参数说明
  title <String> 日历名称
  minDate <Date> 日历的起始最小日期 不传默认去当前日期
  maxDate <Date> 日历的结束最大日期 不传默认当前日期往后增加6个月
  mode <String> 日历的形式，目前支持单选和区间选择 single / range 默认是single单选模式
  rangeStartText  <String> 区间选择开始日期的文字提醒 默认文字是开始
  rangeEndText  <String> 区间选择结束日期的文字提醒 默认文字是结束
*/
import Vue from "vue";
import mcCanlendar from "../index";
Vue.use(mcCanlendar);
export default {
  data() {
    return {
      selectedDay: "",
      selectedRange: []
    };
  },
  methods: {
    handleSelect(e) {
      if (Array.isArray(e) && e.length >= 2) {
        this.selectedRange = `当前选中的是${e[0].date}-${e[1].date}`;
      } else {
        this.selectedDay = `当前选中的是${e.date}`;
      }
    }
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
