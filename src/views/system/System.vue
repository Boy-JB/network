<template>
  <div class="system">
    <el-container>
      <el-header>
        <logo />
        <home-title />
      </el-header>

      <!-- <el-main>
        <service />
      </el-main> -->

      <!-- <el-footer class="footer1">
        <advantage />
      </el-footer> -->

      <el-footer class="footer2">
        <operating />
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
import Operating from "./components/Operating";
import Contact from "views/home/components/Contact";

export default {
  name: "Home",
  components: {
    HomeTitle,
    Logo,
    Operating,
    Contact,
  },
};
</script>

<style scoped>
.system >>> .el-header {
  background: url("../../assets/imgs/system/banner.png");
  height: 700px !important;
  padding: 0;
  text-align: left;
}

.system >>> .el-main {
  background: url("../../assets/imgs/home/bg_我们的服务.png");
  height: 1200px !important;
  text-align: center;
  overflow: visible;
  padding: 0;
  position: relative;
}

.system >>> .footer1 {
  background: url("../../assets/imgs/home/bg_我们的优势.png");
  height: 700px !important;
  color: #fff;
  text-align: center;
  padding: 0;
  position: relative;
}

.system >>> .footer2 {
  background-color: #fafafa;
  height: 1200px !important;
  position: relative;
  text-align: center;
  padding: 0;
}

.system >>> .footer3 {
  background: url("../../assets/imgs/home/bg_公司动态.png");
  height: 700px !important;
  position: relative;
  text-align: center;
  padding: 0;
}

.system >>> .footer4 {
  background-color: #fafafa;
  height: 800px !important;
  position: relative;
  text-align: center;
  padding: 0;
}

.system >>> .footer5 {
  background: url("../../assets/imgs/home/bg_诚聘英才.png");
  height: 700px !important;
  position: relative;
  text-align: center;
  padding: 0;
}

.system >>> .footer6 {
  background: url("../../assets/imgs/home/bg_08.png");
  height: 800px !important;
  position: relative;
  text-align: center;
  padding: 0;
}

.system >>> .el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.system >>> body > .el-container {
  margin-bottom: 40px;
}

.system >>> .el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.system >>> .el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.system >>> .el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
  color: #fff;
}

.system >>> .el-menu--horizontal > .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal > .el-menu-item:not(.is-disabled):hover,
.el-menu--horizontal > .el-submenu .el-submenu__title:hover {
  background-color: transparent;
}
</style>
