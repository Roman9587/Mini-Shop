import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/view/Home'
import Shop from '@/view/Shop'
import E404 from '@/view/E404'

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
{
  path: '*',
  component: E404,
},
]


export default new Router({
  routes,
  mode: 'history',
})