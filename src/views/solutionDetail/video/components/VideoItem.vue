<template>
  <div class="video-item">
    <div class="demo-image__placeholder">
      <div class="block">
        <el-image :src="require('assets/imgs/home/img_关于我们01.png')" />
        <p class="demonstration">
          <span class="title">多媒体通讯系统：</span>
          <br />
          <span class="content"
            >企事业单位视频会议、远程培训、即时通讯与协同办公
          </span>
          <span class="title">特点：</span>
          <br />
          <span class="content"
            >1.系统支持大规模部署、支持B/S无缝嵌入。 <br />
            2.系统具备成熟专业的视频会议和数据会议功能模块、丰富的即时通讯和协同办公工具。
            <br />
            3.支持3G终端接入，支持监控系统接入。 <br />
            4.低成本投入。
          </span>
          <br />
          <br />
          <span class="title">远程授课系统：</span>
          <br />
          <span class="content"
            >1.网络多媒体远程授课，适用网络教育学院、广播电视大学、中小学远程教育、社会培训业、远程软件培训、证券咨询等应用。
          </span>
          <span class="title">特点：</span>
          <br />
          <span class="content"
            >1.具备强大的虚拟教室功能、针对远程教课的数据交互功能。支持多媒体教育设备接入。
            <br />
            2.系统支持C/S（客户端）、B/S（WEB嵌入）两种客户端方式，可无缝嵌入在网站上，点击网页进入，亦可嵌入在教育管理系统、排课系统、网上授课系统中，由此扩展网上视频接待、教育互动社区等应用。<br />
            3.完善的后台管理。<br />
          </span>
        </p>
        <el-button type="primary" round>立刻获取定制方案</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MobileItem",
};
</script>

<style scoped>
.video-item >>> .el-image {
  width: 25rem;
  height: 27.5rem;
  display: inline-block;
  position: absolute;
  top: 3.3125rem;
  left: 30.8125rem;
}

.video-item >>> .el-button--primary {
  background-color: rgba(32, 47, 245, 1);
  border-color: rgba(32, 47, 245, 1);
}
.video-item >>> .demonstration {
  display: inline-block;
  width: 26.6875rem;
  height: 12.5rem;
  color: rgba(170, 170, 170, 1);
  font-size: 1rem;
  position: absolute;
  top: 3.75rem;
  left: 58.3125rem;
  margin: 0;
  line-height: 1.375rem;
  text-align: left;
}

.video-item >>> .demonstration strong {
  color: rgba(0, 0, 0, 1);
  font-size: 1.125rem;
}

.video-item {
  position: relative;
}

.video-item >>> .title {
  color: #000;
  line-height: 1.875rem;
  font-size: 1rem;
}

.video-item >>> .content {
  color: rgba(170, 170, 170, 1);
  line-height: 1.875rem;
  font-size: 1rem;
}

.video-item >>> .final {
  text-align: center;
  width: 54.125rem;
  height: 25.375rem;
  display: inline-block;
  margin-top: 36.25rem;
}

.video-item >>> .final-title,
.final-text {
  text-align: left;
  font-size: 1rem;
}

.video-item >>> .final-title {
  color: rgba(0, 0, 0, 1);
}

.video-item >>> .final-text {
  color: rgba(170, 170, 170, 1);
  line-height: 1.875rem;
}

.video-item >>> .el-button {
  position: absolute;
  top: 22.5rem;
  left: 58.3125rem;
}
</style>
