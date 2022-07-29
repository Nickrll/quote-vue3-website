import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Quotes from "../views/Quote.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/quotes",
    name: "Quotes",
    component: Quotes,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
