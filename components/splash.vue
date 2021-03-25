<template>
   <section fluid class="splash pa-0 wrapper">
    <v-carousel
        ripple
      dark class="splash-carousel"
      fade
      cycle
      light
      height="500"
      hide-delimiter-background
      :show-arrows="false">
      <v-carousel-item :src="image.src" v-for="(image, i) in images" :key="i">
      </v-carousel-item>
    </v-carousel>
  </section>
</template>
<script>
  export default {
    data: () => ({
      images: [
        {src: require('../assets/splash/splash2.jpg')},
        {src: require('../assets/splash/splash3.jpg')},
        {src: require('../assets/splash/splash1.jpg')},
      ],
    }),
  }
</script>
