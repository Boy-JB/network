<template>
  <div class="web">
    <el-container>
      <el-header>
        <logo />
        <home-title />
      </el-header>

      <el-main>
        <solution />
      </el-main>

      <el-footer class="footer1">
        <process />
      </el-footer>

      <el-footer class="footer2">
        <boutique />
      </el-footer>

      <!-- <el-footer class="footer3">
        <company />
      </el-footer> -->

      <!-- <el-footer class="footer4">
        <about />
      </el-footer> -->

      <!-- <el-footer class="footer5">
        <recruitment />
      </el-footer> -->

      <el-footer class="footer6">
        <contact />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import HomeTitle from "views/home/components/HomeTitle";
import Logo from "views/home/components/Logo";
import Solution from "./components/Solution";
import Process from "./components/Process";
import Boutique from "./components/Boutique";
// import Company from "views/home/components/Company";
// import About from "views/home/components/About";
// import Recruitment from "views/home/components/Recruitment";
import Contact from "views/home/components/Contact"

export default {
  name: "Web",
  components: {
    HomeTitle,
    Logo,
    Solution,
    Process,
    Boutique,
    // Company,
    // About,
    // Recruitment,
    Contact
  },
};
</script>

<style scoped>
.web >>> .el-header {
  background: url("../../assets/imgs/web/banner_网站开发.png");
  height: 43.75rem !important;
  padding: 0;
  text-align: left;
}

.web >>> .el-main {
  background: url("../../assets/imgs/home/bg_我们的服务.png");
  height: 75rem !important;
  text-align: center;
  overflow: visible;
  padding: 0;
  position: relative;
}

.web >>> .footer1 {
  background: url("../../assets/imgs/home/bg_我们的优势.png");
  height: 43.75rem !important;
  color: #fff;
  text-align: center;
  padding: 0;
  position: relative;
}

.web >>> .footer2 {
  background-color: #fafafa;
  height: 50rem !important;
  position: relative;
  text-align: center;
  padding: 0;
}

.web >>> .footer3 {
  background: url("../../assets/imgs/home/bg_公司动态.png");
  height: 43.75rem !important;
  position: relative;
  text-align: center;
  padding: 0;
}

.web >>> .footer4 {
  background-color: #fafafa;
  height: 50rem !important;
  position: relative;
  text-align: center;
  padding: 0;
}

.web >>> .footer5 {
  background: url("../../assets/imgs/home/bg_诚聘英才.png");
  height: 43.75rem !important;
  position: relative;
  text-align: center;
  padding: 0;
}

.web >>> .footer6 {
  background: url("../../assets/imgs/home/bg_08.png");
  height: 50rem !important;
  position: relative;
  text-align: center;
  padding: 0;
}

.web >>> .el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 12.5rem;
}

.web >>> body > .el-container {
  margin-bottom: 2.5rem;
}

.web >>> .el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 16.25rem;
}

.web >>> .el-container:nth-child(7) .el-aside {
  line-height: 20rem;
}

.web >>> .el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
  color: #fff;
}

.web >>> .el-menu--horizontal > .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal > .el-menu-item:not(.is-disabled):hover,
.el-menu--horizontal > .el-submenu .el-submenu__title:hover {
  background-color: transparent;
}
</style>
