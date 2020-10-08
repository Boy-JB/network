<template>
  <div class="video">
     <div class="video-all">
      <p class="video-title">视频会议软件系统</p>
      <div class="video-icon"></div>
      <p class="little-video">企事业单位视频会议、远程培训、即时通讯与协同办公。网络多媒体远程授课，适用网络教育学院、<br />广播电视大学、中小学远程教育、社会培训业、远程软件培训、证券咨询等应用。</p>
    </div>
    <video-item />
  </div>
</template>

<script>
import MobileItem from "./MobileItem";

export default {
  name: "Mobile",
  components: {
    MobileItem,
  },
};
</script>

<style scoped>
.video >>> .video-all {
  text-align: center;
  color: #000000;
}

.video >>> .video-title {
  font-size: 2.25rem;
  font-family: Microsoft YaHei;
  font-weight: bold;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  z-index: 99;
  position: relative;
  margin-top: 3.125rem;
}

.video >>> .video-bg {
  font-size: 4.375rem;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(32, 47, 245, 0.04);
  position: absolute;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin: 0;
  top: 1.25rem;
  left: 48.125rem;
}

.video >>> .video-icon {
  background-color: rgba(209, 209, 209, 1);
  width: 2.5rem;
  height: 0.25rem;
  border-radius: 0.125rem;
  margin: 0 auto;
}

.video >>> .little-video {
  margin-top: 2.25rem;
  font-size: 1rem;
  color: rgba(170, 170, 170, 1);
  width: 45%;
  height: 5.5%;
  display: inline-block;
  text-align: center;
}

.video >>> .el-button {
  margin-top: 2.5rem;
  background-color: rgba(32, 48, 245, 1);
  border-color: rgba(32, 48, 245, 1);
}
</style>