import Vue from 'vue'
import Router from 'vue-router'
import _import from "./import";
Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            direct:'home',
            component: _import('home/index'),
            meta:{keepAlive:true}
        },
        {
            path: '/home',
            name: 'home',
            component: _import('home/index'),
            meta:{keepAlive:true}
        },
        
    ],
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})
/* router.beforeEach((to, from, next) => {

}) */
export default router