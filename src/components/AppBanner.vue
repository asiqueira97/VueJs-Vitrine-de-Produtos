<template>
  <section>
    <carousel
      paginationActiveColor="#000000"
      paginationColor="#F8475F"
      easing="linear"
      :perPage="1"
      :speed="300"
    >
      <slide v-for="i in 4" :key="i">
        <div class="background">
          <img
            src="@/assets/images/banner.png"
            :class="isMobile ? 'filter' : ''"
          />
          <div class="overlay" v-if="!isMobile">
            <img src="@/assets/images/shape.png" alt="" />
            <div class="text">
              <h3>Olá, o que você está buscando?</h3>
              <p>
                Criar ou migrar seu <br />
                e-commerce?
              </p>
            </div>
          </div>

          <div v-else>
            <div>
              <div class="text-mobile">
                <p class="saudacao">Olá, o que você está buscando?</p>
                <p class="pergunta">
                  Criar ou migrar seu <br />
                  e-commerce?
                </p>
              </div>
            </div>
          </div>
        </div>
      </slide>
    </carousel>
  </section>
</template>

<style scoped src="@/assets/styles/app-banner.css"></style>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      windowWidth: window.innerWidth,
    };
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.windowWidth = window.innerWidth;
    });
  },
  computed: {
    isMobile() {
      return this.windowWidth <= 768;
    },
  },
};
</script>