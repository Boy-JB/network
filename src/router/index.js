import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import("views/home/Home.vue")
const Web = () => import("views/web/Web.vue")
const Custom = () => import("views/custom/Custom.vue")

Vue.use(VueRouter)

const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
    path: "/web",
    name: "web",
    component: Web
  },
  {
    path: "/custom",
    name: "custom",
    component: Custom
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
