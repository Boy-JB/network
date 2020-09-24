<template>
  <el-row>
      <el-card :body-style="{ padding: '0px' }">
        <img
          class="image1"
          :src="require('assets/imgs/home/ic_APP定制.png')"
        />
        <div style="padding: 14px;">
          <span>好吃的汉堡</span>
        </div>
      </el-card>

      <el-card :body-style="{ padding: '0px' }">
        <img
          class="image1"
          :src="require('assets/imgs/home/ic_网站开发.png')"
        />
        <div style="padding: 14px;">
          <span>好吃的汉堡</span>
        </div>
      </el-card>

      <el-card :body-style="{ padding: '0px' }">
        <img
          class="image1"
          :src="require('assets/imgs/home/ic_软件开发.png')"
        />
        <div style="padding: 14px;">
          <span>好吃的汉堡</span>
        </div>
      </el-card>

      <el-card :body-style="{ padding: '0px' }">
        <img
          class="image1"
          :src="require('assets/imgs/home/ic_企业云邮.png')"
        />
        <div style="padding: 14px;">
          <span>好吃的汉堡</span>
        </div>
      </el-card>

      <el-card :body-style="{ padding: '0px' }">
        <img
          class="image1"
          :src="require('assets/imgs/home/ic_网站、APP专用空间.png')"
        />
        <div style="padding: 14px;">
          <span>好吃的汉堡</span>
        </div>
      </el-card>
  </el-row>
</template>

<script>
export default {
  name: "ServiceItem",
};
</script>

<style>  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .image1 {
    width: 80px;
    height: 80px;
    display: inline-block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }

  .el-col-offset-5 {
    margin-left: 0;
    margin-top: 220px;
  }
.el-card.is-always-shadow, .el-card.is-hover-shadow:focus, .el-card.is-hover-shadow:hover {
  width: 300px;
  height: 420px;
  display: inline-block;  
}

.el-row {
  margin-top: 220px;
  display: inline-block;
}

.el-card {
  margin: 40px;
}


</style>
