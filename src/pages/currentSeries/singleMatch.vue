<template>
  <div class="single-match px-2 py-2">
    <single-player :player="match.whitePlayer" :title="match.whiteTitle"/>
    <single-match-score :match="match"/>
    <single-player :player="match.blackPlayer" :title="match.blackTitle"/>
  </div>
</template>

<script>
import singlePlayer from "./singlePlayer.vue";
import singleMatchScore from "./singleMatchScore.vue";
export default {
  components: {
    singlePlayer,
    singleMatchScore,
  },
  props: {
    match: {
      type: Object,
      default: () => {
        number: 0
      }
    }
  },
}
</script>

<style lang="scss">
.single-match {
  .q-field__control {
    background-color: white;
  }
}
</style>
