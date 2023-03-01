<template>
  <div class="pp-container">
      <div class="row" v-for="(row, index) in tournaments" :key="index">
        <div class="col" v-for="(tournament, indexRow) in row" :key="indexRow">
          <tournamentCard :tournament="tournament"/>
        </div>
      </div>
  </div>
</template>

<script>
import tournamentCard from './tournamentCard.vue';
export default {
  name: "nextTournaments",
  components: {
    tournamentCard
  },
  data() {
    return {
      tournaments: [
        [{
          name: "🏹 Bydgoszcz - 25 luty",
          imageLink: "https://www.polska.travel/images/pl-PL/glowne-miasta/magia_polskich_miast/real_bydgoszcz_800.jpg",
          coordinates: { lat: 53.143380330822026, lng: 18.13078396362294 },
          localizationInfo: "Politechnika Bydgoska<br/>ul. Kaliskiego 7<br/>85-796 Bydgoszcz"
        },
        {
          name: "🛶 Łódź - 30 czerwiec",
          imageLink: "https://www.polska.travel/images/pl-PL/glowne-miasta/lodz/ulica_piotkowska_w_lodzi_1170.jpg",
          coordinates: { lat: 53.143380330822026, lng: 18.13078396362294 },
          localizationInfo: "Politechnika Bydgoska<br/>ul. Kaliskiego 7<br/>85-796 Bydgoszcz"
        }],
        [{
          name: "🐐 Poznań - 30 sierpień",
          imageLink: "https://www.polska.travel/images/pl-PL/glowne-miasta/poznan/poznan_stare_miasto_2_1170.jpg",
          coordinates: { lat: 53.143380330822026, lng: 18.13078396362294 },
          localizationInfo: "Politechnika Bydgoska<br/>ul. Kaliskiego 7<br/>85-796 Bydgoszcz"
        },
        {
          name: "🦅 Gniezno - 30 wrzesień",
          imageLink: "https://polskazachwyca.pl/wp-content/uploads/2018/02/gniezno-fot-rados%C5%82aw-maciejewski-shutterstock_131022740.jpg",
          coordinates: { lat: 53.143380330822026, lng: 18.13078396362294 },
          localizationInfo: "Politechnika Bydgoska<br/>ul. Kaliskiego 7<br/>85-796 Bydgoszcz"
        }]
      ]
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
