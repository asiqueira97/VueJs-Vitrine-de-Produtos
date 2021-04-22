<template>
  <section>
    <form @submit="validarCampos">
      <div class="row" v-if="status == 'form'">
        <div class="info-secao">
          <h3>Participe de nossas news com promoções e novidades!</h3>
          <div class="form">
            <div class="item col-4">
              <input
                type="text"
                v-model="nome"
                name="nome"
                :class="erroNome ? 'error' : ''"
                placeholder="Digite seu nome"
              />
              <span class="erro-campo" v-if="erroNome">Nome obrigatório</span>
              <span v-else style="visibility: hidden">.</span>
            </div>
            <div class="item col-4">
              <input
                name="email"
                type="email"
                v-model="email"
                :class="erroEmail ? 'error' : ''"
                placeholder="Digite seu email"
              />
              <span class="erro-campo" v-if="erroEmail">Email obrigatório</span>
              <span v-else style="visibility: hidden">.</span>
            </div>
            <div class="item col-2">
              <button type="submit">Enviar</button>
              <span style="visibility: hidden">.</span>
            </div>
          </div>
        </div>
      </div>

      <div v-else>
        <div class="row">
          <div class="info-secao">
            <h3>Seu email foi cadastrado com sucesso!</h3>
            <div class="form">
              <div class="item col-12">
                <p class="message-news">
                  Seu e-mail foi cadastrado com sucesso! A partir de agora você
                  receberá as novidade e ofertas exclusivas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </section>
</template>

<style scoped src="@/assets/styles/app-news.css"></style>

<script>
export default {
  data() {
    return {
      nome: null,
      email: null,
      erroNome: false,
      erroEmail: false,
      status: "form",
      response: null,
    };
  },

  methods: {
    async validarCampos(e) {
      e.preventDefault();

      if (!this.nome && !this.email) {
        this.erroNome = true;
        this.erroEmail = true;
      } else if (!this.nome) {
        this.erroNome = true;
      } else if (!this.email) {
        this.erroEmail = true;
      } else {
        this.status = "enviado";
      }
    },
  },

  watch: {
    nome: function () {
      !this.nome ? (this.erroNome = true) : (this.erroNome = false);
    },
    email: function () {
      !this.email ? (this.erroEmail = true) : (this.erroEmail = false);
      var reg = /\S+@\S+\.\S+/;
      if (!reg.test(this.email)) this.erroEmail = true;
    },
  },
};
</script>