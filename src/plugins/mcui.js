import Vue from "vue";
import Mooncloud from "@/components/index";
Vue.use(Mooncloud);
Vue.prototype.$toast = Mooncloud.showToast;
