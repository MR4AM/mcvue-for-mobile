import bus from "./bus.js";
export default {
  dateFormat(date, fmt) {
    let ret;
    date = new Date(date)
    const opt = {
        "Y+": date.getFullYear().toString(),        // 年
        "M+": (date.getMonth() + 1).toString(),     // 月
        "D+": date.getDate().toString(),            // 日
        "h+": date.getHours().toString(),           // 时
        "m+": date.getMinutes().toString(),         // 分
        "s+": date.getSeconds().toString()          // 秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
            fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
        };
    };
    return fmt;
  },
  /*
    获取数组对象中的key以数组的形式输出
  */
  getArrayKey(array = [], type, specical) {
    if (array.length === 0) {
      return
    }
    let temp = [];
    let reg = /^(\d{3})\d{4}(\d{4})$/;
    for (let i = 0; i < array.length; i++) {
      switch (specical) {
        case "phonemd5":
          temp.push(array[i][type].replace(reg, "$1****$2"));
          break;
        case "abs":
          temp.push(array[i][type] * -1);
          break;
        default:
          temp.push(array[i][type]);
      }
    }
    return temp;
  },
  /*
    echart 图表自动动画函数
  */
  echartAutoAnimation(that, chartRef) {
    if (that.chartclock) {
      clearInterval(that.chartclock);
      that.chartclock = null;
    }
    let animationMaster = that[chartRef];
    animationMaster.on("mouseover", params => {
      that.isAuto = false;
      clearInterval(that.chartclock);
      //取消之前高亮的图形
      animationMaster.dispatchAction({
        type: "downplay",
        seriesIndex: 0,
        dataIndex: that.currentIndex
      });
      //高亮当前图形
      animationMaster.dispatchAction({
        type: "highlight",
        seriesIndex: 0,
        dataIndex: params.dataIndex
      });
      //显示 tooltip
      animationMaster.dispatchAction({
        type: "tooltip",
        seriesIndex: 0,
        dataIndex: params.dataIndex
      });
    });
    let chartAutoAnimation = () => {
      let dataLen = that.setOption().series[0].data.length;
      //取消之前高亮的图形
      animationMaster.dispatchAction({
        type: "downplay",
        seriesIndex: 0,
        dataIndex: that.currentIndex
      });
      that.currentIndex = (that.currentIndex + 1) % dataLen;
      //高亮当前图形
      animationMaster.dispatchAction({
        type: "highlight",
        seriesIndex: 0,
        dataIndex: that.currentIndex
      });
      //显示 tooltip
      animationMaster.dispatchAction({
        type: "tooltip",
        seriesIndex: 0,
        dataIndex: that.currentIndex
      });
    };
    that.chartclock = setInterval(() => {
      chartAutoAnimation();
    }, 2000);
    animationMaster.on("mouseout", params => {
      //取消之前高亮的图形
      animationMaster.dispatchAction({
        type: "downplay",
        seriesIndex: 0,
        dataIndex: params.dataIndex
      });
      if (!that.isAuto) {
        that.chartclock = setInterval(() => {
          chartAutoAnimation();
        }, 2000);
        that.isAuto = true;
      }
    });
  },
  //mock特殊数据处理
  mockSpec(data) {
    let temp;
    temp = data.data.data;
    return temp;
  },
  //根据数据生成数据并完成补零操作
  renderArrayByNum(num, unit) {
    let temp = JSON.parse(JSON.stringify(num));
    if (unit == "分钟") {
      temp = Math.round(temp * 100);
    }
    if (temp < 10) {
      temp = "00" + String(temp);
    } else if (temp < 100) {
      temp = "0" + String(temp);
    } else {
      temp = String(temp);
    }
    temp = temp.split("");
    if (unit == "分钟") {
      temp[temp.length - 3] = temp[temp.length - 3] + ".";
    }
    // temp.push(unit);
    return temp;
  },
  //随机打乱数组
  randomsort() {
    return Math.random() > 0.5 ? -1 : 1; //用Math.random()函数生成0~1之间的随机数与0.5比较，返回-1或1
  },
  //生成三大平台放大镜图表
  dataTends(type) {
    // let { NetTrend, VoiceTrend, EnityTrend } = that.state;
    let obj = {};
    switch (type) {
      case "NetTrend":
        obj.cnTitle = "网络平台服务趋势分析图";
        obj.enTitle = "Network Platform Services Trend";
        obj.type = type;
        break;
      case "VoiceTrend":
        obj.cnTitle = "语音平台服务趋势分析图";
        obj.enTitle = "Voice Platform Services Trend";
        obj.type = type;
        break;
      case "EnityTrend":
        obj.cnTitle = "实体平台服务趋势分析图";
        obj.enTitle = "Physical Platform Services Trend";
        obj.type = type;
        break;
    }
    return obj;
  },
  // 生成区间最大值
  renderMaxValue(num) {
    // let tempArray = [];
    let max = Math.floor(
      String(num).slice(0, 2) * 1 * Math.pow(10, String(num).length - 2)
    );
    // let average = Math.floor(max / (averageCount+1));
    // for (let i = 0; i < averageCount - 1; i++) {
    //   tempArray.push(max - average * i)
    //   console.log(max-average*i,tempArray)
    // }
    // tempArray.push(max-average*averageCount)
    // console.log(tempArray, 'jjj')
    return max;
  },
  // 加分隔符
  toThousands(num) {
    return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
  },
  // 查询6块大屏数据
  fetchSixScreenData(that, queryObj) {
    that.$store.dispatch("ServiceSex", queryObj).then(() => {
      bus.$emit("CommonPie1Init");
    });
    that.$store.dispatch("getTotalNum", queryObj);
    that.$store.dispatch("getCityRank", queryObj);
    that.$store.dispatch("getCityScatter", queryObj).then(() => {
      bus.$emit("mapChartInit");
      bus.$emit("mapGdChartInit");
    });
    that.$store.dispatch("getServiceChannel", queryObj).then(() => {
      bus.$emit("ChannelPieInit");
    });
    that.$store.dispatch("serviceResourceType", queryObj).then(() => {});
    that.$store.dispatch("getServiceProportion", queryObj).then(() => {
      bus.$emit("ResourceDispatchInit");
    });
    that.$store.dispatch("trConsulInfoServiceNum", queryObj).then(() => {
      bus.$emit("echartsCommonBarInit");
    });
    that.$store.dispatch("getCityHeat", queryObj).then(() => {
      bus.$emit("ConsultHeatInit");
    });
    that.$store.dispatch("getServiceChannel", queryObj).then(() => {
      bus.$emit("ChannelPieInit");
    });
    that.$store.dispatch("FeatureAnalysisInit", queryObj).then(() => {
      bus.$emit("ServiceProviderInit");
      bus.$emit("ChannelPie1");
      bus.$emit("CommonPieInit");
      bus.$emit("MinshiTop5Init");
      bus.$emit("XingshiTop5Init");
      bus.$emit("XingzhengTop5Init");
    });
    that.$store.dispatch("getBusinessCate", queryObj).then(() => {
      bus.$emit("ServicePieInit");
      bus.$emit("echartsServiceTypePie");
    });
    that.$store.dispatch("getConsultCate", queryObj).then(() => {
      bus.$emit("ServiceTypePieInit");
    });
    that.$store.dispatch("mainCountBusiessType", queryObj).then(() => {});
    that.$store.dispatch("getTrConsulCountByTime", queryObj).then(() => {
      bus.$emit("echartsCommonBar1Init");
    });
  },
  getQueryVariable(variable) { //接收带参的处理
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for(var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      if(pair[0] == variable) {
        return decodeURIComponent(pair[1]);
      }
    }
    return '';
  }
};
