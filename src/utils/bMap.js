export default {
  init: function () {
      const AK = 'naGZWXzhfKt5UC4Z8NXNYVntgisqQZZN'
      const BMapURL = 'https://api.map.baidu.com/api?v=3.0&ak=' + AK + '&s=1&callback=onBMapCallback'
      return new Promise((resolve) => {
          // 如果已加载直接返回
          // if (typeof BMap !== 'undefined') {
          //   resolve(BMap)
          //   return true
          // }
          // 百度地图异步加载回调处理
          window.onBMapCallback = function (BMap) {
              console.log('百度地图脚本初始化成功...')
              // eslint-disable-next-line
              resolve(BMap)
          }

          // 插入script脚本
          let scriptNode = document.createElement('script')
          scriptNode.setAttribute('type', 'text/javascript')
          scriptNode.setAttribute('src', BMapURL)
          document.body.appendChild(scriptNode)
      })
  }
}