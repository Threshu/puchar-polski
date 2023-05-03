<template>
  <div class="d-flex">
    <q-badge label="Wynik" vertical color="primary" class="score-label pa-0" />
    <single-game :game="total_score"/>
  </div>
</template>

<script>
import singleGame from "./singleGame.vue";
export default {
  components: {
    singleGame
  },
  props: {
    games: {
      type: Array,
      default: () => []
    },
  },
  computed: {
    total_score(){
      return this.games.reduce((scores, game) => {
        scores.whiteScore += game.whiteScore;
        scores.blackScore += game.blackScore;
        return scores;
      }, { whiteScore: 0, blackScore: 0 });
    }
  }
}
</script>

<style lang="scss">
.score-label {
  transform: rotate(-90deg);
  font-weight: bold;
}
</style>
