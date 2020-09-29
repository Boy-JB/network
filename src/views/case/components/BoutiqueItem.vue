<template>
  <div class="boutique-item">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-menu-item index="2">处理中心 </el-menu-item>
      <el-menu-item index="3">消息中心</el-menu-item>
      <el-menu-item index="4">订单管理</el-menu-item>
    </el-menu>

    <div
      class="demo-image__placeholder"
     
    >
      <div class="block" >
        <el-image :src="boutique"></el-image>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OperatingItem",
  data() {
    return {
      boutique: {
        page1: [
          { url: require("assets/imgs/home/img_案例.png") },
          { url: require("assets/imgs/home/img_案例.png") },
          { url: require("assets/imgs/home/img_案例.png") },
          { url: require("assets/imgs/home/img_案例.png") },
          { url: require("assets/imgs/home/img_案例.png") },
          { url: require("assets/imgs/home/img_案例.png") },
          { url: require("assets/imgs/home/img_案例.png") },
          { url: require("assets/imgs/home/img_案例.png") },
          { url: require("assets/imgs/home/img_案例.png") },
          { url: require("assets/imgs/home/img_案例.png") },
          { url: require("assets/imgs/home/img_案例.png") },
          { url: require("assets/imgs/home/img_案例.png") },
          { url: require("assets/imgs/home/img_案例.png") },
          { url: require("assets/imgs/home/img_案例.png") },
          { url: require("assets/imgs/home/img_案例.png") },
        ],
        page2: [
          { url: require("assets/imgs/home/img_案例.png") },
          { url: require("assets/imgs/home/img_案例.png") },
          { url: require("assets/imgs/home/img_案例.png") },
          { url: require("assets/imgs/home/img_案例.png") },
          { url: require("assets/imgs/home/img_案例.png") },
          { url: require("assets/imgs/home/img_案例.png") },
          { url: require("assets/imgs/home/img_案例.png") },
          { url: require("assets/imgs/home/img_案例.png") },
          { url: require("assets/imgs/home/img_案例.png") },
          { url: require("assets/imgs/home/img_案例.png") },
          { url: require("assets/imgs/home/img_案例.png") },
          { url: require("assets/imgs/home/img_案例.png") },
          { url: require("assets/imgs/home/img_案例.png") },
          { url: require("assets/imgs/home/img_案例.png") },
          { url: require("assets/imgs/home/img_案例.png") },
        ]
      },
      activeIndex: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      console.log(this.boutique.page1);
    },
  },
};
</script>

<style scoped>
.boutique-item >>> .bottom {
  margin-top: 13px;
  line-height: 12px;
}

.boutique-item >>> .image1 {
  display: inline-block;
}

.boutique-item >>> .clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.boutique-item >>> .clearfix:after {
  clear: both;
}

.boutique-item >>> .el-col-offset-5 {
  margin-left: 0;
  /* margin-top: 220px; */
}
.boutique-item >>> .el-card.is-always-shadow,
.el-card.is-hover-shadow:focus,
.el-card.is-hover-shadow:hover {
  width: 300px;
  height: 420px;
  display: inline-block;
}

.boutique-item >>> .el-row {
  margin: 0 400px 80px 400px;
  /* display: inline-block; */
}

.boutique-item >>> .el-card {
  margin: 20px;
  border-radius: 20px;
}

.boutique-item >>> .title {
  font-family: "MicrosoftYaHei-Bold";
  font-size: 16px;
  font-weight: 900;
  color: #000000;
  margin-top: 8px;
}

.boutique-item >>> .text {
  font-family: "MicrosoftYaHei";
  font-size: 14px;
  color: #000000;
  font-weight: 400;
  margin-top: 15px;
}

.boutique-item >>> .content {
  font-family: "MicrosoftYaHei";
  font-size: 14px;
  color: #aaaaaa;
  margin: 9px;
  line-height: 30px;
}

.boutique-item >>> .el-button--primary {
  background: #2030f5;
  border: #2030f5;
}

.boutique-item >>> .time {
  font-size: 13px;
  color: #999;
}

.boutique-item >>> .bottom {
  margin-top: 13px;
  line-height: 12px;
}

.boutique-item >>> .button {
  padding: 0;
  float: right;
}

.boutique-item >>> .image {
  width: 100%;
  display: block;
}

.boutique-item >>> .clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.boutique-item >>> .clearfix:after {
  clear: both;
}

.boutique-item >>> .bottom.clearfix {
  height: 100px;
  position: relative;
}

.boutique-item >>> .el-button.el-button--primary.is-round {
  position: absolute;
  top: 5px;
  left: 50px;
  right: 50px;
  margin: 5px auto;
}

.boutique-item >>> .demo-image__placeholder {
  display: inline-block;
  width: 500px;
}
</style>
