<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <router-link class="first" to="/">首页</router-link>
      <router-link class="first" to="/hi">hi页面</router-link>
     <!-- <router-link class="second" :to="{name:'Hi1',params:{username:'liuxuechun',id:888}}">hi1页面</router-link>
      <router-link class="second" to="/hi/hi2">hi2页面</router-link>-->
      <!--url传参数-->
      <!--<router-link to="/params/198/jspang website is very good">params</router-link>
      <router-link to="/params/190/mm">yyy</router-link>-->
      <!--重定向-->
      <router-link to="/gohome">gohome</router-link>
      <router-link to="/gop/mif/dsfdsgs">gop</router-link>
      <router-link to="/gohi1">gohi1</router-link>
    </div>
    <router-view></router-view>
    <!--单页面多路由:一个页面多个view-->
    <!--<router-view name="left"></router-view>
    <router-view name="right"></router-view>-->
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  .first{
    font-size: 20px;
    font-weight: bold;
  }
  .second{
    font-size: 14px;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
