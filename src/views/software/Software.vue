<template>
  <div class="software">
    <el-container>
      <el-header>
        <logo />
        <home-title />
      </el-header>

      <el-main>
        <customized />
      </el-main>

      <el-footer class="footer1">
        <development />
      </el-footer>

      <el-footer class="footer2">
        <type />
      </el-footer>

      <el-footer class="footer3">
        <case />
      </el-footer>

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
import Customized from "./components/Customized";
import Development from "./components/Development"
import Type from "./components/Type"
import Case from "./components/Case"
import Contact from "views/home/components/Contact";

export default {
  name: "Software",
  components: {
    HomeTitle,
    Logo,
    Customized,
    Development,
    Type,
    Case,
    Contact,
  },
};
</script>

<style scoped>
.software >>> .el-header {
  background: url("../../assets/imgs/software/banner.png");
  height: 43.75rem !important;
  padding: 0;
  text-align: left;
}

.software >>> .el-main {
  background: url("../../assets/imgs/home/bg_我们的服务.png");
  height: 62.5rem !important;
  text-align: center;
  overflow: visible;
  padding: 0;
  position: relative;
}

.software >>> .footer1 {
  background: url("../../assets/imgs/home/bg_我们的优势.png");
  height: 43.75rem !important;
  color: #fff;
  text-align: center;
  padding: 0;
  position: relative;
}

.software >>> .footer2 {
  background-color: #fafafa;
  height: 50rem !important;
  position: relative;
  text-align: center;
  padding: 0;
}

.software >>> .footer3 {
  background: url("../../assets/imgs/home/bg_诚聘英才.png");
  height: 43.75rem !important;
  position: relative;
  text-align: center;
  padding: 0;
}

.software >>> .footer4 {
  background-color: #fafafa;
  height: 50rem !important;
  position: relative;
  text-align: center;
  padding: 0;
}

.software >>> .footer5 {
  background: url("../../assets/imgs/home/bg_诚聘英才.png");
  height: 43.75rem !important;
  position: relative;
  text-align: center;
  padding: 0;
}

.software >>> .footer6 {
  background: url("../../assets/imgs/home/bg_08.png");
  height: 50rem !important;
  position: relative;
  text-align: center;
  padding: 0;
}

.software >>> .el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 12.5rem;
}

.software >>> body > .el-container {
  margin-bottom: 2.5rem;
}

.software >>> .el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 16.25rem;
}

.software >>> .el-container:nth-child(7) .el-aside {
  line-height: 20rem;
}

.software >>> .el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
  color: #fff;
}

.software >>> .el-menu--horizontal > .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal > .el-menu-item:not(.is-disabled):hover,
.el-menu--horizontal > .el-submenu .el-submenu__title:hover {
  background-color: transparent;
}
</style>
