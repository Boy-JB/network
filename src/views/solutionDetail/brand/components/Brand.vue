<template>
  <div class="brand">
     <div class="brand-all">
      <p class="brand-title">品牌展示型（H5）</p>
      <div class="brand-icon"></div>
      <p class="little-brand">着重展示企业文化和品牌特色，强调创意设计与文化的结合，能通过视觉感官的冲击，<br />令目标受众对品牌产生深刻而美好的印象。使品牌形象走向新时代。</p>
    </div>
    <brand-item />
    <el-button type="primary" round>立刻获取定制方案</el-button>
  </div>
</template>

<script>
import BrandItem from "./BrandItem";

export default {
  name: "Brand",
  components: {
    BrandItem,
  },
};
</script>

<style scoped>
.brand >>> .brand-all {
  text-align: center;
  color: #000000;
}

.brand >>> .brand-title {
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

.brand >>> .brand-bg {
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

.brand >>> .brand-icon {
  background-color: rgba(209, 209, 209, 1);
  width: 2.5rem;
  height: 0.25rem;
  border-radius: 0.125rem;
  margin: 0 auto;
}

.brand >>> .little-brand {
  margin-top: 2.25rem;
  font-size: 1rem;
  color: rgba(170, 170, 170, 1);
}

.brand >>> .el-button {
  margin-top: 2.5rem;
  background-color: rgba(32, 48, 245, 1);
  border-color: rgba(32, 48, 245, 1);
}
</style>