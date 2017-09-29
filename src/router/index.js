import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
// 导入购物车模块
// import Cart from '@/pages/Cart'
// // 导入分类模块
// import Classify from '@/pages/Classify'

// import Mine from '../pages/Mine'
// import Home from '../pages/Home'
// import Referral from '../components/Referral'


import Recommend from '../components/Recommend'
import homelandGood from "../components/homelandGood"


Vue.use(Router)

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

    {
      path: '/', 
      name:'Recommend',
      component: homelandGood
    },





  ],
  mode: 'history'
})
