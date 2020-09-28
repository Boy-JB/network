<template>
  <div class="solution-item">
    <el-row>
      <el-card :body-style="{ padding: '0px' }">
        <img class="image1" :src="require('../../../assets/imgs/web/img_框.png')" />
        <div style="padding: 14px; margin-top: 16px">
          <span class="title">全网H5响应式 自适应</span>
          <p class="content">
            企业建站的终极解决方案。 <br />
            精简代码、追求速度，覆盖全网终端。 <br />
            全方位营销，无论客户是在使用电脑进行搜索，PAD浏览资讯，亦或是在刷朋友圈，您的企业门户都具备推送信息与触达能力。
          </p>
        </div>
      </el-card>

      <el-card :body-style="{ padding: '0px' }">
        <img
          class="image1"
          :src="require('../../../assets/imgs/web/img_框.png')"
        />
        <div style="padding: 14px; margin-top: 16px">
          <span class="title">移动微门户</span>
          <p class="content">
            通过整合移动端多种营销方式，<br />
            让企业在移动互联网得到更多的展示与传播，获取更多商机。帮助企业覆盖更多的移动营销场景，快速吸引眼球，并有效互动。
          </p>
        </div>
      </el-card>

      <el-card :body-style="{ padding: '0px' }">
        <img
          class="image1"
          :src="require('../../../assets/imgs/web/img_框.png')"
        />
        <div style="padding: 14px; margin-top: 16px">
          <span class="title">行业门户型</span>
          <p class="content">
            行业门户网站或平台近来发展迅速，网站针对性地为业内人士
            提供行业内及行业相关信息服务，强化业内信息的分类,充分体现本行业特色。<br />
            利用网站的平台和各项资源为成员企业开展多种增值服务并从中获利。
          </p>
        </div>
      </el-card>

      <el-card :body-style="{ padding: '0px' }">
        <img
          class="image1"
          :src="require('../../../assets/imgs/web/img_框.png')"
        />
        <div style="padding: 14px; margin-top: 16px">
          <span class="title">电子商城型</span>
          <p class="content">
            专业量身定制开发，定制设计、定制功能。使企业借助互联网的力量，建立部署自己的网络交易平台。<br />
            无论是B2B、B2C类型，均可通过INTERNET的交易管理和销售平台，给企业带来了无限商机。
          </p>
        </div>
      </el-card>

      <el-card :body-style="{ padding: '0px' }">
        <img
          class="image1"
          :src="require('../../../assets/imgs/web/img_框.png')"
        />
        <div style="padding: 14px; margin-top: 16px">
          <span class="title">品牌展示型（含H5）</span>
          <p class="content">
            着重展示企业文化和品牌特色，强调创意设计与文化的结合，能通过视觉感官的冲击，令目标受众对品牌产生深刻而美好的印象。<br />
            使品牌形象走向新时代。
          </p>
        </div>
      </el-card>

      <el-card :body-style="{ padding: '0px' }">
        <img
          class="image1"
          :src="require('../../../assets/imgs/web/img_框.png')"
        />
        <div style="padding: 14px; margin-top: 16px">
          <span class="title">企业宣传型</span>
          <p class="content">
           致力于提升企业形象，介绍公司业务， 获得用户关注。<br />
           使企业把站点作为信息化宣传的第一步，在互联网上展示企业形象和主营业务，吸引浏览者关注其站点，从而达到促进销售、提升企业价值的作用。
          </p>
        </div>
      </el-card>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "SolutionItem",
};
</script>

<style scoped>
.solution-item >>> .bottom {
  margin-top: 13px;
  line-height: 12px;
}

.solution-item >>> .image1 {
  /* width: 80px;
  height: 80px; */
  display: inline-block;
  /* margin-top: 40px; */
}

.solution-item >>> .clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.solution-item >>> .clearfix:after {
  clear: both;
}

.solution-item >>> .el-col-offset-5 {
  margin-left: 0;
  /* margin-top: 220px; */
}
.solution-item >>> .el-card.is-always-shadow,
.el-card.is-hover-shadow:focus,
.el-card.is-hover-shadow:hover {
  width: 300px;
  height: 420px;
  display: inline-block;
}

.solution-item >>> .el-row {
  margin: 0 400px 80px 400px;
  /* display: inline-block; */
}

.solution-item >>> .el-card {
  margin: 20px;
  border-radius: 20px;
}

.solution-item >>> .title {
  font-family: "MicrosoftYaHei-Bold";
  font-size: 16px;
  font-weight: 900;
  color: #000000;
  margin-top: 30px;
}

.solution-item >>> .text {
  font-family: "MicrosoftYaHei";
  font-size: 14px;
  color: #000000;
  font-weight: 400;
  margin-top: 15px;
}

.solution-item >>> .content {
  font-family: "MicrosoftYaHei";
  font-size: 14px;
  color: #aaaaaa;
  margin-top: 9px;
  line-height: 30px;
}
</style>
