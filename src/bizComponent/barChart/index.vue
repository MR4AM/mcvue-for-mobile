<template>
  <div class="barChart">
    <canvas :id="chartId" :height="height"></canvas>
  </div>
</template>
<script>
export default {
  name: "mc-calender",
  props: {
    height: {
      type: String,
      default: "300px"
    },
    chartId: {
      type: String,
      default: ""
    },
    dataSource: {
      type: Array
    }
  },
  mounted() {
    this.drawChart();
  },
  methods: {
    drawChart() {
      // 实例化F2 chart
      let chart = new this.F2.Chart({
        id: this.chartId,
        pixelRatio: window.devicePixelRatio
      });
      // 注入数据
      chart.source(this.dataSource, {
        // value: {
        //   tickCount: 5
        // },
        index: {
          // 这里横坐标使用 index，
          min: 0, // 设置刚开始显示的区间 0-5
          max: 10
        }
      });
      // 设置坐标轴对应属性
      chart.axis("name", {
        label: {
          fontSize: 12
        }
      });
      chart.axis("value", {
        label: {
          fontSize: 12
        }
      });
      // 是否显示标注提示
      chart.tooltip(true);
      // 注明x,y轴字段
      chart
        .interval()
        .position("name*value")
        .color("name")
        .style({
          radius: [30, 30, 0, 0]
        });
      chart.interaction("pan");
      chart.scrollBar({
        xStyle: {
          backgroundColor: "#e8e8e8",
          fillerColor: "#808080",
          offsetY: -2
        }
      });
      // 图表渲染动画
      chart.animate();
      // 图标绘制渲染
      chart.render();
    }
  }
};
</script>
<style lang="less" scoped>
.barChart {
  width: 100%;
  canvas {
    width: 100%;
  }
}
</style>
