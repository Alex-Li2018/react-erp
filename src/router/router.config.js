//引入异步加载组件
import asyncImportComponent from "@until/asyncImportComponent"
//异步组件
const App = asyncImportComponent(() => import(/* webpackChunkName: "App" */"../app"));  
const Home = asyncImportComponent(() => import(/* webpackChunkName: "Home" */"../pages/home"));  
const Login = asyncImportComponent(() => import(/* webpackChunkName: "Login" */"../pages/login"));  
const Page404 = asyncImportComponent(() => import(/* webpackChunkName: "Page404" */"../pages/404page")); 

//路由信息
const routerConfig = [
    {
        path: '/login',
        component: Login,
        auth: false,
    },
    {
        path: '/404',
        component: Page404,
        auth: false,
    },
    {
        path: '/home',
        component: Home,
        auth: true,
    },
    {
        path: '/',
        component: Home,
        auth: true,
    },
]

export default routerConfig;