import Vue from 'vue'
import Router from 'vue-router'

import VueResource from './vue-resource'

// import Hello from '@/components/Hello'
// import Mine from '../pages/Mine'
// import Home from '../pages/Home'
// import Referral from '../components/Referral'

// import Product from '@/components/pages/Product'
import Stypes from '@/components/Stypes'


Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    // {path: '/', component: Home},
    // {path: '/home', component: Home, children: [
    //   {path: '/', component: Referral},
    //   {path: 'referral', component: Referral}
    // ]},
    // {path: '/classify', component: Mine},
    // {path: '/cart', component: Mine},
    // {path: '/mine', component: Mine},

    {path: '/',
    name:'Stypes',
    component:Stypes}

  ],
  mode: 'history'
})
