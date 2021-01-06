/* eslint-disable */ 
import Vue from 'vue'
import Vuex from 'vuex'

import login from './modules/login'
import home from './modules/home'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  //模块化
  modules: {
      login,
      home
    },
  strict: debug
})

