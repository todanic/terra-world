<template>
   <v-container fluid class="splash-container pa-0">
    <v-carousel
        ripple
      dark class="splash-container__carousel"
      fade
      cycle
      light
      height="600"
      hide-delimiter-background
      :show-arrows="false">
      <v-carousel-item :src="image.src" v-for="(image, i) in images" :key="i">
      </v-carousel-item>
    </v-carousel>
  </v-container>
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
