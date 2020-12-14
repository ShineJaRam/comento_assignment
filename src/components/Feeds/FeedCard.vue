<template>
  <div class="cardContainer">
    <div class="contentsIdContainer">
      <span class="categotyName">{{
        this.$store.state.FeedCard.categoty_name
      }}</span>
      <span class="contentsId">{{
        this.$store.state.FeedCard.contents_id
      }}</span>
    </div>
    <div>
      <div class="userInfo">
        <span class="userId">{{ this.$store.state.FeedCard.user_id }}</span>
        <span class="createdAt">{{
          this.$store.state.FeedCard.create_at
        }}</span>
      </div>
      <div class="mainContents">
        <h3>{{ this.$store.state.FeedCard.title }}</h3>
        <span class="detailContents">{{
          this.$store.state.FeedCard.contents
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass">
@import "../../styles/FeedCard.scss"
</style>