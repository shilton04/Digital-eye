<template>
  <div class="container my-5">
    <h1 class="text-center mb-4 display-4 text-primary">Gallery</h1>
    <b-row>
      <b-col
        v-for="(image, index) in images"
        :key="index"
        cols="12"
        md="6"
        lg="4"
        class="mb-4 d-flex justify-content-center"
      >
        <b-card no-body class="overflow-hidden gallery-card">
          <b-card-img
            :src="image.src"
            alt="Gallery Image"
            class="gallery-image"
          />
          <div class="card-title-overlay">
            <h5 class="text-white">{{ image.title }}</h5>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "GalleryPage",
  data() {
    return {
      images: [
        {
          src: require("@/assets/images/Ballon seller .jpg"),
          title: "Balloon Seller",
        },
        { src: require("@/assets/images/boat.jpg"), title: "Boat" },
        { src: require("@/assets/images/bird.jpg"), title: "Bird" },

        { src: require("@/assets/images/brush.jpg"), title: "Brush" },
        { src: require("@/assets/images/bulb.jpg"), title: "Bulb" },
        {
          src: require("@/assets/images/bullock cart.jpg"),
          title: "Bullock Cart",
        },
        { src: require("@/assets/images/children.jpg"), title: "Children" },
        { src: require("@/assets/images/fishermen .jpg"), title: "Fishermen" },
        {
          src: require("@/assets/images/girl on boat.jpg"),
          title: "Girl on Boat",
        },
        { src: require("@/assets/images/goa church.jpg"), title: "Goa Church" },
        {
          src: require("@/assets/images/Mysore palace .jpg"),
          title: "Mysore Palace",
        },
        {
          src: require("@/assets/images/pre wedding.jpg"),
          title: "Pre Wedding",
        },
        {
          src: require("@/assets/images/railway bridge .jpg"),
          title: "Railway Bridge",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Gallery Card Styling */
.gallery-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative; /* for title overlay */
}

.gallery-card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

/* Image Styling */
.gallery-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery-image:hover {
  transform: scale(1.1);
}

/* Title Overlay Styling */
.card-title-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6); /* semi-transparent background */
  padding: 10px;
  text-align: center;
}

/* Title Styling */
h1 {
  font-weight: 700;
  color: #0d6efd; /* Primary color */
}

h5 {
  margin: 0; /* Remove default margin */
}
</style>
