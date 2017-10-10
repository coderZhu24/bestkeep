import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Mine from '../pages/Mine'
import Home from '../pages/Home'
import Referral from '../components/Referral'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', component: Home},
    {path: '/home', component: Home, children: [
      {path: '', component: Referral},
      {path: 'referral0/', component: Referral}
    ]},
    {path: '/classify', component: Mine, children: [
      
    ]},
    {path: '/cart', component: Mine},
    {path: '/mine', component: Mine},
  ],
  mode: 'history'
})
