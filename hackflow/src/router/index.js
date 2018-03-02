import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import QuestionLists from '@/components/QuestionLists'
import TheQuestion from '@/components/TheQuestion'
import NotFound from '@/components/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      children: [{
        path: '',
        name: 'QuestionLists',
        component: QuestionLists
      }, {
        path: '/question/:id',
        name: 'Question',
        component: TheQuestion,
        props: true
      }]
    },
    {
      path: '*',
      name: 'Not Found',
      component: NotFound
    }
  ]
})
