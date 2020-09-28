<template>
  <div class="contact">
    <contact-item class="contact-item" />
    <contact-item2 class="contact-item2" />
    <contact-line class="contact-line" />
    <div class="company">{{company}}</div>
  </div>
</template>

<script>
import ContactItem from "./ContactItem";
import ContactItem2 from "./ContactItem2";
import ContactLine from "./ContactLine";


export default {
  name: "Contact",
  components: {
    ContactItem,
    ContactItem2,
    ContactLine,
    
  },
  data() {
    return {
      company: '©顺凯科技版权所有 浙ICP备XXXXXXX号'
    }
  },
}
</script>

<style scoped>
.contact {
  position: relative;;
}

.contact >>> .contact-item {
  position: absolute;
  left: 360px;
  top: 80px;
}

.contact >>> .contact-item2 {
  position: absolute;
  left: 1400px;
  top: 131px;
}

.contact >>> .contact-line {
  position: absolute;
  left: 360px;
  top: 730px;
}

.contact >>> .company {
  position: absolute;
  left: 360px;
  color: #fff;
  top: 750px;
  font-size: 14px;
}
</style>