<template>
  <div class="mobile">
     <div class="mobile-all">
      <p class="mobile-title">移动微门户</p>
      <div class="mobile-icon"></div>
      <p class="little-mobile">通过整合移动端多种营销方式，让企业在移动互联网得到更多的展 示与传播，获取更多商机。<br />帮助企业覆盖更多的移动营销场景，快速吸引眼球，并有效互动。</p>
    </div>
    <mobile-item />
  </div>
</template>

<script>
import MobileItem from "./MobileItem";

export default {
  name: "Mobile",
  components: {
    MobileItem,
  },
};
</script>

<style scoped>
.mobile >>> .mobile-all {
  text-align: center;
  color: #000000;
}

.mobile >>> .mobile-title {
  font-size: 36px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  z-index: 99;
  position: relative;
  margin-top: 50px;
}

.mobile >>> .mobile-bg {
  font-size: 70px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(32, 47, 245, 0.04);
  position: absolute;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin: 0;
  top: 20px;
  left: 770px;
}

.mobile >>> .mobile-icon {
  background-color: rgba(209, 209, 209, 1);
  width: 40px;
  height: 4px;
  border-radius: 2px;
  margin: 0 auto;
}

.mobile >>> .little-mobile {
  margin-top: 36px;
  font-size: 16px;
  color: rgba(170, 170, 170, 1);
  width: 45%;
  height: 5.5%;
  display: inline-block;
  text-align: center;
}

.mobile >>> .el-button {
  margin-top: 40px;
  background-color: rgba(32, 48, 245, 1);
  border-color: rgba(32, 48, 245, 1);
}
</style>