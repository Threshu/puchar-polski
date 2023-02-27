<template>
  <q-item clickable @click="redirect" class="q-menu-item">
    <q-item-section avatar>
      <q-icon
        v-if="icon"
        :class="{ 'q-menu-icon': whiteBackground }"
        :name="icon"
        size="md"
        :style="{ color: color }"
      />
      <q-img
        v-if="cmLogo"
        alt="Quasar logo"
        src="~assets/cm.png"
        class="rounded-image"
        style="width: 40px; height: 40px"
      />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "EssentialLink",
  props: {
    title: {
      type: String,
      required: true,
    },
    whiteBackground: {
      type: Boolean,
      required: false,
    },
    caption: {
      type: String,
      default: "",
    },
    path: {
      type: String,
      default: "#",
    },
    icon: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "",
    },
    cmLogo: {
      type: Boolean,
    },
  },
  methods: {
    redirect() {
      console.log(this.path);
      this.$router.push({ name: this.path });
    },
  },
});
</script>
