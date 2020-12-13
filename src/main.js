import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueParticles from "vue-particles";

Vue.use(VueParticles);
Vue.config.productionTip = false;
// import animated from 'animate.css'
//
// Vue.use(animated)

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
