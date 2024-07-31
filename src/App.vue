<template>
  <div id="app">
    <div class="layui-container">
    <form class="layui-form layui-form-pane" action="">
   <div class="layui-form-item">
    <label class="layui-form-label">用户名</label>
    <div class="layui-input-block">
      <input type="text" name="title" autocomplete="off" placeholder="请输入" lay-verify="required" class="layui-input">
    </div>
  </div>
  <div class="layui-form-item">
    <label class="layui-form-label">密码</label>
    <div class="layui-input-block">
      <input type="text" name="title" autocomplete="off" placeholder="请输入" lay-verify="required" class="layui-input">
    </div>
  </div>
  <div class="layui-form-item">
    <label class="layui-form-label">验证码</label>
    <div class="layui-input-inline">
      <input  type="text" name="title" autocomplete="off" placeholder="请输入" lay-verify="required" class="layui-input">
    </div>
    <div class="layui-form-mid layui-text-em svg" v-html="svg" @click="getCaptcha"></div>
  </div>
  <button type="button" class="layui-btn">点击登录</button>
  <a class="desperado-link" href="https://www.desperado.cloud/">忘记密码</a>
  </form>
</div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'App',
  data () {
    return {
      svg: ''
    }
  },
  mounted () {
    this.getCaptcha()
  },
  methods: {
    getCaptcha () {
      axios.get('http://localhost:3000/captcha').then((res) => {
        this.svg = res.data
      })
    }
  }

}

</script>
<style lang="scss"  scoped>
.desperado-link {
  margin-left: 10px;
  &:hover {
    color: #16baaa;
  }
}
input {
  width: 190px;
}
.svg{
  position: relative;
  top: -15px
}
</style>
