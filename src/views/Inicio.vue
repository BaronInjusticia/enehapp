<template>
    <div>
         <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="Inicia el ENEH"
        text=""
        img-src="https://d36tnp772eyphs.cloudfront.net/blogs/2/2018/10/angel-de-la-independencia-shutterstock_1066463744.jpg"
        width="1024"
        height="480"
    ><h1>Bienvenidos a CDMX</h1>
    </b-carousel-slide>

      <!-- Slides with custom text -->
    <b-carousel-slide>
        <template v-slot:img>
            <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://cdn-5bf4af03f911c8128cc96d8a.closte.com/wp-content/uploads/2019/04/ruinas-templo-mayor-1.jpg"
            alt="image slot"
        >
        </template>
        <h1>Nuestras Sedes</h1>
    </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://mnh.inah.gob.mx/userfiles/media/castillodechapultepec-inah-gob-mx/uploaded/_dsc2705_-_copia.jpg"></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="http://www.geologia.unam.mx/uploads/article/Eventos_Museo_IGL/2019/February/824/PATRICK_JOHANSSON_KERAUDREN_museo_geologia.jpg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
    </b-carousel>
    </div>

</template>

<script>

  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>