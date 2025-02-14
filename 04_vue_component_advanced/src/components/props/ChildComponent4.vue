<!-- 자식 컴포넌트 -->
<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  disabled: Boolean
});
</script>
<template>
  <div class="child">
    <button :disabled="props.disabled">
      Click Me
    </button>
  </div>
</template>
