import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'
import Home from '../components/Home.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', component: Home }
]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
