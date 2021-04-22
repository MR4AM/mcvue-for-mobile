module.exports = {
  plugins: {
    "autoprefixer": {
      browsers: ["Android >= 4.0", "iOS >= 7"]
    },
    "postcss-pxtorem": {
      rootValue: 37.5,
      //这是基准值，在375px的屏幕变大rem的值会变大，小于这个大小元素的rem值会变小
      propList: ["*"]
    }
  }
};
