<template>
  <div class="home-title">
    <el-menu
      :default-active="activePath"
      @select="handleSelect"
      class="el-menu-demo"
      mode="horizontal"
      router
    >
      <el-menu-item v-for="(item, i) in navList" :key="i" :index="item.name">
        {{ item.navItem }}
      </el-menu-item>
      <!-- <el-menu-item index="1">首页</el-menu-item>
    <el-menu-item index="2" @click="toWeb">网站开发</el-menu-item>
    <el-menu-item index="3">APP定制</el-menu-item>
    <el-menu-item index="4">软件开发</el-menu-item>
    <el-menu-item index="5">应用系统</el-menu-item>
    <el-menu-item index="6">精品案例</el-menu-item>
    <el-menu-item index="7">公司动态</el-menu-item>
    <el-menu-item index="8">诚聘英才</el-menu-item>
    <el-menu-item index="9">关于我们</el-menu-item> -->
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "HomeTitle",
  data() {
    return {
      navList: [
        { name: "/home", navItem: "首页" },
        { name: "/web", navItem: "网站开发" },
        { name: "/custom", navItem: "APP定制" },
        { name: "/software", navItem: "软件开发" },
        { name: "/system", navItem: "应用系统" },
        { name: "/case", navItem: "精品案例" },
        { name: "/company", navItem: "公司动态" },
        { name: "/recruitment", navItem: "诚聘英才" },
        { name: "/about", navItem: "关于我们" },
      ],
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(this);
      console.log(key, keyPath);
    },
  },
  created() {
    let path = this.$route.path;
    if (path == "/recruitment/joinDetails") {
      this.activePath = "/recruitment";
    } else if (path == "/web/brand") {
      this.activePath = "/web";
    } else if (path == "/web/h5") {
      this.activePath = "/web";
    } else if (path == "/web/mobile") {
      this.activePath = "/web";
    } else if (path == "/web/portal") {
      this.activePath = "/web";
    } else if (path == "/web/shop") {
      this.activePath = "/web";
    } else if (path == "/web/promotion") {
      this.activePath = "/web";
    } else {
      this.activePath = path;
    }
  },
  computed: {},
};
</script>

<style scoped>
.home-title >>> .el-menu {
  background: transparent;
}

.home-title >>> .el-menu.el-menu--horizontal {
  border-bottom: solid 0.0625rem transparent;
}

.home-title >>> .el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: 0.125rem solid #fff;
  color: #fff;
}

.home-title >>> .el-menu--horizontal > .el-menu-item {
  color: #fff;
}

.home-title >>> .el-menu {
  margin-left: 44.6875rem;
}

.home-title >>> .el-menu--horizontal > .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal > .el-menu-item:not(.is-disabled):hover,
.el-menu--horizontal > .el-submenu .el-submenu__title:hover {
  background-color: transparent;
}
</style>
