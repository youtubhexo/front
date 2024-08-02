<template>
  <div id="app">
    <Header></Header>
    12
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>
<style lang="scss">
@import "./assets/layui/css/layui.css";
@import "./assets/css/global.css";

</style>
