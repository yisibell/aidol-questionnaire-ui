import Vue from 'vue'
import App from './App.vue'
import router from './router'

import AidolUI from '@/lib/main'

import 'prismjs/themes/prism.min.css'
import 'github-markdown-css/github-markdown-light.css'

Vue.use(AidolUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
