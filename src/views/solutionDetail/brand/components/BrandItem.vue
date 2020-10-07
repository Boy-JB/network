<template>
  <div class="brand-item">
    <div class="demo-image__placeholder">
      <div class="block">
        <el-image :src="require('assets/imgs/home/img_关于我们01.png')" />
        <p class="demonstration">
          <span class="title">品牌展示网站建设的特殊需求：</span>
          <br />
          <span class="content">作为提升品牌形象的网站，网站需要与公众媒体，投资合作者，应聘者，消费者和供应商等目标人群进行沟通。我们结合多年网站建设和维护经验，推出此解决方案，旨在帮助大型集团公司更好的展示企业文化和品牌特色，使品牌形象走向新时代。</span>
          <br />
          <span class="title">品牌展示站的作用：</span>
          <br />
          <span class="content">● 展示企业文化 <br />
            对于公司的主营业务及重点项目进行推介，增强投资者信心，赢得社会美誉度。展示产品和服务，与消费者进行沟通 <br />
            ● 形象展示平台： <br />
            传递企业的价值观与核心理念，社会责任和未来发展。展示企业品牌形象。 <br />
            ● 舆论宣传平台 <br />
            宣传企业及下属机构的出色业绩、公益投入、社会回馈等，塑造集团的可信赖的公众形象。</span>
        </p>
        
      </div>
    </div>

    <div class="final">
      <p class="final-title">针对品牌展示网站建设的服务范围：</p> 
      <p class="final-text">● 网站定位建议分析，包含网站策划布局和结构，所形成的一整套的解决方案； <br />
        ● 品牌展示网站的创意分析、创意入口动画设计、精美网站首页设计以及DIV前台结构综合布局； <br />
        ● 系统性的架构策略、程序模块功能分析、运营维护策略、培训及知识转移计划等； <br />
        ● 可延展性分析、可扩充性考虑以及系统稳定性分析报告； <br />
        ● 网站运营维护方案。根据集团管理模式，建议网站日常信息提供、审核、发布的一整套运营方案，协助集团高效管理网站； <br />
        ● 网站的营销推广计划，网站运维策略及网站价值分析、盈利情况分析等等；</p>
        <br />
      <p class="final-title">品牌展示网站的管理：</p> 
      <p class="final-text">管理系统为不同的管理人员分配不同的管理权限，权限的分配需要细化到栏目和功能，实现网站数据的安全。同时采用严格的信息审核制度， 保证网站不会出现对集团不利的信息。 <br />
        数据安全和日志记录 <br />
        同时拥有完善的数据备份和恢复模块，保障数据的安全。</p>
    </div>
    
  </div>
</template>

<script>
export default {
  naem: "BrandItem",
  
};
</script>

<style scoped>
.brand-item >>> .el-image {
  width: 400px;
  height: 440px;
  display: inline-block;
  position: absolute;
  top: 53px;
  left: 493px;

}

.brand-item >>> .el-button--primary {
  background-color: rgba(32, 47, 245, 1);
  border-color: rgba(32, 47, 245, 1);
}
.brand-item >>> .demonstration {
  display: inline-block;
  width: 427px;
  height: 496px;
  color: rgba(170, 170, 170, 1);
  font-size: 16px;
  position: absolute;
  top: 53px;
  left: 933px;
  margin: 0;
  line-height: 22px;
  text-align: left;
}

.brand-item >>> .demonstration strong {
  color: rgba(0, 0, 0, 1);
  font-size: 18px;
}

.brand-item {
  position: relative;
}


.brand-item >>> .title {
color: #000;
line-height: 30px;
font-size: 16px;
}

.brand-item >>> .content {
  color: rgba(170, 170, 170, 1);
  line-height: 30px;
  font-size: 16px;
}

.brand-item >>> .final {
  text-align: center;
  width: 866px;
  height: 406px;
  display: inline-block;
  margin-top: 580px;
}

.brand-item >>> .final-title, .final-text {
  text-align: left;
  font-size: 16px;
}

.brand-item >>> .final-title {
  color: rgba(0, 0, 0, 1);
}

.brand-item >>> .final-text {
  color: rgba(170, 170, 170, 1);
  line-height: 30px;
}
</style>
