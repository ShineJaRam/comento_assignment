<template>
  <div class="addContainer">
    <span class="sponsored">sponsored</span>
    <div class="addContentsContainer">
      <img :src="this.$store.state.AddCard.img" alt="광고 이미지 입니다." />
      <div class="mainAdd">
        <h3 class="addTitle">
          {{ this.$store.state.AddCard.title }}
        </h3>
        <div class="addContents">
          {{ this.$store.state.AddCard.contents }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass">
@import "../../styles/AddCard.scss"
</style>