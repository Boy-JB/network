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
  left: 22.5rem;
  top: 5rem;
}

.contact >>> .contact-item2 {
  position: absolute;
  left: 87.5rem;
  top: 8.1875rem;
}

.contact >>> .contact-line {
  position: absolute;
  left: 22.5rem;
  top: 45.625rem;
}

.contact >>> .company {
  position: absolute;
  left: 22.5rem;
  color: #fff;
  top: 46.875rem;
  font-size: 0.875rem;
}
</style>