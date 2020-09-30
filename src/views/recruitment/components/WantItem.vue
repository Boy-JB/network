<template>
  <div class="want-item">
    <div class="block">
      <el-carousel height="400px">
        <el-carousel-item>
          <div class="demo-image__placeholder">
            <div class="block">
              <el-image src="#" />
              <p class="demonstration">前台(示范）</p>
              <p class="want-text">
                负责日常来访客人的接待，按公司礼仪要求引领客人...
              </p>
            </div>
          </div>

          <div class="demo-image__placeholder">
            <div class="block">
              <el-image src="#" />
              <p class="demonstration">前台(示范）</p>
              <p class="want-text">
                负责日常来访客人的接待，按公司礼仪要求引领客人...
              </p>
            </div>
          </div>

          <div class="demo-image__placeholder">
            <div class="block">
              <el-image src="#" />
              <p class="demonstration">前台(示范）</p>
              <p class="want-text">
                负责日常来访客人的接待，按公司礼仪要求引领客人...
              </p>
            </div>
          </div>

          <div class="demo-image__placeholder">
            <div class="block">
              <el-image src="#" />
              <p class="demonstration">前台(示范）</p>
              <p class="want-text">
                负责日常来访客人的接待，按公司礼仪要求引领客人...
              </p>
            </div>
          </div>

          <div class="demo-image__placeholder">
            <div class="block">
              <el-image src="#" />
              <p class="demonstration">前台(示范）</p>
              <p class="want-text">
                负责日常来访客人的接待，按公司礼仪要求引领客人...
              </p>
            </div>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="demo-image__placeholder">
            <div class="block">
              <el-image src="#" />
              <p class="demonstration">前台(示范）</p>
              <p class="want-text">
                负责日常来访客人的接待，按公司礼仪要求引领客人...
              </p>
            </div>
          </div>

          <div class="demo-image__placeholder">
            <div class="block">
              <el-image src="#" />
              <p class="demonstration">前台(示范）</p>
              <p class="want-text">
                负责日常来访客人的接待，按公司礼仪要求引领客人...
              </p>
            </div>
          </div>

          <div class="demo-image__placeholder">
            <div class="block">
              <el-image src="#" />
              <p class="demonstration">前台(示范）</p>
              <p class="want-text">
                负责日常来访客人的接待，按公司礼仪要求引领客人...
              </p>
            </div>
          </div>

          <div class="demo-image__placeholder">
            <div class="block">
              <el-image src="#" />
              <p class="demonstration">前台(示范）</p>
              <p class="want-text">
                负责日常来访客人的接待，按公司礼仪要求引领客人...
              </p>
            </div>
          </div>

          <div class="demo-image__placeholder">
            <div class="block">
              <el-image src="#" />
              <p class="demonstration">前台(示范）</p>
              <p class="want-text">
                负责日常来访客人的接待，按公司礼仪要求引领客人...
              </p>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "WantItem",
};
</script>

<style scoped>
.want-item >>> .el-carousel__item h3 {
  font-size: 14px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.want-item >>> .block {
  width: 80%;
  display: inline-block;
}

.want-item >>> .el-carousel__item:nth-child(2n) {
  background-color: transparent;
}

.want-item >>> .el-carousel__item:nth-child(2n + 1) {
  background-color: transparent;
}

.want-item >>> .el-image__error,
.el-image__inner,
.el-image__placeholder {
  width: 100px;
  height: 100px;
}

.want-item >>> .demo-image__placeholder {
  width: 200px;
  margin: 10px;
  display: inline-block;
}

.want-item >>> .el-image {
  background-color: #fff;
  width: 200px;
  height: 200px;
  border-radius: 20px;
}

.want-item >>> .demonstration {
  margin: 19px 20px 0 10px;
  text-align: left;
  color: #000000;
  font-size: 18px;
  font-weight: bold;
}

.want-item >>> .want-text {
  text-align: left;
  margin: 19px 14px 0 10px;
  color: #a9a9a9;
  font-size: 14px;
}

.want-item {
  margin-top: 53px;
}

.want-item >>> .el-carousel__button {
  background-color: #d1d1d1;
}
</style>
