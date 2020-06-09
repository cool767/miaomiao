import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import Loading from './components/common/Loading'
Vue.component('Loading',Loading)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
