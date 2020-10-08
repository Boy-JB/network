<template>
  <div class="operating-item">
    <el-row>
      <el-card :body-style="{ padding: '0rem' }">
        <img
          class="image1"
          :src="require('assets/imgs/system/img_虚拟局域网.png')"
        />
        <div style="padding: 0.875rem;">
          <span class="title">虚拟局域网SD-WAN企业组网</span>
          <p class="content">
            SD-WAN解决方案通过SDN技术，帮助用户降低广域网(WAN)成本并提高其连接灵活性，能够极大降低运维成...
          </p>
        </div>
        <div class="bottom clearfix">
          <el-button type="primary" round>主要按钮</el-button>
        </div>
      </el-card>

      <el-card :body-style="{ padding: '0rem' }">
        <img
          class="image1"
          :src="require('assets/imgs/system/img_视频会议软件系统.png')"
        />
        <div style="padding: 0.875rem;">
          <span class="title">视频会议软件系统</span>
          <p class="content">
            企事业单位视频会议、远程培训、即时通讯与协同办公。网络多媒体远程授课，适用网络教育学院、广播...
          </p>
        </div>
        <div class="bottom clearfix">
          <el-button type="primary" round>主要按钮</el-button>
        </div>
      </el-card>

      <el-card :body-style="{ padding: '0rem' }">
        <img
          class="image1"
          :src="require('assets/imgs/system/img_企业内部文件共享系统.png')"
        />
        <div style="padding: 0.875rem;">
          <span class="title">企业内部文件共享系统</span>
          <p class="content">
            企业内部文件共享系统-文件归档查询调阅共享系统由本公司自主研发，包含常用office文件、rar文件、...
          </p>
        </div>
        <div class="bottom clearfix">
          <el-button type="primary" round>主要按钮</el-button>
        </div>
      </el-card>

      <el-card :body-style="{ padding: '0rem' }">
        <img
          class="image1"
          :src="require('assets/imgs/system/img_VASS数据中心.png')"
        />
        <div style="padding: 0.875rem;">
          <span class="title">VASS数据中心母线槽配电系统</span>
          <p class="content">
            专业的母线排/母线槽配电系统生产制造商。提供大功率(800A-7000A交流电和12100A直流电)的母...
          </p>
        </div>
        <div class="bottom clearfix">
          <el-button type="primary" round>主要按钮</el-button>
        </div>
      </el-card>

      <el-card :body-style="{ padding: '0rem' }">
        <img
          class="image1"
          :src="require('assets/imgs/system/img_数据修复.png')"
        />
        <div style="padding: 0.875rem; height: 8.0625rem">
          <span class="title">数据修复、数据恢复</span>
          <p class="content">
            软件故障恢复 RAID故障恢复 硬件故障恢复 开盘数据恢复...
          </p>
        </div>
        <div class="bottom clearfix">
          <el-button type="primary" round>主要按钮</el-button>
        </div>
      </el-card>

      <el-card :body-style="{ padding: '0rem' }">
        <img
          class="image1"
          :src="require('assets/imgs/system/img_企业官网APP软件空间.png')"
        />
        <div style="padding: 0.875rem;">
          <span class="title">企业网站APP软件空间</span>
          <p class="content">
            阿里云主机服务LIUNX系统平台；高安全性稳定性；阿里云快速备案；IIS、Apache性能不限；空间、流量...
          </p>
        </div>
        <div class="bottom clearfix">
          <el-button type="primary" round>主要按钮</el-button>
        </div>
      </el-card>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "OperatingItem",
};
</script>

<style scoped>
.operating-item >>> .bottom {
  margin-top: 0.8125rem;
  line-height: 0.75rem;
}

.operating-item >>> .image1 {
  display: inline-block;
}

.operating-item >>> .clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.operating-item >>> .clearfix:after {
  clear: both;
}

.operating-item >>> .el-col-offset-5 {
  margin-left: 0;
  /* margin-top: 13.75rem; */
}
.operating-item >>> .el-card.is-always-shadow,
.el-card.is-hover-shadow:focus,
.el-card.is-hover-shadow:hover {
  width: 18.75rem;
  height: 26.25rem;
  display: inline-block;
}

.operating-item >>> .el-row {
  margin: 0 25rem 5rem 25rem;
  /* display: inline-block; */
}

.operating-item >>> .el-card {
  margin: 1.25rem;
  border-radius: 1.25rem;
}

.operating-item >>> .title {
  font-family: "MicrosoftYaHei-Bold";
  font-size: 1rem;
  font-weight: 900;
  color: #000000;
  margin-top: 0.5rem;
}

.operating-item >>> .text {
  font-family: "MicrosoftYaHei";
  font-size: 0.875rem;
  color: #000000;
  font-weight: 400;
  margin-top: 0.9375rem;
}

.operating-item >>> .content {
  font-family: "MicrosoftYaHei";
  font-size: 0.875rem;
  color: #aaaaaa;
  margin: 0.5625rem;
  line-height: 1.875rem;
}

.operating-item >>> .el-button--primary {
  background: #2030f5;
  border: #2030f5;
}

.operating-item >>> .time {
  font-size: 0.8125rem;
  color: #999;
}

.operating-item >>> .bottom {
  margin-top: 0.8125rem;
  line-height: 0.75rem;
}

.operating-item >>> .button {
  padding: 0;
  float: right;
}

.operating-item >>> .image {
  width: 100%;
  display: block;
}

.operating-item >>> .clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.operating-item >>> .clearfix:after {
  clear: both;
}

.operating-item >>> .bottom.clearfix {
  height: 6.25rem;
  position: relative;
}

.operating-item >>> .el-button.el-button--primary.is-round {
  position: absolute;
  top: 0.3125rem;
  left: 3.125rem;
  right: 3.125rem;
  margin: 0.3125rem auto;
}
</style>
