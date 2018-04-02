<template>
  <div class="hello">
    <h1>Welcome, {{ userinfo.name }}</h1>
  </div>
</template>

<script>
import {profile} from 'api/user'

export default {
  name: 'Profile',
  data () {
    return {
      userinfo: {}
    }
  },
  created () {
    profile().then((userinfo) => {
      this.userinfo = userinfo
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
