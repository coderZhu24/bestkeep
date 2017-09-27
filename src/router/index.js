import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
// 导入购物车模块
import Cart from '@/pages/Cart'


Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Cart',
        component: Cart,
    }]
})