<template>
  <q-input class="single-player" readonly rounded outlined dense :label="player">
    <template v-slot:prepend>
      <div class="title-label" :style="{backgroundColor: title_bg}">
        {{ title }}
      </div>
    </template>
  </q-input>
</template>

<script>
import * as TITLES from "../../chessData";
export default {
  props: {
    player: {
      type: String,
      default: ""
    },
    title: {
      type: String
    }
  },
  computed: {
    title_bg(){
      return TITLES.TITLES_BG[this.title];
    },
  }
}
</script>

<style lang="scss">
.single-player {
  .q-field__control:before {
    border: 2px solid black !important;
  }

  .q-field__label {
    font-size: 1.6em;
    font-weight: bold;
    color: black;
  }
}
</style>
