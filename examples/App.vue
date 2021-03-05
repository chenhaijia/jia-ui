<template>
  <div id="app">
    组件1
    <router-view />
  </div>
</template>
<script>
  import Vue from "vue";
  export default Vue.extend({
    name: "app",
    created() { },
  });
</script>

<style lang="scss">
</style>
