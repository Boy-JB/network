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
const PortalDetail = () => import("views/solutionDetail/portal/PortalDetail.vue")
const ShopDetail = () => import("views/solutionDetail/shop/ShopDetail.vue")
const PromotionDetail = () => import("views/solutionDetail/promotion/PromotionDetail.vue")

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
    component: Recruitment,
    children: [
      
    ]
  },
  {
    path: "/recruitment/joinDetails",
    name: "joinDetails",
    component: JoinDetail
  },
  {
    path: "/about",
    name: "about",
    component: About,
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
  {
    path: "/web/portal",
    name: "portal",
    component: PortalDetail,
  },
  {
    path: "/web/shop",
    name: "shop",
    component: ShopDetail,
  },
  {
    path: "/web/promotion",
    name: "promotion",
    component: PromotionDetail,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
