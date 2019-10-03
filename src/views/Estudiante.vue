<template>
<div>
  <b-card img-left >
    <b-tabs card fill>

      <b-tab title="Perfil">
        <h1 class="text-center" >{{ Nombre }}</h1>
        <b-card  img-src="https://i.imgur.com/Z6wB076.png" img-left rounded >
        <b-card-text>Escuela: <b>{{Escuela}}</b></b-card-text>
        <b-card-text><b>{{Tipo}}</b></b-card-text>
        <b-card-text>Numero: <b>{{Numero}}</b></b-card-text>
        </b-card>
      </b-tab>

      <b-tab title="Asistencias">
        <h1 class="text-center">Total de asistencias: {{asistenciasTotal}}</h1>
        <b-table striped hover :items="asistencias"></b-table>
      </b-tab>

    </b-tabs>
  </b-card>
</div>
</template>

<script>
  export default {
    data() {
      return {
        estudiante:
        {nombre:  'Pepito Perez ', escuela: 'ENAH ', tipo: 'Ponente ', numero:"EN44"},
        asistencias: [
          { Mesa: 40, Sede: 'Castillo', Hora: '10:00' },
          { Mesa: 21, Sede: 'Piña Chan', Hora: '11:00' },
          { Mesa: 89, Sede: 'Templo Mayor', Hora: '12:00' },
          { Mesa: 38, Sede: 'Romero', Hora: '1:00' }
        ]
      }
    },
    computed: {
      asistenciasTotal(){
        return this.asistencias.length
      },
      Nombre(){
        return `Hola!  ${this.estudiante.nombre}`
      },
      Escuela(){
        return this.estudiante.escuela
      },
      Tipo(){
        return this.estudiante.tipo
      },
      Numero(){
        return this.estudiante.numero
      }
    },
  }
</script>
