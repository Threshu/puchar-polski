<template>
  <q-layout view="hhr Lpr ffr">
    <q-header elevated reveal>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          PGNiG TERMIKA Puchar Polski w Szachach
        </q-toolbar-title>
        <a
          target="_blank"
          href="https://www.chessmanager.com/pl/tournaments/5100140244238336"
        >
          <q-img
            alt="Quasar logo"
            src="~assets/cm.png"
            class="rounded-image"
            style="width: 40px; height: 40px"
          />
        </a>
        <a target="_blank" href="https://pzszach.pl/">
          <q-img
            alt="Quasar logo"
            src="~assets/pzszach.png"
            class="rounded-image mx-1"
            style="width: 40px; height: 40px"
          />
        </a>
        <a
          target="_blank"
          href="https://lichess.org/broadcast/pgnig-termika-polish-cup-qualifications/e9bK7VwL"
        >
          <q-img
            alt="Quasar logo"
            src="~assets/lichess.avif"
            class="rounded-image"
            style="width: 40px; height: 40px"
          />
        </a>
        <a
          target="_blank"
          href="https://www.youtube.com/c/PolskiZwiazekSzachowy"
        >
          <q-img
            alt="Quasar logo"
            src="~assets/youtube.png"
            class="rounded-image ml-1"
            style="width: 40px; height: 40px"
          />
        </a>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      show-if-above
      bordered
      style="background-color: #363636"
    >
      <q-list>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "ChessManager",
    caption: "Serwis turniejowy",
    cmLogo: true,
    path: "currentTournament",
  },
  {
    title: "Puchar Polski 2023",
    caption: "Bieżący cykl PGNiG TERMIKA Puchar Polski w Szachach",
    icon: "mdi-trophy",
    color: "gold",
    path: "currentSeries",
  },
  {
    title: "Nadchodzące turnieje",
    caption: "Puchar Polski 2023",
    icon: "mdi-calendar-arrow-right",
    color: "white",
    path: "nextTournaments",
  },
  {
    title: "Transmisja Live",
    caption: "Kanał YouTube Polskiego Związku Szachowego",
    icon: "mdi-youtube",
    color: "red",
    whiteBackground: true,
    path: "youTubeBroadcasts",
  },
  {
    title: "Poprzednie lata",
    caption: "Turnieje cyklu Pucharu Polski z poprzednich lat",
    icon: "mdi-history",
    link: "https://awesome.quasar.dev",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
