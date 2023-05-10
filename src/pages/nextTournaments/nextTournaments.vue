<template>
  <div class="content-height next-tournaments">
    <div class="row" v-for="(row, index) in tournaments" :key="index">
      <div class="col" v-for="(tournament, indexRow) in row" :key="indexRow">
        <tournamentCard :tournament="tournament" />
      </div>
    </div>
  </div>
</template>

<script>
import poznanImage from "../../assets/poznan.jpg";
import bydgoszczImage from "../../assets/bydgoszcz.jpg";
import lodzImage from "../../assets/lodz.jpg";
import gnieznoImage from "../../assets/gniezno.jpg";
import tournamentCard from "./tournamentCard.vue";
export default {
  name: "nextTournaments",
  components: {
    tournamentCard,
  },
  data() {
    return {
      tournaments: [
        [
          {
            name: "🏹 Bydgoszcz - 25 luty",
            imageLink: bydgoszczImage,
            coordinates: { lat: 53.143380330822026, lng: 18.13078396362294 },
            localizationInfo:
              "Politechnika Bydgoska<br/>ul. Kaliskiego 7<br/>85-796 Bydgoszcz",
          },
          {
            name: "🛶 Łódź - 30 czerwiec",
            imageLink: lodzImage,
            coordinates: { lat: 53.143380330822026, lng: 18.13078396362294 },
            localizationInfo:
              "Politechnika Bydgoska<br/>ul. Kaliskiego 7<br/>85-796 Bydgoszcz",
          },
        ],
        [
          {
            name: "🐐 Poznań - 30 sierpień",
            imageLink: poznanImage,
            coordinates: { lat: 53.143380330822026, lng: 18.13078396362294 },
            localizationInfo:
              "Politechnika Bydgoska<br/>ul. Kaliskiego 7<br/>85-796 Bydgoszcz",
          },
          {
            name: "🦅 Gniezno - 30 wrzesień",
            imageLink: gnieznoImage,
            coordinates: { lat: 53.143380330822026, lng: 18.13078396362294 },
            localizationInfo:
              "Politechnika Bydgoska<br/>ul. Kaliskiego 7<br/>85-796 Bydgoszcz",
          },
        ],
      ],
    };
  },
  methods: {},
};
</script>
<style lang="scss">
.my-card {
  width: 100%;

  .q-img {
    max-height: 20%;
  }

  .q-btn__content {
    padding: 0 !important;
  }
}

.google-modal {
  max-width: none !important;
  width: 90vw;
  height: 90vh;

  .google-maps-info-tooltip {
    min-width: 150px;
    min-height: 70px;
  }
}
</style>
