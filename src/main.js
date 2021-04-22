import Vue from 'vue'
import App from './App.vue'

import '@/assets/styles/style.css';
import '@/assets/styles/desktop.css';
import '@/assets/styles/mobile.css';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  data: {
    carrinho: [],
  },
  mounted() {
    if (localStorage.getItem("carrinho")) {
      try {
        this.carrinho = JSON.parse(localStorage.getItem("carrinho"));
      } catch (e) {
        localStorage.removeItem("carrinho");
      }
    }
  },
  methods: {
    addItem(idProduto, nomeProduto, valorProduto) {
      this.carrinho.push({ id: idProduto, nome: nomeProduto, valor: valorProduto });
      this.gravarCarrinho();
      alert('Produto adicionado')
    },
    gravarCarrinho() {
      const item = JSON.stringify(this.carrinho);
      localStorage.setItem("carrinho", item);
    },
    limparCarrinho() {
      this.carrinho = []
      localStorage.removeItem("carrinho")
    }
  },
}).$mount('#app')


