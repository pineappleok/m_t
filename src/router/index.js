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
            meta:{
                title:'首页',
                requireAuth:true, //登陆权限
                keepAlive:true
            }
        },
        {
            path: '/home',
            name: 'home',
            component: _import('home/index'),
            meta: {
                title: '首页',
                requireAuth: true, //登陆权限
                keepAlive: true
            }
        },
        
    ],
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})

//路由拦截
// 路由导航守卫
router.beforeEach((to, from, next) => {
    // 登录权限
    /* if (to.meta.requireAuth) { // 判断是否校验登录权限
        if (!window.userName) { // 判断是否登录，根据实际业务处理
            next({
                path: '/login',
                query: {
                    redirect: to.fullPath // 未登录，跳转到登录页，登录后跳转回当前页。
                }
            })
            return;
        }
    } */
    // 路由发生变化修改页面title
    if (to.meta.title) {
        document.title = to.meta.title
    } else {
        document.title = 'h5'
    }
    next()
})

export default router