<template>
  <div class="detail-item">
    <el-tabs
      :tab-position="tabPosition"
      style="margin-bottom: 30px; height: 90%"
    >
      <el-tab-pane label="后台研发人员">
        <div class="title">后台研发人员</div>
        <div class="text">工作职责</div>
        <div class="content">
          <ol>
            <li>
              负责微信公众平台所需要的接口和数据管理，api数据接口开发工作；
            </li>
            <li>
              负责公司微信公众服务号的接口设计、开发、数据管理、日常维护和官方网站后台维护管理工作；
            </li>
            <li>能独立完成针对微信公众号及官方网站的各类型项目开发设计；</li>
          </ol>
        </div>
        <div class="text">岗位要求</div>
        <div class="content">
          <ol>
            <li>本科以上学历，计算机或相关专业；三年以上相关工作经验；</li>
            <li>
              具有Web开发经验，掌握HTML（DIV+CSS）、Html5、JavaScript/AJAX、
              Jquery等技术；能熟练使用一种开发语言完成Web或后台服务程序的开发；
            </li>
            <li>
              熟悉 linux
              系统及开发环境，熟悉关系型数据库、MySql、MongoDB、Redis；
            </li>
            <li>熟悉 C/C++ / golang / java 等跨平台语言者优先考虑；</li>
            <li>
              具备多媒体文件网络传送、下载以及缓存架构设计经验；具备主流第三方服务(云服务，支付服务，社交接口等)对接调试经验者优先；
            </li>
            <li>
              有HTML5、微信公众号应用开发经验者优先；
              7、具有良好的沟通能力和团队合作能力，充满责任感；
            </li>
          </ol>
        </div>
      </el-tab-pane>
      <el-tab-pane label="web工程师">web工程师</el-tab-pane>
      <el-tab-pane label="算法工程师">算法工程师</el-tab-pane>
      <el-tab-pane label="软件工程师">软件工程师</el-tab-pane>
      <el-tab-pane label="三维建模师">三维建模师</el-tab-pane>
      <el-tab-pane label="ui设计">ui设计</el-tab-pane>
      <el-tab-pane label="网络营销人员">网络营销人员</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "DetailItem",
  data() {
    return {
      tabPosition: "left",
    };
  },
};
</script>

<style scoped>
.detail-item {
  width: 52%;
  height: 93%;
  background-color: #fff;
  display: inline-block;
  margin-top: 2.85%;
  border-radius: 10px;
  font-family: "Microsoft YaHei";
}

.detail-item >>> .el-tab-pane {
  text-align: left;
  font-family: "Microsoft YaHei";
}

.detail-item >>> .el-tabs__item {
  height: 100px;
  line-height: 100px;
  /* margin-top: 25px; */
}

.detail-item >>> .title,
.text {
  margin-left: 25px;
}

.detail-item >>> .title {
  font-size: 22px;
  color: #000;
  font-weight: bold;
  margin-top: 36px;
}

.detail-item >>> .text {
  font-size: 20px;
  color: #000;
  font-weight: 400;
  border-left: rgba(139, 147, 255, 1) 4px solid;
  line-height: 20px;
  margin-top: 40px;
  padding-left: 13px;
}

.detail-item >>> .content {
  font-size: 16px;
  color: #a9a9a9;
  font-weight: 400;
  line-height: 36px;
}

.detail-item >>> .el-tabs__item.is-active {
  color: #202ff5;
  font-size: 18px;
}

.detail-item >>> .el-tabs__active-bar.is-left {
  height: 50px !important;
  margin-top: 25px;
}

.detail-item >>> .el-tabs__active-bar {
  background-color: #1f2ff5;
}

.detail-item >>> .el-tabs__item:hover {
  color: #1f2ff5;
}

.detail-item >>> .el-tabs__item {
  color: #a9a9a9;
  font-weight: 400;
  font-size: 16px;
}
</style>
