import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/radio'
  },
  {
    path: '/radio',
    name: 'Radio',
    component: () => import('@/views/radio')
  },
  {
    path: '/checkbox',
    name: 'Checkbox',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '@/views/checkbox.vue')
  },
  {
    path: '/short-answer',
    name: 'ShortAnswer',
    component: () => import('@/views/short-answer')
  }
]

const router = new VueRouter({
  routes
})

export default router
