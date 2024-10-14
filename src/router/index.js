import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import gallery from "@/views/gallery.vue";
import priceView from "@/views/priceView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/gallery.vue",
    name: "Gallery",
    component: gallery,
  },
  {
    path: "/priceView",
    name: "Price",
    component: priceView,
  },
  // Add other routes here if needed
];

const router = new VueRouter({
  mode: "history", // Ensure you're using history mode if that's your requirement
  base: process.env.BASE_URL,
  routes,
});

export default router;
