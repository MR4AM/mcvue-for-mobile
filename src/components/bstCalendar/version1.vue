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
            ref="calendar"
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
                  { 'selected': selectData.month===it.month && selectData.day===it.day},
                  { 'other-item': it.type !== 'normal'},
                ]"
                :style="`height: ${itemHeight}px`"
                @click="checkoutDate(it,index)">
                <span class="data-font calendar-item">{{ it.day }}</span>
              </li>
            </section>
          </section>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
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
    itemHeight: {
      type: Number,
      default: 40
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
    renderCalendarData () {
      // let tempArray = []
      // let startMonth = new Date(this.minDate).getMonth() + 1
      // let endMonth = new Date(this.maxDate).getMonth() + 1
      // let startYear = new Date(this.minDate).getFullYear()
      // let endYear = new Date(this.maxDate).getFullYear()
      // let monthOffset = endMonth - startMonth
      // // let yearOffset = endYear - startYear
      // for (let i = 0; i<monthOffset; i++) {
      //   tempArray.push(this.getMonthData(`${startYear}-${new Date(this.minDate).getMonth() + i + 1}-01`))
      // }    
      // this.calenderData = tempArray;
    },
    getMonthData(date, unSelected = false) {
      const year = new Date(date).getFullYear()
      const month = new Date(date).getMonth() + 1
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
        dateData: dataArr
      }
    },
    checkoutDate(selectData) {
      this.selectData = selectData;
    },
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