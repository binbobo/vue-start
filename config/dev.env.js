'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // 使用localhost时，http://不可缺少！
  API_BASE: '"http://localhost:8989"'
})
