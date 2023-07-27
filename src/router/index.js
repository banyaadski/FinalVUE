import Vue from "vue";
import Router from "vue-router";
import KitchenSelect from "@/pages/KitchenSelect.vue";
import BedroomSelect from "@/pages/BedroomSelect.vue";
import NotFound from "@/pages/NotFound.vue";


Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/kitchen",
      name: "Kitchen",
      component: KitchenSelect,
    },

    {
      path: "/bedroom",
      name: "Bedroom",
      component: BedroomSelect,
    },
    {
      path: "/404",
      name: "NotFound",
      component: NotFound,
    },
    {
      path: "*",
      redirect: "/404",
    },
  ],
});
