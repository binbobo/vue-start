<template>
  <div class="form-wrap">
    <h2> Register </h2>
    <Form ref="workForm" :model="workForm" :rules="workFormRules" inline>
      <FormItem prop="username">
        <Input type="text" v-model="workForm.username" placeholder="Username">
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
        email: [
          { required: true, message: 'input email.', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!');
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss">
 @import 'styles/login.scss';
</style>
