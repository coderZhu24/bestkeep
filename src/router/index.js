import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

import Product from '@/components/pages/Product'
// import Stype from '@/components/Stype'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Product',
      component:Product
    }
    // {
    //   path: '/',
    //   name: 'Stype',
    //   component:Stype
    // }
  ]
})
