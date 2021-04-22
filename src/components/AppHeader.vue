<template>
  <section>
    <label class="control-nav"></label>
    <label class="control-nav-close"></label>

    <div class="control-nav-cart">
      <img class="icon" src="@/assets/icons/cart.png" />
    </div>
    <span class="badge-mobile" if="$root.carrinho">{{
      $root.carrinho.length
    }}</span>

    <div class="container">
      <div class="row">
        <div class="col-4">
          <h4>LOGOMARCA</h4>
        </div>
        <div class="col-4">
          <AppCampoBusca />
        </div>
        <div class="col-4 left options-desktop">
          <div class="nav">
            <div class="option">
              <img class="icon" src="@/assets/icons/user.png" /><span
                >Minha conta</span
              >
            </div>
            <div class="option">
              <img class="icon" src="@/assets/icons/cart.png" />
              <span class="badge" if="$root.carrinho">{{
                $root.carrinho.length
              }}</span>
            </div>
            <small style="cursor: pointer" @click="$root.limparCarrinho()"
              >Limpar</small
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped src="@/assets/styles/app-header.css"></style>

<script>
import AppCampoBusca from "./AppCampoBusca.vue";

export default {
  name: "App",
  components: {
    AppCampoBusca,
  },
};
</script>