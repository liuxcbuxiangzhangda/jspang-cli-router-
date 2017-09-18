import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import Error from '@/components/Error'
import Params from '@/components/params'

Vue.use(Router)

export default new Router({
  mode: 'history',
  /*子路由*/
  routes: [
    /*404页面处理*/
    {
       path:'*',
      component:Error
    },
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
        },
        {
          path: 'hi1', //没有斜线
          name: 'Hi1',
          component: Hi1,
          alias:'/gohi1'
        },
        {
          path: 'hi2',
          name: 'Hi2',
          component: Hi2
        },
        /*重定向redirect*/
        {
          path:'/gohome',
          redirect:'/'
        },
        /*带参数的重定向*/
        {
          path:'/gop/:newsId/:newsTitle',
          redirect:'/params/:newsId/:newsTitle'
        }
      ]
    }
  ]
  /*单页面多路由*/
  /*routes: [
    {
      path: '/',
      components:{
        default:Hello,
        left:Hi1,
        right:Hi2
      }
    },
    {
      path: '/hi',
      components: {
        default:Hello,
        left:Hi2,
        right:Hi1
      }
    }
      ]*/
  /*url传参数*/
/*  routes: [
    {
     path:'/params/:newsId/:newsTitle',
     component:Params
}
  ]*/

})
