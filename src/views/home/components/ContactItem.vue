<template>
  <div class="contact-item">
    <div class="all">
      <img src="~assets/imgs/home/ic_顺凯科技.png" alt="" class="logo" />

      <div class="contant">
        <p class="title">服务</p>
        <p class="text">{{ message1 }}</p>
        <img src="~assets/imgs/home/img_公司信息装饰.png" alt="" class="img" />
      </div>

      <div class="contant">
        <p class="title">服务</p>
        <p class="text">{{ message2 }}</p>
        <img src="~assets/imgs/home/img_公司信息装饰.png" alt="" class="img" />
      </div>

      <div class="contant">
        <p class="title">服务</p>
        <p class="text">{{ message3 }}</p>
        <img src="~assets/imgs/home/img_公司信息装饰.png" alt="" class="img" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactItem",
  data() {
    return {
      message1:
        "网站开发　　APP定制　　软件开发　　虚拟局域网SD-WAN企业网　　视频会议软件系统　　企业内部文件共享系统　　VASS数据中心母线槽配电系统　　数据修复、数据恢复　　企业网站APP软件空间解决方案　　解决方案　　企业云邮、企业邮箱",
      message2:
        "全网响应式　　移动微门户　　行业门户型　　品牌展示型　　企业宣传型　　电子商城型　　移动APP　　系统&软件类",
      message3: "公司概况　　我们的优势　　合作伙伴　　联系我们　　公司动态",
    };
  },
};
</script>

<style scoped>
.contact-item >>> .title,
.text {
  color: #fff;
}

.contact-item >>> .title {
  font-size: 1rem;
  font-weight: bold;
  margin-top: 0;
}

.contact-item >>> .text {
  font-size: 0.875rem;
  line-height: 2.25rem;
  text-align: left;
  margin-bottom: 0.6875rem;
  margin-top: 0;
}

.contact-item >>> .all {
  width: 36.9375rem;
  height: 7.75rem;
  text-align: left;
}

.contact-item >>> .img {
  float: right;
}

.contact-item >>> .contant {
  margin-top: 1.5625rem;
  display: inline-block;
  width: 36.9375rem;
}

.contact-item >>> .logo {
  margin-bottom: 1.9375rem;
}
</style>
