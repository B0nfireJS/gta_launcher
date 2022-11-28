import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {layout: 'main'},
    component: HomeView
  },
  {
    path: '/news',
    name: 'news',
    meta: {layout: 'main'},
    component: () => import('@/views/NewsView.vue')
  },
  {
    path: '/site',
    name: 'site',
    meta: {layout: 'main'},
    component: () => import('@/views/SiteView.vue')
  },
  {
    path: '/support',
    name: 'support',
    meta: {layout: 'main'},
    component: () => import('@/views/SupportView.vue')
  },
  {
    path: '/project1',
    name: 'project1',
    meta: {layout: 'main'},
    component: () => import('@/views/projects/Project1.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
