<template>
  <div class="timeline">
    <div class="app">
      <div class="container">
        <label>Nome </label>
        <input
          type="text"
          placeholder="Digite seu noem"
          v-model="usuario.nome"
        /><br /><br />
        <label>email </label>
        <input
          type="text"
          placeholder="Digite seu email"
          v-model="usuario.email"
        />
        <hr />
        <button class="button" style="background: #1e90ff" @click="salvar()">
          Salvar
        </button>
        <button
          class="button"
          style="
            width: 120px;
            background: #32cd32;
            padding-left: 5px;
            padding-right: 5px;
          "
        >
          Obter Usuário
        </button>
      </div>
      <hr />
      <ul class="list" v-if="usuarios.length > 0">
        <li v-for="(item, i) in usuarios" :key="i">
          <strong>Nome: {{ item.nome }}</strong
          ><br />
          <strong>Email: {{ item.email }}</strong
          ><br />
          <strong>ID: {{ item.id }}</strong
          ><br />

          <button class="button" style="background: #ffdb58; color: #000">
            Excluir
          </button>
          <button class="button" style="background: #cd5c5c; color: #000">
            Carregar
          </button>
        </li>
      </ul>
      <br />
      <br />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Ref, ref, onMounted } from "vue";
import request from "@/utils/request";
const usuarios: Ref<any> = ref([]);
const usuario: Ref<any> = ref({
  nome: "",
  email: "",
});
onMounted(() => {
  console.log("teste");
  testeAxios();
});

async function testeAxios() {
  const userData = {
    uid: "454541",
    email: "jefferson",
  };

  localStorage.setItem("@detailUser", JSON.stringify(userData));

  await request
    .get("usuarios.json")
    .then((res) => {
      usuarios.value = res.data;
      console.log("resposta", usuarios.value);
    })
    .catch((Error) => console.log(Error));
}

async function salvar() {
  await request
    .post("usuarios.json", {
      usuario,
    })
    .then(() => {
      alert("Usuario Salvo com sucesso.");
    })
    .catch(() => {
      alert("ERROR");
    });
}
</script>
<style lang="scss" scoped>
.timeline {
}

.button {
  width: 100px;
  height: 30px;
  border-radius: 4px;
  background: rgb(117, 188, 236);
  color: #fff;
  border-style: none;
  margin: 10px;
}
.app {
  width: 100%;
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container {
  border: 1px solid gray;
  padding: 30px;
  background: #f0c32d;
}
li {
  width: 600px;
  border: 1px solid gray;
  padding: 15px 55px;
  list-style: none;
}
ul {
  margin: 0;
  padding: 0;
}
input {
  width: 600px;
}
h1,
span,
label,
button,
strong {
  font-family: sans-serif;
}

hr {
  margin: 30px 0;
}
</style>
