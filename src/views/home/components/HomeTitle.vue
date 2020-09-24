<template>
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

<style>
.el-menu {
  background: transparent;
}

.el-menu.el-menu--horizontal {
  border-bottom: solid 1px transparent;
}

.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: 2px solid #fff;
  color: #fff;
}

.el-menu--horizontal > .el-menu-item {
  color: #fff;
}

.el-menu {
  margin-left: 715px;
}
</style>
