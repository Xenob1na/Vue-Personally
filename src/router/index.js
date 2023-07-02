import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DailyDigest from '../views/DailyDigestView.vue'
import DesignTools from '../views/DesignToolsView.vue'
import Tutorials from '../views/TutorialsView.vue'
import Post from '../views/Post.vue'

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
    {
      path: '/Post/:id',
      name: 'Post',
      props: true,
      component: Post
    },
  ]
})

export default router
