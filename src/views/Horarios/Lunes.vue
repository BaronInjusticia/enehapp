<template>
<div>
  <b-card-group>
    <b-card title="Castillo de Chapultepec" img-src="https://cdn3.m.admexico.mx/uploads/images/thumbs/mx/ad/1/s/2018/39/castillo_chapultepec_casa_descanso_museo_historia_2612_600x.jpg" img-alt="Image" img-top>
      <template v-slot:footer>
        <b-button href="#" variant="primary" size="lg"  pill to="/horario:hora">11:00</b-button>
        <b-button href="#" variant="primary" size="lg" pill  to="/horario:hora">12:00</b-button>
        <b-button href="#" variant="primary" size="lg" pill  to="/horario:hora">1:00</b-button>
        <b-button href="#" variant="primary" size="lg" pill  to="/horario:hora">3:00</b-button>
        <b-button href="#" variant="primary" size="lg" pill  to="/horario:hora">4:00</b-button>
    </template>
    </b-card>

    <b-card title="Templo Mayor" img-src="https://d36tnp772eyphs.cloudfront.net/blogs/2/2019/01/Templo-mayor-ciudad-de-mexico-940x626.jpg" img-alt="Image" img-top>

      <template v-slot:footer>        <b-button href="#" variant="primary" size="lg"  pill to="/horario:hora">11:00</b-button>
        <b-button href="#" variant="primary" size="lg" pill  to="/horario:hora">12:00</b-button>
        <b-button href="#" variant="primary" size="lg" pill  to="/horario:hora">1:00</b-button>
        <b-button href="#" variant="primary" size="lg" pill  to="/horario:hora">3:00</b-button>
        <b-button href="#" variant="primary" size="lg" pill  to="/horario:hora">4:00</b-button>
      </template>
    </b-card>

    <b-card title="Auditorio Piña Chan" img-src="https://i1.wp.com/noticieros.televisa.com/wp-content/uploads/2018/09/asamblea-interuniversitaria-2.jpg?resize=995%2C602&quality=95&ssl=1" img-alt="Image" img-top>

      <template v-slot:footer>        
        <b-button href="#" variant="primary" size="lg"  pill to="/horario:hora">11:00</b-button>
        <b-button href="#" variant="primary" size="lg" pill  to="/horario:hora">12:00</b-button>
        <b-button href="#" variant="primary" size="lg" pill  to="/horario:hora">1:00</b-button>
        <b-button href="#" variant="primary" size="lg" pill  to="/horario:hora">3:00</b-button>
        <b-button href="#" variant="primary" size="lg" pill  to="/horario:hora">4:00</b-button>
      </template>
    </b-card>
  </b-card-group>

  <b-pagination-nav :pages="dias" align="fill" use-router></b-pagination-nav>

</div>
</template>

<script>
export default {
  data() {
    return {
      // Simple array of strings
      dias: [
        { link: '/lunes', text: 'Lunes' },
        { link: '/martes', text: 'Martes' },
        { link: '/miercoles', text: 'Miercoles' },
        { link: '/jueves', text: 'Jueves' },
        { link: '/viernes', text: 'Viernes' }
      ]}
    }
}
</script>
