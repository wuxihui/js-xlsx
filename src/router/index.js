import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/view/login'
import Home from '@/view/home'
import Scrollbar from '@/view/scrollbar'
import Details from '@/view/details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/scrollbar',
      name: 'scrollbar',
      component: Scrollbar
    },
    {
      path: '/details',
      name: 'details',
      component: Details
    }
  ]
})
