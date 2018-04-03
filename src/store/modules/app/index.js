const state = {
  isLogin: false,
  loginUser: null,
  isCollapsed: false
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
  },
  TOGGLE_COLLAPSED (state) {
    state.isCollapsed = !state.isCollapsed
  }
}

export default {
  state,
  mutations
}
