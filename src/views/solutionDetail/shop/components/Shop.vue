<template>
  <div class="shop">
     <div class="shop-all">
      <p class="shop-title">电子商城型</p>
      <div class="shop-icon"></div>
      <p class="little-shop">专业量身定制开发，定制设计、定制功能。使企业借助互联网的力量，<br /> 建立部署自己的网络交易平台。无论是B2B、B2C类型，均可通过INTERNET的交易管理和销售平台，给企业带来了无限商机</p>
    </div>
    <shop-item />
    <el-button type="primary" round>立刻获取定制方案</el-button>
  </div>
</template>

<script>
import ShopItem from "./ShopItem";

export default {
  name: "Shop",
  components: {
    ShopItem,
  },
};
</script>

<style scoped>
.shop >>> .shop-all {
  text-align: center;
  color: #000000;
}

.shop >>> .shop-title {
  font-size: 2.25rem;
  font-family: Microsoft YaHei;
  font-weight: bold;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  z-index: 99;
  position: relative;
  margin-top: 3.125rem;
}

.shop >>> .shop-bg {
  font-size: 4.375rem;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(32, 47, 245, 0.04);
  position: absolute;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin: 0;
  top: 1.25rem;
  left: 48.125rem;
}

.shop >>> .shop-icon {
  background-color: rgba(209, 209, 209, 1);
  width: 2.5rem;
  height: 0.25rem;
  border-radius: 0.125rem;
  margin: 0 auto;
}

.shop >>> .little-shop {
  margin-top: 2.25rem;
  font-size: 1rem;
  color: rgba(170, 170, 170, 1);
}

.shop >>> .el-button {
  margin-top: 3.125rem;
  background-color: rgba(32, 48, 245, 1);
  border-color: rgba(32, 48, 245, 1);
}
</style>