<template>
<div class="home">
  <el-container>
    <el-header>
      <logo />
      <home-title />
    </el-header>

    <el-main>
      <service />
    </el-main>

    <el-footer class="footer1">

    </el-footer>

    <el-footer class="footer2">

    </el-footer>

    <el-footer class="footer3">

    </el-footer>

    <el-footer class="footer4">

    </el-footer>

    <el-footer class="footer5">

    </el-footer>

    <el-footer class="footer6">

    </el-footer>
  </el-container>
</div>
</template>

<script>
import HomeTitle from "./components/HomeTitle"
import Logo from "./components/Logo"
import Service from "./components/Service"

export default {
  name: "Home",
  components: {
    HomeTitle,
    Logo,
    Service
  }
};
</script>

<style>
.el-header {
  background: url("../../assets/imgs/home/banner.png");
  height: 700px !important;
  padding: 0;
  text-align: left;
}

.el-main {
  background: url("../../assets/imgs/home/bg_我们的服务.png");
  height: 1200px !important;
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
}


.footer1 {
  background: url("../../assets/imgs/home/bg_我们的优势.png");
  height: 700px !important;
  color: #fff;
  text-align: left;
}

.footer2 {
  background-color: #fafafa;
  height: 800px !important;
}

.footer3 {
  background: url("../../assets/imgs/home/bg_公司动态.png");
  height: 700px !important;
}

.footer4 {
  background-color: #fafafa;
  height: 800px !important;
}

.footer5 {
  background: url("../../assets/imgs/home/bg_诚聘英才.png");
  height: 700px !important;
}

.footer6 {
  background: url("../../assets/imgs/home/bg_08.png");
  height: 700px !important;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}



body>.el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.el-menu--horizontal .el-menu-item:not(.is-disabled):focus, .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
  color: #fff;
}

.el-menu--horizontal>.el-menu-item:not(.is-disabled):focus, .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover, .el-menu--horizontal>.el-submenu .el-submenu__title:hover {
  background-color: transparent;
}
</style>
