import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '@/components/HomePage'
import Todo from '@/components/todo/ToDo'
import Login from '@/components/login/login'
import Register from '@/components/login/register'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/todo',
      name: 'Todo',
      component: Todo
    },
    // Redirect to the home route if any routes are unmatched
    {
      path: '*',
      redirect: '/'
    }
  ]
})

// route white list
const whiteList = ['Login', 'Register']

const isLogin = () => !!localStorage.getItem('isLogin')

// router Guards
router.beforeEach((to, from, next) => {
  if (whiteList.includes(to.name)) {
    next()
  } else {
    // 判断是否登录
    if (isLogin()) {
      next()
    } else {
      next({path: '/login'})
    }
  }
})

export default router
