<template>
  <div class="card-produto">
    <div class="desconto">
      <div class="off">
        <span>OFF</span>
      </div>
    </div>
    <div class="product">
      <div class="imagem-produto">
        <div
          class="imagem"
          :style="{ backgroundImage: 'url(' + item.image + ')' }"
        >
          <picture>
            <img :src="item.image" />
          </picture>
        </div>
      </div>
      <div class="info" :class="classInfo">
        <span>{{ estrelas }}{{ item.title }}</span>
        <div class="avaliacao">
          <div class="estrelas">
            <div v-if="this.estrelas > 0">
              <img
                v-for="i in this.estrelas"
                :key="'com_' + i"
                src="@/assets/icons/star.png"
                alt=""
              />
              <img
                v-for="i in estrelasVazias"
                :key="'sem_' + i"
                src="@/assets/icons/star-empty.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="lista-preco" v-if="valorAntigoFormatado" :class="through">
          de R$ {{ valorAntigoFormatado }}
        </div>
        <div class="preco">
          <div class="valor">por R$ {{ valorFinalFormatado }}</div>
        </div>
        <div class="parcelas" v-if="this.item.parcelas">
          {{ valorParcelado }}
        </div>
        <div class="comprar" v-if="showBotaoComprar">
          <button
            @click="$root.addItem(item.id, item.title, valorFinalFormatado)"
          >
            Comprar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped src="@/assets/styles/app-slide-produto.css"></style>

<script>
module.exports = {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      off: 2, // 2% Off
      estrelas: 3,
    };
  },
  methods: {
    formatarValor: function (val) {
      return val
        .toFixed(2)
        .replace(".", ",")
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    },
  },
  computed: {
    estrelasVazias: function () {
      let totalEstrelasAvaliacao = 5;
      let totalEstrelasProduto = this.estrelas;
      return parseInt(totalEstrelasAvaliacao) - parseInt(totalEstrelasProduto);
    },
    valorAntigoFormatado: function () {
      return this.formatarValor(this.item.price);
    },
    valorFinalFormatado: function () {
      let valorAntigo = this.item.price;
      let off = valorAntigo - (valorAntigo * this.off) / 100;
      return this.formatarValor(off);
    },
    valorParcelado() {
      return this.item.parcelas.length > 0
        ? "ou em " +
            this.parcelas[0].quantity +
            "x de " +
            this.formatarValor(this.item.parcelas[0].value)
        : "";
    },
    through: function () {
      return this.item.id == 3 ? "through" : "";
    },
    showBotaoComprar: function () {
      return this.item.id == 1 || this.item.id == 4;
    },
  },
};
</script>