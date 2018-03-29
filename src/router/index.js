import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Todo from '@/components/todo/ToDo'
import Login from '@/components/login/login'
import Register from '@/components/login/register'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
    }
  ]
})

// route white list
const whiteList = ['Login', 'Register']

const logined = () => false

// router Guards
router.beforeEach((to, from, next) => {
  if (whiteList.includes(to.name)) {
    next()
  } else {
    // 判断是否登录
    if (logined()) {
      next()
    } else {
      next({path: '/login'})
    }
  }
})

export default router
