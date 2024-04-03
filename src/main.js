import Vue from 'vue'
import App from './App.vue'
import router from './router'

import AidolUI from '@/lib/main'

import 'prismjs/themes/prism.min.css'
// import 'highlight.js/styles/github.css'

Vue.use(AidolUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
