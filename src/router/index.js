import Vue from "vue";
import VueRouter from "vue-router";
import CoundownTimer from "../components/CoundownTimer";
import IncrementDecrementNumber from "../components/IncrementDecrementNumber";
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    component: IncrementDecrementNumber,
  },

  {
    path: "/countdowntimer",
    component: CoundownTimer,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
