<template>
  <div class="hello">
    <Button @click="logout" type="error">Logout</Button>
    <router-link :to="{ path: 'profile' }">Profile</router-link>
    <router-link :to="{ path: 'todo' }">Todo</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import {logout} from 'api/user'

export default {
  name: 'HomePage',
  data () {
    return {
    }
  },
  methods: {
    logout () {
      logout().then(() => {
        localStorage.removeItem('isLogin')
        this.$router.push('/login')
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
