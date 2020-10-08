<template>
  <div class="shop-item">
    <div class="demo-image__placeholder">
      <div class="block">
        <el-image :src="require('assets/imgs/home/img_关于我们01.png')" />
        <p class="demonstration">
          <span class="title">很多企业已经开始借助互联网的力量，建立部署自己的网络交易平台。无论是B2B、B2C类型，均期望通过INTERNET的交易管理和销售平台，给企业带来了无限商机。 电子商务型网站建设的实现具备如下战略意义：</span>
          <br />
          <span class="content">实现网络交易和业务，以最短的供应链、最快的反应速度、最低的成本和个性化产品来提高客户满意度，改善销售状况，开辟新的销售渠道。</span>
          <br />
              <span class="title">实现多点信息互动，利用网络覆盖能力，连接各分支机构，建立全国乃至全球范围内的信息交互、资源共享网络。 建立完整的交易体系，围绕产品、定货、运输、交付等各个业务环节，进行有效管理。发生交易，直接实现产品利润。 以完整的仓储物流作为支撑，灵活、简单、易管理的仓储和物流系统，可以帮助企业有效的组织货源，调节产品时间差，保证市场需求，减少资金占用。 加强客户关系的管理，通过电子商务过程，收集客户基本信息，并对业务流程信息进行分析，完善服务体系并加强客户关系。</span>
          <br />
          <span class="content"></span>
        </p>
        
      </div>
    </div>

    <div class="final">
      <p class="final-title">电子商务购物网站上的解决方案：</p> 
      <p class="final-text">1．功能性解决方案<br />
         对整套电子商务购物网站系统，包含权限管理、商品管理、在线商品库管理、排行榜管理、商品推荐管理、商品导购管理（检索）、会员管理、订单管理、支付管理、 配送管理、广告管理、留言管理、帐务管理、即时通讯管理、数据统计分析以及其它相关的业务辅助系统个子系统进行全面介绍。并针对客户个性化的要求，对系统 功能做出说明。<br />
          2．网站系统开发需求 <br />
          ● 采取会员制，只有有效的会员才可网上购物，保证交易的成功率；<br /> 
          ● 强大的查询功能，快捷的找到感兴趣的商品； <br />
          ● 会员购物流程：浏览、将商品放入购物车、去收银台； <br />
          ● 每个会员有自己专用的购物车，可随时来选择其中的商品结帐； <br />
          ● 完善的会员服务功能，可随时查看帐务明细、订单明细； <br />
          ● 会员购物排行榜，以购买量评出几名最佳消费会员； <br />
          ● 商品销售排行榜，以销售量来评出几个最热销的商品； <br />
          ● 管理员在后台可方便的管理、查看订单，管理员可根据实际处理状态修改订单的当前状态，便于会员查看； <br />
          ● 管理员可轻松发布、删除、修改商品信息； <br />
          ● 安全的在线支付体系，使会员能安全便捷地网上支付，例如网银支付、支付宝支付； <br />
          ● 产品配送功能、ups国际快递、ems快递。 <br />
          3．网站前台设计 <br />
          对网站前台结构与关键页面进行描述。包含整个网站的前台结构分析，灵活的页面结构及针对电子商务网站需要所需的定制化管理页面。 <br />
         </p>
     
    </div>
    
  </div>
</template>

<script>
export default {
  name: "ShopItem",
  
};
</script>

<style scoped>
.shop-item >>> .el-image {
  width: 25rem;
  height: 27.5rem;
  display: inline-block;
  position: absolute;
  top: 3.3125rem;
  left: 30.8125rem;

}

.shop-item >>> .el-button--primary {
  background-color: rgba(32, 47, 245, 1);
  border-color: rgba(32, 47, 245, 1);
}
.shop-item >>> .demonstration {
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

.shop-item >>> .demonstration strong {
  color: rgba(0, 0, 0, 1);
  font-size: 1.125rem;
}

.shop-item {
  position: relative;
}


.shop-item >>> .title {
color: #000;
line-height: 1.875rem;
font-size: 1rem;
margin-top: 1.875rem;
}

.shop-item >>> .content {
  color: rgba(170, 170, 170, 1);
  line-height: 1.875rem;
  font-size: 1rem;
}

.shop-item >>> .final {
  text-align: center;
  width: 54.125rem;
  height: 25.375rem;
  display: inline-block;
  margin-top: 34.375rem;
}

.shop-item >>> .final-title, .final-text {
  text-align: left;
  font-size: 1rem;
}

.shop-item >>> .final-title {
  color: rgba(0, 0, 0, 1);
}

.shop-item >>> .final-text {
  color: rgba(170, 170, 170, 1);
  line-height: 1.875rem;
}
</style>
