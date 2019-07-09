import Vue from 'vue'
import Router from 'vue-router'
import _import from "utils/import";
Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: _import('home/index')
        },
        {
            path: '/home',
            name: 'home',
            component: _import('home/index')
        },
        
    ],
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})
export default router