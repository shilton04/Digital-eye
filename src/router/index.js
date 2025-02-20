import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import gallery from "@/views/gallery.vue";
import priceView from "@/views/priceView.vue";
import sessionBooking from "@/views/sessionBooking.vue";
import ClientDetails from "@/views/ClientDetails.vue";
import LoginPage from "@/views/LoginPage.vue";
import SigupPage from "@/views/SigupPage.vue";
import BlogView from "@/views/blogView.vue";
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
  {
    path: "/booking/:title",
    name: "sessionBooking",
    component: sessionBooking,
    props: true,
  },
  {
    path: "/clientDetails/:title",
    name: "ClientDetails",
    component: ClientDetails,
    props: true,
  },
  {
    path: "/blog-view",
    name: "Blogs",
    component: BlogView,
    props: true,
  },
  {
    path: "/Login",
    name: "Login",
    component: LoginPage,
  },
  {
    path: "/Signup",
    name: "Sigup",
    component: SigupPage,
  },
  // Add other routes here if needed
];
const router = new VueRouter({
  mode: "history", // Ensure you're using history mode if that's your requirement
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return { selector: to.hash, behavior: "smooth" };
    } else {
      return { x: 0, y: 0 };
    }
  },
});

export default router;
