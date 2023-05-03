<template>
  <div class="content-height bg-primary-alfa d-flex flex-wrap">
    <div class="flex-40 d-flex bg-primary-alfa">
      <div class="d-flex flex-direction-column">
        <round-label :number="1"/>
        <template v-for="match in roundOf16" :key="match.number">
          <single-match :match="match"/>
        </template>
      </div>
      <div class="d-flex flex-direction-column">
        <round-label style="min-width: 150px"/>
        <template v-for="item in 4" :key="item.number">
          <div class="col d-flex jcc aic my-2">
            <svg width="100%" height="100%">
              <rect width="100%" height="100%" fill="transparent"/>
              <line x1="0" y1="25%" x2="50%" y2="25%" stroke="#FABE56" stroke-width="5" />
              <line x1="0" y1="75%" x2="50%" y2="75%" stroke="#FABE56" stroke-width="5" />
              <path d="M 50% 25% L 75% 25% A 25% 25% 0 0 1 50% 75%" stroke="#FABE56" stroke-width="5" fill="none" />
            </svg>



          </div>
        </template>
      </div>
      <div class="d-flex flex-direction-column">
        <round-label :number="2"/>
        <template v-for="match in quarterFinals" :key="match.number">
          <single-match :match="match" class="d-flex jcc aic"/>
        </template>
      </div>
    </div>
    <div class="flex-60 bg-primary-alfa">
    </div>
  </div>
</template>

<script>
import singleMatch from "./singleMatch.vue";
import roundLabel from "./roundLabel.vue";
import * as TITLES from "../../chessData";
export default {
  name: "currentSeries",
  components: {
    singleMatch,
    roundLabel
  },
  data(){
    return {
      quarterFinals: [
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
      ],
      roundOf16: [
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
