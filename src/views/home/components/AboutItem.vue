<template>
  <div class="about-item">
    <div class="demo-image__placeholder">
      <div class="block">
        <el-image :src="require('../../../assets/imgs/home/img_关于我们01.png')" />
        <el-image class="low-img" :src="require('../../../assets/imgs/home/img_关于我们01.png')" />
        <p class="demonstration"><strong>顺凯科技</strong>致力于为企事业提供有价值的产品服务， 以需求为导向，不虚假宣传、不过度营销。 坚持为客户提供有价值服务。 <br /><br /><br />
        公司由多年从事软件程序开发工程师、高端美工设计人员、网络安全高级工程师、网络营销的多名技术精英组建。 公司提倡以人为中心的管理思想，实行人性化的管理方案。 <br /><br />
        让员工喜欢工作、享受工作。让客户得到专业用心的服务。</p>
        <el-button type="primary" round>了解更多</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  naem: "AboutItem",
  data() {
    return {
      src:
        "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
    };
  },
};
</script>

<style scoped>
.about-item >>> .el-image {
  width: 400px;
  height: 440px;
  display: inline-block;
  position: absolute;
  top: 53px;
  left: 493px;

}

.about-item >>> .el-button--primary {
  background-color: rgba(32, 47, 245, 1);
  border-color: rgba(32, 47, 245, 1);
}
.about-item >>> .demonstration {
  display: inline-block;
  width: 528px;
  height: 213px;
  color: rgba(170, 170, 170, 1);
  font-size: 16px;
  position: absolute;
  top: 53px;
  left: 933px;
  margin: 0;
  line-height: 22px;
  text-align: left;
}

.about-item >>> .demonstration strong {
  color: rgba(0, 0, 0, 1);
  font-size: 18px;
}

.about-item {
  position: relative;
}

.about-item >>> .el-button {
  position: absolute;
  top: 19.0625rem;
  left: 58.3125rem;
}
</style>
