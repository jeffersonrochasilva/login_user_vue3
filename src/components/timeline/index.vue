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
  position: relative;

  &__top {
    width: 300px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    &__line {
      width: 200px;
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
    align-items: center;
    border: 1px solid red;
    position: absolute;
    bottom: 2%;
    &__one {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid blue;
      background: #fff;
    }
    &__two {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid blue;
      background: #fff;
    }
    &__three {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid blue;
      background: #fff;
    }
  }
}
</style>
