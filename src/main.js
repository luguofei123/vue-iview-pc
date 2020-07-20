import Vue from 'vue'
import App from './App.vue'
import ViewUI from 'view-design'
import '@/assets/css'
import router from './router'
import store from './store'
Vue.use(ViewUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
