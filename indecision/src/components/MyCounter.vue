<template>
  <section>
    <h3>Square: {{ squareCounter }}</h3>
    <h3>Counter: {{ counter }}</h3>

    <div>
      <button @click="incrementar">+1</button>
      <button @click="decrementar">-1</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useCounter } from '@/composables/useCounter';

interface Props {
  value: number;
}
defineProps<Props>();

const { counter, squareCounter, incrementar, decrementar } = useCounter(10);
</script>
