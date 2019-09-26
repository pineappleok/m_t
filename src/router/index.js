import Vue from 'vue'
import Router from 'vue-router'
import _import from "./import";
import localStorage from "utils/storage";

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            direct:'login',
            component: _import('login/index'),
            meta:{
                title:'登陆',
                // requireAuth:true, //登陆权限
                keepAlive:true
            }
        },
        {
            path: '/login',
            name: 'login',
            component: _import('login/index'),
            meta: {
                title: '登陆',
                // requireAuth: true, //登陆权限
                keepAlive: true
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
            },
            children:[
                {
                    path: 'cart',
                    name: 'cart',
                    component: _import('cart/index'),
                    meta: {
                        title: '购物车',
                        requireAuth: true //登陆权限
                    }
                }        
            ]
        },        
    ],
    scrollBehavior(to, from, savedPosition) {
        setTimeout(() => {
            window.scrollTo(0, 0)
        }, 0)
        // 页面是内容是通过网络请求之后再渲染的,所以设置一个延时加载，等到网络请求完毕再调用滚动操作
        // return { x: 0, y: 0 }
    }
})

//路由拦截
// 路由导航守卫
router.beforeEach((to, from, next) => {
    const user = localStorage.get('user')
    // 登录权限
    if (to.meta.requireAuth) { // 判断是否校验登录权限
        if (!user) { // 判断是否登录，根据实际业务处理
            next({
                path: '/login',
                query: {
                    redirect: to.fullPath // 未登录，跳转到登录页，登录后跳转回当前页。
                }
            })
            return;
        }
    }
    // 路由发生变化修改页面title
    if (to.meta.title) {
        document.title = to.meta.title
    } else {
        document.title = 'h5'
    }
    next()
})

export default router