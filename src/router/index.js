import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/views/login'
import Layout from '@/layout/layout'

Vue.use(Router)

/**
 * alwaysShow: true           if set true, will always show the root menu, whatever its child routes length
 *                            if not set alwaysShow, only more than ont route under the children
 *                            it will becomes nested mode, otherwise not show the root menu
 * alwaysShow: true           如果设置为true,它将总是现在在根目录。如果不设置的话，当它只有1个子路由的时候，会把
 *                            它的唯一子路由放到跟目录上来，而不显示它自己本身。
 */

export const constantRouterMap = [
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      title: '登录'
    }
  },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/homepage'),
        meta: {title: '首页'}
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: 'deviceList',
        name: 'home',
        component: () => import('@/views/deviceList'),
        meta: {title: '设备列表'}
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: 'devicedetail/:id',
        name: 'devicedetail',
        component: () => import('@/views/deviceDetail'),
        meta: {title: '设备详情'}
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: 'resourceManage',
        name: 'resourceManage',
        component: () => import('@/views/resourceManage'),
        meta: {title: '图片管理'}
      }
    ]
  }
]

export default new Router({
  // mode: 'history',  require service support
  // scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/excel',
    component: Layout,
    redirect: '/excel/export-excel',
    meta: {
      title: '表格',
      icon: 'edit'
    },
    children: [
      {
        path: 'export-excel',
        name: '导出表格',
        component: () => import('@/views/homepage'),
        meta: {icon: 'arrow-left', title: 'exportExcel'}
      },
      {
        path: 'upload-excel',
        name: '上传表格',
        component: () => import('@/views/homepage'),
        meta: {icon: 'minus', title: 'uploadExcel'}
      }
    ]
  },
  {
    path: '/clipboard',
    component: Layout,
    redirect: 'index',
    meta: {
      icon: 'document',
      title: '剪切板'
    },
    children: [
      {
        path: 'index',
        name: 'clipBoard',
        component: () => import('@/views/homepage'),
        meta: {title: '剪切板示例', icon: 'document'}
      }
    ]
  }
]
