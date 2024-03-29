import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const componetRoutes = [
  {
    path: '/radio',
    name: 'Radio',
    component: () => import('@/views/radio'),
    meta: {
      title: '单选题'
    }
  },
  {
    path: '/radio-image',
    name: 'RadioImage',
    component: () => import('@/views/radio-image'),
    meta: {
      title: '单选题(带图片)'
    }
  },
  {
    path: '/checkbox',
    name: 'Checkbox',
    component: () => import('@/views/checkbox'),
    meta: {
      title: '多选题'
    }
  },
  {
    path: '/short-answer',
    name: 'ShortAnswer',
    component: () => import('@/views/short-answer'),
    meta: {
      title: '简答题'
    }
  },
  {
    path: '/rate',
    name: 'Rate',
    component: () => import('@/views/rate'),
    meta: {
      title: '量表题'
    }
  },
  {
    path: '/custom-rate',
    name: 'CustomRate',
    component: () => import('@/views/custom-rate'),
    meta: {
      title: '量表题(自定义)'
    }
  },
  {
    path: '/rate-group',
    name: 'RateGroup',
    component: () => import('@/views/rate-group'),
    meta: {
      title: '量表题组'
    }
  }

]

export const othersComponentsRoutes = [
  {
    path: '/others/block-tips',
    name: 'BlockTips',
    component: () => import('@/views/block-tips'),
    meta: {
      title: '提示块'
    }
  }
]

export const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/radio'
  },
  ...componetRoutes,
  ...othersComponentsRoutes
]

const router = new VueRouter({
  routes
})

export default router
