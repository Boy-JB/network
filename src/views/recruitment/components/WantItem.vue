<template>
  <div class="want-item" @click="wantClick">
    <div class="block">
      <el-carousel height="25rem">
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
  methods: {
    wantClick() {
      this.$router.push({path: "/recruitment/joinDetails"});
    }
  },
};
</script>

<style scoped>
.want-item >>> .el-carousel__item h3 {
  font-size: 0.875rem;
  opacity: 0.75;
  line-height: 18.75rem;
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
  width: 6.25rem;
  height: 6.25rem;
}

.want-item >>> .demo-image__placeholder {
  width: 12.5rem;
  margin: 0.625rem;
  display: inline-block;
  cursor:pointer;
}

.want-item >>> .el-image {
  background-color: #fff;
  width: 12.5rem;
  height: 12.5rem;
  border-radius: 1.25rem;
}

.want-item >>> .demonstration {
  margin: 1.1875rem 1.25rem 0 0.625rem;
  text-align: left;
  color: #000000;
  font-size: 1.125rem;
  font-weight: bold;
}

.want-item >>> .want-text {
  text-align: left;
  margin: 1.1875rem 0.875rem 0 0.625rem;
  color: #a9a9a9;
  font-size: 0.875rem;
}

.want-item {
  margin-top: 3.3125rem;
}

.want-item >>> .el-carousel__button {
  background-color: #d1d1d1;
}
</style>
