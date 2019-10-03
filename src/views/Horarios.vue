<template>
<div>
  <b-jumbotron >
    <template v-slot:header class="text-center">Horarios</template>

    <hr class="my-4">

    <b-button block  pill variant="info" to="/lunes">Lunes</b-button>
    <b-button block  pill variant="info" to="/martes">Martes</b-button>
    <b-button block  pill variant="info" to="/miercoles">Miercoles</b-button>
    <b-button block  pill variant="info" to="/jueves">Jueves</b-button>
    <b-button block  pill variant="info" to= "/viernes">Viernes</b-button>
  </b-jumbotron>

</div>

</template>

<script>
import Pagination from '../components/Pagination.vue'
export default {
    Pagination
}
</script>