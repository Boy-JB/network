<template>
  <div class="portal-item">
    <div class="demo-image__placeholder">
      <div class="block">
        <el-image :src="require('assets/imgs/home/img_关于我们01.png')" />
        <p class="demonstration">
          <span class="title">行业门户型网站或平台建设的定义：</span>
          <br />
          <span class="content">为业内人士提供行业内及行业相关信息服务。 行业门户网站或平台近来发展迅速，网站针对性地为业内人士提供行业内及行业相关信息服务，强化业内信息的分类，充分体现本行业特色。网站定位于行业的动态信息、产品信息、市场信息、技术发展信息、平台交互信息，树立业内信息权威形象，为客户提供需要的信息和网上交流的空间。</span>
          <br />
          <br />
          <br />
          <span class="title">此类网站的定位为：</span>
          <br />
          <span class="content">成为本行业（或某个地域）内处于领先地位的门户网站。 成为本行业信息资源，人力资源，商业资源的发布和控制者。利用网站的平台和各项资源为成员企业开展多种增值服务并从中获利。</span>
        </p>
        
      </div>
    </div>

    <div class="final">
      <p class="final-title">行业门户网站商业价值分析</p> 
      <p class="final-text">● 广告服务：汇聚了本行业的“眼球”，对于以本行业为目标市场的商家来说，在本站上有针对性的投放广告价值针对性强，时效性强。常见的广告。 <br />
        ● 方式有：链接广告，排名服务。   <br />
        ● 信息服务：为注册会员提供信息投递，订阅，商机搜索等信息。 <br />
       ● 商务服务：为注册商家提供商务助手服务，实现信息发布、商机处理等功能。 <br />
        ● 商业智能：在汇集大量信息的基础上分析本行业的商业规律，向行业内的企业有偿提供。</p>
      <p class="final-title">网站的基本功能模块</p> 
      <p class="final-text">产品库、信息库、企业库、会员展示模板、会员控制平台、综合检索系统（信息检索和产品检索）、热门排行、供求信息发布系统、评论系统、广告管理系统、短信服务、流量统计系统、权限管理系统。</p>
      <p class="final-title">网站的技术实现</p> 
      <p class="final-text">硬件设施：选用机架式服务器，配置磁盘阵列、高带宽符合Web服务器的要求，托管于IDC数据中心。 软件架构：网站采用自主版权的“CMS”核心框架技术，该框架符合PHP技术规范。 数据库采用MYSQL系列数据库,MYSQL数据库代码的开源性很少涉及版权问题，例如国内的大型网站百度、腾讯、新浪、淘宝的内容管理部分均采用PHP。</p>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "BrandItem",
  
};
</script>

<style scoped>
.portal-item >>> .el-image {
  width: 25rem;
  height: 27.5rem;
  display: inline-block;
  position: absolute;
  top: 3.3125rem;
  left: 30.8125rem;

}

.portal-item >>> .el-button--primary {
  background-color: rgba(32, 47, 245, 1);
  border-color: rgba(32, 47, 245, 1);
}
.portal-item >>> .demonstration {
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

.portal-item >>> .demonstration strong {
  color: rgba(0, 0, 0, 1);
  font-size: 1.125rem;
}

.portal-item {
  position: relative;
}


.portal-item >>> .title {
color: #000;
line-height: 1.875rem;
font-size: 1rem;
margin-top: 1.875rem;
}

.portal-item >>> .content {
  color: rgba(170, 170, 170, 1);
  line-height: 1.875rem;
  font-size: 1rem;
}

.portal-item >>> .final {
  text-align: center;
  width: 54.125rem;
  height: 25.375rem;
  display: inline-block;
  margin-top: 32.5rem;
}

.portal-item >>> .final-title, .final-text {
  text-align: left;
  font-size: 1rem;
}

.portal-item >>> .final-title {
  color: rgba(0, 0, 0, 1);
}

.portal-item >>> .final-text {
  color: rgba(170, 170, 170, 1);
  line-height: 1.875rem;
}
</style>
