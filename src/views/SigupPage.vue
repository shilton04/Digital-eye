<template>
  <div class="d-flex justify-content-center align-items-center">
    <b-card
      title="Sign Up"
      class="w-50 mx-auto mt-5"
      style="max-width: 400px; border-radius: 15px"
    >
      <b-form @submit.prevent="handleSignup">
        <b-form-group label="Email" label-for="email">
          <b-form-input
            id="email"
            v-model="email"
            type="email"
            required
            placeholder="Enter your email"
          />
        </b-form-group>

        <b-form-group label="Password" label-for="password">
          <b-form-input
            id="password"
            v-model="password"
            type="password"
            required
            placeholder="Enter your password"
          />
        </b-form-group>

        <b-form-group label="Confirm Password" label-for="confirmPassword">
          <b-form-input
            id="confirmPassword"
            v-model="confirmPassword"
            type="password"
            required
            placeholder="Confirm your password"
          />
        </b-form-group>

        <b-button type="submit" variant="success" block :disabled="loading">
          {{ loading ? "Signing Up..." : "Sign Up" }}
        </b-button>
        <b-button variant="link" block @click="goToLogin">
          Already have an account? Login
        </b-button>
      </b-form>
    </b-card>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "SignupPage",
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      loading: false,
    };
  },
  methods: {
    async handleSignup() {
      if (this.password !== this.confirmPassword) {
        Swal.fire({
          icon: "error",
          title: "Password Mismatch",
          text: "Passwords do not match. Please try again.",
        });
        return;
      }

      this.loading = true;

      try {
        const response = await axios.post("http://localhost:5000/api/signup", {
          email: this.email,
          password: this.password,
        });

        // Assuming the backend sends a success message
        Swal.fire({
          icon: "success",
          title: "Signup Successful",
          text: response.data.message || "You can now login to your account!",
          timer: 2000,
          showConfirmButton: false,
        });

        // Clear form fields
        this.email = "";
        this.password = "";
        this.confirmPassword = "";

        // Redirect to login page
        setTimeout(() => {
          this.$router.push("/login");
        }, 2000);
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Signup Failed",
          text:
            err.response?.data?.message || "An error occurred during signup.",
        });
      } finally {
        this.loading = false;
      }
    },
    goToLogin() {
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
/* Center the signup card */
.d-flex {
  min-height: 100vh;
  background-color: #f5f5f5;
}
</style>
