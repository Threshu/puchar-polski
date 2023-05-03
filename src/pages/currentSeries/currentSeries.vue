<template>
  <div class="bg-primary-alfa d-flex flex-wrap">
    <div class="flex-40 d-flex">
      <div class="d-flex flex-direction-column">
        <div class="d-flex jcc text-center font-bold text-white font-big">Rounda 1</div>
        <template v-for="match in matches" :key="match.number">
          <div class="col">
            <single-match :match="match"/>
          </div>
        </template>
      </div>
    </div>
    <div class="flex-60">

    </div>
  </div>
</template>

<script>
import singleMatch from "./singleMatch.vue";
import * as TITLES from "../../chessData";
export default {
  name: "currentSeries",
  components: {
    singleMatch
  },
  data(){
    return {
      matches: [
        {
          number: 1,
          whitePlayer: "Bartosz Soćko",
          blackPlayer: "Monika Soćko",
          whiteTitle: TITLES.GM,
          blackTitle: TITLES.WGM,
          games: [
            {
              whiteScore: 1,
              blackScore: 0
            },
            {
              whiteScore: 0,
              blackScore: 1
            },
            {
              whiteScore: 1,
              blackScore: 0
            }
          ]
        },
        {
          number: 2,
          whitePlayer: "Bartosz Soćko",
          blackPlayer: "Monika Soćko",
          whiteTitle: TITLES.GM,
          blackTitle: TITLES.WGM,
          games: [
            {
              whiteScore: 1,
              blackScore: 0
            },
            {
              whiteScore: 0,
              blackScore: 1
            },
            {
              whiteScore: 1,
              blackScore: 0
            }
          ]
        },
        {
          number: 3,
          whitePlayer: "Bartosz Soćko",
          blackPlayer: "Monika Soćko",
          whiteTitle: TITLES.GM,
          blackTitle: TITLES.WGM,
          games: [
            {
              whiteScore: 1,
              blackScore: 0
            },
            {
              whiteScore: 0,
              blackScore: 1
            },
            {
              whiteScore: 1,
              blackScore: 0
            }
          ]
        },
        {
          number: 4,
          whitePlayer: "Bartosz Soćko",
          blackPlayer: "Monika Soćko",
          whiteTitle: TITLES.GM,
          blackTitle: TITLES.WGM,
          games: [
            {
              whiteScore: 1,
              blackScore: 0
            },
            {
              whiteScore: 0,
              blackScore: 1
            },
            {
              whiteScore: 1,
              blackScore: 0
            }
          ]
        },
        {
          number: 5,
          whitePlayer: "Bartosz Soćko",
          blackPlayer: "Monika Soćko",
          whiteTitle: TITLES.GM,
          blackTitle: TITLES.WGM,
          games: [
            {
              whiteScore: 1,
              blackScore: 0
            },
            {
              whiteScore: 0,
              blackScore: 1
            },
            {
              whiteScore: 1,
              blackScore: 0
            }
          ]
        },
        {
          number: 6,
          whitePlayer: "Bartosz Soćko",
          blackPlayer: "Monika Soćko",
          whiteTitle: TITLES.GM,
          blackTitle: TITLES.WGM,
          games: [
            {
              whiteScore: 1,
              blackScore: 0
            },
            {
              whiteScore: 0,
              blackScore: 1
            },
            {
              whiteScore: 1,
              blackScore: 0
            }
          ]
        },
        {
          number: 7,
          whitePlayer: "Bartosz Soćko",
          blackPlayer: "Monika Soćko",
          whiteTitle: TITLES.GM,
          blackTitle: TITLES.WGM,
          games: [
            {
              whiteScore: 1,
              blackScore: 0
            },
            {
              whiteScore: 0,
              blackScore: 1
            },
            {
              whiteScore: 1,
              blackScore: 0
            }
          ]
        },
        {
          number: 8,
          whitePlayer: "Bartosz Soćko",
          blackPlayer: "Monika Soćko",
          whiteTitle: TITLES.GM,
          blackTitle: TITLES.WGM,
          games: [
            {
              whiteScore: 1,
              blackScore: 0
            },
            {
              whiteScore: 0,
              blackScore: 1
            },
            {
              whiteScore: 1,
              blackScore: 0
            }
          ]
        },
      ]
    }
  }

}
</script>
