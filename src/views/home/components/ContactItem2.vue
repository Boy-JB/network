<template>
  <div class="contact-item2">
    <div class="demo-image__placeholder">
      <p class="free">免费咨询热线<span class="time">（8：30-5：30）</span></p>
      <div class="block">
        <el-image
          :src="require('assets/imgs/home/ic_咨询热线.png')"
          class="advisory"
        ></el-image>
        <span class="demonstration">1234-56789000</span>
      </div>
    </div>
    <contact-icon />
    <contact-qr />
  </div>
</template>

<script>
import ContactIcon from "./ContactIcon";
import ContactQr from "./ContactQr"

export default {
  name: "ContactItem2",
  components: {
    ContactIcon,
    ContactQr
  },
};
</script>

<style scoped>
.contact-item2 {
  display: inline-block;
  text-align: right;
  color: #fff;
}

.contact-item2 >>> .time {
  font-weight: bold;
}

.contact-item2 >>> .img {
  width: 3.125rem;
  height: 3.75rem;
  display: inline-block;
}

.contact-item2 >>> .el-image.advisory {
  width: 3.125rem;
  height: 3.75rem;
  border: dashed 0.0625rem;
}

.contact-item2 >>> .demonstration {
  font-size: 2rem;
}

.contact-item2 >>> .icon {
  width: 1.875rem;
  height: 1.875rem;
}
</style>
