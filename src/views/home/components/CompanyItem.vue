<template>
  <div class="company-item">
    <div class="card1">
      <p class="text1">英特尔第十二代酷睿或使用LGA170...</p>
    </div>
    <div class="card2">
      <p class="text1">SSH客户端 登录时出现如下错误：Dis...</p>
    </div>
    <div class="card3">
      <p class="text1">英特尔第十二代酷睿或使用LGA1700接口</p>
    </div>
    <el-row>
      <el-card :body-style="{ padding: '0rem' }">
        <img src="#" class="image" />
        <div style="padding: 0 1.75rem 0 1.75rem;">
          <span
            >换接口，对于英特尔用户而言，似乎已经习惯。十代酷睿更换为LGA1200接口，无法兼容老主板，对于已有整机、但只...</span
          >
        </div>
      </el-card>

      <el-card :body-style="{ padding: '0rem' }">
        <img src="#" class="image" />
        <div style="padding: 0 1.75rem 0 1.75rem;">
          <span
            >换接口，对于英特尔用户而言，似乎已经习惯。十代酷睿更换为LGA1200接口，无法兼容老主板，对于已有整机、但只...</span
          >
        </div>
      </el-card>

      <el-card :body-style="{ padding: '0rem' }">
        <img src="#" class="image" />
        <div style="padding: 0 1.75rem 0 1.75rem;">
          <span
            >换接口，对于英特尔用户而言，似乎已经习惯。十代酷睿更换为LGA1200接口，无法兼容老主板，对于已有整机、但只...</span
          >
        </div>
      </el-card>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "CompanyItem",
};
</script>

<style scoped>
.company-item >>> .time {
  font-size: 0.8125rem;
  color: #999;
}

.company-item >>> .bottom {
  margin-top: 0.8125rem;
  line-height: 0.75rem;
}

.company-item >>> .button {
  padding: 0;
  float: right;
}

.company-item >>> .image {
  width: 100%;
  display: block;
}

.company-item >>> .clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.company-item >>> .clearfix:after {
  clear: both;
}

.company-item >>> .el-card {
  width: 18.75rem;
  height: 26.25rem;
  display: inline-block;
  margin: 0 1.875rem;
  border-radius: 1.25rem;
  box-shadow: 0rem 1.875rem 1.875rem 0rem rgba(0, 0, 0, 0.03);
}

.company-item >>> .el-card span {
  color: rgba(170, 170, 170, 1);
  font-size: 0.875rem;
}

.company-item >>> .el-row {
  margin-top: 3.3125rem;
}

.company-item {
  position: relative;
}

.company-item >>> .card1,
.card2,
.card3 {
  position: absolute;
  width: 20rem;
  height: 3.0625rem;
  background-color: #fff;
  border-radius: 0.625rem;
  line-height: 3.0625rem;
  text-align: center;
  color: #000;
  font-size: 1rem;
}

.company-item >>> .text1,
.text2,
.text3 {
  margin: 0;
}

.company-item >>> .card1 {
  /* top: 2.6875rem; */
  left: 26.875rem;
  z-index: 99;
}
.company-item >>> .card2 {
  /* top: 2.6875rem; */
  left: 49.5625rem;
  z-index: 99;
}
.company-item >>> .card3 {
  /* top: 2.6875rem; */
  left: 72.1875rem;
  z-index: 99;
}
</style>
