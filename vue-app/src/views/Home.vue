<template>
  <div class=view>
  <div class=flex-container>
    <div>
      <h3 v-on:click="resetFunction">Reset likes</h3>
    </div>
    <div v-for="post in getPosts" :key='post.postid' class="post-container">
      <div class="post">
        <div class="post-header">
            <img :src='post.img'>
            {{ post.posttime }}
        </div>
        <h4>{{ post.posttext }}</h4>
        <div class="btm-container">
            <img src= "@/assets/like.png" height="30" v-on:click="LikeFunction(post.postid)" alt="alternate" />
            <div>{{ post.like }}</div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['getPosts'])
  },
  name: 'Home',

  methods:{
    LikeFunction(postid){
      this.$store.dispatch('likeAction',{postid})
      },
    
    resetFunction(){
      this.$store.dispatch('resetAction')
      }
    }
}
</script>

<style>
.post-container {
  width: 100%;
}
.view {
  background-color: #0080ff;
}
.flex-container {
    margin: 0 25%;
    background-color: #0080ff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.post {
    background-color: white;
    margin-top: 5%;
    margin-left: 10%;
    margin-right: 10%;
    margin-bottom: 2%;
    width: 80%;
    box-shadow: 10px 5px 8px 5px rgba(20, 18, 18, 0.623);
}

h4 {
    font-weight: bold;
    text-align: left;
    padding: 10px;
    font-family: Arial, Helvetica, sans-serif;
}

.post-header {
    padding: 10px 10px;
    padding-bottom: 20px;
    text-align: right;
    color: grey;
}

.post-header img {
    padding-bottom: 3px;
    float: left;
    width: 7.5%;
}
</style>