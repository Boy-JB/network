<template>
  <div class="home-title">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
    <el-menu-item index="1">首页</el-menu-item>
    <el-menu-item index="2">网站开发</el-menu-item>
    <el-menu-item index="3">APP定制</el-menu-item>
    <el-menu-item index="4">软件开发</el-menu-item>
    <el-menu-item index="5">应用系统</el-menu-item>
    <el-menu-item index="6">精品案例</el-menu-item>
    <el-menu-item index="7">公司动态</el-menu-item>
    <el-menu-item index="8">诚聘英才</el-menu-item>
    <el-menu-item index="9">关于我们</el-menu-item>
  </el-menu>
  </div>
</template>

<script>
export default {
  name: "HomeTitle",
  data() {
    return {
      activeIndex: "1",
    };
  },
};
</script>

<style scoped>
.home-title >>> .el-menu {
  background: transparent;
}

.home-title >>> .el-menu.el-menu--horizontal {
  border-bottom: solid 1px transparent;
}

.home-title >>> .el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: 2px solid #fff;
  color: #fff;
}

.home-title >>> .el-menu--horizontal > .el-menu-item {
  color: #fff;
}

.home-title >>> .el-menu {
  margin-left: 715px;
}

.home-title >>> .el-menu--horizontal>.el-menu-item:not(.is-disabled):focus, .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover, .el-menu--horizontal>.el-submenu .el-submenu__title:hover {
  background-color: transparent;
}
</style>
