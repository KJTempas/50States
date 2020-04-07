<template>
  <div id="app">
    <Header></Header>
    <!-- RouterView will contain another component, which will be determined by VueRouter -->
    <!--examining the browser URL and loading the corresponding component into the RouterView-->
    <!--these mappings are defined in router/index.js-->
    <RouterView></RouterView>
    <Footer></Footer>
    
  </div>
</template>

<script> //importing components
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Header, Footer //add H & F as components of the Vue app
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
