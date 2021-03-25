<template>
  <section class="contact-us content-padding ">
    <h1 class="text-center">Kontaktirajte nas</h1>
    <v-text-field
      outlined
      color="#bd2a33"
      label="Ime"
      v-model="firstName"
    >
    </v-text-field>
    <v-text-field outlined color="#bd2a33" label="Email" v-model="email">
    </v-text-field>
    <v-text-field outlined color="#bd2a33" label="Zemlja" v-model="country">
    </v-text-field>
    <v-text-field outlined color="#bd2a33" label="Telefon" v-model="phone">
    </v-text-field>
    <v-textarea
      height="150px"
      outlined
      color="#bd2a33"
      label="Poruka"
      v-model="message"
    >
    </v-textarea>
    <v-btn
      width="160px"
      type="submit"
      color="#bd2a33"
      class="btn"
      large
      dark
      @click="submit"
    >
      Pošalji
    </v-btn>
  </section>
</template>
<script>
export default {
  name: "ContactUs",
  components: {
    // CubeSpin
  },
  data() {
    return {
      email: null,
      firstName: null,
      country: null,
      phone: null,
      message: null,
      userImage: null,
      attachments: null,
      // images: {},
      loading: false
      // previewImages: []
    };
  },
  methods: {
    submit() {}
  }
};
</script>
