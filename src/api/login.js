import {request} from 'api/http'

const baseURL = process.env.API_BASE
console.log(process.env)

export const register = (userinfo) => {
  return request({
    url: baseURL + '/api/users/create',
    method: 'post',
    data: userinfo
  })
}
