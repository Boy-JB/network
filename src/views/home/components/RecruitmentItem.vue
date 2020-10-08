<template>
  <div class="recruitment-item">
    <div class="demo-image__placeholder">
      <div class="block">
        <el-image src="#" />
        <p class="demonstration">前台(示范）</p>
        <p class="recruitment-text">
          负责日常来访客人的接待，按公司礼仪要求引领客人...
        </p>
      </div>
    </div>

    <div class="demo-image__placeholder">
      <div class="block">
        <el-image src="#" />
        <p class="demonstration">网络编辑(示范）</p>
        <p class="recruitment-text">公众号内容选填、编辑、上传</p>
      </div>
    </div>

    <div class="demo-image__placeholder">
      <div class="block">
        <el-image src="#" />
        <p class="demonstration">前台(示范）</p>
        <p class="recruitment-text">
          负责日常来访客人的接待，按公司礼仪要求引领客人...
        </p>
      </div>
    </div>

    <div class="demo-image__placeholder">
      <div class="block">
        <el-image src="#" />
        <p class="demonstration">前台(示范）</p>
        <p class="recruitment-text">
          负责日常来访客人的接待，按公司礼仪要求引领客人...
        </p>
      </div>
    </div>

    <div class="demo-image__placeholder">
      <div class="block">
        <el-image src="#" />
        <p class="demonstration">前台(示范）</p>
        <p class="recruitment-text">
          负责日常来访客人的接待，按公司礼仪要求引领客人...
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecruitmentItem",
};
</script>

<style scoped>
.recruitment-item >>> .demo-image__placeholder {
  width: 12.5rem;
  margin: 0.625rem;
  display: inline-block;
}

.recruitment-item >>> .el-image {
  background-color: #fff;
  width: 12.5rem;
  height: 12.5rem;
}

.recruitment-item >>> .demonstration {
  margin: 1.1875rem 1.25rem 0 0.625rem;
  text-align: left;
  color: #fff;
  font-size: 1.125rem;
  font-weight: bold;
}

.recruitment-item >>> .recruitment-text {
  text-align: left;
  margin: 1.1875rem 0.875rem 0 0.625rem;
  color: #fff;
  font-size: 0.875rem;
}

.recruitment-item {
  margin-top: 3.3125rem;
}
</style>
