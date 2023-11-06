import Vue from 'vue'
import router from './router'
import App from './App.vue'
import './plugins/element.js'
import '@/assets/css/base.css'
import './assets/icon/iconfont.css'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
