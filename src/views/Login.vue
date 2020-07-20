<template>
<div class="loginbox">
  <Form ref="ruleForm" :model="ruleForm" :rules="rules" >
    <FormItem prop="username">
      <Input type="text" v-model="ruleForm.username" placeholder="Username">
        <Icon type="ios-person-outline" slot="prepend"></Icon>
      </Input>
    </FormItem>
    <FormItem prop="password">
      <Input type="password" v-model="ruleForm.password" placeholder="Password">
        <Icon type="ios-lock-outline" slot="prepend"></Icon>
      </Input>
    </FormItem>
    <FormItem>
      <Button type="primary" @click="submitForm('ruleForm')">登陆</Button>
    </FormItem>
  </Form>
</div>
</template>

<script>
// import axios from 'axios'
// import Qs from 'qs'
export default {
  data () {
    let validateUsername = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('账号不能为空'))
      } else {
        if (this.ruleForm.username !== '') {
          callback()
        }
      }
    }
    let validatePassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('密码不能为空'))
      } else {
        if (this.ruleForm.password !== '') {
          callback()
        }
      }
    }
    return {
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { validator: validateUsername, trigger: 'blur' }
        ],
        password: [
          { validator: validatePassword, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // console.log(valid)
          // let data = {
          //   username: self.ruleForm.username,
          //   password: self.ruleForm.password
          // }
          // this.$router.push({ path: 'home' })
          // this.$store.commit('changename')
          // this.$store.dispatch('SHOWNAME')
          // this.$store.commit('showname')
          // console.log(this.$store.state.username)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loginbox{width:250px;margin:15% auto;}

</style>
