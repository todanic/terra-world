<template>
  <section style="padding-top: 0" fluid class="splash pa-0">
    <v-carousel
      dark
      class="splash-carousel"
      fade
      cycle
      light
      :height="height + 'px'"
      hide-delimiter-background
      delimiter-icon="mdi-minus"
      :show-arrows="false"
    >
      <v-carousel-item :src="image.src" v-for="(image, i) in images" :key="i">
      </v-carousel-item>
    </v-carousel>
  </section>
</template>
<script>
export default {
  data: () => ({
    images: [
      { src: require("../assets/images/splash/splash2.jpg") },
      { src: require("../assets/images/splash/splash3.jpg") },
      { src: require("../assets/images/splash/splash1.jpg") },
    ],
  }),
  props: {
    height: {
      type: Number,
      required: false,
      default: 500,
    },
  },
};
</script>
