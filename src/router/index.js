import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Mine from '../pages/Mine'
import Home from '../pages/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', component: Home},
    {path: '/home', component: Home},
    {path: '/classify', component: Mine},
    {path: '/cart', component: Mine},
    {path: '/mine', component: Mine},
  ],
  mode: 'history'
})
