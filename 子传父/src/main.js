import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import Index from './assets/components/index.vue'
import two from './assets/components/two.vue'
import three from './assets/components/three.vue'
import four from './assets/components/four.vue'

Vue.use(Router)

let router = new Router({
    routes: [{
        path: '/',
        name: 'index',
        component: Index
    }, {
        path: '/two',
        name: 'two',
        component: two
    }, {
        path: '/three',
        name: 'three',
        component: three
    }, {
        path: '/four',
        name: 'four',
        component: four
    }]
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})