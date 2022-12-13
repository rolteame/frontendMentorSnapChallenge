import { createApp } from 'vue'
import './style.css'
// import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'


/*Registering App components */
import Nav from './components/Nav.vue'
import Banner from './components/Banner.vue'



const app = createApp(App)

app.component('Nav', Nav)
app.component('Banner', Banner)

// app.use(router)
app.mount('#app')
