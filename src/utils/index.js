export const isLogin = () => !!localStorage.getItem('vue-start.loginUser')
export const getLoginUser = () => JSON.parse(localStorage.getItem('vue-start.loginUser'))
