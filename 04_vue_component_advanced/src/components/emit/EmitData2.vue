<script setup>
import { ref } from 'vue';


// 이벤트 정의
const emit = defineEmits(['someEvent']);

const handleClick = () => {
  emit('someEvent', count.value, text.value);
};

const count = ref(200);
const text = ref('안녕히 가세요.');

</script>

<template>
  <div class="child">
    <h3>Child</h3>
    count : <input type="text" v-model="count"><br>
    text : <input type="text" v-model="text"><br>

    <button @click="handleClick">emit</button>
  </div>
</template>