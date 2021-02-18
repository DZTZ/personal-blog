import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueParticles from "vue-particles";
import "./assets/styles/global.css";
import axios from "./utils/axios";
import vuetify from "./plugins/vuetify";
import VueLazyLoad from "vue-lazyload";

Vue.use(VueLazyLoad, {
  error: require("./assets/img/err.jpeg"),
  loading: require("./assets/img/loading.gif")
});

Vue.prototype.$axios = axios;
Vue.prototype.$formRequest = axios.formRequest.post;

Vue.use(VueParticles);
Vue.config.productionTip = false;

//判断是否移动端
if (navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)) {
  Vue.prototype.isPhone = true;
}
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
