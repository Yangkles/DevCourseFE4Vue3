<script setup>
import { ref, onMounted } from 'vue'
const message = ref('초기 값');
// 3초 후에 메시지를 표시
onMounted(() => {
  setTimeout(() => { message.value = '3초 로딩 이후 메세지' }, 3000);
});
</script>
<template>
  <h2>9. v-once</h2>
    <div>- 처음 한번만 렌더링</div>
    <div>- 데이터가 변경된 후 반영되지 않음</div>

  <p v-once>{{ message }}</p>
  <p>{{ message }}</p>
</template>
