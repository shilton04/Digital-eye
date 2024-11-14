<template>
  <div class="client-details-page">
    <h2>Client Details</h2>
    <p>Tell us a bit about yourself</p>

    <b-form @submit.prevent="submitBooking">
      <b-form-group label="Name *">
        <b-form-input v-model="clientName" required></b-form-input>
      </b-form-group>
      <b-form-group label="Email *">
        <b-form-input
          v-model="clientEmail"
          type="email"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group label="Phone Number">
        <b-form-input v-model="clientPhone"></b-form-input>
      </b-form-group>
      <b-form-group label="Add Your Message">
        <b-form-textarea v-model="clientMessage"></b-form-textarea>
      </b-form-group>

      <div class="summary">
        <h4>Booking Details</h4>
        <p>{{ bookingDetails.service }}</p>
        <p>{{ bookingDetails.dateTime }}</p>
        <p>San Francisco</p>
        <p>Staff Member #1</p>
        <p>1 hr</p>
        <p>Introductory Meeting</p>
      </div>

      <b-button type="submit" variant="dark">Book Now</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  props: ["bookingDetails"],
  data() {
    return {
      clientName: "",
      clientEmail: "",
      clientPhone: "",
      clientMessage: "",
    };
  },
  methods: {
    submitBooking() {
      console.log("Booking submitted:", {
        clientName: this.clientName,
        clientEmail: this.clientEmail,
        clientPhone: this.clientPhone,
        clientMessage: this.clientMessage,
        bookingDetails: this.bookingDetails,
      });
      alert("Booking confirmed!");
    },
  },
};
</script>

<style scoped>
.client-details-page {
  padding: 20px;
}
.summary {
  margin-top: 20px;
}
</style>
