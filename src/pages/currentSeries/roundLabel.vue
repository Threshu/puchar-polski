<template>
  <div class="d-flex jcc text-center font-bold text-white font-big">Rounda {{ number }}</div>
</template>

<script>
export default {
  props: {
    number: {
      type: Number
    }
  }
}
</script>
