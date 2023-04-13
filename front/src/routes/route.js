import { createRouter, createWebHistory } from "vue-router";
export const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../pages/hello.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
