import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/view/Home'
import Shop from '@/view/Shop'
import Services from '@/view/Services'
import Orders from '@/view/Orders'
import Balance from '@/view/Balance'
import Login from '@/view/Login'
import E404 from '@/view/E404'

Vue.use(Router)


const routes = [
  {
  name: 'Home',
  path: '/',
  component: Home,
  meta: {layout: 'main'}
},

{
  name: 'Shop',
  path: '/shop',
  component: Shop,
  meta: {layout: 'main'}
},
{
  name: 'E404',
  path: '*',
  component: E404,
  meta: {layout: 'empty'}
},
{
  name: 'Services',
  path: '/services',
  component: Services,
  meta: {layout: 'main'}
},
{
  name: 'Login',
  path: '/login',
  component: Login,
  meta: {layout: 'empty'}
},
{
  name: 'Orders',
  path: '/orders',
  component: Orders,
  meta: {layout: 'main'}
},
{
  name: 'Balance',
  path: '/balance',
  component: Balance,
  meta: {layout: 'main'}
},
]


export default new Router({
  routes,
  mode: 'history',
})