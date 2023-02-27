<template>
  <GMapMap :center="center" :zoom="7" height="500px"> </GMapMap>
</template>

<script>
export default {
  name: "currentTournament",
  data() {
    return {
      center: { lat: 40.689247, lng: -74.044502 },
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    };
  },
};
</script>
