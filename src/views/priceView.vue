<template>
  <b-container fluid class="py-5">
    <h2 class="text-center">Pricing View</h2>
    <b-row class="mt-4">
      <b-col
        md="4"
        v-for="(item, index) in priceItems"
        :key="index"
        class="mb-4"
      >
        <b-card :title="item.title" class="text-center">
          <b-card-text>
            <h3>${{ item.price }}</h3>
            <p>{{ item.description }}</p>
          </b-card-text>
          <b-button variant="primary" @click="selectPrice(item)"
            >Book Now</b-button
          >
        </b-card>
      </b-col>
    </b-row>

    <!-- Booking Form -->
    <b-modal id="booking-modal" title="Book an Appointment" @hide="resetForm">
      <b-form @submit.prevent="submitBooking">
        <b-form-group label="Name" label-for="name-input">
          <b-form-input
            id="name-input"
            v-model="booking.name"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group label="Email" label-for="email-input">
          <b-form-input
            id="email-input"
            v-model="booking.email"
            type="email"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group label="Phone Number" label-for="phone-input">
          <b-form-input
            id="phone-input"
            v-model="booking.phone"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group label="Message" label-for="message-input">
          <b-form-textarea
            id="message-input"
            v-model="booking.message"
            rows="3"
          ></b-form-textarea>
        </b-form-group>

        <b-button type="submit" variant="success">Confirm Booking</b-button>
      </b-form>
    </b-modal>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      priceItems: [
        {
          title: "Basic Package",
          price: 100,
          description: "A basic photography session.",
        },
        {
          title: "Premium Package",
          price: 200,
          description:
            "A premium photography session with additional features.",
        },
        {
          title: "Deluxe Package",
          price: 300,
          description:
            "A deluxe photography session with all features included.",
        },
      ],
      booking: {
        name: "",
        email: "",
        phone: "",
        message: "",
      },
    };
  },
  methods: {
    selectPrice(item) {
      this.selectedPrice = item; // Save the selected price for further processing if needed
      this.$bvModal.show("booking-modal");
    },
    submitBooking() {
      // Here, you can implement the logic to send booking data, e.g., to your backend API

      console.log("Booking details:", this.booking);
      this.resetForm();
      this.$bvModal.hide("booking-modal");
      // Optionally, show a success message
    },
    resetForm() {
      this.booking = {
        name: "",
        email: "",
        phone: "",
        message: "",
      };
    },
  },
};
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
