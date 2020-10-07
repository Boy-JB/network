import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import("views/home/Home.vue");
const Web = () => import("views/web/Web.vue");
const Custom = () => import("views/custom/Custom.vue");
const Software = () => import("views/software/Software.vue");
const System = () => import("views/system/System.vue");
const Case = () => import("views/case/Case.vue");
const Company = () => import("views/company/Company.vue");
const Recruitment = () => import("views/recruitment/Recruitment.vue");
const About = () => import("views/about/About.vue");
const JoinDetail = () => import("views/joinDetails/JoinDetail.vue");
const BrandDetail = () => import("views/solutionDetail/brand/BrandDetail.vue")
const H5Detail = () => import("views/solutionDetail/h5/H5Detail.vue")
const MobileDetail = () => import("views/solutionDetail/mobile/MobileDetail.vue")

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/web",
    name: "web",
    component: Web,
  },
  {
    path: "/custom",
    name: "custom",
    component: Custom,
  },
  {
    path: "/software",
    name: "software",
    component: Software,
  },
  {
    path: "/system",
    name: "system",
    component: System,
  },
  {
    path: "/case",
    name: "case",
    component: Case,
  },
  {
    path: "/company",
    name: "company",
    component: Company,
  },
  {
    path: "/recruitment",
    name: "recruitment",
    // children: {
    //   path: "/recruitmen/joinDetails",
    //   name: "joinDetails",
    //   component: JoinDetail,
    // },
    component: Recruitment,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/recruitmen/joinDetails",
    name: "joinDetails",
    component: JoinDetail,
  },
  {
    path: "/web/brand",
    name: "brand",
    component: BrandDetail,
  },
  {
    path: "/web/h5",
    name: "h5",
    component: H5Detail,
  },
  {
    path: "/web/mobile",
    name: "mobile",
    component: MobileDetail,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
