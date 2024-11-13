<template>
  <b-container class="py-5">
    <h2 class="text-center">Book Online</h2>
    <b-row class="mt-4 justify-content-center">
      <b-col
        md="4"
        v-for="(item, index) in priceItems"
        :key="index"
        class="mb-4"
      >
        <b-card class="text-center p-4">
          <img :src="item.image" alt="Image" class="card-img-top mb-3" />
          <h5 class="font-weight-bold">{{ item.title }}</h5>
          <p class="text-muted">1 hr</p>
          <p>Introductory Meeting</p>
          <b-button variant="dark" class="mt-2" @click="selectPrice(item)">
            Let's Talk
          </b-button>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      priceItems: [
        {
          title: "Wedding Collection",
          image: require("@/assets/images/letsTalk/weddingColection.webp"),
        },
        {
          title: "Couples Collection",
          image: require("@/assets/images/letsTalk/couples.webp"),
        },
        {
          title: "International Wedding",
          image: require("@/assets/images/letsTalk/international.webp"),
        },
      ],
    };
  },
  methods: {
    selectPrice(item) {
      // Navigates to the booking page with the selected title as a parameter
      this.$router.push({
        name: "sessionBooking",
        params: { title: item.title },
      });
      console.log("Selected package:", item);
    },
  },
};
</script>

<style scoped>
.text-center {
  text-align: center;
}

.card-img-top {
  width: 100%;
  height: auto;
  border-radius: 5px;
}

h5 {
  font-family: "Times New Roman", serif;
  color: #333;
}

p {
  margin: 0;
  font-size: 0.9rem;
  color: #666;
}

button {
  font-size: 0.9rem;
  font-weight: bold;
}
</style>
