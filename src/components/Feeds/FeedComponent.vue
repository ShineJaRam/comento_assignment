<template>
  <div class="feedContainer">
    <div class="filterContainer">
      <ul>
        <li>오름차순</li>
        <li>내림차순</li>
      </ul>
      <button>필터</button>
    </div>
    <FeedCard />
    <AddCard />
  </div>
</template>

<script>
import FeedCard from "./FeedCard";
import AddCard from "./AddCard";

export default {
  name: "feed-component",
  components: { FeedCard, AddCard },
};
</script>

<style lang="sass">
@import "../../styles/FeedComponent.scss"
</style>