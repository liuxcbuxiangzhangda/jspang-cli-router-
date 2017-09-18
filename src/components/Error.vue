<template>
  <div>
    <p>{{ msg}}</p>
    此页面不存在
  </div>
</template>

<script>
  export default {
    name: 'error',
    data:function () {
      return {
        msg:"404 页面"
      }
    }
  }
</script>

<style>

</style>
