import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('@/pages/home/index.vue') },
  { path: '/about', component: () => import('@/pages/about/index.vue') },
]

// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

export default router
