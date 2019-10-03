import Vue from "vue";
import Router from "vue-router";
import Inicio from "./views/Inicio.vue";
import Horarios from "./views/Horarios.vue";
import Culturales from "./views/Culturales.vue";
import Sedes from "./views/Sedes.vue";

import Estudiante from "./views/Estudiante.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "default",
      component: Inicio
    },
    {
      path: "/inicio",
      name: "Inicio",
      component: Inicio
    },
    {
      path: "/estudiante:id",
      name: "Estudiante",
      component: Estudiante
    },
    { path: "/horarios", name: "Horarios", component: Horarios },
    { path: "/culturales", name: "Eventos Culturales", component: Culturales },
    { path: "/sedes", name: "Sedes", component: Sedes }
  ]
});
