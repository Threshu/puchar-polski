<template>
  <div class="content-height bg-primary-alfa d-flex">
    <div class="flex-40 d-flex">
      <div class="d-flex flex-direction-column">
        <template v-for="match in matches" :key="match.number">
          <div class="col">
            <single-match :match="match"/>
          </div>
        </template>
      </div>
      <div class=""></div>
      <div class=""></div>
      <div class=""></div>
    </div>
    <div class="flex-60">

    </div>
    <!--<q-input filled v-model="text" hint="Readonly" dense readonly />-->
  </div>
</template>

<script>
import singleMatch from "./singleMatch.vue";
export default {
  name: "currentSeries",
  components: {
    singleMatch
  },
  data(){
    return {
      matches: [
        {
          number: 1
        },
        {
          number: 2
        },
        {
          number: 3
        },
        {
          number: 4
        },
        {
          number: 5
        },
        {
          number: 6
        },
        {
          number: 7
        },
        {
          number: 8
        }

      ]
    }
  }

}
</script>
