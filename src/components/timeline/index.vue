<template>
  <div class="timeline">
    <div class="timeline__top">
      <div class="timeline__top__line"></div>
    </div>
    <div class="timeline__bottom">
      <div class="timeline__bottom__one">A</div>
      <div class="timeline__bottom__two">B</div>
      <div class="timeline__bottom__three">C</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
//
</script>
<style lang="scss" scoped>
.timeline {
  width: 300px;

  &__top {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    border: 1px solid red;
    &__line {
      width: 90%;
      height: 4px;
      background: blue;
      border-radius: 4px;
      //
    }
  }
  &__bottom {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-around;
    border: 1px solid red;

    &__one {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &__two {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &__three {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
