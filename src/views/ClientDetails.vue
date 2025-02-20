<template>
  <b-container>
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
          <p><strong>Service:</strong> {{ bookingDetails.service }}</p>
          <p><strong>Date & Time:</strong> {{ bookingDetails.dateTime }}</p>
          <p><strong>Location:</strong> {{ bookingDetails.location }}</p>
          <p><strong>Staff:</strong> {{ bookingDetails.staff }}</p>
          <p><strong>Duration:</strong> {{ bookingDetails.duration }}</p>
          <p><strong>Meeting Type:</strong> {{ bookingDetails.meetingType }}</p>
        </div>

        <b-button type="submit" variant="dark">Book Now</b-button>
      </b-form>
    </div>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      clientName: "",
      clientEmail: "",
      clientPhone: "",
      clientMessage: "",
      bookingDetails: {
        service: this.$route.query.service || "Not selected",
        dateTime: this.$route.query.dateTime || "Not selected",
        location: this.$route.query.location || "Not selected",
        staff: this.$route.query.staff || "Not selected",
        duration: this.$route.query.duration || "Not selected",
        meetingType: this.$route.query.meetingType || "Not selected",
      },
      whatsappNumber: "9480984996", // Replace with your WhatsApp number
    };
  },
  methods: {
    submitBooking() {
      // Constructing the message properly
      const message = `New Booking Request:\n
      *Name:* ${this.clientName}\n
      *Email:* ${this.clientEmail}\n
      *Phone:* ${this.clientPhone || "N/A"}\n
      *Message:* ${this.clientMessage || "N/A"}\n
      *Service:* ${this.bookingDetails.service}\n
      *Date & Time:* ${this.bookingDetails.dateTime}\n
      *Location:* ${this.bookingDetails.location}\n
      *Staff:* ${this.bookingDetails.staff}\n
      *Duration:* ${this.bookingDetails.duration}\n
      *Meeting Type:* ${this.bookingDetails.meetingType}`;

      // Encode message correctly for URL
      const encodedMessage = encodeURIComponent(message);

      // Create WhatsApp URL
      const whatsappUrl = `https://wa.me/${this.whatsappNumber}?text=${encodedMessage}`;

      // Open WhatsApp with the full formatted message
      window.open(whatsappUrl, "_blank");

      // Show success message
      alert("Booking success! We will get back to you soon.");
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
