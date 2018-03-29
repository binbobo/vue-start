import axios from 'axios'
import {Message} from 'iview'

// 设置通用请求参数

// 请求拦截器
axios.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截器
axios.interceptors.response.use(response => {
  // 成功访问到接口
  // console.log('server response: ', response)

  // 接口返回成功
  if (response.data.success === true) {
    return response.data.data
  }

  // 接口返回失败
  if (response.data.success === false) {
    let {code} = response.data
    // 判断错误代码
    if (typeof code === 'number') {
      // 登陆cookie失效
      if (code === 401) {
        // redirect to login
        (!/#\//.test(window.location.href)) && window.location.replace('/')
      }
      // other code
    }
    return Promise.reject(response.data || response)
  }
  return Promise.reject(new Error())
}, error => {
  Message.error((error && error.message) || error)
  return Promise.reject(error)
})

// 通用请求方法
export const request = ({url, data, method = 'get', params, timeout = 60000}) => {
  return axios.request({
    url: url,
    method,
    data,
    params,
    timeout
  })
}
