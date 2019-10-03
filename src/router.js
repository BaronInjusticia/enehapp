import Vue from "vue";
import Router from "vue-router";
import Inicio from "./views/Inicio.vue";
import Estudiante from "./views/Estudiante.vue";
import Culturales from "./views/Culturales.vue";
import Sedes from "./views/Sedes.vue";
import HorarioHora from "./views/HorarioHora.vue";

import Horarios from "./views/Horarios.vue";
import Lunes from "./views/Horarios/Lunes.vue";
import Martes from "./views/Horarios/Martes.vue";
import Miercoles from "./views/Horarios/Miercoles.vue";
import Jueves from "./views/Horarios/Jueves.vue";
import Viernes from "./views/Horarios/Viernes.vue";

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
    {
      path: "/horarios",
      name: "Horarios",
      component: Horarios
    },
    { path: "/culturales", name: "Eventos Culturales", component: Culturales },
    { path: "/sedes", name: "Sedes", component: Sedes },
    { path: "/lunes", name: "Lunes", component: Lunes },
    { path: "/martes", name: "Martes", component: Martes },
    {
      path: "/miercoles",
      name: "Miercoles",
      component: Miercoles
    },
    {
      path: "/jueves",
      name: "Jueves",
      component: Jueves
    },
    {
      path: "/viernes",
      name: "Viernes",
      component: Viernes
    },
    {
      path: "/horario:hora",
      name: "Horario por Hora",
      component: HorarioHora
    }
  ]
});
