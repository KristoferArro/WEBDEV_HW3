import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {},
    state: {
        posts: [
            { postid: 1, like: 0, posttime: "Sept 18, 2020 15:16", posttext: "I think it's going to rain", img: '~/assets/rain.jpg' },
            { postid: 2, like: 0, posttime: "Sept 18, 2020 15:16", posttext: "Test2", img: "" },
            { postid: 3, like: 0, posttime: "Sept 18, 2020 17:18", posttext: "Felt cute, might delete later", img: '~/assets/batman.jpg' },
            { postid: 4, like: 0, posttime: "Sept 18, 2020 20:16", posttext: "It's a nice weather today!", img: "" },
            { postid: 5, like: 0, posttime: "Sept 19, 2020 9:32", posttext: "What should i wear today?", img: "" },
            { postid: 6, like: 0, posttime: "Sept 19, 2020 12:42", posttext: "Can someone help me with my homework?", img: "" },
            { postid: 7, like: 0, posttime: "Sept 19, 2020 13:01", posttext: "I think today is going to be great day!Can someone help me with my homework?", img: "" },
            { postid: 8, like: 0, posttime: "Sept 19, 2020 18:57", posttext: "What is the purpose of Brexit?", img: "" },
            { postid: 9, like: 0, posttime: "Sept 20, 2020 11:26", posttext: "Where should i go to a trip?", img: "" },
            { postid: 10, like: 0, posttime: "Sept 20, 2020 22:13", posttext: "Does fate exist? If so, do we have free will?", img: "" },
        ],
    },
    mutations: {
        like(state,postid){
            state.posts.forEach((post, i) => {
                if (post.postid == postid){
                    state.posts[i].like++
                    return
                }
            })
        },

        resetLikes(state){
            state.posts.forEach(post =>{
                post.like = 0})
        }
    },
    getters: {
        getPosts: state => state.posts
    },
    actions: {
        likeAction: ({commit}, payload) => {
            commit('like',payload.postid)
        },
        resetAction: ({commit}) =>{
            commit('resetLikes')
        }
    }
})