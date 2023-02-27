<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card bg-primary text-white">
      <q-img
        src="https://www.polska.travel/images/pl-PL/glowne-miasta/magia_polskich_miast/real_bydgoszcz_800.jpg"
      >
        <div class="absolute-bottom">
          <div class="text-h6 text-center">🏹 Bydgoszcz - 25 luty</div>
        </div>
      </q-img>

      <q-card-actions>
        <q-btn flat
          ><q-icon class="pr-1" name="mdi-tournament" />Serwis turniejowy</q-btn
        >
        <q-separator vertical dark inset />
        <q-btn flat @click="carousel = true"
          ><q-icon class="pr-1" name="mdi-google-maps" />Lokalizacja</q-btn
        >
      </q-card-actions>
      <q-dialog v-model="carousel">
        <q-card class="google-modal">
          <GMapMap :center="center" :zoom="15">
            <GMapMarker
              :key="index"
              v-for="(m, index) in markers"
              :position="m.position"
              :clickable="true"
              :draggable="true"
            >
              <GMapInfoWindow>
                <div
                  class="google-maps-info-tooltip"
                  v-html="
                    `Politechnika Bydgoska<br/>ul. Kaliskiego 7<br/>85-796 Bydgoszcz`
                  "
                ></div>
              </GMapInfoWindow>
            </GMapMarker>
          </GMapMap>
        </q-card>
      </q-dialog>
    </q-card>
  </div>
</template>

<script>
export default {
  name: "nextTournaments",
  data() {
    return {
      carousel: false,
      center: { lat: 53.143380330822026, lng: 18.13078396362294 },
      markers: [
        {
          id: "bydgoszcz-id",
          position: {
            lat: 53.143380330822026,
            lng: 18.13078396362294,
          },
        },
      ],
    };
  },
  methods: {},
};
</script>
<style lang="sass">
.my-card
  width: 100%
  max-width: 400px

.google-modal
  max-width: none !important
  width: 90vw
  height: 90vh

.google-maps-info-tooltip
  min-width: 150px
  min-height: 70px
</style>
