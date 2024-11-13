<template>
  <div id="app">
    <nav>
      <router-link to="/">
        <b-navbar toggleable="lg" type="dark" variant="dark" class="fixed-top">
          <b-navbar-brand href="#">
            <b-img
              :to="{ path: '/', hash: '#home' }"
              :src="require('@/assets/logo1.png')"
              height="50"
              alt="Logo"
            />
          </b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
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
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  // components: {
  //   HelloWorld,
  // },
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
  background-color: #ceab65; /* Cream color */
  margin: 0;
  font-family: Arial, sans-serif;
}
</style>
