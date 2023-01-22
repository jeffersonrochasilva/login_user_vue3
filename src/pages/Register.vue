<template>
  <div class="register">
    <h3>{{ response }}</h3>
    <form class="form">
      <Timeline />
      <input
        v-if="generalStore.stepTimeline === 0"
        class="form__name"
        type="text"
        placeholder="Digite seu Nome"
        v-model="form.name"
      />
      <input
        v-if="generalStore.stepTimeline === 0"
        class="form__sobrenome"
        type="text"
        placeholder="Digite seu Sobrenome"
        v-model="form.lastName"
      />
      <input
        v-if="generalStore.stepTimeline === 1"
        class="form__cpf"
        type="text"
        placeholder="Digite seu cpf"
        v-model="form.cpf"
      />
      <input
        v-if="generalStore.stepTimeline === 1"
        class="form__age"
        type="text"
        placeholder="Digite sue idade"
        v-model="form.age"
      />
      <input
        v-if="generalStore.stepTimeline === 2"
        class="form__email"
        type="text"
        placeholder="Digite seu email"
        v-model="form.email"
      />
      <input
        v-if="generalStore.stepTimeline === 2"
        class="form__password"
        type="password"
        placeholder="Digite sua Senha"
        v-model="form.password"
      />
      <v-btn class="form__btn" @click="salvar">{{
        generalStore.stepTimeline === 2 ? "Cadastrar" : "Proceguir"
      }}</v-btn>
      <a href="/">Fazer login</a>
    </form>
    <form class="form">
      <Timeline />
      <input
        v-if="generalStore.stepTimeline === 0"
        class="form__name"
        type="text"
        placeholder="Digite seu Nome"
        v-model="form.name"
      />
      <input
        v-if="generalStore.stepTimeline === 0"
        class="form__sobrenome"
        type="text"
        placeholder="Digite seu Sobrenome"
        v-model="form.lastName"
      />
      <input
        v-if="generalStore.stepTimeline === 1"
        class="form__cpf"
        type="text"
        placeholder="Digite seu cpf"
        v-model="form.cpf"
      />
      <input
        v-if="generalStore.stepTimeline === 1"
        class="form__age"
        type="text"
        placeholder="Digite sue idade"
        v-model="form.age"
      />
      <input
        v-if="generalStore.stepTimeline === 2"
        class="form__email"
        type="text"
        placeholder="Digite seu email"
        v-model="form.email"
      />
      <input
        v-if="generalStore.stepTimeline === 2"
        class="form__password"
        type="password"
        placeholder="Digite sua Senha"
        v-model="form.password"
      />
      <v-btn class="form__btn" @click="salvar">{{
        generalStore.stepTimeline === 2 ? "Cadastrar" : "Proceguir"
      }}</v-btn>
      <a href="/">Fazer login</a>
    </form>
    <form class="form">
      <Timeline />
      <input
        v-if="generalStore.stepTimeline === 0"
        class="form__name"
        type="text"
        placeholder="Digite seu Nome"
        v-model="form.name"
      />
      <input
        v-if="generalStore.stepTimeline === 0"
        class="form__sobrenome"
        type="text"
        placeholder="Digite seu Sobrenome"
        v-model="form.lastName"
      />
      <input
        v-if="generalStore.stepTimeline === 1"
        class="form__cpf"
        type="text"
        placeholder="Digite seu cpf"
        v-model="form.cpf"
      />
      <input
        v-if="generalStore.stepTimeline === 1"
        class="form__age"
        type="text"
        placeholder="Digite sue idade"
        v-model="form.age"
      />
      <input
        v-if="generalStore.stepTimeline === 2"
        class="form__email"
        type="text"
        placeholder="Digite seu email"
        v-model="form.email"
      />
      <input
        v-if="generalStore.stepTimeline === 2"
        class="form__password"
        type="password"
        placeholder="Digite sua Senha"
        v-model="form.password"
      />
      <v-btn class="form__btn" @click="salvar">{{
        generalStore.stepTimeline === 2 ? "Cadastrar" : "Proceguir"
      }}</v-btn>
      <a href="/">Fazer login</a>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { Ref, ref, onMounted } from "vue";
import Timeline from "@/components/timeline/index.vue";
import request from "@/utils/request";
import { useGeneralStore } from "@/store/general";
import router from "@/router";

const generalStore = useGeneralStore();

const response: Ref<any> = ref([]);

const form = ref({
  name: "",
  lastName: "",
  cpf: "",
  age: "",
  email: "",
  password: "",
});

onMounted(() => {
  testeAxios();
});

async function testeAxios() {
  await request
    .get("usuarios.json")
    .then((res) => {
      response.value = res.data;
      console.log("%cresposta", "color: red;", response.value);
    })
    .catch((Error) => console.log(Error));
}

async function salvar() {
  if (generalStore.stepTimeline === 0) {
    if (!form.value.name || !form.value.lastName) {
      return alert("preencha os campos");
    }
    return generalStore.setStepTimeline(1);
  }
  if (generalStore.stepTimeline === 1) {
    if (!form.value.cpf || !form.value.age) return alert("preencha os campos");
    return generalStore.setStepTimeline(2);
  }

  const params = {
    name: form.value.name,
    lastName: form.value.lastName,
    cpf: form.value.cpf,
    age: form.value.age,
    email: form.value.email,
    password: form.value.password,
  };
  await request
    .post("registers.json", {
      params,
    })
    .then(() => {
      alert("Usuario Salvo com sucesso.");
      router.push("/");
    })
    .catch(() => {
      alert("ERROR");
    });
}
</script>
<style lang="scss" scoped>
.register {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form {
  width: 500px;
  height: 220px;
  border-radius: 4px;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    width: 90%;
    height: 30px;
    padding: 5px;
    margin-top: 15px;
    border-radius: 4px;
    background: rgba(189, 182, 182, 0.151);
  }
  &__btn {
    margin-top: 15px;
    background: rgb(0, 0, 255);
    color: #fff;
  }
  a {
    text-decoration: none;
    font-family: sans-serif;
    font-size: 12px;
    margin: 7px;
    color: gray;
  }
}
</style>
