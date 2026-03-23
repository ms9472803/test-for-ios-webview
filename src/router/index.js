import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'
import GamePage from '../components/GamePage.vue'
import PageB from '../components/PageB.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/game', component: GamePage },
  { path: '/b', component: PageB }
]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
