import { createRouter, createWebHashHistory  } from "vue-router";


const routes = [
  {
    path: '/',
    component: Home,
    name: 'home',
  },
]

const router = createRouter({
  mode: createWebHashHistory(),
  routes,
})
