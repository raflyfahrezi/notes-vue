import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/add-note",
      name: "add-note",
      component: () => import("@/views/NoteAddView.vue"),
    },
  ],
});

export default router;
