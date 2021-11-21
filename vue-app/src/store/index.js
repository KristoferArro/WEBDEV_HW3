import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {},
    state: {
        post1: { posttime: "Sept 18, 2020 15:16", posttext: "I think it's going to rain" },
        post2: { posttime: "Sept 18, 2020 15:16", posttext: "I think it's going to rain" },
        post3: { posttime: "Sept 18, 2020 17:18", posttext: "Felt cute, might delete later" },
        post4: { posttime: "Sept 18, 2020 20:16", posttext: "It's a nice weather today!" },
        post5: { posttime: "Sept 19, 2020 9:32", posttext: "What should i wear today?" },
        post6: { posttime: "Sept 19, 2020 12:42", posttext: "Can someone help me with my homework?" },
        post7: { posttime: "Sept 19, 2020 13:01", posttext: "I think today is going to be great day!Can someone help me with my homework?" },
        post8: { posttime: "Sept 19, 2020 18:57", posttext: "What is the purpose of Brexit?" },
        post9: { posttime: "Sept 20, 2020 11:26", posttext: "Where should i go to a trip?" },
        post10: { posttime: "Sept 20, 2020 22:13", posttext: "Does fate exist? If so, do we have free will?" },
    },
    mutations: {},
    getters: {},
    actions: {}
})