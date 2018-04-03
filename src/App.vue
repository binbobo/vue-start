<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>


<style lang='scss'>
/* common styles */
ul {
  list-style-type: none;
  width: 100%;
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  color: #777;
}
</style>


<style lang="scss">
#app {
  height: 100%;
}
</style>
