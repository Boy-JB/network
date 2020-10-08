<template>
  <div class="do-item">
    <el-row>
    <el-card :body-style="{ padding: '0rem' }">
      <img class="image1" :src="require('assets/imgs/app/ic_微信定制开发.png')" />
      <div style="padding: 0.875rem;">
        <span class="title">微信定制开发</span>
        <p class="content">
          企业移动端营销窗口开启 <br />
          移动营销新模式
        </p>
      </div>
    </el-card>

    <el-card :body-style="{ padding: '0rem' }">
      <img class="image1" :src="require('assets/imgs/app/ic_微信小程序.png')" />
      <div style="padding: 0.875rem;">
        <span class="title">微信小程序</span>
        <p class="content">
          顺凯科技微信小程序 <br />
          的创新引领者
        </p>
      </div>
    </el-card>

    <el-card :body-style="{ padding: '0rem' }">
      <img class="image1" :src="require('assets/imgs/app/ic_APP定制开发.png')" />
      <div style="padding: 0.875rem;">
        <span class="title">APP定制开发</span>
        <p class="content">
          基于IOS/AnDROID应用开发 <br />
          掌握移动端命脉
        </p>
      </div>
    </el-card>

    <el-card :body-style="{ padding: '0rem' }">
      <img class="image1" :src="require('assets/imgs/app/ic_营销推广.png')" />
      <div style="padding: 0.875rem;">
        <span class="title">APP营销推广</span>
        <p class="content">
          提供一站式服务让营销 <br />
          推广变简单
        </p>
      </div>
    </el-card>

    <el-card :body-style="{ padding: '0rem' }">
      <img
        class="image1"
        :src="require('assets/imgs/app/ic_APP微信托管.png')"
      />
      <div style="padding: 0.875rem;">
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
  margin-top: 0.8125rem;
  line-height: 0.75rem;
}

.do-item >>> .image1 {
  width: 5rem;
  height: 5rem;
  display: inline-block;
  border: dashed 0.0625rem #000;
  margin-top: 2.5rem;
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
  /* margin-top: 13.75rem; */
}
.do-item >>> .el-card.is-always-shadow,
.el-card.is-hover-shadow:focus,
.el-card.is-hover-shadow:hover {
  width: 18.75rem;
  height: 18.75rem;
  display: inline-block;
}

.do-item >>> .el-row {
  margin: 0 25rem 5rem 25rem;
  /* display: inline-block; */
}

.do-item >>> .el-card {
  margin: 1.25rem;
  border-radius: 1.25rem;
}

.do-item >>> .title {
  font-family: "MicrosoftYaHei-Bold";
  font-size: 1rem;
  font-weight: 900;
  color: #000000;
  margin-top: 0.5rem;
}

.do-item >>> .text {
  font-family: "MicrosoftYaHei";
  font-size: 0.875rem;
  color: #000000;
  font-weight: 400;
  margin-top: 0.9375rem;
}

.do-item >>> .content {
  font-family: 'MicrosoftYaHei';
  font-size: 0.875rem;
  color: #AAAAAA;
  margin-top: 2.5rem;
  line-height: 1.875rem;
}
</style>
