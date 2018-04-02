import {heart} from 'api/login'

export const isLogin = () => !!localStorage.getItem('isLogin')

export const startHeart = () => {
  if (isLogin()) {
    heart().then(() => {
      setTimeout(startHeart, 5 * 1000)
    }).catch(() => {
      // heart失败之后 定时器停止
    })
  }
}
