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
  font-size: 2.25rem;
  font-family: Microsoft YaHei;
  font-weight: bold;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  z-index: 99;
  position: relative;
  margin-top: 3.125rem;
}

.field >>> .field-bg {
  font-size: 4.375rem;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(32, 47, 245, 0.04);
  position: absolute;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin: 0;
  top: 1.25rem;
  left: 38.125rem;
}

.field >>> .field-icon {
  background-color: rgba(209, 209, 209, 1);
  width: 2.5rem;
  height: 0.25rem;
  border-radius: 0.125rem;
  margin: 0 auto;
}

.field >>> .little-field {
  margin-top: 2.25rem;
  font-size: 0.75rem;
}
</style>
