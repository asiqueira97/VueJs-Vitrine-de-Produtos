<template>
  <section>
    <div class="container">
      <div class="header-slide left">
        <div class="title">
          <h3>Mais Vendidos</h3>
        </div>
      </div>
    </div>
    <div class="slide" v-if="produtos">
      <carousel
        paginationActiveColor="#000000"
        paginationColor="#F8475F"
        easing="linear"
        :perPage="this.porPagina"
        :speed="300"
        :navigationEnabled="true"
      >
        <slide v-for="produto in produtos" :key="produto.id">
          <ItemProduto :item="produto" />
        </slide>
      </carousel>
    </div>

    <div v-else>Aguarde...</div>
  </section>
</template>

<style scoped src="@/assets/styles/app-slide-produto.css"></style>

<script>
import { Carousel, Slide } from "vue-carousel";
import axios from "axios";
import ItemProduto from "./ItemProduto.vue";

export default {
  components: {
    Carousel,
    Slide,
    ItemProduto,
  },
  data() {
    return {
      produtos: null,
      perPage: 4,
      windowWidth: window.innerWidth,
    };
  },
  mounted() {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => (this.produtos = response.data))
      .catch(function (error) {
        console.log("Show error notification!", error);
      });

    window.addEventListener("resize", () => {
      this.windowWidth = window.innerWidth;
    });
  },
  computed: {
    porPagina() {
      return this.windowWidth <= 768 ? 2 : 4;
    },
  },
};
</script>