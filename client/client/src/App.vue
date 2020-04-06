<template>
  <div id="app">
    <Header></Header>
    <!-- todo add content -->
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
