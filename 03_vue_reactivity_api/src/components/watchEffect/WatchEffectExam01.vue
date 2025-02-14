<script setup >
import { ref, watchEffect } from 'vue';

const count = ref(0);
const logs = ref([]);

watchEffect(()=>{
  logs.value.push(`count 변경 : ${count.value}`);
});
const increment = ()=>{
  count.value++;
}
const decrement = ()=>{
  count.value--;
}
</script>

<template>
  <p>카운트: {{ count }}</p>
  <button @click="increment">증가</button>
  <button @click="decrement">감소</button>
  <div v-for="item in logs" v-bind:key="item">
    {{ item }}
  </div>
</template>
