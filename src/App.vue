<template>
  <div id="app">
    <nav>
      <b-navbar toggleable="lg" type="dark" variant="dark" class="fixed-top">
        <b-navbar-brand href="#">
          <b-img :src="require('@/assets/logo1.png')" height="50" alt="Logo" />
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="p-2 ml-auto">
            <b-nav-item :to="{ path: '/', hash: '#home' }">Home</b-nav-item>
            <b-nav-item :to="{ path: '/', hash: '#about' }">About</b-nav-item>
            <b-nav-item :to="{ path: '/', hash: '#gallery' }"
              >Gallery</b-nav-item
            >
            <b-nav-item :to="{ path: '/', hash: '#services' }"
              >Services</b-nav-item
            >
            <b-nav-item :to="{ path: '/', hash: '#contact' }"
              >Contact</b-nav-item
            >
            <b-nav-item :to="{ path: '/blog-view' }">Blogs</b-nav-item>

            <b-nav-item @click="handleAuthAction">
              <b-icon icon="person-circle"></b-icon>
              {{ isLoggedIn ? "Logout" : "Login/Sign In" }}
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </nav>
    <div class="mt-4">
      <router-view></router-view>
    </div>
    <!-- Footer -->
    <footer class="bg-dark text-white py-4">
      <b-container>
        <b-row>
          <b-col md="6">
            <h5>Digital-eye Photography</h5>
            <p>Your budget-friendly event photographer in Bangalore</p>
          </b-col>
          <b-col md="6">
            <h5>Contact Us</h5>
            <p>Email: <a>digitaleye47@gmail.com</a></p>
            <p>Phone: +91 9620718640</p>
            <b-row class="justify-content-center">
              <b-col cols="auto">
                <a
                  href="https://www.instagram.com/_.digital_eye._"
                  target="_blank"
                >
                  <i class="fab fa-instagram fa-2x text-danger mx-2"></i>
                </a>
                <a href="https://www.facebook.com" target="_blank">
                  <i class="fab fa-facebook fa-2x text-primary mx-2"></i>
                </a>
                <a
                  href="https://www.youtube.com/@digitaleyephotography286"
                  target="_blank"
                >
                  <i class="fab fa-youtube fa-2x text-danger mx-2"></i>
                </a>
                <a href="https://wa.me/9480984996" target="_blank">
                  <i class="fab fa-whatsapp fa-2x text-success mx-2"></i>
                </a>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
      <!-- Footer -->
      <footer class="bg-dark text-white text-center p-3 mt-5">
        &copy; 2024 Digital Eye. All Rights Reserved.
      </footer>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isLoggedIn: false,
    };
  },
  mounted() {
    const clerk = this.$root.clerk;
    if (clerk) {
      clerk.addListener("auth:changed", () => {
        this.isLoggedIn = !!clerk.userId;
      });
      this.isLoggedIn = !!clerk.userId;
    } else {
      console.error("Clerk instance is not initialized.");
    }
  },
  methods: {
    async handleAuthAction() {
      if (this.isLoggedIn) {
        const clerk = this.$root.clerk;
        if (clerk) {
          await clerk.signOut();
        } else {
          console.error("Clerk instance is undefined.");
        }
      } else {
        this.$router.push("/login"); // Redirect to the login page
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.ml-auto {
  margin-left: auto !important;
}
body {
  background-color: #e5d2ab; /* Cream color */
  margin: 0;
  font-family: "Spectral", serif !important;
}
</style>
