import {request} from 'api/http'

const baseURL = process.env.API_BASE

export const register = (userinfo) => {
  return request({
    url: baseURL + '/api/users/register',
    method: 'post',
    data: userinfo
  })
}

export const login = (userinfo) => {
  return request({
    url: baseURL + '/api/users/login',
    method: 'post',
    data: userinfo
  })
}
