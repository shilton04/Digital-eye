<template>
  <div class="booking-page">
    <h2 class="text-center title">{{ title }}</h2>
    <p class="subtitle text-center">
      Check out our availability and book the date and time that works for you
    </p>

    <div class="calendar-section">
      <b-calendar
        v-model="selectedDate"
        :min="new Date()"
        @context="onContext"
      ></b-calendar>
    </div>

    <div v-if="selectedDate" class="time-selection">
      <h4 class="text-center">Select a Time</h4>
      <b-row class="time-buttons">
        <b-col cols="6" v-for="time in times" :key="time" class="text-center">
          <b-button
            :variant="time === selectedTime ? 'primary' : 'outline-secondary'"
            class="time-button"
            @click="selectTime(time)"
          >
            {{ time }}
          </b-button>
        </b-col>
      </b-row>
    </div>

    <div class="summary">
      <h4 class="text-center">Service Details</h4>
      <ul class="details-list">
        <li><strong>Service:</strong> Couples Collection</li>
        <li><strong>Date & Time:</strong> {{ formattedDateTime }}</li>
        <li><strong>Location:</strong> San Francisco</li>
        <li><strong>Staff:</strong> Staff Member #1</li>
        <li><strong>Duration:</strong> 1 hr</li>
        <li><strong>Meeting Type:</strong> Introductory Meeting</li>
      </ul>
    </div>

    <div class="button-section text-center">
      <b-button
        :disabled="!selectedDate || !selectedTime"
        variant="dark"
        @click="goToClientDetails"
        class="next-button"
      >
        Next
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"],
  data() {
    return {
      selectedDate: null,
      selectedTime: null,
      times: [
        "10:00 am",
        "10:30 am",
        "11:00 am",
        "11:30 am",
        "12:00 pm",
        "12:30 pm",
        "1:00 pm",
        "1:30 pm",
      ],
    };
  },
  computed: {
    formattedDateTime() {
      if (this.selectedDate && this.selectedTime) {
        return `${this.selectedDate.toLocaleDateString()} at ${
          this.selectedTime
        }`;
      }
      return "";
    },
  },
  watch: {
    // Watch for route changes in case user navigates with a new title
    "$route.params.title"(newTitle) {
      this.pageTitle = newTitle;
    },
  },
  methods: {
    selectTime(time) {
      this.selectedTime = time;
    },
    goToClientDetails() {
      this.$emit("proceed", {
        date: this.selectedDate,
        time: this.selectedTime,
      });
    },
  },
};
</script>

<style scoped>
.booking-page {
  padding: 30px;
  max-width: 600px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}

.title {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 16px;
  color: #666;
  margin-bottom: 30px;
}

.calendar-section {
  margin-bottom: 30px;
}

.time-selection {
  margin-bottom: 30px;
}

.time-buttons .time-button {
  width: 100%;
  margin-bottom: 10px;
}

.summary {
  margin-top: 30px;
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
}

.details-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.details-list li {
  margin-bottom: 8px;
  font-size: 14px;
  color: #555;
}

.button-section {
  margin-top: 20px;
}

.next-button {
  width: 100%;
  font-size: 16px;
}
</style>
