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
  width: 200px;
  margin: 10px;
  display: inline-block;
}

.recruitment-item >>> .el-image {
  background-color: #fff;
  width: 200px;
  height: 200px;
}

.recruitment-item >>> .demonstration {
  margin: 19px 20px 0 10px;
  text-align: left;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
}

.recruitment-item >>> .recruitment-text {
  text-align: left;
  margin: 19px 14px 0 10px;
  color: #fff;
  font-size: 14px;
}

.recruitment-item {
  margin-top: 53px;
}
</style>
