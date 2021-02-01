<template>
  <div id="app">
   <router-link to="/name">姓名</router-link>
    <router-link to="/grade">分数</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
