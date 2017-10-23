import Vue from 'vue'
import Router from 'vue-router'


import Mine from '../pages/Mine'
import Home from '../pages/Home'
import Referral from '../components/Referral'

import Product from '@/pages/Product'
import Stype from '@/components/Stype'
import Login from '@/pages/Login'
import Registered from '@/pages/Registered'

Vue.use(Router)


export default new Router({
  routes: [
    {path: '/', component: Home},
    {path: '/home', component: Home, children: [
      {path: '/stype/:productId', component:Stype}
    ]},
    {path: '/classify', component: Mine},
    {path: '/cart', component: Mine},
    {path: '/mine', component: Mine},


  ],
  mode: 'history'
})
