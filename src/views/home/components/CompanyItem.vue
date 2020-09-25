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
      <el-card :body-style="{ padding: '0px' }">
        <img src="#" class="image" />
        <div style="padding: 0 28px 0 28px;">
          <span
            >换接口，对于英特尔用户而言，似乎已经习惯。十代酷睿更换为LGA1200接口，无法兼容老主板，对于已有整机、但只...</span
          >
        </div>
      </el-card>

      <el-card :body-style="{ padding: '0px' }">
        <img src="#" class="image" />
        <div style="padding: 0 28px 0 28px;">
          <span
            >换接口，对于英特尔用户而言，似乎已经习惯。十代酷睿更换为LGA1200接口，无法兼容老主板，对于已有整机、但只...</span
          >
        </div>
      </el-card>

      <el-card :body-style="{ padding: '0px' }">
        <img src="#" class="image" />
        <div style="padding: 0 28px 0 28px;">
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
  font-size: 13px;
  color: #999;
}

.company-item >>> .bottom {
  margin-top: 13px;
  line-height: 12px;
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
  width: 300px;
  height: 420px;
  display: inline-block;
  margin: 0 30px;
  border-radius: 20px;
  box-shadow: 0px 30px 30px 0px rgba(0, 0, 0, 0.03);
}

.company-item >>> .el-card span {
  color: rgba(170, 170, 170, 1);
  font-size: 14px;
}

.company-item >>> .el-row {
  margin-top: 53px;
}

.company-item {
  position: relative;
}

.company-item >>> .card1,
.card2,
.card3 {
  position: absolute;
  width: 320px;
  height: 49px;
  background-color: #fff;
  border-radius: 10px;
  line-height: 49px;
  text-align: center;
  color: #000;
  font-size: 16px;
}

.company-item >>> .text1,
.text2,
.text3 {
  margin: 0;
}

.company-item >>> .card1 {
  /* top: 43px; */
  left: 430px;
  z-index: 99;
}
.company-item >>> .card2 {
  /* top: 43px; */
  left: 793px;
  z-index: 99;
}
.company-item >>> .card3 {
  /* top: 43px; */
  left: 1155px;
  z-index: 99;
}
</style>
