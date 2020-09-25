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
  width: 100px;
  height: 100px;
}

.advantage-item >>> .advantage-item-icon {
  background-color: #fff;
  width: 20px;
  height: 1px;
  border-radius: 2px;
  margin: 10px auto 16px auto;
}

.advantage-item >>> .demo-image__placeholder {
  display: inline-block;
}

.advantage-item >>> .el-image {
  width: 100px;
  height: 100px;
  border: 1px;
  border-style: dashed;
}

.advantage-item {
  margin-top: 133px;
}

.advantage-item >>> .demo-image__placeholder {
  margin: 0 75px 0 75px;
}

.advantage-item >>> .demonstration {
  margin-top: 19px;
  font-size: 16px;
  font-weight: 400;
  font-family: "Microsoft YaHei";
}
</style>
