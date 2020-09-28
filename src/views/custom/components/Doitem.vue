<template>
  <div class="do-item">
    <el-row>
    <el-card :body-style="{ padding: '0px' }">
      <img class="image1" :src="require('assets/imgs/app/ic_微信定制开发.png')" />
      <div style="padding: 14px;">
        <span class="title">微信定制开发</span>
        <p class="content">
          企业移动端营销窗口开启 <br />
          移动营销新模式
        </p>
      </div>
    </el-card>

    <el-card :body-style="{ padding: '0px' }">
      <img class="image1" :src="require('assets/imgs/app/ic_微信小程序.png')" />
      <div style="padding: 14px;">
        <span class="title">微信小程序</span>
        <p class="content">
          顺凯科技微信小程序 <br />
          的创新引领者
        </p>
      </div>
    </el-card>

    <el-card :body-style="{ padding: '0px' }">
      <img class="image1" :src="require('assets/imgs/app/ic_APP定制开发.png')" />
      <div style="padding: 14px;">
        <span class="title">APP定制开发</span>
        <p class="content">
          基于IOS/AnDROID应用开发 <br />
          掌握移动端命脉
        </p>
      </div>
    </el-card>

    <el-card :body-style="{ padding: '0px' }">
      <img class="image1" :src="require('assets/imgs/app/ic_营销推广.png')" />
      <div style="padding: 14px;">
        <span class="title">APP营销推广</span>
        <p class="content">
          提供一站式服务让营销 <br />
          推广变简单
        </p>
      </div>
    </el-card>

    <el-card :body-style="{ padding: '0px' }">
      <img
        class="image1"
        :src="require('assets/imgs/app/ic_APP微信托管.png')"
      />
      <div style="padding: 14px;">
        <span class="title">APP微信托管</span>
        <p class="content">
          我们不只提供研发 <br />
          我们也是运营专家
        </p>
      </div>
    </el-card>
  </el-row>
  </div>
</template>

<script>
export default {
  name: "DoItem",
};
</script>

<style scoped>
.do-item >>> .bottom {
  margin-top: 13px;
  line-height: 12px;
}

.do-item >>> .image1 {
  width: 80px;
  height: 80px;
  display: inline-block;
  border: dashed 1px #000;
  margin-top: 40px;
}

.do-item >>> .clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.do-item >>> .clearfix:after {
  clear: both;
}

.do-item >>> .el-col-offset-5 {
  margin-left: 0;
  /* margin-top: 220px; */
}
.do-item >>> .el-card.is-always-shadow,
.el-card.is-hover-shadow:focus,
.el-card.is-hover-shadow:hover {
  width: 300px;
  height: 300px;
  display: inline-block;
}

.do-item >>> .el-row {
  margin: 0 400px 80px 400px;
  /* display: inline-block; */
}

.do-item >>> .el-card {
  margin: 20px;
  border-radius: 20px;
}

.do-item >>> .title {
  font-family: "MicrosoftYaHei-Bold";
  font-size: 16px;
  font-weight: 900;
  color: #000000;
  margin-top: 8px;
}

.do-item >>> .text {
  font-family: "MicrosoftYaHei";
  font-size: 14px;
  color: #000000;
  font-weight: 400;
  margin-top: 15px;
}

.do-item >>> .content {
  font-family: 'MicrosoftYaHei';
  font-size: 14px;
  color: #AAAAAA;
  margin-top: 40px;
  line-height: 30px;
}
</style>
