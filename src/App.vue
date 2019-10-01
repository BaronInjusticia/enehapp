<template>
  <div id="app">
    <div id="nav">
    <Navbar />
    </div>
    <router-view/>
  </div>
</template>


<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'navbar ',
  components: {
    Navbar
  }
}
</script>


<style>

</style>
