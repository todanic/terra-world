<template>
  <section class="gallery-component content-padding">
    <h1 class="gallery-component--title text-center">Galerija</h1>
    <v-row style="justify-content: center">
      <gallery
        id="gallery"
        :images="images"
        :index="index"
        @close="index = null"
      ></gallery>
      <div
        class="gallery-component--image"
        v-for="(image, imageIndex) in images"
        :key="imageIndex"
        @click="index = imageIndex"
        :style="{
          backgroundImage: 'url(' + image + ')',
          width: '450px',
          height: '250px',
        }"
      ></div>
    </v-row>
  </section>
</template>
<script>
import VueGallery from "vue-gallery";
export default {
  components: {
    gallery: VueGallery,
  },
  data() {
    return {
      images: [],
      index: null,
    };
  },
  methods: {
    importAll(r) {
      return r.keys().map(r);
    },
  },
  mounted() {
    this.images = this.importAll(
      require.context("../assets/images/gallery/", true, /\.jpg$/)
    );
  },
};
</script>
