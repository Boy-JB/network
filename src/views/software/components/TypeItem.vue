<template>
  <div class="type-item">
    <div class="type-top">
        <img
        class="img"
        src="../../../assets/imgs/software/img_全行业多领域开发.png"
        alt=""
      /> 
      <img
        class="img"
        src="../../../assets/imgs/software/img_OA协同办公系统.png"
        alt=""
      />
      <img
        class="img"
        src="../../../assets/imgs/software/img_RRP系统开发.png"
        alt=""
      />
    </div>

    <div class="type-bottom">
      <img
        class="img"
        src="../../../assets/imgs/software/img_直／分销系统.png"
        alt=""
      />
      <img
        class="img"
        src="../../../assets/imgs/software/imgZ_HIS医疗系统.png"
        alt=""
      />
      <img
        class="img"
        src="../../../assets/imgs/software/img_p2p借贷系统.png"
        alt=""
      />
      <img
        class="img"
        src="../../../assets/imgs/software/img_区块链系统.png"
        alt=""
      />
    </div>

    <div class="title1">
      <p class="title">涉及全行业多领域开发</p>
      <p class="contant">涵盖所有行业及领域，定制化服务，以满足每个用户需求为核心</p>
    </div>

    <div class="title2">
      <p class="title">OA协同办公系统</p>
      <p class="contant">根据成熟的模块为您的企业按需定制开发OA协同...</p>
    </div>

    <div class="title3">
      <p class="title">ERP系统开发</p>
      <p class="contant">以供应链管理为核心的ERP系统，优化现有业务...</p>
    </div>
    <div class="title4">
      <p class="title">直/分销系统</p>
      <p class="contant">系统基于云端架构，由平台统一进行商品的上下...</p>
    </div>
    <div class="title5">
      <p class="title">HIS医疗系统</p>
      <p class="contant">采用SaaS模式,有效解决诊所医疗信息化管理的...</p>
    </div>
    <div class="title6">
      <p class="title">P2P借贷系统</p>
      <p class="contant">最齐全，最成熟的P2P借贷系统，借款种类丰富...</p>
    </div>
    <div class="title7">
      <p class="title">区块链系统</p>
      <p class="contant">最齐全，最成熟的区块链系统</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FieldItem",
};
</script>

<style scoped>
.type-item >>> .img {
  margin: 0 0.25rem;
}

.type-item {
  position: relative;
}

.type-item >>> .type-top,
.type-bottom {
  position: absolute;
}

.type-item >>> .type-top {
  left: 36.875rem;
  top: 3.3125rem;
}

.type-item >>> .type-bottom {
  left: 29.1875rem;
  top: 16.5rem;
}

.type-item >>> .title1, .title2, .title3, .title4, .title5, .title6, .title7{
  color: #fff;
  font-size: 0.875rem;
  width: 14.375rem;
  margin: 0;
  font-weight: bold;
}


.type-item >>> .title1 {
  position: absolute;
  top: 13.125rem;
  left: 37.5rem;
}

.type-item >>> .title {
  margin-top: 0;
}

.type-item >>> .contant {
  font-size: 0.75rem;
  font-weight: normal;
  margin-top: 0;
}

.type-item >>> .title2 {
  position: absolute;
  top: 13.125rem;
  left:53.125rem;
}
.type-item >>> .title3 {
  position: absolute;
  top: 13.125rem;
  left: 68.4375rem;
}
.type-item >>> .title4 {
  position: absolute;
  top: 26.25rem;
  left: 29.6875rem;
}
.type-item >>> .title5 {
  position: absolute;
  top: 26.25rem;
  left: 45.3125rem;
}
.type-item >>> .title6 {
  position: absolute;
  top: 26.25rem;
  left: 60.625rem;
}
.type-item >>> .title7 {
  position: absolute;
  top: 26.25rem;
  left: 75.9375rem;
}
</style>
