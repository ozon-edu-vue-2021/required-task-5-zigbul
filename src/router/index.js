import Vue from "vue";
import Router from "vue-router";

import Showcase from "../components/Showcase.vue";
import Cart from "../components/Cart.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Showcase,
    },
    {
      path: "/cart",
      component: Cart,
    },
  ],
});
