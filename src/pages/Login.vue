<template>
  <div class="login">
    <div class="login__container">
      <Timeline />
    </div>
  </div>
</template>
<script lang="ts" setup>
import Timeline from "@/components/Timeline/index.vue";
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &__container {
    width: 500px;
    height: 300px;
    border-radius: 5px;
    background: #f0c32d;
  }
}
</style>
