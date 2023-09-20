<template>
  <q-card class="my-card bg-primary text-white">
    <q-img :src="tournament.imageLink" :ratio="4 / 3">
      <div class="absolute-bottom">
        <div class="text-h6 text-center">{{ tournament.name }}</div>
      </div>
    </q-img>

    <q-card-actions>
      <q-btn flat><q-icon class="pr-1" name="mdi-tournament" />Serwis turniejowy</q-btn>
      <q-separator vertical dark inset class="mx-1" />
      <q-btn flat @click="googleModal = true"
        ><q-icon class="pr-1" name="mdi-google-maps" />Lokalizacja</q-btn
      >
    </q-card-actions>
    <q-dialog v-model="googleModal">
      <q-card class="google-modal">
        <GMapMap :center="tournament.coordinates" :zoom="15">
          <GMapMarker
            :position="tournament.coordinates"
            :clickable="true"
            :draggable="true"
          >
            <GMapInfoWindow>
              <div
                class="google-maps-info-tooltip"
                v-html="`${tournament.localizationInfo}`"
              ></div>
            </GMapInfoWindow>
          </GMapMarker>
        </GMapMap>
      </q-card>
    </q-dialog>
  </q-card>
</template>
<script>
export default {
  props: {
    tournament: {
      type: Object,
      default: () => {
        return {
          name: "",
          coordinates: { lat: 53.143380330822026, lng: 18.13078396362294 },
          localizationInfo: "",
        };
      },
    },
  },
  data() {
    return {
      googleModal: false,
    };
  },
};
</script>
