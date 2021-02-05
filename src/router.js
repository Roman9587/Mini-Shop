import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/view/Home'
import Shop from '@/view/Shop'

Vue.use(Router)


const routes = [
  {
  path: '/',
  component: Home,
},

{
  path: '/shop',
  component: Shop,
},
]


export default new Router({
  routes,
  mode: 'history',
})