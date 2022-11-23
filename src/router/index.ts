import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Login from '../components/login.vue'
import Table from '../components/table.vue'
import About from '../components/about.vue'
import Notes from '../components/notes.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/homepage/:username',
    name: 'homepage',

    component: () => import('../components/homepage.vue'),
    children: [
      { path: '', name: 'table', component: Table },
      { path: 'about', name: 'about', component: About },
      { path: 'notes', name: 'notes', component: Notes }

    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
