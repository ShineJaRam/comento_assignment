<template>
  <div class="container">
    <button class="loginButton">로그인</button>
    <FeedComponent />
  </div>
</template>

<script>
import FeedComponent from "./FeedComponent.vue";

export default {
  name: "feeds-component",
  components: { FeedComponent },
};
</script>

<style lang="scss">
@import "../../styles/AppFeeds.scss";
</style>