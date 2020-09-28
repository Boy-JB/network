<template>
  <div class="field">
    <div class="field-all">
      <p class="field-title">应用领域</p>
      <p class="field-bg">APPLICATION FIELD</p>
      <div class="field-icon"></div>
      <p class="little-field">APPLICATION FIELDS</p>
    </div>
    <field-item />
  </div>
</template>

<script>
import FieldItem from "./FieldItem";

export default {
  name: "Field",
  components: {
    FieldItem,
  },
};
</script>

<style scoped>
.field >>> .field-all {
  text-align: center;
  color: #000000;
}

.field >>> .field-title {
  font-size: 36px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  z-index: 99;
  position: relative;
  margin-top: 50px;
}

.field >>> .field-bg {
  font-size: 70px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(32, 47, 245, 0.04);
  position: absolute;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin: 0;
  top: 20px;
  left: 610px;
}

.field >>> .field-icon {
  background-color: rgba(209, 209, 209, 1);
  width: 40px;
  height: 4px;
  border-radius: 2px;
  margin: 0 auto;
}

.field >>> .little-field {
  margin-top: 36px;
  font-size: 12px;
}
</style>
