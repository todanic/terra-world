<template>
  <section fluid class="splash pa-0 container">
    <v-carousel
      dark
      class="splash-carousel"
      fade
      cycle
      light
      height="500"
      hide-delimiter-background
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
};
</script>
