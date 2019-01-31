import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('./views/Home.vue')
const Enroll = () => import('./views/Enroll.vue')
const Dynamic = () => import('./views/Dynamic.vue')
const Training = () => import('./views/Training.vue')
const Race = () => import('./views/Race.vue')
const Perform = () => import('./views/Perform.vue')
const Book = () => import('./views/Book.vue')
const Us = () => import('./views/Us.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/enroll',
      name: 'Enroll',
      component: Enroll
    },
    {
      path: '/dynamic',
      name: 'Dynamic',
      component: Dynamic
    },
    {
      path: '/training',
      name: 'Training',
      component: Training
    },
    {
      path: '/race',
      name: 'Race',
      component: Race
    },
    {
      path: '/perform',
      name: 'Perform',
      component: Perform
    },
    {
      path: '/book',
      name: 'Book',
      component: Book
    },
    {
      path: '/us',
      name: 'Us',
      component: Us
    }
  ]
})
