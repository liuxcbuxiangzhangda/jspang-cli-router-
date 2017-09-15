import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/hi',
      component: Hi,
      children:[
        {
          path: '/', //这里的根目录指hi页面
          name: 'Hix',
          component: Hi
        },
        {
          path: 'hi1', //没有斜线
          name: 'Hi1',
          component: Hi1
        },
        {
          path: 'hi2',
          name: 'Hi2',
          component: Hi2
        }
      ]
    }
  ]
})
