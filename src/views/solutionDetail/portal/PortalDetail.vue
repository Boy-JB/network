<template>
  <div class="portal-detail">
    <el-container>
      <el-header>
        <logo />
        <home-title />
      </el-header>

       <el-footer class="footer4">
         <portal />
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
import Portal from "./components/Portal";
import Contact from "views/home/components/Contact"

export default {
  name: "PortalDetail",
  components: {
    HomeTitle,
    Logo,
    Case,
    Portal,
    Contact
  },
};
</script>

<style scoped>
.portal-detail >>> .el-header {
  background: url("~assets/imgs/home/banner.png");
  height: 43.75rem !important;
  padding: 0;
  text-align: left;
}

.portal-detail >>> .el-main {
  background: url("~assets/imgs/home/bg_我们的服务.png");
  height: 75rem !important;
  text-align: center;
  overflow: visible;
  padding: 0;
  position: relative;
}

.portal-detail >>> .footer1 {
  background: url("~assets/imgs/home/bg_我们的优势.png");
  height: 43.75rem !important;
  color: #fff;
  text-align: center;
  padding: 0;
  position: relative;
}

.portal-detail >>> .footer2 {
  background-color: #fafafa;
  height: 50rem !important;
  position: relative;
  text-align: center;
  padding: 0;
}

.portal-detail >>> .footer3 {
  background: url("~assets/imgs/home/bg_公司动态.png");
  height: 43.75rem !important;
  position: relative;
  text-align: center;
  padding: 0;
}

.portal-detail >>> .footer4 {
  background-color: #fff;
  height: 87.5rem !important;
  position: relative;
  text-align: center;
  padding: 0;
}

.portal-detail >>> .footer5 {
  background: url("~assets/imgs/home/bg_诚聘英才.png");
  height: 43.75rem !important;
  position: relative;
  text-align: center;
  padding: 0;
}

.portal-detail >>> .footer6 {
  background: url("~assets/imgs/home/bg_08.png");
  height: 50rem !important;
  position: relative;
  text-align: center;
  padding: 0;
}

.portal-detail >>> .el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 12.5rem;
}

.portal-detail >>> body > .el-container {
  margin-bottom: 2.5rem;
}

.portal-detail >>> .el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 16.25rem;
}

.portal-detail >>> .el-container:nth-child(7) .el-aside {
  line-height: 20rem;
}

.portal-detail >>> .el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
  color: #fff;
}

.portal-detail >>> .el-menu--horizontal > .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal > .el-menu-item:not(.is-disabled):hover,
.el-menu--horizontal > .el-submenu .el-submenu__title:hover {
  background-color: transparent;
}
</style>
