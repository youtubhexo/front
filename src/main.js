import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { localize } from 'vee-validate'
// eslint-disable-next-line no-unused-vars
import zh from 'vee-validate/dist/locale/zh_CN.json'
// eslint-disable-next-line no-unused-vars
import ar from 'vee-validate/dist/locale/ar.json'
localize({
  zh: {
    names: {
      username: '用户名'
    }
  },
  ar: {
    names: {
      username: 'aaaa',
      email: 'البريد الاليكتروني',
      password: 'كلمة السر'
    }
  }
})
localize('zh', zh)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
