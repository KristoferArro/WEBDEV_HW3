<template>
<div class="nav">
      <router-link class="router-link" to="/">Home</router-link> |
      <router-link class="router-link" to="/about">About</router-link>
      <router-link class="router-link" to="/contact">Contact</router-link>

</div>
</template>

<script>
   export default{

   }
</script>

<style>

body{
    margin:0;
    padding:0;
}
.nav{

    background-color:gray;
    overflow:hidden;
    text-align: center;
    display: flex;
    justify-content:center;
}
.nav .router-link{
    
    color: #f2f2f2f2;
    padding: 16px 24px;
    text-align: center;
    font-size: 30px;
    text-decoration: none;
    margin-right: 5px;
}
.nav .router-link:hover{
    background:#ddd;
    color:#333;
}
</style>