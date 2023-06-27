import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DailyDigest from '../views/DailyDigestView.vue'
import DesignTools from '../views/DesignToolsView.vue'
import Tutorials from '../views/TutorialsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Daily-Digest',
      name: 'DailyDigest',
      component: DailyDigest
    },
    {
      path: '/Design-Tools',
      name: 'DesignTools',
      component: DesignTools
    },
    {
      path: '/Tutorials',
      name: 'Tutorials',
      component: Tutorials
    },
  ]
})

export default router
