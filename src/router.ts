import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Admin from './pages/Admin.vue'
import Contacts from './pages/Contacts.vue'


export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/admin',
      component: Admin,
    },
    {
      path: '/contacts',
      component: Contacts,
    }
  ],
})
