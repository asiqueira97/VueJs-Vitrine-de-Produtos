<template>
  <div id="app">
    <AppHeader />
    <AppBanner />
    <AppSlideProdutos />
    <AppNewsLetter />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppBanner from "./components/AppBanner.vue";
import AppSlideProdutos from "./components/AppSlideProdutos.vue";
import AppNewsLetter from "./components/AppNewsLetter.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppBanner,
    AppSlideProdutos,
    AppNewsLetter,
    AppFooter,
  },

  mounted() {
    // alert(this.carrinho);
  },
};
</script>