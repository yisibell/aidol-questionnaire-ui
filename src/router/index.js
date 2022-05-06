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
    component: () => import('@/views/checkbox.vue')
  },
  {
    path: '/short-answer',
    name: 'ShortAnswer',
    component: () => import('@/views/short-answer')
  },
  {
    path: '/rate',
    name: 'Rate',
    component: () => import('@/views/rate')
  },
  {
    path: '/rate-group',
    name: 'RateGroup',
    component: () => import('@/views/rate-group')
  },
  {
    path: '/radio-image',
    name: 'RadioImage',
    component: () => import('@/views/radio-image')
  }
]

const router = new VueRouter({
  routes
})

export default router
