<template>
  <div class=view>
  <div class=flex-container>
    <div class="post">
        <div class="post-header">
            <img src="images/profile.jpg" class="avatar">
            {{$store.state.post1.posttime}}
        </div>
        <h4>{{$store.state.post1.posttext}}</h4>
        <div class="btm-container">
            <a href=""><img src="images/like.png" alt="like"></a>
        </div>
    </div>
    <div class="post">
        <div class="post-header">
            <img src="images/profile.jpg" class="avatar">
            {{$store.state.post2.posttime}}
        </div>
        <h4>{{$store.state.post2.posttext}}</h4>
        <div class="btm-container">
            <a href=""><img src="images/like.png" alt="like"></a>
        </div>
    </div>
    <div class="post">
        <div class="post-header">
            <img src="images/profile.jpg" class="avatar">
            {{$store.state.post3.posttime}}
        </div>
        <h4>{{$store.state.post3.posttext}}</h4>
        <div class="btm-container">
            <a href=""><img src="images/like.png" alt="like"></a>
        </div>
    </div>
    <div class="post">
        <div class="post-header">
            <img src="images/profile.jpg" class="avatar">
            {{$store.state.post4.posttime}}
        </div>
        <h4>{{$store.state.post4.posttext}}</h4>
        <div class="btm-container">
            <a href=""><img src="images/like.png" alt="like"></a>
        </div>
    </div>
    <div class="post">
        <div class="post-header">
            <img src="images/profile.jpg" class="avatar">
            {{$store.state.post5.posttime}}
        </div>
        <h4>{{$store.state.post5.posttext}}</h4>
        <div class="btm-container">
            <a href=""><img src="images/like.png" alt="like"></a>
        </div>
    </div>
    <div class="post">
        <div class="post-header">
            <img src="images/profile.jpg" class="avatar">
            {{$store.state.post6.posttime}}
        </div>
        <h4>{{$store.state.post6.posttext}}</h4>
        <div class="btm-container">
            <a href=""><img src="images/like.png" alt="like"></a>
        </div>
    </div>
    <div class="post">
        <div class="post-header">
            <img src="images/profile.jpg" class="avatar">
            {{$store.state.post7.posttime}}
        </div>
        <h4>{{$store.state.post7.posttext}}</h4>
        <div class="btm-container">
            <a href=""><img src="images/like.png" alt="like"></a>
        </div>
    </div>
    <div class="post">
        <div class="post-header">
            <img src="images/profile.jpg" class="avatar">
            {{$store.state.post8.posttime}}
        </div>
        <h4>{{$store.state.post8.posttext}}</h4>
        <div class="btm-container">
            <a href=""><img src="images/like.png" alt="like"></a>
        </div>
    </div>
    <div class="post">
        <div class="post-header">
            <img src="images/profile.jpg" class="avatar">
            {{$store.state.post9.posttime}}
        </div>
        <h4>{{$store.state.post9.posttext}}</h4>
        <div class="btm-container">
            <a href=""><img src="images/like.png" alt="like"></a>
        </div>
    </div>
    <div class="post">
        <div class="post-header">
            <img src="images/profile.jpg" class="avatar">
            {{$store.state.post10.posttime}}
        </div>
        <h4>{{$store.state.post10.posttext}}</h4>
        <div class="btm-container">
            <a href=""><img src="images/like.png" alt="like"></a>
        </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
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

div+h4 {
    font-weight: bold;
    text-align: left;
    padding: 10px;
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
div~h4 {
    font-family: Arial, Helvetica, sans-serif;
}
</style>