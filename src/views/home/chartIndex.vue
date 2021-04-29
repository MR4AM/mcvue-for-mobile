<template>
  <div class="chartIndex">
    <BarChart chartId="testBar" :dataSource="barChartData" height="300px" />
  </div>
</template>
<script>
import BarChart from "@/bizComponent/barChart/index";
export default {
  components: {
    BarChart
  },
  data() {
    return {
      barChartData: [
        { name: "测试", value: 12 },
        { name: "测试12", value: 8 },
        { name: "测试13", value: 4 },
        { name: "测试15", value: 3 },
        { name: "测试16", value: 5 },
        { name: "测试17", value: 9 },
        { name: "测试18", value: 7 },
        { name: "测试19", value: 8 },
        { name: "测试20", value: 2 },
        { name: "测试21", value: 8 },
        { name: "测试22", value: 2 },
        { name: "测试23", value: 8 },
        { name: "测试24", value: 2 },
        { name: "测试25", value: 2 },
        { name: "测试26", value: 2 },
        { name: "测试27", value: 2 }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.chartIndex {
}
</style>
