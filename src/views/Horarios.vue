<template>
<div>
  <b-jumbotron >
    <template v-slot:header class="text-center">Horarios</template>

    <hr class="my-4">

    <p>
      It uses utility classes for typography and spacing to space content out within the larger
      container.
    </p>

    <b-button variant="primary" href="#">Do Something</b-button>
    <b-button variant="success" href="#">Do Something Else</b-button>
  </b-jumbotron>
</div>
</template>

<script>
import Pagination from '../components/Pagination.vue'
export default {
    Pagination
}
</script>