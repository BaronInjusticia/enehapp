<template>
  <div>
    <h1>Auditorio 1</h1>
    <b-table striped hover :items="ponencias1"></b-table>
        <h1>Auditorio 2</h1>
    <b-table striped hover :items="ponencias2"></b-table>
        <h1>Auditorio 3</h1>
    <b-table striped hover :items="ponencias3"></b-table>
  </div>
</template>

<script>
  export default {
    data() {
        return {
            ponencias1: [
        { Ponencia: "La historia de papa", Ponente: 'Dickerson' },
        { Ponencia: "La historia de pipi", Ponente: 'Larsen'  },
        { Ponencia: "La historia de popo", Ponente: 'Geneva'},
        { Ponencia: "La historia de pupu", Ponente: 'Jami' }
    ],
        ponencias2: [
        { Ponencia: "La historia de caca", Ponente: 'Madina' },
        { Ponencia: "La historia de cici", Ponente: 'Shanon'  },
        { Ponencia: "La historia de coco", Ponente: 'Jarred'},
        { Ponencia: "La historia de cucu", Ponente: 'Hagrid'}
    ],        
        ponencias3: [
        { Ponencia: "La historia de mama", Ponente: 'Trixie' },
        { Ponencia: "La historia de mimi", Ponente: 'Justine'  },
        { Ponencia: "La historia de momo", Ponente: 'Daniel'},
        { Ponencia: "La historia de mumu", Ponente: 'Nyah' }
    ],

        }
    }
}
</script>