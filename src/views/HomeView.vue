<template>
  <b-container fluid class="p-0 m-0">
    <!-- Navigation Bar -->
    <!-- <b-navbar toggleable="lg" type="dark" variant="dark" class="fixed-top">
      <b-navbar-brand href="#">
        <b-img :src="require('@/assets/logo1.png')" height="50" alt="Logo" />
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#home">Home</b-nav-item>
          <b-nav-item href="#about">About</b-nav-item>
          <b-nav-item href="#gallery">Gallery</b-nav-item>
          <b-nav-item href="#services">Services</b-nav-item>
          <b-nav-item href="#contact">Contact</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar> -->

    <!-- Hero Section -->
    <section
      id="home"
      class="d-flex align-items-center text-center bg-dark text-white vh-100"
      :style="{
        backgroundImage: 'url(' + require('@/assets/bg2.jpg') + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
        height: isMobile ? '100vh' : '80vh',
      }"
    >
      <b-container>
        <h1 class="title pt-0 mt-0">Capture the Future with Us</h1>
        <p class="subTitle">Your moments, our vision.</p>
        <b-button size="lg" class="m-3 transparent-button" to="/gallery.vue">
          Explore Gallery
        </b-button>
        <b-button size="lg" class="m-3 transparent-button" to="/priceView">
          Booking Form
        </b-button>
      </b-container>
      <div class="animated-images">
        <!-- <img
          :src="require('@/assets/cameraman black.avif')"
          alt="image1"
          class="rotated-image rotate1"
        /> -->
        <!-- <img
          :src="require('@/assets/camera beat.jpg')"
          alt="image2"
          class="rotated-image rotate2"
        /> -->
        <!-- <img
          :src="require('@/assets/images/cameraman black.avif')"
          alt="image3"
          class="rotated-image rotate3"
        /> -->
        <!-- Add more images as needed -->
      </div>
    </section>

    <!-- About Us Section -->
    <section id="about" class="mt-5 p-2">
      <b-container class="pt-5 mt-5">
        <b-row>
          <h2 class="text-center pa-4">About Digital Eye</h2>
          <b-col class="d-flex justify-end" md="6">
            <img
              :src="require('@/assets/cameraman.png')"
              class="img-fluid"
              style="height: 350px; width: 250px"
              alt="Photographer"
            />
          </b-col>
          <b-col md="6" class="mt-5 d-flex align-items-center">
            <div>
              <p class="font-weight-bold mb-3">
                Capturing Moments, Creating Memories
              </p>
              <p class="text-muted lead">
                At <span class="text-dark font-italic">Digital Eye</span>, we
                believe every photograph is more than just an image—it's a story
                waiting to be told. Our professional photographers blend
                <strong>creativity, precision, and innovation</strong> to
                capture the essence of every moment.
              </p>
              <p class="text-muted">
                Whether it's the fleeting emotions of a wedding, the energy of a
                live event, or the intimacy of a personal photoshoot, we go
                beyond the surface. With advanced techniques and cutting-edge
                technology, we transform your memories into
                <span class="text-dark font-weight-bold"
                  >visual works of art</span
                >
                that can be cherished for a lifetime.
              </p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <!-- Gallery Section -->
    <div class="mb-5" id="gallery"></div>
    <section class="py-5 text-center">
      <b-container>
        <h2>Our Work</h2>
        <p>Discover the artistry through our lenses.</p>
        <b-row>
          <b-col
            cols="12"
            md="3"
            class="mb-4"
            v-for="(image, index) in gallery"
            :key="index"
          >
            <b-card class="border-0 shadow-sm">
              <b-card-img :src="image" alt="Gallery image"></b-card-img>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <!-- Services Section -->
    <section
      id="services"
      class="d-flex align-items-center text-center bg-dark text-white vh-100"
      :style="{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(' +
          require('@/assets/bg2.jpg') +
          ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
        height: isMobile ? '100vh' : '80vh',
      }"
    >
      <b-container>
        <h2 class="mb-3">Our Services</h2>
        <b-row>
          <b-col cols="12" md="4" class="mb-3">
            <b-card title="Wedding Photography" class="border-0 shadow-sm">
              <p>Capturing the magic of your special day.</p>
            </b-card>
          </b-col>
          <b-col cols="12" md="4" class="mb-3">
            <b-card title="Event Photography" class="border-0 shadow-sm">
              <p>
                Professional coverage for corporate events, concerts, and more.
              </p>
            </b-card>
          </b-col>
          <b-col cols="12" md="4" class="mb-3">
            <b-card title="Personal Photoshoots" class="border-0 shadow-sm">
              <p>Personalized photoshoots for individuals and families.</p>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-5 mb-5 text-center">
      <b-container class="text-center my-5">
        <h4 class="font-weight-bold text-dark mb-3">Connect with Us</h4>
        <b-row class="justify-content-center">
          <b-col cols="auto">
            <a href="https://www.instagram.com/_.digital_eye._" target="_blank">
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
      </b-container>
    </section>

    <!-- Enquiry Section -->
    <section class="py-5 bg-light">
      <b-container>
        <b-row>
          <b-col cols="12" md="6">
            <h2>Let's talk</h2>
            <p>Send us a message, and we'll get back to you.</p>
            <b-form @submit.prevent="submitEnquiry">
              <b-form-group label="Name">
                <b-form-input v-model="enquiry.name" required></b-form-input>
              </b-form-group>

              <b-form-group label="Email">
                <b-form-input v-model="enquiry.email" type="email" required />
              </b-form-group>

              <b-row>
                <b-col cols="12">
                  <b-form-group label="Message">
                    <b-form-textarea
                      v-model="enquiry.message"
                      rows="4"
                      required
                    ></b-form-textarea>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-button
                class="p-2 mt-4"
                type="submit"
                variant="outline-success"
              >
                Submit via WhatsApp
              </b-button>
            </b-form>
          </b-col>
          <b-col cols="12" md="6">
            <img
              :src="require('@/assets/images/IMG-20241113-WA0012.jpg')"
              class="img-fluid faded-edges"
              alt="phone-call"
            />
          </b-col>
        </b-row>
      </b-container>
    </section>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      gallery: [
        require("@/assets/boat.jpg"),
        require("@/assets/children.jpg"),
        require("@/assets/fireman.jpg"),
        require("@/assets/long exposure .jpg"),
      ],
      enquiry: {
        name: "",
        email: "",
        message: "",
      },
      whatsappNumber: "9480984996",
    };
  },
  methods: {
    submitEnquiry() {
      const message = `Name: ${this.enquiry.name}%0AEmail: ${this.enquiry.email}%0AMessage: ${this.enquiry.message}`;
      const whatsappUrl = `https://wa.me/${this.whatsappNumber}?text=${message}`;
      window.open(whatsappUrl, "_blank");
      this.enquiry = { name: "", email: "", message: "" };
    },
  },
};
</script>

<style scoped>
/* Minimal custom CSS for improved typography and padding adjustments */
container {
  background-color: #e5d2ab; /* Cream color */
}
.title {
  font-family: "Dancing Script", cursive;
  font-size: 30px;
  font-weight: 200;
  forced-color-adjust: white;
  letter-spacing: 2px;
  margin-bottom: 23%;
}
.subTitle {
  font-family: "Dancing Script", cursive;
  font-size: 20px;
}

.text-center {
  text-align: center !important;
}

.ml-auto {
  margin-left: auto !important;
}

.transparent-button {
  background-color: transparent !important;
  border: whitesmoke !important;
  color: #df0101; /* Adjust to your desired color */
  box-shadow: none;
}

.transparent-button:hover {
  color: #333; /* Adjust to your desired hover color */
}
.faded-edges {
  -webkit-mask-image: linear-gradient(
      to right,
      transparent,
      black 20%,
      black 80%,
      transparent
    ),
    linear-gradient(to bottom, transparent, black 20%, black 80%, transparent);
  mask-image: linear-gradient(
      to right,
      transparent,
      black 20%,
      black 80%,
      transparent
    ),
    linear-gradient(to bottom, transparent, black 20%, black 80%, transparent);
}

@media (max-width: 768px) {
  .display-4 {
    font-size: 2.5rem;
  }
}
</style>
