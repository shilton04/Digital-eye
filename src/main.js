import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueScrollTo from "vue-scrollto";
import { Clerk } from "@clerk/clerk-js";
import "@/assets/styles/global.css";

// Initialize Clerk with your API key
const clerk = new Clerk(
  "pk_test_cnVsaW5nLW1hY2tlcmVsLTM1LmNsZXJrLmFjY291bnRzLmRldiQ"
); // Replace with your actual frontend API key

// Load Clerk
clerk
  .load()
  .then(() => {
    console.log("Clerk loaded successfully"); // Log when Clerk has loaded
  })
  .catch((error) => {
    console.error("Clerk failed to load:", error); // Log any errors during load
  });

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(VueScrollTo);

new Vue({
  router,
  provide: {
    clerk, // Make Clerk globally accessible
  },
  render: (h) => h(App),
}).$mount("#app");
