<template>
  <div class="login">
    <div class="login__container">
      <form @submit="Entrar(e)" class="login__container__form">
        <input
          class="login__container__form__input"
          type="text"
          placeholder="Digite seu Email"
        />
        <input
          class="login__container__form__input"
          type="password"
          placeholder="Digite sua Senha"
        />
        <v-btn class="login__container__form__btn" type="submit">Entrar</v-btn>
      </form>
    </div>
  </div>
</template>
<script lang="ts" setup>
function Entrar() {
  alert("entrou");
}
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &__container {
    border-radius: 5px;
    // background: #f0c32d;
    &__form {
      width: 500px;
      height: 150px;
      border-radius: 4px;
      border: 1px solid gray;
      display: flex;
      flex-direction: column;
      align-items: center;
      &__input {
        width: 90%;
        height: 30px;
        margin-top: 15px;
        border-radius: 4px;
        border: 1px solid gray;
      }
      &__btn {
        margin-top: 15px;
        background: rgb(0, 0, 255);
        color: #fff;
      }
    }
  }
}
</style>
