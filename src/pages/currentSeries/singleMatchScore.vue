<template>
  <div class="single-match-score py-2">
    <div class="match-number">{{ match.number }}.</div>
    <template v-for="(game, index) in match.games" :key="index" >
      <single-game :game="game"/>
    </template>
    <total-match-score :games="match.games"/>
  </div>
</template>

<script>
import singleGame from "./singleGame.vue";
import totalMatchScore from "./totalMatchScore.vue";
export default {
  components: {
    singleGame,
    totalMatchScore
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
.single-match-score {
  display: flex;
  .match-number {
    width: 100%;
    padding-right: 15px;
    text-align: end;
    color: #FABE56;
    font-size: 1.9em;
    font-weight: bold;
  }

  .single-score {
    background-color: white;
    width: 25px;
    font-weight: bold;
    height: 20px;
  }

  .single-score-top {
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
  }

  .score-spacer {
    height: 1px;
    background-color: black;
  }

  .single-score-bottom {
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
  }
}
</style>
