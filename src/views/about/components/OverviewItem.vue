<template>
  <div class="overview-item">
    <div class="img">
      <img src="../../../assets/imgs/about/img_公司概况.png" alt="" />
    </div>
    <div class="text">
      <p class="company">
        <span style="font-weight: bold; font-size: 20px; "
          >顺凯科技有限公司</span
        >致力于为企事业提供有价值的产品服务，以需求为导向，不虚假宣传、不过度营销。坚持为客户提供有价值服务。公司由多名从业经验丰富的技术精英组建。
      </p>
      <p>
        公司提倡以人为中心的管理思想，实行人性化的管理方案。让员工喜欢工作、享受工作。
        让客户得到专业用心的服务。
      </p>

      <div class="icon"></div>
      <p class="title">美工设计人员</p>
      <p class="contant">用创新能力和前瞻性，为客户带来一场空前的视觉盛宴。</p>
      <div class="icon"></div>
      <p class="title">软件程序开发工程师</p>
      <p class="contant">
        通过缜密的需求捕捉、分析、设计，来实现客户的天马行空。
      </p>
      <div class="icon"></div>
      <p class="title">网络安全高级工程师</p>
      <p class="contant">网络安全，重于泰山。我们为您的征途保驾护航。</p>
      <div class="icon"></div>
      <p class="title">网络营销人员</p>
      <p class="contant">建立品牌能力，最大化实现企业在互联网中的价值。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "OverviewItem",
};
</script>

<style scoped>
.overview-item {
  /* align-items: flex-start; */
  margin-top: 160px;
}

.overview-item >>> .img {
  display: inline-block;
}

.overview-item >>> .text {
  display: inline-block;
  width: 640px;
  text-align: left;
  margin-left: 40px;
  vertical-align: top;
}

.overview-item >>> .title, .contant {
  margin: 0;
  line-height: 21px;
  font-family: "MicrosoftYaHei";
}

.overview-item >>> .icon {
  width: 20px;
  height: 4px;
  background: #d1d1d1;
  border-radius: 2px;
  margin: 22px 0 20px 0;
}

.overview-item >>> .title {
  font-size: 16px;
  font-weight: 400;
  color: #000000;
}

.overview-item >>> .contant {
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #a9a9a9;
  line-height: 21px;
  margin-top: 10px;
}

.overview-item >>> .company {
  margin-top: 0;
}
</style>
