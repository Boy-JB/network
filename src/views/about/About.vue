<template>
  <div class="about">
    <el-container>
      <el-header>
        <logo />
        <home-title />
      </el-header>

      <!-- <el-main>
        <service />
      </el-main> -->

      <el-footer class="footer2">
        <overview />
      </el-footer>

      <el-footer class="footer1">
        <advantage />
      </el-footer>
      <!-- 
      <el-footer class="footer3">
        <company />
      </el-footer> -->

      <el-footer class="footer4">
        <contactus />
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
import Advantage from "./components/Advantage";
import Overview from "./components/Overview";
import Contactus from "./components/Contactus"
import Contact from "views/home/components/Contact";

export default {
  name: "About",
  components: {
    HomeTitle,
    Logo,
    Advantage,
    Overview,
    Contactus,
    Contact,
  },
};
</script>

<style scoped>
.about >>> .el-header {
  background: url("../../assets/imgs/about/banner.png");
  height: 700px !important;
  padding: 0;
  text-align: left;
}

.about >>> .el-main {
  background: url("../../assets/imgs/home/bg_我们的服务.png");
  height: 1200px !important;
  text-align: center;
  overflow: visible;
  padding: 0;
  position: relative;
}

.about >>> .footer1 {
  background: url("../../assets/imgs/home/bg_我们的优势.png");
  height: 700px !important;
  color: #fff;
  text-align: center;
  padding: 0;
  position: relative;
}

.about >>> .footer2 {
  background: #f9f9f9;
  height: 1000px !important;
  position: relative;
  text-align: center;
  padding: 0;
}

.about >>> .footer3 {
  background: url("../../assets/imgs/home/bg_公司动态.png");
  height: 700px !important;
  position: relative;
  text-align: center;
  padding: 0;
}

.about >>> .footer4 {
  background-color: #fafafa;
  height: 700px !important;
  position: relative;
  text-align: center;
  padding: 0;
}

.about >>> .footer5 {
  background: url("../../assets/imgs/home/bg_诚聘英才.png");
  height: 700px !important;
  position: relative;
  text-align: center;
  padding: 0;
}

.about >>> .footer6 {
  background: url("../../assets/imgs/home/bg_08.png");
  height: 800px !important;
  position: relative;
  text-align: center;
  padding: 0;
}

.about >>> .el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.about >>> body > .el-container {
  margin-bottom: 40px;
}

.about >>> .el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.about >>> .el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.about >>> .el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
  color: #fff;
}

.about >>> .el-menu--horizontal > .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal > .el-menu-item:not(.is-disabled):hover,
.el-menu--horizontal > .el-submenu .el-submenu__title:hover {
  background-color: transparent;
}
</style>
