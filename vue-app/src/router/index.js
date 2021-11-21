import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact,
    },
    {
        path: '/Login',
        name: 'Login',
        component: Login
    }
]

const router = new VueRouter({
    routes
})

export default router