/**
 * @author jason
 * Date: 2021/04/13
 */
import Calendar from "./calendar/index.vue";
import Modal from "./modal/index.vue";
import showToast from "./toast/index";
import showModal from "./modal/index";

const components = [Calendar, Modal];

const install = function(Vue) {
  if (install.installed) return;
  components.map(component => Vue.component(component.name, component));
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  showToast,
  showModal,
  Calendar
};
