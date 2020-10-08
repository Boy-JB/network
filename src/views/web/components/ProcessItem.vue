<template>
  <div class="process-item">
    <div class="block">
      <el-carousel height="14.375rem">
        <el-carousel-item>
          <div class="demo-image__placeholder">
            <div class="block">
              <el-image
                :src="
                  require('../../../assets/imgs/web/ic_ 01了解客户意向.png')
                "
              />
              <p class="demonstration">了解客户意向</p>
            </div>
          </div>

          <div class="demo-image__placeholder">
            <div class="block">
              <el-image
                :src="require('../../../assets/imgs/web/ic_02提交整体方案.png')"
              />
              <p class="demonstration">提交整体方案</p>
            </div>
          </div>

          <div class="demo-image__placeholder">
            <div class="block">
              <el-image
                :src="require('../../../assets/imgs/web/ic_03确定合作方案.png')"
              />
              <p class="demonstration">确定合作方案</p>
            </div>
          </div>

          <div class="demo-image__placeholder">
            <div class="block">
              <el-image
                :src="require('../../../assets/imgs/web/ic_04前端页面设计.png')"
              />
              <p class="demonstration">前端页面设计</p>
            </div>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="demo-image__placeholder">
            <div class="block">
              <el-image
                :src="
                  require('../../../assets/imgs/web/ic_ 05后端程序开发.png')
                "
              />
              <p class="demonstration">后端程序开发</p>
            </div>
          </div>
          <div class="demo-image__placeholder">
            <div class="block">
              <el-image
                :src="require('../../../assets/imgs/web/ic_06客户内测验收.png')"
              />
              <p class="demonstration">客户内测验收</p>
            </div>
          </div>
          <div class="demo-image__placeholder">
            <div class="block">
              <el-image
                :src="require('../../../assets/imgs/web/ic_07交付上线使用.png')"
              />
              <p class="demonstration">交付上线使用</p>
            </div>
          </div>
          <div class="demo-image__placeholder">
            <div class="block">
              <el-image
                :src="require('../../../assets/imgs/web/ic_08终身技术支持.png')"
              />
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
  font-size: 0.875rem;
  opacity: 0.75;
  line-height: 18.75rem;
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
  width: 6.25rem;
  height: 6.25rem;
}

.process-item >>> .process-item-icon {
  background-color: #fff;
  width: 1.25rem;
  height: 0.0625rem;
  border-radius: 0.125rem;
  margin: 0.625rem auto 1rem auto;
}

.process-item >>> .demo-image__placeholder {
  display: inline-block;
}

.process-item >>> .el-image {
  width: 6.25rem;
  height: 6.25rem;
  border: 0.0625rem;
  border-style: dashed;
}

.process-item {
  margin-top: 8.3125rem;
}

.process-item >>> .demonstration {
  margin-top: 1.1875rem;
  font-size: 1rem;
  font-weight: 400;
  font-family: "Microsoft YaHei";
  width: 7.5rem;
  text-align: center;
  display: inline-block;
}
</style>
