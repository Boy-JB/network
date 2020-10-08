<template>
  <div class="promotion">
     <div class="promotion-all">
      <p class="promotion-title">企业宣传型</p>
      <div class="promotion-icon"></div>
      <p class="little-promotion">致力于提升企业形象，介绍公司业务，获得用户关注。使企业把站点作为信息化宣传的第一步，<br />在互联网上展示企业形象和主营业务，吸引浏览者关注其站点，从而达到促进销售、提升企业价值的作用。</p>
    </div>
    <promotion-item />
    <el-button type="primary" round>立刻获取定制方案</el-button>
  </div>
</template>

<script>
import PromotionItem from "./PromotionItem";

export default {
  name: "Promotion",
  components: {
    PromotionItem,
  },
};
</script>

<style scoped>
.promotion >>> .promotion-all {
  text-align: center;
  color: #000000;
}

.promotion >>> .promotion-title {
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

.promotion >>> .promotion-bg {
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

.promotion >>> .promotion-icon {
  background-color: rgba(209, 209, 209, 1);
  width: 2.5rem;
  height: 0.25rem;
  border-radius: 0.125rem;
  margin: 0 auto;
}

.promotion >>> .little-promotion {
  margin-top: 2.25rem;
  font-size: 1rem;
  color: rgba(170, 170, 170, 1);
}

.promotion >>> .el-button {
  margin-top: 2.5rem;
  background-color: rgba(32, 48, 245, 1);
  border-color: rgba(32, 48, 245, 1);
}
</style>