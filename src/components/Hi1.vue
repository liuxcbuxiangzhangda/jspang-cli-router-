<template>
 <div>
   <h3>{{msg}}--{{$route.params.username}}--{{$route.params.id}}</h3>
   <p>{{ $route.name}}</p>
 </div>
</template>

<script>
  export default {
    name: 'Hi1',
    data:function () {
      return {
          msg:"hi 1 page"
      }
    }
  }
</script>

<style>

</style>
