<template>
  <div id="app">
    <router-view> </router-view>
    <!-- <home /> -->

    <!-- <router-view /> -->
  </div>
</template>

<script>
import Home from "views/home/Home";

export default {
  name: "App",
  components: {
    Home,
  },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
</style>
