<template>
  <div class="promotion-item">
    <div class="demo-image__placeholder">
      <div class="block">
        <el-image :src="require('assets/imgs/home/img_关于我们01.png')" />
        <p class="demonstration">
          <span class="title">企业宣传型网站建设的定义：</span>
          <br />
          <span class="content">提升企业形象，介绍公司业务，通过网站获得用户反馈。 目前，很多企业把建设一个宣传型站点作为信息化宣传的第一步，在互联网上展示企业形象和主营业务，吸引浏览者关注其站点，从而达到促进销售、提升企业价值的作用。</span>
          <br />
          <span class="title">宣传型网站的特点：</span>
          <br />
          <span class="content">展示企业形象：根据企业的定位和目标客户的需求，用切合自身企业特点的方式来展示企业的形象。尚品中国中国拥有集美学、人机界面于一体的网站视觉形象识别体系。</span><br />
          <span class="content">产品和服务：展示自己的产品和服务是企业网站设计的基础，不同的产品类型和服务方式，需要用不同的表现形式来传达。功能实现包括解决方案、服务领域、产品展示、案例发布、产品资料下载、产品检索、广告发布系统等管理系统使得管理更为便利。</span>
        </p>
        
      </div>
    </div>

    <div class="final">
      <p class="final-title">企业宣传网站的解决方案：</p> 
      <p class="final-text">一 方面，企业站点是展示企业网站形象的一面镜子，能更好的宣传企业的理念和商业层次，所以在企业形象宣传上，往往是每个公司最重视的事情。在这一方面，尚品中国 中国利用多年的网站建设经验、高效的项目管理体系，已经成功完成多个客户的站点建设，达到甚至超越了客户预期的效果，形成了一套具有特色的网站视觉识别 系统，根据客户不同的行业，不同的客户类型和定位，尚品中国的设计师能给您企业一个适当的形象定位。 <br /><br />
      另外一方面，企业站点的建设离不开宣传自己的产品 和服务，在这一方面，尚品中国提倡不同的企业应该根据自身的特点，用最合适的展示方式和展示效果来体现自己的 特色，并且站点的架构必须合理，选择合理的程序模块来满足需要逐步更新的服务内容，把用户最关心的问题摆在最显眼的位置，并且不需要用户过多的点击就能让 他找到所需要的信息。 <br /><br />
      同时，企业通过网站与用户产生互动，获取用户的直接反馈是非常必要的，这也是企业站点必备的一个功能之一。与用户互动有很多种方式，需要根据不同的情况来分别对待。同时，有一个比较好的方式是通过调查文卷和会员服务的方式获取用户的信息。</p>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "PromotionItem",
  
};
</script>

<style scoped>
.promotion-item >>> .el-image {
  width: 25rem;
  height: 27.5rem;
  display: inline-block;
  position: absolute;
  top: 3.3125rem;
  left: 30.8125rem;

}

.promotion-item >>> .el-button--primary {
  background-color: rgba(32, 47, 245, 1);
  border-color: rgba(32, 47, 245, 1);
}
.promotion-item >>> .demonstration {
  display: inline-block;
  width: 26.6875rem;
  height: 31rem;
  color: rgba(170, 170, 170, 1);
  font-size: 1rem;
  position: absolute;
  top: 3.3125rem;
  left: 58.3125rem;
  margin: 0;
  line-height: 1.375rem;
  text-align: left;
}

.promotion-item >>> .demonstration strong {
  color: rgba(0, 0, 0, 1);
  font-size: 1.125rem;
}

.promotion-item {
  position: relative;
}


.promotion-item >>> .title {
color: #000;
line-height: 1.875rem;
font-size: 1rem;
}

.promotion-item >>> .content {
  color: rgba(170, 170, 170, 1);
  line-height: 1.875rem;
  font-size: 1rem;
}

.promotion-item >>> .final {
  text-align: center;
  width: 54.125rem;
  height: 25.375rem;
  display: inline-block;
  margin-top: 36.25rem;
}

.promotion-item >>> .final-title, .final-text {
  text-align: left;
  font-size: 1rem;
}

.promotion-item >>> .final-title {
  color: rgba(0, 0, 0, 1);
}

.promotion-item >>> .final-text {
  color: rgba(170, 170, 170, 1);
  line-height: 1.875rem;
}
</style>
