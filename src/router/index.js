import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

import MyLove from './mylove'

Vue.use(Router)

export default new Router({
  routes: [
    MyLove,
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})

