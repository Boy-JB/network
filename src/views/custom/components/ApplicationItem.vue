<template>
  <div class="advantage-item">
    <div class="demo-image__placeholder">
      <div class="block">
        <el-image :src="require('assets/imgs/app/ic_ 专业团队 品质监控.png')" />
        <p class="demonstration">专业团队 品质监控</p>
      </div>
    </div>

    <div class="demo-image__placeholder">
      <div class="block">
        <el-image :src="require('assets/imgs/app/ic_系统设计 专业流程.png')" />
        <p class="demonstration">系统设计 专业流程</p>
      </div>
    </div>

    <div class="demo-image__placeholder">
      <div class="block">
        <el-image :src="require('assets/imgs/app/ic_优秀的合作伙伴.png')" />
        <p class="demonstration">优秀的合作伙伴</p>
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
  margin-top: 6.25rem;
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
