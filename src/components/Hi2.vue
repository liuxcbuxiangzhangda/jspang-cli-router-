<template>
 <div>
   <h3>{{msg}}</h3>
   <p>{{ $route.name}}</p>
 </div>
</template>

<script>
  export default {
    name: 'Hi2',
    data:function () {
      return {
          msg:"hi 2 page"
      }
    }
  }
</script>

<style>

</style>
