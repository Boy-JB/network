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
  width: 43.125rem;
  height: 22.5rem;
  background: #ffffff;
  border-radius: 1.25rem;
  margin-top: 3.3125rem;
}

.contactus-item >>> .box p {
  text-align: left;
  font-family: "Microsoft YaHei";
  font-size: 1rem;
  font-weight: 400;
  color: #000;
  margin: 0 0 0 3.3125rem;
  line-height: 2.25rem;

}

.contactus-item >>> .top {
  padding-top: 2.2%;
}
</style>
