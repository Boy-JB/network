<template>
  <div class="advantage-item">
    <div class="demo-image__placeholder">
    <div class="block">
      <el-image :src="require('../../../assets/imgs/home/ic_高度定制.png')" />
      <span class="demonstration">高度定制</span>
      <div class="advantage-item-icon"></div>
      <span>• 从策略到运营，量身定制专 属您的高端网站！</span>
    </div>
    <div class="block">
      <el-image :src="require('../../../assets/imgs/home/ic_高度定制.png')" />
      <span class="demonstration">高度定制</span>
      <div class="advantage-item-icon"></div>
      <span>• 从策略到运营，量身定制专 属您的高端网站！</span>
    </div>
    <div class="block">
      <el-image :src="require('../../../assets/imgs/home/ic_高度定制.png')" />
      <span class="demonstration">高度定制</span>
      <div class="advantage-item-icon"></div>
      <span>• 从策略到运营，量身定制专 属您的高端网站！</span>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "AdvantageItem",
};
</script>

<style scoped>
.advantage-item >>> .el-image__error,
.el-image__inner,
.el-image__placeholder {
  width: 100px;
  height: 100px;
}

.advantage-item >>> .advantage-item-icon {
  background-color: #fff;
  width: 20px;
  height: 1px;
  border-radius: 2px;
  margin: 0 auto;
}
</style>
