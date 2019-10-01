import Vue from "vue";
import Router from "vue-router";
import Inicio from "./views/Inicio.vue";
import Usuario from "./views/Usuario.vue";
import Horarios from "./views/Horarios.vue";
import Asistencias from "./views/Asistencias.vue";
import Sedes from "./views/Sedes.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/inicio",
      name: "Inicio",
      component: Inicio
    },
    {
      path: "/usuario:id",
      name: "Usuario",
      component: Usuario
    },
    { path: "/horarios", name: "Horarios", component: Horarios },
    { path: "/asistencias", name: "Asistencias", component: Asistencias },
    { path: "/sedes", name: "Sedes", component: Sedes }
  ]
});
