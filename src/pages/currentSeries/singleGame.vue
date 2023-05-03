<template>
  <div class="d-flex flex-direction-column px-2">
    <div class="single-score single-score-top text-center">
      {{ game.whiteScore }}
    </div>
    <div>
      <div class="score-spacer px-2"/>
    </div>
    <div class="single-score single-score-bottom text-center">
      {{ game.blackScore }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    game: {
      type: Object
    }
  }
}
</script>

<style>

</style>
