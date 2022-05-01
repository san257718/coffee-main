import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Coffee_bag from '../views/Coffee_bag.vue'
import Coffee_items from '../views/Coffee_items.vue'
import meal from '../views/meal.vue'
import Shopping from '../views/Shopping.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/Coffee_bag',
    name: 'Coffee_bag',
    component: Coffee_bag
  },
  {
    path: '/Coffee_items/:id',
    name: 'Coffee_items',
    component: Coffee_items
  },
  {
    path: '/meal',
    name: 'meal',
    component: meal
  },
  {
    path: '/Shopping',
    name: 'Shopping',
    component: Shopping
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router