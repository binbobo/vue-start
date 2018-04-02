import {request} from 'api/http'

const baseURL = process.env.API_BASE

export const profile = (userinfo) => {
  return request({
    url: baseURL + '/api/users/profile'
  })
}
