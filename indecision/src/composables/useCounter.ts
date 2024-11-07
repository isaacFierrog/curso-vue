import { computed, ref } from 'vue';

export const useCounter = (initialValue: number = 5) => {
  const counter = ref(initialValue);
  const squareCounter = computed(() => counter.value * counter.value);

  const incrementar = () => {
    counter.value++;
  };

  const decrementar = () => {
    counter.value--;
  };

  return {
    counter,
    squareCounter,
    incrementar,
    decrementar,
  };
};
