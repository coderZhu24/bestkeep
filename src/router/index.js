import Vue from 'vue'
import Router from 'vue-router'


import Hello from '@/components/Hello'
import Mine from '../pages/Mine'
import Home from '../pages/Home'
import Referral from '../components/Referral'

// import Product from '@/components/pages/Product'
// import Stype from '@/components/Stype'

Vue.use(Router)


export default new Router({
  routes: [
    {path: '/', component: Home},
    {path: '/home', component: Home, children: [
      {path: '/', component: Referral},
      {path: 'referral', component: Referral}
    ]},
    {path: '/classify', component: Mine},
    {path: '/cart', component: Mine},
    {path: '/mine', component: Mine},

    // {path: '/',
    // name:'Stype',
    // component:Stype}

  ],
  mode: 'history'
})
