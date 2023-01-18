import { defineStore } from "pinia";
import { Ref, ref } from "vue";

export const useGeneralStore = defineStore("general", () => {
  const loading: Ref<boolean> = ref(false);
  return {
    loading,
  };
});
