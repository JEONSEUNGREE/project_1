import Vue from 'vue'
import VueRouter from 'vue-router'
import DefaultLayout from '../views/default/DefaultPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children:[
      {
        path: "/",
        name: 'Home',
        // component: () =>import('../views/default/DefaultPage')
      },
      {
        path: "/board",
        name: 'Board',
        component: () =>import('../views/Board')
      }
    ]

  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
