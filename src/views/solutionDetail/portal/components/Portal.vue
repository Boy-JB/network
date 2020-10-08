<template>
  <div class="portal">
     <div class="portal-all">
      <p class="portal-title">行业门户型</p>
      <div class="portal-icon"></div>
      <p class="little-portal">行业门户网站或平台近来发展迅速，网站针对性地为业内人士 提供行业内及行业相关信息服务，<br /> 强化业内信息的分类，充分体现本行业特色。利用网站的平台和各项资源为成员企业开展多种增值服务并从中获利。</p>
    </div>
    <portal-item />
    <el-button type="primary" round>立刻获取定制方案</el-button>
  </div>
</template>

<script>
import PortalItem from "./PortalItem";

export default {
  name: "Portal",
  components: {
    PortalItem,
  },
};
</script>

<style scoped>
.portal >>> .portal-all {
  text-align: center;
  color: #000000;
}

.portal >>> .portal-title {
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

.portal >>> .portal-bg {
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

.portal >>> .portal-icon {
  background-color: rgba(209, 209, 209, 1);
  width: 2.5rem;
  height: 0.25rem;
  border-radius: 0.125rem;
  margin: 0 auto;
}

.portal >>> .little-portal {
  margin-top: 2.25rem;
  font-size: 1rem;
  color: rgba(170, 170, 170, 1);
}

.portal >>> .el-button {
  margin-top: 3.125rem;
  background-color: rgba(32, 48, 245, 1);
  border-color: rgba(32, 48, 245, 1);
}
</style>