<template>
  <div class="h5-detail">
    <el-container>
      <el-header>
        <logo />
        <home-title />
      </el-header>

       <el-footer class="footer4">
         <html5 />
      </el-footer>

      <el-footer class="footer2">
        <case />
      </el-footer>

      
      <el-footer class="footer6">
        <contact />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import HomeTitle from "views/home/components/HomeTitle";
import Logo from "views/home/components/Logo";
import Case from "./components/Case";
import Html5 from "./components/Html5";
import Contact from "views/home/components/Contact"

export default {
  name: "H5Detail",
  components: {
    HomeTitle,
    Logo,
    Case,
    Html5,
    Contact
  },
};
</script>

<style scoped>
.h5-detail >>> .el-header {
  background: url("~assets/imgs/home/banner.png");
  height: 700px !important;
  padding: 0;
  text-align: left;
}

.h5-detail >>> .el-main {
  background: url("~assets/imgs/home/bg_我们的服务.png");
  height: 1200px !important;
  text-align: center;
  overflow: visible;
  padding: 0;
  position: relative;
}

.h5-detail >>> .footer1 {
  background: url("~assets/imgs/home/bg_我们的优势.png");
  height: 700px !important;
  color: #fff;
  text-align: center;
  padding: 0;
  position: relative;
}

.h5-detail >>> .footer2 {
  background-color: #fafafa;
  height: 800px !important;
  position: relative;
  text-align: center;
  padding: 0;
}

.h5-detail >>> .footer3 {
  background: url("~assets/imgs/home/bg_公司动态.png");
  height: 700px !important;
  position: relative;
  text-align: center;
  padding: 0;
}

.h5-detail >>> .footer4 {
  background-color: #fff;
  height: 700px !important;
  position: relative;
  text-align: center;
  padding: 0;
}

.h5-detail >>> .footer5 {
  background: url("~assets/imgs/home/bg_诚聘英才.png");
  height: 700px !important;
  position: relative;
  text-align: center;
  padding: 0;
}

.h5-detail >>> .footer6 {
  background: url("~assets/imgs/home/bg_08.png");
  height: 800px !important;
  position: relative;
  text-align: center;
  padding: 0;
}

.h5-detail >>> .el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.h5-detail >>> body > .el-container {
  margin-bottom: 40px;
}

.h5-detail >>> .el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.h5-detail >>> .el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.h5-detail >>> .el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
  color: #fff;
}

.h5-detail >>> .el-menu--horizontal > .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal > .el-menu-item:not(.is-disabled):hover,
.el-menu--horizontal > .el-submenu .el-submenu__title:hover {
  background-color: transparent;
}
</style>
