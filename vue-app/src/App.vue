<template>
  <div id="app">
    <div id="nav">
   <my-header></my-header>
   <my-footer></my-footer>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
  export default {
     components:{
         'my-header':Header,
         'my-footer':Footer
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
}


#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
