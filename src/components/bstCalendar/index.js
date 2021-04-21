import bstCalendar from './version1.vue'

const components = {
  install(Vue) {
    Vue.component(
      'bstCalendar', bstCalendar
    )
  }
}
 
if(typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(bstCalendar)
}
 
export default components