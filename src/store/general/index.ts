import { defineStore } from "pinia";
import { Ref, ref } from "vue";

export const useGeneralStore = defineStore("general", () => {
  const loading: Ref<boolean> = ref(false);
  const stepTimeline: Ref<number> = ref(0);

  function setStepTimeline(item: number) {
    stepTimeline.value = item;
  }
  return {
    setStepTimeline,
    stepTimeline,
    loading,
  };
});
