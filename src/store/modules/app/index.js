const state = {
  isLogin: false,
  loginUser: null
}

const mutations = {
  LOGIN_IN (state, user) {
    state.isLogin = true
    state.loginUser = user
    localStorage.setItem('vue-start.loginUser', JSON.stringify(user))
  },
  LOGIN_OUT (state) {
    state.isLogin = false
    state.loginUser = null
    localStorage.removeItem('vue-start.loginUser')
  }
}

export default {
  state,
  mutations
}
