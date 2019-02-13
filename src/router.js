import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('./views/Home.vue')
const Login = () => import('./views/Login.vue')
const Enroll = () => import('./views/Enroll.vue')
const Dynamic = () => import('./views/Dynamic.vue')
const Training = () => import('./views/Training.vue')
const Race = () => import('./views/Race.vue')
const Perform = () => import('./views/Perform.vue')
const Book = () => import('./views/Book.vue')
const Us = () => import('./views/Us.vue')
const EnrollNotice = () => import('./views/EnrollNotice.vue')
const EnrollManage = () => import('./views/EnrollManage.vue')
const Queryhall = () => import('./views/Queryhall.vue')
const Queryscore = () => import('./views/Queryscore.vue')
const EnrollApply = () => import('./views/EnrollApply.vue')
const EnrollApplySuccess = () => import('./views/EnrollApplySuccess.vue')
const EnrollOrder = () => import('./views/EnrollOrder.vue')
const EnrollPay = () => import('./views/EnrollPay.vue')
const EnrollPaySuccess = () => import('./views/EnrollPaySuccess.vue')
const EnrollDetail = () => import('./views/EnrollDetail.vue')

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/enroll',
      name: 'Enroll',
      component: Enroll,
      children: [
        {
          path: 'notice',
          name: 'EnrollNotice',
          component: EnrollNotice,
          meta: {
            requiredLogin: true
          }
        },
        {
          path: 'apply',
          name: 'EnrollApply',
          component: EnrollApply,
          meta: {
            requiredLogin: true
          }
        },
        {
          path: 'applysuccess',
          name: 'EnrollApplySuccesss',
          component: EnrollApplySuccess,
          meta: {
            requiredLogin: true
          }
        },
        {
          path: 'order',
          name: 'EnrollOrder',
          component: EnrollOrder,
          meta: {
            requiredLogin: true
          }
        },
        {
          path: 'pay',
          name: 'EnrollPay',
          component: EnrollPay,
          meta: {
            requiredLogin: true
          }
        },
        {
          path: 'paysuccess',
          name: 'EnrollPaySuccess',
          component: EnrollPaySuccess,
          meta: {
            requiredLogin: true
          }
        },
        {
          path: 'detail',
          name: 'EnrollDetail',
          component: EnrollDetail,
          meta: {
            requiredLogin: true
          }
        },
        {
          path: 'manage',
          name: 'EnrollManage',
          component: EnrollManage,
          meta: {
            requiredLogin: true
          }
        },
        {
          path: 'queryhall',
          name: 'Queryhall',
          component: Queryhall
        },
        {
          path: 'queryscore',
          name: 'Queryscore',
          component: Queryscore
        }
      ]
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

router.beforeEach((to, from, next) => {
  if (to.meta.requiredLogin && !(window.localStorage.token && window.localStorage.username)) {
    window.localStorage.loginBack = to.path
    next({ path: '/login', replace: true })
  } else {
    if (to.meta.title) {
      document.title = to.meta.title
    } else {
      document.title = '\u200E'
    }
    next()
  }
})

export default router
