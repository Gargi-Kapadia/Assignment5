import { createRouter, createWebHistory } from "vue-router";
import HomeVue from "../views/HomeVue.vue";
import LoginVue from "../views/LoginVue.vue";
import PurchaseView from "../views/PurchaseView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
      {
        path: '/',
        name: 'HomeVue',
        component: HomeVue
      },
    {
      path: '/Login',
      name: 'LoginVue',
      component: LoginVue
    },
    {
        path: '/purchase',
        name: 'PurchaseView',
        component: PurchaseView
      },
  ],
});

export default router;