<template>
  <div id="app">
    <div class="layui-container layui-form-pane">
      <label class="layui-form-label">用户名</label>
      <div class="layui-input-block">
        <input
          type="text"
          name="title"
          autocomplete="off"
          placeholder="请输入"
          lay-verify="required"
          class="layui-input"
        />
      </div>
      <label class="layui-form-label">密码</label>
      <div class="layui-input-block">
        <input
          type="password"
          name="title"
          autocomplete="off"
          placeholder="请输入"
          lay-verify="required"
          class="layui-input"
        />
      </div>
      <label class="layui-form-label">验证码</label>
      <div class="layui-input-block">
        <input
          type="text"
          name="title"
          autocomplete="off"
          placeholder="请输入"
          lay-verify="required"
          class="layui-input"
        />
      </div>
      <button type="button" class="layui-btn">登录</button>
      <a class="zwy-forget">忘记密码</a>
    </div>
  </div>
</template>

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
</style>
