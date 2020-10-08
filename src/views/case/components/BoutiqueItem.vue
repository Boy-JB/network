<template>
  <div class="boutique-item">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="全部案例" name="1">
        <img :src="item.url" alt="" v-for="(item, index) in carouselData" :key="index">
      </el-tab-pane>
      <el-tab-pane label="全网响应式" name="2">
        <img :src="item.url" alt="" v-for="(item, index) in carouselData" :key="index">
      </el-tab-pane>
      <el-tab-pane label="移动微门户" name="3">
        <img :src="item.url" alt="" v-for="(item, index) in carouselData" :key="index">
      </el-tab-pane>
      <el-tab-pane label="行业门户型" name="4">
        <img :src="item.url" alt="" v-for="(item, index) in carouselData" :key="index">
      </el-tab-pane>
      <el-tab-pane label="品牌展示型" name="5">
        <img :src="item.url" alt="" v-for="(item, index) in carouselData" :key="index">
      </el-tab-pane>
      <el-tab-pane label="企业宣传型" name="6">
        <img :src="item.url" alt="" v-for="(item, index) in carouselData" :key="index">
      </el-tab-pane>
      <el-tab-pane label="电子商城型" name="7">
        <img :src="item.url" alt="" v-for="(item, index) in carouselData" :key="index">
      </el-tab-pane>
      <el-tab-pane label="移动APP" name="8">
        <img :src="item.url" alt="" v-for="(item, index) in carouselData" :key="index">
      </el-tab-pane>
      <el-tab-pane label="系统软件类" name="9">
        <img :src="item.url" alt="" v-for="(item, index) in carouselData" :key="index">
      </el-tab-pane>
    </el-tabs>

    <!-- <div
      class="demo-image__placeholder"
     
    >
      <div class="block" >
        <el-image :src="boutique"></el-image>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "OperatingItem",
  data() {
    return {
      activeName: "1",
      carouselData:[
      {url:require('../../../assets/imgs/home/img_案例.png'),title:'你看我叼吗1',id:1},
      {url:require('../../../assets/imgs/home/img_案例.png'),title:'你看我叼吗1',id:1},
      {url:require('../../../assets/imgs/home/img_案例.png'),title:'你看我叼吗1',id:1},
      {url:require('../../../assets/imgs/home/img_案例.png'),title:'你看我叼吗1',id:1},
      {url:require('../../../assets/imgs/home/img_案例.png'),title:'你看我叼吗1',id:1},
      {url:require('../../../assets/imgs/home/img_案例.png'),title:'你看我叼吗1',id:1},
      {url:require('../../../assets/imgs/home/img_案例.png'),title:'你看我叼吗1',id:1},
      {url:require('../../../assets/imgs/home/img_案例.png'),title:'你看我叼吗1',id:1},
      {url:require('../../../assets/imgs/home/img_案例.png'),title:'你看我叼吗1',id:1},
      {url:require('../../../assets/imgs/home/img_案例.png'),title:'你看我叼吗1',id:1},
      {url:require('../../../assets/imgs/home/img_案例.png'),title:'你看我叼吗1',id:1},
      {url:require('../../../assets/imgs/home/img_案例.png'),title:'你看我叼吗1',id:1},
      {url:require('../../../assets/imgs/home/img_案例.png'),title:'你看我叼吗1',id:1},
      {url:require('../../../assets/imgs/home/img_案例.png'),title:'你看我叼吗1',id:1},
      {url:require('../../../assets/imgs/home/img_案例.png'),title:'你看我叼吗1',id:1},
      ]
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style scoped>
.boutique-item >>> .bottom {
  margin-top: 0.8125rem;
  line-height: 0.75rem;
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
  /* margin-top: 13.75rem; */
}
.boutique-item >>> .el-card.is-always-shadow,
.el-card.is-hover-shadow:focus,
.el-card.is-hover-shadow:hover {
  width: 18.75rem;
  height: 26.25rem;
  display: inline-block;
}

.boutique-item >>> .el-row {
  margin: 0 25rem 5rem 25rem;
  /* display: inline-block; */
}

.boutique-item >>> .el-card {
  margin: 1.25rem;
  border-radius: 1.25rem;
}

.boutique-item >>> .title {
  font-family: "MicrosoftYaHei-Bold";
  font-size: 1rem;
  font-weight: 900;
  color: #000000;
  margin-top: 0.5rem;
}

.boutique-item >>> .text {
  font-family: "MicrosoftYaHei";
  font-size: 0.875rem;
  color: #000000;
  font-weight: 400;
  margin-top: 0.9375rem;
}

.boutique-item >>> .content {
  font-family: "MicrosoftYaHei";
  font-size: 0.875rem;
  color: #aaaaaa;
  margin: 0.5625rem;
  line-height: 1.875rem;
}

.boutique-item >>> .el-button--primary {
  background: #2030f5;
  border: #2030f5;
}

.boutique-item >>> .time {
  font-size: 0.8125rem;
  color: #999;
}

.boutique-item >>> .bottom {
  margin-top: 0.8125rem;
  line-height: 0.75rem;
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
  height: 6.25rem;
  position: relative;
}

.boutique-item >>> .el-button.el-button--primary.is-round {
  position: absolute;
  top: 0.3125rem;
  left: 3.125rem;
  right: 3.125rem;
  margin: 0.3125rem auto;
}

.boutique-item >>> .demo-image__placeholder {
  display: inline-block;
  width: 31.25rem;
}

.boutique-item >>> .el-menu {
  display: inline-block;
  background-color: transparent;
}

.boutique-item >>> .el-menu--horizontal > .el-menu-item {
  color: #000000;
}

.boutique-item >>> .el-menu--horizontal > .el-menu-item.is-active {
  border-bottom-color: rgba(210, 210, 210, 1);
}

.boutique-item >>> .el-menu.el-menu--horizontal {
  border-bottom-color: transparent;
}

.boutique-item >>> .el-menu-item:hover {
  color: #000 !important;
  background-color: transparent;
}

.boutique-item >>> .el-menu-item:not(.is-disabled):focus {
  color: #000 !important;
}

.boutique-item >>> .el-tabs.el-tabs--top {
  /* display: inline-block; */
  margin: 0 auto;
}

.boutique-item >>> .el-tabs__item.is-active {
  color: #000;
}

.boutique-item >>> .el-tabs__item:hover {
  color: #000;
}

.boutique-item >>> .el-tabs__active-bar {
  background-color: rgba(209, 209, 209, 1);
  height: 4px;
  border-radius: 2px;
}

.boutique-item >>> .el-tabs__nav-wrap::after {
  background-color: transparent;
}

.boutique-item >>> .el-tabs__nav {
  float: none;
}

.boutique-item >>> .el-tabs__nav-scroll {
  display: inline-block;
}

.boutique-item >>> .el-tabs__nav-wrap.is-top {
  margin: 72px 0 59px 0;
}
</style>
