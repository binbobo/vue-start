<template>
  <div class="hello">
    <Button @click="logout" type="error">Logout</Button>
    <router-link :to="{ path: 'profile' }">Profile</router-link>
    <router-link :to="{ path: 'todo' }">Todo</router-link>
    isLogin:{{isLogin}} loginUser: {{loginUser}}
    <router-view></router-view>
  </div>
</template>

<script>
import {logout} from 'api/user'
import {heart} from 'api/login'
import { mapState } from 'vuex'

export default {
  name: 'HomePage',
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      isLogin: state => state.app.isLogin,
      loginUser: state => state.app.loginUser
    })
  },
  created () {
    this.startHeart()
  },
  methods: {
    logout () {
      logout().then(() => {
        this.$store.commit('LOGIN_OUT')
        this.$router.push('/login')
      })
    },
    startHeart () {
      if (this.isLogin) {
        heart().then((user) => {
          // 上次调用成功之后  继续下次调用
          setTimeout(this.startHeart, 50 * 1000)
        }).catch(() => {
          setTimeout(this.startHeart, 50 * 1000)
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
