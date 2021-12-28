/*
 * @Date: 2020-08-06 10:11:48
 * @LastEditors: wg
 * @LastEditTime: 2020-08-06 22:44:46
 * @FilePath: \node-vue-bms\admin\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('../views/Main.vue'),
    children: [
      {
          path: 'agentmsg',
          component: () => import('../views/Agentmsg.vue'),
      },
      {
        path: 'updatemsg',
        component: () => import('../views/Updatemsg.vue'),
      },
      {
        path: 'addUser',
        component: () => import('../views/AddUser.vue'),
      },
      {
        path: 'updateUser',
        component: () => import('../views/UpdateUser.vue'),
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
    meta: { title: '登录' }
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  routes
})

export default router
