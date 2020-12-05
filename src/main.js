import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import AidolUI from "./components";

Vue.use(AidolUI);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
