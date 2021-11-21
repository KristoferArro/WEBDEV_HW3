<template>
  <div class="container">
      <h1>CONTACT US</h1>
      <p>You can contact us via email or you can send us a message here</p>
      <p>Our email is: <span style="font-weight: bold">ag@eestiparimmuusika.ee</span></p>
      <form>
          <input type="text" placeholder="Enter your message" name="message">
          <button>Send</button>
      </form>
  </div>
</template>

<script>
export default {

}

</script>

<style lang="css">
.container {
    background-color: #0080ff;
    justify-content: center;
    align-items: center;
    background-color: white;
    text-align: center;
    margin-top: 10%;
    margin-left: 30%;
    margin-right: 30%;
    padding: 1%;
}

form {
    background-color: white;
    text-align: center;
}

button {
  color: black;
  background-color: #0080ff;
  margin-left: 1%;
}
input {
    height: 39px;
    width: 38%;
    margin-left: 7%;
}

.img-container img {
    max-width: 100%;
    max-height: 100%
}
</style>