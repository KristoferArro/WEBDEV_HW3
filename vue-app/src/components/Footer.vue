<template>
<footer>
    <router-link to="/contact">Contact</router-link>

</footer>

</template>

<script> 
    export default {
    }
</script>

<style scoped>
    footer {
        background-color:#333;
           position: fixed;
            padding: 10px 10px 0px 10px;
            bottom: 0;
            width: 100%;
            /* Height of the footer*/ 
            height: 70px;
            background: grey;
            text-align: center;
    }
    footer a{
    
    color: #f2f2f2f2;
    padding: 16px 24px;
    text-align: center;
    font-size: 30px;
    text-decoration: none;
    margin-right: 5px;
}
    footer a:hover{
    background:#ddd;
    color:#333;
}
 

</style>