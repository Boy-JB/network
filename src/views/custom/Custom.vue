<template>
  <div class="custom">
    <el-container>
      <el-header>
        <logo />
        <home-title />
      </el-header>

      <el-main>
        <do />
      </el-main>

      <el-footer class="footer1">
        <application />
      </el-footer>

      <el-footer class="footer2">
        <field />
        <!-- <case /> -->
      </el-footer>

      <el-footer class="footer3">
        <!-- <company /> -->
        <customization />
      </el-footer>

      <el-footer class="footer4">
        <!-- <about /> -->
        <boutique />
      </el-footer>

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
import Do from "./components/Do";
import Application from "./components/Application";
import Field from "./components/Field"
// import Case from "./components/Case";
// import Company from "views/home/components/Company";
import Customization from "./components/Customization";
// import Recruitment from "views/home/components/Recruitment";
import Boutique from "views/web/components/Boutique";
import Contact from "views/home/components/Contact";

export default {
  name: "Custom",
  components: {
    HomeTitle,
    Logo,
    Do,
    Application,
    Customization,
    Boutique,
    Contact,
    Field
  },
};
</script>

<style scoped>
.custom >>> .el-header {
  background: url("../../assets/imgs/app/banner.png");
  height: 700px !important;
  padding: 0;
  text-align: left;
}

.custom >>> .el-main {
  background: url("../../assets/imgs/home/bg_我们的服务.png");
  height: 1000px !important;
  text-align: center;
  overflow: visible;
  padding: 0;
  position: relative;
}

.custom >>> .footer1 {
  background: url("../../assets/imgs/app/bg_我们的优势.png");
  height: 700px !important;
  color: #fff;
  text-align: center;
  padding: 0;
  position: relative;
}

.custom >>> .footer2 {
  background-color: #fafafa;
  height: 800px !important;
  position: relative;
  text-align: center;
  padding: 0;
}

.custom >>> .footer3 {
  background: url("../../assets/imgs/home/bg_公司动态.png");
  height: 700px !important;
  position: relative;
  text-align: center;
  padding: 0;
}

.custom >>> .footer4 {
  background-color: #fafafa;
  height: 800px !important;
  position: relative;
  text-align: center;
  padding: 0;
}

.custom >>> .footer5 {
  background: url("../../assets/imgs/home/bg_诚聘英才.png");
  height: 700px !important;
  position: relative;
  text-align: center;
  padding: 0;
}

.custom >>> .footer6 {
  background: url("../../assets/imgs/home/bg_08.png");
  height: 800px !important;
  position: relative;
  text-align: center;
  padding: 0;
}

.custom >>> .el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.custom >>> body > .el-container {
  margin-bottom: 40px;
}

.custom >>> .el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.custom >>> .el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.custom >>> .el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
  color: #fff;
}

.custom >>> .el-menu--horizontal > .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal > .el-menu-item:not(.is-disabled):hover,
.el-menu--horizontal > .el-submenu .el-submenu__title:hover {
  background-color: transparent;
}
</style>
