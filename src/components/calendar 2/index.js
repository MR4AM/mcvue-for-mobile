import bstCalendar from './index.vue'

const components = {
  install(Vue) {
    Vue.component(
      'bstCalendar', bstCalendar, // 组件命名空间可根据需要自定义,只要避免命名重复污染
    )
  }
}
 
if(typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(bstCalendar)
}
 
export default components