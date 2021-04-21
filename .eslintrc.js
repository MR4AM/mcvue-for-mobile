module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  },
  globals: {
    AMapUI: true,
    BMap: true,
    BMapLib: true,
    BMapGL: true,
    styleJson2: true
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
