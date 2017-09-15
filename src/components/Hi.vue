<template>
 <div>
   <h2>{{msg}}</h2>
   <router-view></router-view>
   <p>{{ $route.name}}</p>
 </div>
</template>

<script>
  export default {
    name: 'Hi',
    data:function () {
      return {
          msg:"hi page"
      }
    }
  }
</script>

<style>

</style>
