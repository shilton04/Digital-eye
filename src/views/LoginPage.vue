<template>
  <div class="d-flex justify-content-center align-items-center">
    <b-card
      title="Login"
      class="w-50 mx-auto mt-5"
      style="max-width: 400px; border-radius: 15px"
    >
      <b-form @submit.prevent="handleLogin">
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

        <b-button
          type="submit"
          variant="primary"
          block
          class="mb-3"
          :disabled="loading"
        >
          {{ loading ? "Logging in..." : "Login" }}
        </b-button>
        <b-button variant="link" block @click="goToSignup">
          Don't have an account? Sign up
        </b-button>
      </b-form>
    </b-card>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
      loading: false,
    };
  },
  methods: {
    async handleLogin() {
      this.loading = true;

      try {
        const response = await axios.post("http://localhost:5000/api/login", {
          email: this.email,
          password: this.password,
        });

        // Assuming the API returns a token
        const { token } = response.data;

        // Save token to localStorage (or any other secure place)
        localStorage.setItem("token", token);

        // Show success alert
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "Welcome back! Redirecting to your dashboard...",
          timer: 2000,
          showConfirmButton: false,
        });

        // Navigate to a different page after login
        setTimeout(() => {
          this.$router.push("/dashboard");
        }, 2000);
      } catch (err) {
        // Show error alert
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text:
            err.response?.data?.message || "An error occurred during login.",
        });
      } finally {
        this.loading = false;
      }
    },
    goToSignup() {
      this.$router.push("/signup");
    },
  },
};
</script>

<style scoped>
/* Center the login card */
.d-flex {
  min-height: 100vh;
  background-color: #f5f5f5;
}
</style>
