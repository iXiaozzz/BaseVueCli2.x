import Vue from "vue";
import VueRouter from 'vue-router'

const _crmimport = require("./_import_crm" + process.env.NODE_ENV)

//异步加载组件
// 404页面
const error404 = r => require.ensure([], () => r(_crmimport('error/404')));
const Layout = r => require.ensure([], () => r(_crmimport('layout/index')));
const Home = r => require.ensure([], () => r(_crmimport('home/index')));
Vue.use(VueRouter)

export const constantRouterMap = [
  {
    path: '*',
    name: 'error404',
    component: error404,
    // meta: {
    //   requiresAuth: true
    // }
  },
  {
    path: '',
    component: Home,
    meta: {
      pageType: 'FullPage'
    },
  },
  {
    name: 'home',
    path: '/home',
    component: Home,
    meta: {
      title: 'home',
      pageType: ''
    },
    children: []
  }
];

export default new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: constantRouterMap
})
