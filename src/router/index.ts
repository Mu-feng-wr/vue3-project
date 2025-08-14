import type { RouteRecordRaw } from 'vue-router'
import { createRouter } from 'vue-router'
import { routerConfig } from '@/router/config'
import { registerNavigationGuard } from '@/router/guard'
import { flatMultiLevelRoutes } from './helper'

const Layouts = () => import('@/layouts/index.vue')

/**
 * @name 常驻路由
 * @description 除了 redirect/403/404/login 等隐藏页面，其他页面建议设置唯一的 Name 属性
 */
export const constantRoutes: RouteRecordRaw[] = [

  {
    path: '/403',
    component: () => import('@/views/error/403.vue'),
    meta: {
      hidden: true
    }
  },
  {
    path: '/404',
    component: () => import('@/views/error/404.vue'),
    meta: {
      hidden: true
    },
    alias: '/:pathMatch(.*)*'
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: { hidden: true }
  },
  {
    path: '/',
    component: Layouts,
    redirect: '/dashboard',
    children: []
  }
]

/** 路由实例 */
export const router = createRouter({
  history: routerConfig.history,
  routes: routerConfig.thirdLevelRouteCache ? flatMultiLevelRoutes(constantRoutes) : constantRoutes
})

// 注册路由导航守卫
registerNavigationGuard(router)
