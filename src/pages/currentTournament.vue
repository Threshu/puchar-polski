<template>
  <div class="content-height overflow-hidden jcc aic d-flex">
    <q-circular-progress
      v-show="loader"
      show-value
      indeterminate
      size="150px"
      :thickness="0.2"
      color="primary"
      center-color="#363636"
      track-color="transparent"
      class="q-ma-md"
    >
      <q-icon size="xl" color="white" name="mdi-chess-king" />
    </q-circular-progress>
    <iframe v-show="!loader" src="https://www.chessmanager.com/pl/tournaments" width="100%" height="100%" class="border-0"></iframe>
  </div>
</template>

<script>
export default {
  name: "currentTournament",
  data() {
    return {
      loader: false
    };
  },
  mounted(){
    this.loader = true
    setTimeout(() => {
      this.loader = false
    }, 1500);
  }
};
</script>
