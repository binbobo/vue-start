<template>
  <div class="form-wrap">
    <h2> Register </h2>
    <Form ref="workForm" :model="workForm" :rules="workFormRules" inline>
      <FormItem prop="username">
        <Input type="text" v-model="workForm.username" placeholder="Username">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem prop="password">
        <Input type="password" v-model="workForm.password" placeholder="Password">
          <Icon type="unlocked" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem prop="nickname">
        <Input type="text" v-model="workForm.nickname" placeholder="Nickname">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem prop="email">
        <Input type="email" v-model="workForm.email" placeholder="Email">
          <Icon type="email" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('workForm')">Signup</Button>
      </FormItem>
    </Form>
    <p>
      Had an account ? Go 
      <router-link :to="{path: '/login'}">Login</router-link>
    </p>
  </div>
</template>

<script>
import {register} from 'api/login'

export default {
  name: 'Register',
  data () {
    return {
      workForm: {
        username: '',
        email: ''
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
          register(this.workForm).then((data) => {
            this.$Message.success('Success!')
            this.$refs[name].resetFields()
            this.$router.push({ path: '/login' })
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
 @import 'src/styles/login.scss';
</style>
