<template>
  <div class="single-match px-2">
    <div class="d-flex jcc text-center font-bold text-white font-big">Rounda {{ match.number }}</div>
    <div>
      <q-input rounded outlined :label="match.player">
        <template v-slot:prepend>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg">
          </q-avatar>
        </template>
      </q-input>
    </div>
    <div>
      <div class="d-flex">
{{ match.number }}
      </div>
    </div>
    <div>
      <q-input rounded outlined :label="match.player">
        <template v-slot:prepend>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg">
          </q-avatar>
        </template>
      </q-input>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    match: {
      type: Object,
      default: () => {
        number: 0
      }
    }
  }
}
</script>

<style lang="scss">
.single-match {
  .q-field__control {
    background-color: white;
  }
}
</style>
