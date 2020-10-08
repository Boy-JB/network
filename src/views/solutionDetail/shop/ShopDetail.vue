<template>
  <div class="shop-detail">
    <el-container>
      <el-header>
        <logo />
        <home-title />
      </el-header>

       <el-footer class="footer4">
         <shop />
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
import Shop from "./components/Shop";
import Contact from "views/home/components/Contact"

export default {
  name: "ShopDetail",
  components: {
    HomeTitle,
    Logo,
    Case,
    Shop,
    Contact
  },
};
</script>

<style scoped>
.shop-detail >>> .el-header {
  background: url("~assets/imgs/home/banner.png");
  height: 43.75rem !important;
  padding: 0;
  text-align: left;
}

.shop-detail >>> .el-main {
  background: url("~assets/imgs/home/bg_我们的服务.png");
  height: 75rem !important;
  text-align: center;
  overflow: visible;
  padding: 0;
  position: relative;
}

.shop-detail >>> .footer1 {
  background: url("~assets/imgs/home/bg_我们的优势.png");
  height: 43.75rem !important;
  color: #fff;
  text-align: center;
  padding: 0;
  position: relative;
}

.shop-detail >>> .footer2 {
  background-color: #fafafa;
  height: 50rem !important;
  position: relative;
  text-align: center;
  padding: 0;
}

.shop-detail >>> .footer3 {
  background: url("~assets/imgs/home/bg_公司动态.png");
  height: 43.75rem !important;
  position: relative;
  text-align: center;
  padding: 0;
}

.shop-detail >>> .footer4 {
  background-color: #fff;
  height: 100rem !important;
  position: relative;
  text-align: center;
  padding: 0;
}

.shop-detail >>> .footer5 {
  background: url("~assets/imgs/home/bg_诚聘英才.png");
  height: 43.75rem !important;
  position: relative;
  text-align: center;
  padding: 0;
}

.shop-detail >>> .footer6 {
  background: url("~assets/imgs/home/bg_08.png");
  height: 50rem !important;
  position: relative;
  text-align: center;
  padding: 0;
}

.shop-detail >>> .el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 12.5rem;
}

.shop-detail >>> body > .el-container {
  margin-bottom: 2.5rem;
}

.shop-detail >>> .el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 16.25rem;
}

.shop-detail >>> .el-container:nth-child(7) .el-aside {
  line-height: 20rem;
}

.shop-detail >>> .el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
  color: #fff;
}

.shop-detail >>> .el-menu--horizontal > .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal > .el-menu-item:not(.is-disabled):hover,
.el-menu--horizontal > .el-submenu .el-submenu__title:hover {
  background-color: transparent;
}
</style>
