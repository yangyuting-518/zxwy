import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Base from './router/base.js'
import OnlineTest from './router/test.js'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,//与项目的基路径保持一致，可以在vue.config.js中修改
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
			children:[
				...Base,
				...OnlineTest
			]
    },
    {
      path: '/',
      name: 'login',
      component:Login
    }
  ]
})



