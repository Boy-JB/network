<template>
  <div class="service-item">
    <el-row>
    <el-card :body-style="{ padding: '0px' }">
      <img class="image1" :src="require('assets/imgs/home/ic_APP定制.png')" />
      <div style="padding: 14px;">
        <span class="title">APP定制</span>
        <p class="text">专业、高效、放心的APP定制服务</p>
        <p class="content">
          移动互联网下的APP定制服务<br />
          H5的前端设计制作<br />
          采用net/php/java平台架构<br />
          高速稳定的云空间域名<br />
          安卓、ios等多平台客户端<br />
          免费上架移动应用商城
        </p>
      </div>
    </el-card>

    <el-card :body-style="{ padding: '0px' }">
      <img class="image1" :src="require('assets/imgs/home/ic_网站开发.png')" />
      <div style="padding: 14px;">
        <span class="title">网站开发</span>
        <p class="text">提供各类网站特色定制建设服务</p>
        <p class="content">
          采用net/php/java技术平台架构<br />
          资深UI设计i服务<br />
          标准化3C的代码<br />
          用户体验和搜索引擎优化<br />
          高速稳定的云空间域名搭配<br />
          资深工程师保障安全性
        </p>
      </div>
    </el-card>

    <el-card :body-style="{ padding: '0px' }">
      <img class="image1" :src="require('assets/imgs/home/ic_软件开发.png')" />
      <div style="padding: 14px;">
        <span class="title">软件开发</span>
        <p class="text">专业、高度定制的软件开发</p>
        <p class="content">
          主流B/S架构的应用系统界面<br />
          结合移动互联网技术应用<br />
          同步支持PC、手机、PAD等<br />
          各类终端移动办公<br />
          跨应用系统联动数据交换<br />
          24小时售后技术支持
        </p>
      </div>
    </el-card>

    <el-card :body-style="{ padding: '0px' }">
      <img class="image1" :src="require('assets/imgs/home/ic_企业云邮.png')" />
      <div style="padding: 14px;">
        <span class="title">企业云邮</span>
        <p class="text">为各行业提供专业文档可靠的企业邮局</p>
        <p class="content">
          亿级邮件系统架构<br />
          实时海外转发，安全可靠<br />
          高稳定性、超大容量<br />
          高校的反垃圾、反病毒监控<br />
          全球线路，全程加密<br />
          微信多端，专业服务
        </p>
      </div>
    </el-card>

    <el-card :body-style="{ padding: '0px' }">
      <img
        class="image1"
        :src="require('assets/imgs/home/ic_网站、APP专用空间.png')"
      />
      <div style="padding: 14px;">
        <span class="title">网站、APP、软件专用空间</span>
        <p class="text">高安全性、高稳定性的虚拟主机</p>
        <p class="content">
          windows/linux系统空间选择<br />
          阿里云快速备案<br />
          IIS、Apache性能不限<br />
          流量不限、数据定期备份<br />
          满足各类应用需求支持<br />
          优质的售后服务
        </p>
      </div>
    </el-card>
  </el-row>
  </div>
</template>

<script>
export default {
  name: "ServiceItem",
};
</script>

<style scoped>
.service-item >>> .bottom {
  margin-top: 13px;
  line-height: 12px;
}

.service-item >>> .image1 {
  width: 80px;
  height: 80px;
  display: inline-block;
  margin-top: 40px;
}

.service-item >>> .clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.service-item >>> .clearfix:after {
  clear: both;
}

.service-item >>> .el-col-offset-5 {
  margin-left: 0;
  /* margin-top: 220px; */
}
.service-item >>> .el-card.is-always-shadow,
.el-card.is-hover-shadow:focus,
.el-card.is-hover-shadow:hover {
  width: 300px;
  height: 420px;
  display: inline-block;
}

.service-item >>> .el-row {
  margin: 0 400px 80px 400px;
  /* display: inline-block; */
}

.service-item >>> .el-card {
  margin: 20px;
  border-radius: 20px;
}

.service-item >>> .title {
  font-family: "MicrosoftYaHei-Bold";
  font-size: 16px;
  font-weight: 900;
  color: #000000;
  margin-top: 8px;
}

.service-item >>> .text {
  font-family: "MicrosoftYaHei";
  font-size: 14px;
  color: #000000;
  font-weight: 400;
  margin-top: 15px;
}

.service-item >>> .content {
  font-family: 'MicrosoftYaHei';
  font-size: 14px;
  color: #AAAAAA;
  margin-top: 9px;
  line-height: 30px;
}
</style>
