<template>
  <section class="contact-us content-padding">
    <h1 class="contact-us--title text-center">Kontaktirajte nas</h1>
    <v-row>
      <v-col class="col-2">
        <p class="contact-us--text">
          <span style="color: #bd2a33; font-weight: bold">PIB:</span> 112225543
        </p>
        <p class="contact-us--text">
          <span style="color: #bd2a33; font-weight: bold">MATIČNI BROJ:</span>
          21630365
        </p>

        <p class="contact-us--text">
          <span style="color: #bd2a33; font-weight: bold">TELEFON:</span> +381
          65 576 1987
        </p>
        <p class="contact-us--text">
          <span style="color: #bd2a33; font-weight: bold">MAIL</span>
          savic_mz@hotmail.com
        </p>
        <p class="contact-us--text">VRBASKA 35, SRBOBRAN</p>
        <p class="contact-us--text">DIREKTOR SAVIC ZORAN</p>
      </v-col>
      <v-col class="col-10 contact-us--form">
        <v-text-field color="#bd2a33" label="Ime" v-model="firstName">
        </v-text-field>
        <v-text-field color="#bd2a33" label="Email" v-model="email">
        </v-text-field>
        <v-text-field color="#bd2a33" label="Zemlja" v-model="country">
        </v-text-field>
        <v-text-field color="#bd2a33" label="Telefon" v-model="phone">
        </v-text-field>
        <v-textarea
          height="150px"
          color="#bd2a33"
          label="Poruka"
          v-model="message"
        >
        </v-textarea>
        <v-btn
          style="margin-top: 20px"
          width="200px"
          type="submit"
          color="#bd2a33"
          class="btn"
          large
          dark
          @click="submit"
        >
          Pošalji
        </v-btn>
      </v-col>
    </v-row>
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
      loading: false,
      // previewImages: []
    };
  },
  methods: {
    submit() {},
  },
};
</script>
