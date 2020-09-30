<template>
  <div class="contactus-item">
    <div class="box">
      <p class="top">绍兴总部：</p>
      <p>24小时服务热线：XXXXXXXX</p>
      <p>24小时QQ：XXXXXXX</p>
      <p>公司地址：XXXXXXXXXXX</p>
      <p>北京分部</p>
      <p>服务热线：XXXXXXXXXX</p>
      <p>24小时手机：XXXXXXXXX</p>
      <p>QQ：XXXXXXXX</p>
      <p class="bottom">公司地址：XXXXXXXXXXXXXXXXX</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactusItem",
};
</script>

<style scoped>
.contactus-item >>> .box {
  display: inline-block;
  width: 690px;
  height: 360px;
  background: #ffffff;
  border-radius: 20px;
  margin-top: 53px;
}

.contactus-item >>> .box p {
  text-align: left;
  font-family: "Microsoft YaHei";
  font-size: 16px;
  font-weight: 400;
  color: #000;
  margin: 0 0 0 53px;
  line-height: 36px;

}

.contactus-item >>> .top {
  padding-top: 2.2%;
}
</style>
