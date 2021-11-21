<template>
  <div class = "about">
    <form>
        <h6>Welcome!</h6>
        <a href="">Create an account</a>
        <p>Or</p>
        <h6>Please Log In</h6>
    <div class="container">
        <input type="text" placeholder="Email" name ="uname">
        <input type="password" placeholder="Password" name="psw">
        <button id="loginButton" onclick="location.href='index.html'" type="button">Login</button>
        </div>
        <a href="">Forgot password?</a>
    </form>
    </div>
</template>

<script>
export default {
  
}
</script>

<style>

input[type="text"],
input[type="password"] {
  width: 60%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

form {
  background-color: white;
  text-align: center;
  padding-bottom: 1%;
}


.imgcontainer {
  text-align: left;
  width: 30%;
  height: 5%;
}

img.avatar {
  width: 70%;
}

#loginButton {
  background-color: #113492;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 20%;
}

h6 {
  font-size: 150%;
}

.about {
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
