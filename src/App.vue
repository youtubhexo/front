import axios from 'axios';
<!-- eslint-disable semi -->
<template>
  <div id="app">
    <div class="layui-container layui-form-pane">
      <ValidationObserver ref="observer">
        <div class="layui-form-item">
          <validation-provider rules="required" v-slot="{ errors }">
            <label class="layui-form-label">用户名</label>
            <div class="layui-input-inline">
              <input type="text" v-model="form.username" autocomplete="off" placeholder="请输入" lay-verify="required"
                class="layui-input" />
            </div>

            <span class="layui-form-mid error">{{ errors[0] }}</span>
          </validation-provider>

        </div>

        <div class="layui-form-item">
          <label class="layui-form-label">密码</label>
          <div class="layui-input-block">
            <input type="password" name="title" autocomplete="off" placeholder="请输入" lay-verify="required"
              class="layui-input" />

          </div>
          <div class="layui-form-item">
            <label class="layui-form-label">验证码</label>
            <div class="layui-input-inline">
              <input type="password" name="password" placeholder="请输入" lay-verify="required" autocomplete="off"
                class="layui-input" width="30px">
            </div>
            <div class="layui-form-mid svg" v-html="svg" @click="captcha"></div>
          </div>
        </div>
        <button type="button" class="layui-btn" @click="login">登录</button>
        <a class="zwy-forget">忘记密码</a>
      </ValidationObserver>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'
extend('required', {
  ...required,
  message: '此字段必填'
})
export default {
  name: 'app',
  data () {
    return {
      svg: '',
      form: {
        username: '',
        password: ''
      }
    }
  },
  components: {
    ValidationProvider,
    ValidationObserver
  },

  mounted () {
    this.captcha()
  },
  methods: {
    captcha () {
      axios.get('http://localhost:3000/captcha').then((res) => {
        console.log(res)
        if (res.data.code === 200) {
          this.svg = res.data.data
        }
      })
    },
    login () {
      // 表单验证逻辑
      this.$refs.observer.validate().then(valid => {
        if (valid) {
          // 验证通过，执行提交逻辑
          // 处理数据，发送请求等
          console.log('提交表单')
        } else {
          // 验证不通过，处理错误
          console.log('表单验证失败')
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
#app {
  background: #f2f2f2;
}

.layui-container {
  background: #fff;
}

input {
  width: 190px;
}

.zwy-forget {
  margin-left: 12px;

  &:hover {
    color: #16baaa;
  }
}

.svg {
  position: relative;
  top: -15px;
}

.error {
  color: red;
}
</style>
