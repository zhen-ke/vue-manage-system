import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Layout from '@/components/layout'
import Admin from '@/page/system/admin'
import NotFound from '@/components/404'
import AdminSettings from '@/page/settings/adminSettings'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  routes: [
    {
      path: '/',
      name: 'Layout',
      redirect: '/system/admin',
      component: Layout,
      children: [
        {
          path: '/system/admin',
          name: 'Admin',
          component: Admin
        },
        {
          path: '/settings/adminSettings',
          name: 'AdminSettings',
          component: AdminSettings
        },
      ],
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    { 
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
