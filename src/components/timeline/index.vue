<template>
  <div class="timeline">
    <div class="timeline__top">
      <div class="timeline__top__line"></div>
    </div>
    <div class="timeline__bottom">
      <div
        :class="
          generalStore.stepTimeline >= 0
            ? 'timeline__bottom__two'
            : 'timeline__bottom__one'
        "
        @click="toGo(0)"
      ></div>
      <div
        :class="
          generalStore.stepTimeline >= 1
            ? 'timeline__bottom__two'
            : 'timeline__bottom__one'
        "
        @click="toGo(1)"
      ></div>
      <div
        :class="
          generalStore.stepTimeline === 2
            ? 'timeline__bottom__two'
            : 'timeline__bottom__one'
        "
        @click="toGo(2)"
      ></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useGeneralStore } from "@/store/general";
const generalStore = useGeneralStore();

function toGo(item: number) {
  generalStore.setStepTimeline(item);
}
</script>
<style lang="scss" scoped>
.timeline {
  width: 300px;
  position: relative;

  &__top {
    width: 300px;
    height: 40px;
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
    height: 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    bottom: 2%;
    &__one {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid blue;
      background: #fff;
    }
    &__two {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid blue;
      background: blue;
    }
  }
}
</style>
