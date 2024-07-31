import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { ValidationProvider, extend } from 'vee-validate'
Vue.config.productionTip = false

// Add a rule.
extend('secret', {
  validate: value => value === 'example',
  message: 'This is not the magic word'
})
extend('even', value => {
  return value % 2 === 0
})
extend('required', {
  validate (value) {
    return {
      required: true,
      valid: ['', null, undefined].indexOf(value) === -1
    }
  },
  computesRequired: true,
  message: '请输入{_field_}内容'
})
// Register it globally
Vue.component('ValidationProvider', ValidationProvider)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
