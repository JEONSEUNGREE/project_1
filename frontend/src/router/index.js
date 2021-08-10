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
        component: () =>import('../views/Home')


      },
      {
        path: "/board",
        name: 'Board',
        component: () =>import('../views/Board')
      },
      {
        path: "/contact-list",
        name: 'ContactList',
        component: () =>import('../views/ContactList')
      },
      {
        path: "/schedule",
        name: 'Schedule',
        component: () =>import('../views/Schedule')
      },
      {
        path: "/commuting",
        name: 'Coummting',
        component: () =>import('../views/Coummting')
      },
      {
        path: "/plan",
        name: 'Plan',
        component: () =>import('../views/Plan')
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
