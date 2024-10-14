<template>
  <div>
    <b-container fluid class="p-0">
      <!-- Navigation Bar -->
      <b-navbar
        toggleable="lg"
        type="dark"
        variant="dark"
        class="digital-eye-navbar fixed-top"
      >
        <!-- Brand Logo -->
        <b-navbar-brand class="p-0 ml-3" href="#">
          <b-img
            :src="require('@/assets/logo.png')"
            height="50"
            width="110"
            class="p-0 ml-2 opacity-100 d-block"
            style="transform: scale(1.5)"
          ></b-img>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <!-- Scrollable Links with Scroll Behavior -->
            <b-nav-item href="#home">Home</b-nav-item>
            <b-nav-item href="#about">About</b-nav-item>
            <b-nav-item href="#gallery">Gallery</b-nav-item>
            <b-nav-item href="#services" @click.prevent="scrollTo('services')"
              >Services</b-nav-item
            >
            <b-nav-item href="#contact" @click.prevent="scrollTo('contact')"
              >Contact</b-nav-item
            >
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>

      <!-- Hero Section -->
      <!-- <div id="home" class="vh-100">
        <b-row class="h-100 align-items-center">
          <b-col cols="12" sm="10" md="12">
            <b-img
              :src="require('@/assets/bg.jpg')"
              fluid
              class="w-100 h-50"
              alt="Background Image"
            > -->
      <!-- Add your content here if necessary -->
      <!-- <div class="text-center"></div>
            </b-img>
          </b-col>
        </b-row>
      </div> -->

      <section
        id="home"
        class="d-none d-md-flex d-flex align-items-center text-center"
        :style="{
          backgroundImage: 'url(' + require('@/assets/bg.jpg') + ')',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '102%',
          height: '100vh',
        }"
      >
        <b-container>
          <b-row class="text-center">
            <b-col>
              <h1 class="hero-title">Capture the Future with</h1>
              <p class="hero-subtitle">Your moments, our vision.</p>
              <b-button variant="light" size="lg" class="m-3" to="/gallery.vue">
                Explore Gallery
              </b-button>
              <b-button variant="light" size="lg" class="m-3" to="/priceView">
                Booking Form
              </b-button>
            </b-col>
          </b-row>
        </b-container>
      </section>

      <!-- Section for small screens -->
      <section
        id="home-mobile"
        class="d-block d-md-none d-flex align-items-center text-center"
        :style="{
          backgroundImage: 'url(' + require('@/assets/bg.jpg') + ')',
          backgroundSize: 'contain', // Adjusts the image size
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '107%', // Adjust the width as needed
          height: '100%',
          margin: '0 auto', // Center the section
        }"
      >
        <b-container>
          <b-row class="text-center">
            <b-col>
              <small class="hero-title">Capture the Future with</small>
              <p class="hero-subtitle">Your moments, our vision.</p>
              <b-button
                variant="light"
                size="lg"
                class="mt-3"
                to="/gallery.vue"
              >
                Explore Gallery
              </b-button>
              <b-button variant="light" size="lg" class="mt-3" to="/package">
                View package
              </b-button>
            </b-col>
          </b-row>
        </b-container>
      </section>

      <!-- About Us Section -->
      <section id="about" class="mt-5 p-2" style="padding-top: 0%">
        <b-container>
          <b-row>
            <h2>About Digital Eye</h2>
            <b-col md="6">
              <img
                :src="require('@/assets/cameraman.jpg')"
                class="img-fluid"
                style="height: 350px; width: 250px"
                alt="Photographer"
              />
            </b-col>
            <b-col md="6" class="mt-5">
              <p class="mt-3">
                At Digital Eye, we believe that every photograph is more than
                just an image—it's a story waiting to be told. Our team of
                professional photographers is dedicated to capturing the essence
                of each moment with a blend of creativity, precision, and
                innovation. Whether it's the fleeting emotions of a wedding, the
                excitement of a live event, or the intimacy of a personal
                photoshoot, we strive to go beyond the surface, immortalizing
                each moment with a futuristic, artistic touch. We are passionate
                about using advanced techniques and cutting-edge technology to
                ensure that your memories are not only preserved but elevated
                into visual works of art that can be cherished for a lifetime.
                At Digital Eye, your moments are our vision.
              </p>
            </b-col>
          </b-row>
        </b-container>
      </section>

      <!-- Gallery Section -->
      <section id="gallery" class="gallery-section text-center my-5">
        <h2>Our Work</h2>
        <p>Discover the artistry through our lenses.</p>
        <b-row class="mt-4">
          <b-col
            cols="12"
            md="3"
            class="mb-4"
            v-for="(image, index) in gallery"
            :key="index"
          >
            <b-card class="futuristic-card">
              <b-card-img :src="image" alt="Gallery image"></b-card-img>
              <b-card-text> Digital Eye </b-card-text>
            </b-card>
          </b-col>
        </b-row>
      </section>

      <!-- Services Section -->
      <section id="services" class="services-section py-5 text-center">
        <b-container>
          <h2>Our Services</h2>
          <p>Explore the services we offer to capture your special moments.</p>
          <b-row class="mt-4">
            <b-col cols="12" md="4">
              <b-card title="Wedding Photography" class="service-card">
                <p>Capturing the magic of your special day.</p>
              </b-card>
            </b-col>
            <b-col cols="12" md="4">
              <b-card title="Event Photography" class="service-card">
                <p>
                  Professional coverage for corporate events, concerts, and
                  more.
                </p>
              </b-card>
            </b-col>
            <b-col cols="12" md="4">
              <b-card title="Personal Photoshoots" class="service-card">
                <p>Personalized photoshoots for individuals and families.</p>
              </b-card>
            </b-col>
          </b-row>
        </b-container>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="social-media-section text-center py-5">
        <b-container>
          <h5>Connect with us</h5>
          <div class="social-icons">
            <a
              href="https://www.instagram.com/_.digital_eye._"
              target="_blank"
              class="mx-2 p-2 text-white"
            >
              <i class="fab fa-instagram fa-2x text-danger"></i>
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              class="mx-2 p-2 text-white"
            >
              <i class="fab fa-facebook fa-2x text-primary"></i>
            </a>
            <a
              href="https://www.youtube.com/@digitaleyephotography286"
              target="_blank"
              class="mx-2 p-2 text-white"
            >
              <i class="fab fa-youtube fa-2x text-danger"></i>
            </a>
            <a
              href="https://wa.me/9480984996"
              target="_blank"
              class="mx-2 p-2 text-white"
            >
              <i class="fab fa-whatsapp fa-2x text-success"></i>
            </a>
          </div>
        </b-container>
      </section>

      <!-- Enquiry Section -->
      <section
        id="contact"
        class="enquiry-section py-5 text-center align-items-center"
      >
        <b-container>
          <h2>Enquire Now</h2>
          <p>
            We would love to hear from you! Send us a message and we'll get back
            to you.
          </p>
          <b-form class="p-2" @submit="submitEnquiry">
            <b-row>
              <b-col cols="12" md="6" lg="6" class="mb-3">
                <b-form-group label="Name">
                  <b-form-input v-model="enquiry.name" required></b-form-input>
                </b-form-group>
              </b-col>
              <b-col cols="12" md="6" lg="6" class="mb-3">
                <b-form-group label="Email">
                  <b-form-input
                    v-model="enquiry.email"
                    type="email"
                    required
                  ></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
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
            <b-button type="submit" variant="primary"
              >Submit via WhatsApp</b-button
            >
          </b-form>
        </b-container>
      </section>

      <!-- Footer -->
      <footer class="digital-eye-footer text-center p-3">
        <p>&copy; 2024 Digital Eye. All Rights Reserved.</p>
      </footer>
    </b-container>
  </div>
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
      whatsappNumber: "9480984996", // Replace with the actual WhatsApp number
    };
  },
  methods: {
    scrollTo(section) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
    submitEnquiry() {
      const message = `Name: ${this.enquiry.name}%0AEmail: ${this.enquiry.email}%0AMessage: ${this.enquiry.message}`;

      // WhatsApp API URL
      const whatsappUrl = `https://wa.me/${this.whatsappNumber}?text=${message}`;

      // Open WhatsApp with the message
      window.open(whatsappUrl, "_blank");

      // Clear form fields after submission
      this.enquiry = { name: "", email: "", message: "" };
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400&display=swap");

/* Navbar styling */
.digital-eye-navbar {
  background-color: #1a1a1a;
  border-bottom: 1px solid #4a4a4a;
}
.ml-auto {
  margin-left: auto !important;
}

#home,
#about,
#gallery,
#services,
#contact {
  scroll-margin-top: 70px; /* Adjust this value if your navbar height is different */
}

/* Hero Section */
.hero-section {
  height: 100vh;
  color: white;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.8);
}

.hero-title {
  font-family: "Dancing Script", cursive;
  font-weight: 400;
  forced-color-adjust: white;
  letter-spacing: 3px;
  margin-bottom: 23%;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-top: 20px;
}

/* About Section */
.about-section {
  background-color: #f8f9fa;
  color: #333;
}

/* Gallery and Cards */
.futuristic-card {
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: none;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease-in-out;
}

.futuristic-card:hover {
  transform: translateY(-10px);
}

/* Services Section */
.services-section {
  background-color: #e9ecef;
  color: #333;
}

.service-card {
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  border: none;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
}
/* Enquiry Section */
.enquiry-section {
  background-color: #f9f9f9;
  color: #333;
}

/* Footer styling */
.digital-eye-footer {
  background-color: #1a1a1a;
  color: white;
  position: relative;
  bottom: 0;
  width: 100%;
}

@media only screen and (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  .hero-subtitle {
    font-size: 1.2rem;
  }
}
</style>
