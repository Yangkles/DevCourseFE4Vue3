<script setup>
import { defineEmits } from 'vue';

// 이벤트 정의
const emit = defineEmits(['someEvent']);

const handleClick = () => {
  emit('someEvent');
};
</script>

<template>
  <div class="child">
    <h3>Child</h3>
    <button @click="handleClick">Click me</button>
  </div>
</template>