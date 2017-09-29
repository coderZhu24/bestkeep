import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
// 导入购物车模块
import Cart from '@/pages/Cart'
// 导入分类模块
import Classify from '@/pages/Classify'
// 导入我的模块
import Mine from '../pages/Mine'
// 导入主页模块
import Home from '../pages/Home'
// 导入推荐页模块
import Referral from '../components/Referral'

Vue.use(Router)

export default new Router({
    // routes: [{
    //     path: '/',
    //     name: 'Classify',
    //     component: Classify,
    // }]
  routes: [
    {path: '/', component: Home},
    {path: '/home', component: Home, children: [
      {path: '/', component: Referral},
      {path: 'referral', component: Referral}
    ]},
    {path: '/classify', component: Classify},
    {path: '/cart', component: Cart},
    {path: '/mine', component: Mine},
  ],
  mode: 'history'
})
