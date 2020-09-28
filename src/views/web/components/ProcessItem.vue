<template>
  <div class="process-item">
    <div class="block">
      <el-carousel height="230px">
        <el-carousel-item>
          <div class="demo-image__placeholder">
            <div class="block">
              <el-image :src="require('../../../assets/imgs/web/ic_ 01了解客户意向.png')" />
              <p class="demonstration">了解客户意向</p>
            </div>
          </div>

          <div class="demo-image__placeholder">
            <div class="block">
              <el-image :src="require('../../../assets/imgs/web/ic_02提交整体方案.png')" />
              <p class="demonstration">提交整体方案</p>
            </div>
          </div>

          <div class="demo-image__placeholder">
            <div class="block">
              <el-image :src="require('../../../assets/imgs/web/ic_03确定合作方案.png')" />
              <p class="demonstration">确定合作方案</p>
            </div>
          </div>

          <div class="demo-image__placeholder">
            <div class="block">
              <el-image :src="require('../../../assets/imgs/web/ic_04前端页面设计.png')" />
              <p class="demonstration">前端页面设计</p>
            </div>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="demo-image__placeholder">
            <div class="block">
              <el-image :src="require('../../../assets/imgs/web/ic_ 05后端程序开发.png')" />
              <p class="demonstration">后端程序开发</p>
            </div>
          </div>
          <div class="demo-image__placeholder">
            <div class="block">
              <el-image :src="require('../../../assets/imgs/web/ic_06客户内测验收.png')" />
              <p class="demonstration">客户内测验收</p>
            </div>
          </div>
          <div class="demo-image__placeholder">
            <div class="block">
              <el-image :src="require('../../../assets/imgs/web/ic_07交付上线使用.png')" />
              <p class="demonstration">交付上线使用</p>
            </div>
          </div>
          <div class="demo-image__placeholder">
            <div class="block">
              <el-image :src="require('../../../assets/imgs/web/ic_08终身技术支持.png')" />
              <p class="demonstration">终身技术支持</p>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProcessItem",
};
</script>

<style scoped>
.process-item >>> .el-carousel__item h3 {
  font-size: 14px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.process-item >>> .block {
  width: 80%;
  display: inline-block;
}

.process-item >>> .el-carousel__item:nth-child(2n) {
  background-color: transparent;
}

.process-item >>> .el-carousel__item:nth-child(2n + 1) {
  background-color: transparent;
}

.process-item >>> .el-image__error,
.el-image__inner,
.el-image__placeholder {
  width: 100px;
  height: 100px;
}

.process-item >>> .process-item-icon {
  background-color: #fff;
  width: 20px;
  height: 1px;
  border-radius: 2px;
  margin: 10px auto 16px auto;
}

.process-item >>> .demo-image__placeholder {
  display: inline-block;
}

.process-item >>> .el-image {
  width: 100px;
  height: 100px;
  border: 1px;
  border-style: dashed;
}

.process-item {
  margin-top: 133px;
}

.process-item >>> .demo-image__placeholder {
  margin: 0 75px 0 75px;
}

.process-item >>> .demonstration {
  margin-top: 19px;
  font-size: 16px;
  font-weight: 400;
  font-family: "Microsoft YaHei";
  width: 120px;
  text-align: center;
  display: inline-block;
}
</style>
