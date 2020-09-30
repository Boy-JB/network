import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import("views/home/Home.vue")
const Web = () => import("views/web/Web.vue")
const Custom = () => import("views/custom/Custom.vue")
const Software = () => import("views/software/Software.vue")
const System = () => import("views/system/System.vue")
const Case = () => import("views/case/Case.vue")
const Company = () => import("views/company/Company.vue")
const Recruitment =  () => import("views/recruitment/Recruitment.vue")
const About =  () => import("views/about/About.vue")

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
  {
    path: "/software",
    name: "software",
    component: Software
  },
  {
    path: "/system",
    name: "system",
    component: System
  },
  {
    path: "/case",
    name: "case",
    component: Case
  },
  {
    path: "/company",
    name: "company",
    component: Company
  },
  {
    path: "/recruitment",
    name: "recruitment",
    component: Recruitment
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
