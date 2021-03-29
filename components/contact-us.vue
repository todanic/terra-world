<template>
  <section class="contact-us content-padding">
    <h1 class="contact-us--title text-center">Kontaktirajte nas</h1>
    <v-row>
      <v-col class="col-2">
        <p class="contact-us--text">
          <span style="color: #004e7c; font-weight: bold">PIB:</span> 112225543
        </p>
        <p class="contact-us--text">
          <span style="color: #004e7c; font-weight: bold">MATIČNI BROJ:</span>
          21630365
        </p>

        <p class="contact-us--text">
          <span style="color: #004e7c; font-weight: bold">TELEFON:</span> +381
          65 576 1987
        </p>
        <p class="contact-us--text">
          <span style="color: #004e7c; font-weight: bold">MAIL</span>
          savic_mz@hotmail.com
        </p>
        <p class="contact-us--text">VRBASKA 35, SRBOBRAN</p>
        <p class="contact-us--text">DIREKTOR SAVIC ZORAN</p>
      </v-col>
      <v-col class="col-10 contact-us--form">
        <v-text-field color="#004e7c" label="Ime" v-model="firstName">
        </v-text-field>
        <v-text-field color="#004e7c" label="Email" v-model="email">
        </v-text-field>
        <v-text-field color="#004e7c" label="Zemlja" v-model="country">
        </v-text-field>
        <v-text-field color="#004e7c" label="Telefon" v-model="phone">
        </v-text-field>
        <v-textarea
          height="150px"
          color="#004e7c"
          label="Poruka"
          v-model="message"
        >
        </v-textarea>
        <v-btn
          style="margin-top: 20px"
          width="200px"
          type="submit"
          color="#004e7c"
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
