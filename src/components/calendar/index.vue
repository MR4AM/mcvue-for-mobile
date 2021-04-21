<template>
  <div class="calendar">
    <section class="header">
      {{ title }}
    </section>
    <div class="container">
      <ul class="week-area">
        <li
          class="week-item"
          v-for="(item, index) in weekLabelList"
          :key="index">
          <span class="week-font calendar-item">{{ item }}</span>
        </li>
      </ul>
      <div class="muti-month">
        <ul class="single-month" v-for="(item, index) in calenderData" :key="index">
          <section
            class="data-container"
          >
            <section class="header">
              {{ item.year }}年{{ item.month }}月
            </section>
            <section
              class="month-area"
            >
              <li
                v-for="(it, idx) in item.dateData"
                :key="idx"
                :class="[
                  'data-item',
                  { 'selected': mode === 'single' && selectData.date===it.date},
                  { 'between-selected': mode === 'range' && ((selectData.length >0 && new Date(selectData[0].date)< new Date(it.date) && (selectData.length >1 && new Date(selectData[1].date)> new Date(it.date))))},
                  { 'selected': mode === 'range' &&((selectData.length>0 && selectData[0].date===it.date) || (selectData.length>1 && selectData[1].date===it.date))},
                  { 'hide-item': it.type !== 'normal'},
                  { 'grey-item': new Date(it.date) < new Date(minDate) || new Date(it.date) > new Date(maxDate)},
                ]"
                @click="checkoutDate(it,index)">
                <span :class="[
                  'data-font',
                  'calendar-item'
                ]">{{ it.day }}</span>
                <span  class="block" v-if="mode === 'range' && selectData.length>0 && selectData[0].date===it.date">{{rangeStartText}}</span>
                <span  class="block" v-if="mode === 'range' && selectData.length>1 && selectData[1].date===it.date">{{rangeEndText}}</span>
              </li>
            </section>
          </section>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Tool from './utils.js'
export default {
  name: 'calender',
  props: {
    title: {
      type: String,
      default: '日历'
    },
    minDate: {
      type: Date,
      default: () => new Date(),
    },
    maxDate: {
      type: Date,
      default() {
        const now = new Date();
        return new Date(now.getFullYear(), now.getMonth() + 6, now.getDate());
      },
    },
    mode: {
      type: String,
      default: 'single'
    },
    rangeStartText: {
      type: String,
      default: '开始'
    },
    rangeEndText: {
      type: String,
      default: '结束'
    }
  },
  data() {
    return {
      weekLabelList: ['日', '一', '二', '三', '四', '五', '六'],
      calenderData: [],
      selectData: [], 
    }
  },
  created() {
    this.init()
  },
  methods: {
    init () {
      this.renderCalendarData()
    },
    /*
      生成指定区间的日历数据
    */
    renderCalendarData () {
      let tempArray = [];
      let monthArray = Tool.getMonthBetween(this.minDate,this.maxDate) || [];
      for (let i = 0;i < monthArray.length; i++) {
        tempArray.push(this.getMonthData(new Date(monthArray[i])))
      }
      this.calenderData = tempArray;
    },
    /*
      获取指定月份数据
    */
    getMonthData(date, unSelected = false) {
      const year = new Date(date).getFullYear()
      const month = new Date(date).getMonth() + 1
      const day = new Date(date).getDate()
      let dataArr = []
      let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        daysInMonth[1] = 29
      }
      const monthStartWeekDay = new Date(year, month - 1, 1).getDay()
      const monthEndWeekDay = new Date(year, month, 1).getDay() || 7
      const preInfo = this.getPreMonth(date)
      const nextInfo = this.getNextMonth();
      for (let i = 0; i < monthStartWeekDay; i++) {
        let preObj = {
          type: 'pre',
          day: daysInMonth[preInfo.month - 1] - (monthStartWeekDay - i - 1),
          month: preInfo.month,
          year: preInfo.year,
        }
        dataArr.push(preObj)
      }
      for (let i = 0; i < daysInMonth[month - 1]; i++) {
        let itemObj = {
          type: 'normal',
          day: i + 1,
          month,
          year,
          date: `${year}-${month<10?'0'+month:month}-${i<9?'0'+(i+1):i+1}`,
          isSelected: unSelected,
        }
        dataArr.push(itemObj)
      }
      for (let i = 0; i < 7 - monthEndWeekDay; i++) {
        let nextObj = {
          type: 'next',
          day: i + 1,
          month: nextInfo.month,
          year: nextInfo.year,
        }
        dataArr.push(nextObj)
      };
      return {
        year: year,
        month: month,
        day: day,
        dateData: dataArr
      }
    },
    checkoutDate(selectData) {
      if (new Date(selectData.date) < new Date(this.minDate) || new Date(selectData.date) > new Date(this.maxDate)) {
        return
      }
      let tempArray = []
      if (this.selectData && this.selectData.length >= 2) {
        tempArray = Array.from(this.selectData.pop())
      } else {
        tempArray = this.selectData
      }
      switch (this.mode) {
        case 'single':
          this.selectData = selectData;
          break;
        case 'range':
          if (!(tempArray.length==1 && new Date (tempArray[0].date) < new Date(selectData.date))) {
            tempArray = []
          }
          tempArray.push(selectData)
          this.selectData = tempArray;
          break;
      }
      this.$emit('select', this.selectData);
    },
    // 获取前(后)一个月的年月日信息
    getPreMonth(date, appointDay = 1) {
      let { year, month } = date || this.selectData
      if (month === 1) {
        year -= 1
        month = 12
      } else {
        month -= 1
      }
      return { year, month, day: appointDay }
    },
    getNextMonth(appointDay = 1) {
      let { year, month } = this.selectData
      if (month === 12) {
        year += 1
        month = 1
      } else {
        month += 1
      }
      return { year, month, day: appointDay }
    },
  }
}
</script>

<style scoped>
@import url('./index.css');
</style>