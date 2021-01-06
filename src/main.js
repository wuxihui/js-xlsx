/* eslint-disable */ 
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './styles/common.css'
import './unilts/index'
import VCharts from 'v-charts'
// import 'echarts-liquidfill/src/liquidFill.js'
/* 全局引入 */
// import Vant from 'vant'
// import 'vant/lib/index.css'
// Vue.use(Vant)

Vue.config.productionTip = false

Vue.use(VCharts)

/* eslint-disable no-new */
window.vue = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
