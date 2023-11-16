<template>
  <div>
    <div class="layui-container fly-marginTop">
      <div class="fly-panel fly-panel-user" pad20>
        <div class="layui-tab layui-tab-brief" lay-filter="user">
          <ul class="layui-tab-title">
            <li class="layui-this">登入</li>
            <li><a href="reg.html">注册</a></li>
          </ul>
          <div class="layui-form layui-tab-content" id="LAY_ucm" style="padding: 20px 0;">
            <div class="layui-tab-item layui-show">
              <div class="layui-form layui-form-pane">
                <form method="post">
                  <div class="layui-form-item">

                    <label for="L_email" class="layui-form-label">邮箱</label>
                    <validation-provider rules="required" v-slot="{ errors }">
                      <div class="layui-input-inline">
                        <input type="text" name="username" v-model="username" autocomplete="off" placeholder="请输入"
                          class="layui-input" />
                      </div>

                      <span class="layui-form-mid error">{{ errors[0] }}</span>
                    </validation-provider>
                  </div>
                  <div class="layui-form-item">
                    <label for="L_pass" class="layui-form-label">密码</label>
                    <div class="layui-input-inline">
                      <input type="password" id="L_pass" name="pass" required lay-verify="required" autocomplete="off"
                        class="layui-input">
                    </div>
                  </div>
                  <div class="layui-form-item">
                    <label for="L_vercode" class="layui-form-label">验证码</label>
                    <div class="layui-input-inline">
                      <input type="text" id="L_vercode" name="vercode" required lay-verify="required"
                        placeholder="请回答后面的问题" autocomplete="off" class="layui-input">
                    </div>
                    <div class="layui-form-mid">
                      <span style="color: #c00;">1234</span>
                    </div>
                  </div>
                  <div class="layui-form-item">
                    <button class="layui-btn" lay-filter="*" lay-submit>立即登录</button>
                    <span style="padding-left:20px;">
                      <a href="forget.html">忘记密码？</a>
                    </span>
                  </div>
                  <div class="layui-form-item fly-form-app">
                    <span>或者使用社交账号登入</span>
                    <a href="" onclick="layer.msg('正在通过QQ登入', {icon:16, shade: 0.1, time:0})" class="iconfont icon-qq"
                      title="QQ登入"></a>
                    <a href="" onclick="layer.msg('正在通过微博登入', {icon:16, shade: 0.1, time:0})" class="iconfont icon-weibo"
                      title="微博登入"></a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { email, required } from 'vee-validate/dist/rules'
import { ValidationProvider, extend } from 'vee-validate'

// Override the default message.
extend('required', required)
extend('zwy-rule', value => {
  return value >= 0
})
extend('positive', value => {
  if (value >= 0) {
    return true
  }

  return '{_field_}您好，填写的数值必须大于0'
})

// 导入的验证规则需要注册
extend('email', email)
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: '',
      code: '',
      svg: ''
    }
  },
  components: {
    ValidationProvider
  }

}
</script>

<style lang="sass" scoped>

</style>
