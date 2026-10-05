import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/Grade',
    name: 'Grade',
    component: () => import('../views/Grade.vue')
  },
  {
    path: '/Golds',
    name: 'Golds',
    component: () => import('../views/Api_Golds.vue')
  },
  {
    path: '/Product_Api',
    name: 'Product_Api',
    component: () => import('../views/Product_Api.vue')
  },
  {
    path: '/Product_Table',
    name: 'Product_Table',
    component: () => import('../views/Product_Table.vue')
  },
  {
    path: '/Users',
    name: 'Users',
    component: () => import('../views/Users.vue')
  },

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
