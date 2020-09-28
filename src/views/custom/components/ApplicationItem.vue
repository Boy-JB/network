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
  margin-top: 100px;
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
