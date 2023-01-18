<template>
  <div class="timeline">
    timeline
    <span> </span>
  </div>
</template>

<script lang="ts" setup>
import { Ref, ref, onMounted } from "vue";
import request from "@/utils/request";
const usuarios: Ref<any> = ref([]);
onMounted(() => {
  console.log("teste");
  testeAxios();
});

async function testeAxios() {
  await request
    .get("usuarios.json")
    .then((res) => {
      usuarios.value = res.data;
      console.log("resposta", usuarios.value);
    })
    .catch((Error) => console.log(Error));
}
</script>
<style lang="scss" scoped>
.timeline {
}
</style>
