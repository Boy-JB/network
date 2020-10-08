<template>
  <div class="advantage-item">
    <div class="demo-image__placeholder">
      <div class="block">
        <el-image :src="require('assets/imgs/home/ic_高度定制.png')" />
        <p class="demonstration">高度定制</p>
        <div class="advantage-item-icon"></div>
        <span>• 从策略到运营，量身定制专<br />属您的高端网站！</span>
      </div>
    </div>

    <div class="demo-image__placeholder">
      <div class="block">
        <el-image :src="require('assets/imgs/home/ic_精湛技术.png')" />
        <p class="demonstration">精湛技术</p>
        <div class="advantage-item-icon"></div>
        <span>• 拥有多年经验的平台开发<br />技术！</span>
      </div>
    </div>

    <div class="demo-image__placeholder">
      <div class="block">
        <el-image :src="require('assets/imgs/home/ic_高端设计.png')" />
        <p class="demonstration">高端设计</p>
        <div class="advantage-item-icon"></div>
        <span>• 拥有多年经验的UI设计师<br />视觉惊艳！</span>
      </div>
    </div>

    <div class="demo-image__placeholder">
      <div class="block">
        <el-image :src="require('assets/imgs/home/ic_贴心服务.png')" />
        <p class="demonstration">贴心服务</p>
        <div class="advantage-item-icon"></div>
        <span>• 不断修正服务导向，从满足<br />预期到走向卓越！</span>
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
  width: 6.25rem;
  height: 6.25rem;
}

.advantage-item >>> .advantage-item-icon {
  background-color: #fff;
  width: 1.25rem;
  height: 0.0625rem;
  border-radius: 0.125rem;
  margin: 0.625rem auto 1rem auto;
}

.advantage-item >>> .demo-image__placeholder {
  display: inline-block;
}

.advantage-item >>> .el-image {
  width: 6.25rem;
  height: 6.25rem;
  border: 0.0625rem;
  border-style: dashed;
}

.advantage-item {
  margin-top: 8.3125rem;
}

.advantage-item >>> .demo-image__placeholder {
  margin: 0 4.6875rem 0 4.6875rem;
}

.advantage-item >>> .demonstration {
  margin-top: 1.1875rem;
  font-size: 1rem;
  font-weight: 400;
  font-family: "Microsoft YaHei";
}
</style>
