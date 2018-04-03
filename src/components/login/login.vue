<template>
  <div class="form-wrap">
    <h2> Login </h2>
    <Form ref="workForm" :model="workForm" :rules="workFormRules" inline>
      <FormItem prop="username">
        <Input type="text" v-model="workForm.username" placeholder="Username">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem prop="password">
        <Input type="password" v-model="workForm.password" placeholder="Password">
          <Icon type="ios-locked-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('workForm')">Signin</Button>
      </FormItem>
    </Form>
    <p>
      Not have an account ? Go 
      <router-link :to="{path: '/register'}">register</router-link>
    </p>
  </div>
</template>

<script>
import {login} from 'api/login'

export default {
  name: 'Login',
  data () {
    return {
      workForm: {
        username: 'binbobo',
        password: '123456'
      },
      workFormRules: {
        username: [
          { required: true, message: 'input username', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'input password.', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          login(this.workForm).then((user) => {
            this.$Message.success('Login Success')
            this.$store.commit('LOGIN_IN', user)
            this.$router.push('/')
          })
        } else {
          return false
        }
      })
    }
  }
}
</script>


<style lang="scss">
// 此处不能使用webpack.base.config中配置的alias  因为它不是js执行环境
@import 'src/styles/login.scss';
</style>
