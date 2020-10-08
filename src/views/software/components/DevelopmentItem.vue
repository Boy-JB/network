<template>
  <div class="development-item">
    <div class="block">
      <el-carousel height="14.375rem">
        <el-carousel-item>
          <div class="demo-image__placeholder">
            <div class="block">
              <el-image
                :src="
                  require('../../../assets/imgs/software/ic_01功能强大.png')
                "
              />
              <p class="demonstration">功能强大且灵活，<br />模块扩展容易</p>
            </div>
          </div>

          <div class="demo-image__placeholder">
            <div class="block">
              <el-image
                :src="
                  require('../../../assets/imgs/software/ic_02支持b／s.png')
                "
              />
              <p class="demonstration">
                支持B/S，C/S架构，<br />全面覆盖实施需求
              </p>
            </div>
          </div>

          <div class="demo-image__placeholder">
            <div class="block">
              <el-image
                :src="
                  require('../../../assets/imgs/software/ic_03可控性强.png')
                "
              />
              <p class="demonstration">可控性强，<br />流程步骤一目了然</p>
            </div>
          </div>

          <div class="demo-image__placeholder">
            <div class="block">
              <el-image
                :src="
                  require('../../../assets/imgs/software/ic_04贴近客户.png')
                "
              />
              <p class="demonstration">贴近客户个性化需求，<br />服务周详</p>
            </div>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="demo-image__placeholder">
            <div class="block">
              <el-image
                :src="
                  require('../../../assets/imgs/software/ic_05实用性强.png')
                "
              />
              <p class="demonstration">
                实用性强，操作简捷，<br />适合不同背景人员操作
              </p>
            </div>
          </div>
          <div class="demo-image__placeholder">
            <div class="block">
              <el-image
                :src="
                  require('../../../assets/imgs/software/ic_06用户权限.png')
                "
              />
              <p class="demonstration">
                强大的用户权限管理，<br />满足不同客户要求
              </p>
            </div>
          </div>
          <div class="demo-image__placeholder">
            <div class="block">
              <el-image
                :src="
                  require('../../../assets/imgs/software/ic_07项目开发周期.png')
                "
              />
              <p class="demonstration">项目开发周期短，<br />实施费用合理</p>
            </div>
          </div>
          <div class="demo-image__placeholder">
            <div class="block">
              <el-image
                :src="
                  require('../../../assets/imgs/software/ic_08后续服务方便.png')
                "
              />
              <p class="demonstration">后续服务方便便捷，<br />享受贴心服务</p>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "DevelopmentItem",
};
</script>

<style scoped>
.development-item >>> .el-carousel__item h3 {
  font-size: 0.875rem;
  opacity: 0.75;
  line-height: 18.75rem;
  margin: 0;
}

.development-item >>> .block {
  width: 80%;
  display: inline-block;
}

.development-item >>> .el-carousel__item:nth-child(2n) {
  background-color: transparent;
}

.development-item >>> .el-carousel__item:nth-child(2n + 1) {
  background-color: transparent;
}

.development-item >>> .el-image__error,
.el-image__inner,
.el-image__placeholder {
  width: 6.25rem;
  height: 6.25rem;
}

.development-item >>> .development-item-icon {
  background-color: #fff;
  width: 1.25rem;
  height: 0.0625rem;
  border-radius: 0.125rem;
  margin: 0.625rem auto 1rem auto;
}

.development-item >>> .demo-image__placeholder {
  display: inline-block;
}

.development-item >>> .el-image {
  width: 6.25rem;
  height: 6.25rem;
  border: 0.0625rem;
  border-style: dashed;
  color: #fff;
}

.development-item {
  margin-top: 8.3125rem;
}

.development-item >>> .demonstration {
  margin-top: 1.1875rem;
  font-size: 1rem;
  font-weight: 400;
  font-family: "Microsoft YaHei";
  width: 10rem;
  text-align: center;
  display: inline-block;
  color: #fff;
}
</style>
