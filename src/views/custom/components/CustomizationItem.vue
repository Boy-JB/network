<template>
  <div class="customization-item">
    <div class="block">
      <el-carousel height="14.375rem">
        <el-carousel-item>
          <div class="demo-image__placeholder">
            <div class="block">
              <el-image :src="require('../../../assets/imgs/app/ic_01需求分析.png')" />
              <p class="demonstration">需求分析</p>
            </div>
          </div>

          <div class="demo-image__placeholder">
            <div class="block">
              <el-image :src="require('../../../assets/imgs/app/ic_02原型设计.png')" />
              <p class="demonstration">原型设计</p>
            </div>
          </div>

          <div class="demo-image__placeholder">
            <div class="block">
              <el-image :src="require('../../../assets/imgs/app/ic_03UI设计.png')" />
              <p class="demonstration">UI设计</p>
            </div>
          </div>

          <div class="demo-image__placeholder">
            <div class="block">
              <el-image :src="require('../../../assets/imgs/app/ic_ 04后端程序开发.png')" />
              <p class="demonstration">后端程序开发</p>
            </div>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="demo-image__placeholder">
            <div class="block">
              <el-image :src="require('../../../assets/imgs/app/ic_05项目管理.png')" />
              <p class="demonstration">项目管理</p>
            </div>
          </div>
          <div class="demo-image__placeholder">
            <div class="block">
              <el-image :src="require('../../../assets/imgs/app/ic_06项目管理.png')" />
              <p class="demonstration">项目管理</p>
            </div>
          </div>
          <div class="demo-image__placeholder">
            <div class="block">
              <el-image :src="require('../../../assets/imgs/app/ic_07上传应用市场.png')" />
              <p class="demonstration">上传应用市场</p>
            </div>
          </div>
          <div class="demo-image__placeholder">
            <div class="block">
              <el-image :src="require('../../../assets/imgs/app/ic_08更新维护.png')" />
              <p class="demonstration">更新维护</p>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomizationItem",
};
</script>

<style scoped>
.customization-item >>> .el-carousel__item h3 {
  font-size: 0.875rem;
  opacity: 0.75;
  line-height: 18.75rem;
  margin: 0;
}

.customization-item >>> .block {
  width: 80%;
  display: inline-block;
}

.customization-item >>> .el-carousel__item:nth-child(2n) {
  background-color: transparent;
}

.customization-item >>> .el-carousel__item:nth-child(2n + 1) {
  background-color: transparent;
}

.customization-item >>> .el-image__error,
.el-image__inner,
.el-image__placeholder {
  width: 6.25rem;
  height: 6.25rem;
}

.customization-item >>> .customization-item-icon {
  background-color: #fff;
  width: 1.25rem;
  height: 0.0625rem;
  border-radius: 0.125rem;
  margin: 0.625rem auto 1rem auto;
}

.customization-item >>> .demo-image__placeholder {
  display: inline-block;
}

.customization-item >>> .el-image {
  width: 6.25rem;
  height: 6.25rem;
  border: 0.0625rem;
  border-style: dashed;
  color: #fff;
}

.customization-item {
  margin-top: 8.3125rem;
}

.customization-item >>> .demo-image__placeholder {
  margin: 0 4.6875rem 0 4.6875rem;
}

.customization-item >>> .demonstration {
  margin-top: 1.1875rem;
  font-size: 1rem;
  font-weight: 400;
  font-family: "Microsoft YaHei";
  width: 7.5rem;
  text-align: center;
  display: inline-block;
  color: #fff;
}
</style>
