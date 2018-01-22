<template>
  <div class="login-content">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="login-form">
      <el-form-item label="">
        <h2 class="title">后台管理系统</h2>
      </el-form-item>
      <el-form-item label="" prop="username">
        <el-input name="username" type="text" v-model="ruleForm.username" autoComplete="on" placeholder="用户名" @keyup.enter.native="submitForm('ruleForm')"
        />
      </el-form-item>
      <el-form-item label="" prop="password">
        <el-input :type="ruleForm.passwordType" v-model="ruleForm.password" auto-complete="off" placeholder="密码" @keyup.enter.native="submitForm('ruleForm')"></el-input>
        <span class="show-pwd el-icon-view" @click="showPassWord"></span>
      </el-form-item>
      <el-form-item class="login-btn-box">
        <el-button type="primary" @click="submitForm('ruleForm')" class="login-btn">登录</el-button>
        <p>专业的互联网管理平台</p>
      </el-form-item>
    </el-form>
    <div id="container" class="mpage">
      <div id="anitOut" class="anitOut"></div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      var validateUsername = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'));
        } else {
          callback();
        }
      };
      var validatePassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else if (value.length < 3) {
          callback(new Error('请输入密码长度小于3位'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          username: '',
          password: '',
          passwordType: 'password'
        },
        rules: {
          password: [{
            validator: validatePassword,
            trigger: 'blur'
          }],
          username: [{
            validator: validateUsername,
            trigger: 'blur'
          }]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.myAxios.post('/login', {
              username: this.ruleForm.username,
              password: this.ruleForm.password
            }).then(it => {
              console.log(it.data.data)
              if (it.data.data.success) {
                this.$message({
                  message: '登入成功',
                  type: 'success',
                  center: true
                });
                this.setSession('token', it.data.data.token)
                this.$router.push('/')
              } else {
                this.ruleForm.username = ""
                this.ruleForm.password = ""
                this.$message({
                  message: '用户名或密码错误',
                  type: 'error',
                  center: true
                });
              }
            }).catch(e => {
              this.$message({
                message: '后台接口错误，请重试',
                type: 'error',
                center: true
              });
            })
          } else {
            this.$message({
              message: '表单未填写完成',
              type: 'error',
              center: true
            });
            return false;
          }
        });
      },
      showPassWord() {
        this.ruleForm.passwordType = this.ruleForm.passwordType === 'password' ? '' : 'password'
      }
    },
    mounted() {
      // console.log(this)
    }
  }

</script>

<style lang='scss' scoped>
  @import "../../static/css/store_login.css";
  .login-content {
    width: 100%;
    height: 100%;
    position: fixed;
    background: #007acf;
    .login-form {
      position: absolute;
      top: 50%;
      left: 50%;
      right: 0;
      transform: translateX(-50%) translateY(-60%);
      width: 336px;
      padding: 28px;
      background: #fff;
      .title {
        text-align: center;
      }
      .login-btn-box {
        text-align: center;
        color: #999;
        .login-btn {
          width: 100%;
        }
      }
      .el-form-item {
        position: relative;
        .show-pwd {
          position: absolute;
          right: 30px;
          top: 10px;
          z-index: 100;
          font-size: 20px;
        }
      }
    }
  }

</style>
