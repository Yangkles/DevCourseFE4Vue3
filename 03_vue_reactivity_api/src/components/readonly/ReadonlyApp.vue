<script setup>
import { ref, readonly } from 'vue'
const message = ref('초기 메시지'); // 변경 가능한 값
const readOnlyMessage = readonly(message); // 읽기 전용 값
readOnlyMessage.value = "test";
</script>
<template>
  <h2>6. readonly 예제</h2>
  - Vue의 반응형 상태를 읽기 전용(immutable)으로 만들어 수정이 불가능하게 하는 기능<br>
  <hr>
  <p>메시지: {{ message }}</p>
  <p>읽기 전용 메시지: {{ readOnlyMessage }}</p>
  <input v-model="message" placeholder="변경 가능" /><br>
  <input v-model="readOnlyMessage" placeholder="읽기 전용" /><br>
</template>
