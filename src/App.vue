<template>
  <div id="app">
    <AppHeader />
    <AppFeeds />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppFeeds from "./components/Feeds/AppFeeds.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFeeds,
  },
};
</script>

<style lang="scss">
@import "../public/reset.scss";
@import "../public/common.scss";
</style>
