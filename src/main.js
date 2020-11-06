import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import { BootstrapVue } from "bootstrap-vue"
import "bootstrap-vue/dist/bootstrap-vue.css"
import "bootstrap/dist/css/bootstrap.css"
import VueImg from "v-img"
Vue.use(BootstrapVue)

Vue.use(VueImg)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount("#app")
