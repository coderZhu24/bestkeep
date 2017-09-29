import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
// 导入购物车模块
import Cart from '@/pages/Cart'
// 导入分类模块
import Classify from '@/pages/Classify'


Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Classify',
        component: Classify,
    }]
})
