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
// 导入Classify内品质生活模块
import Quality_life from '../components/Quality_life'
// 导入Classify内美妆个护模块
import Beauty from '../components/Beauty'


Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', component: Home},
    {path: '/home', component: Home, children: [
      {path: '', redirect: 'referral0/'},
      {path: 'referral0/', component: Referral}
    ]},
    {path: '/classify', component: Classify, children: [
      {path: '', redirect: 'quality_life'},
      {path: 'quality_life', component: Quality_life},
      {path: 'beauty', component: Beauty},
    ]},
    {path: '/cart', component: Cart},
    {path: '/mine', component: Mine},
  ],
  mode: 'history'
})
