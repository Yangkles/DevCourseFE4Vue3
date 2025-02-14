
<script setup >
import { ref, watch } from 'vue';

const count = ref(0);
const logs = ref([]);

// 1. 가장 기본 꼴
// watch(count, ()=>{
//   logs.value.push(count.value);
// });

// 2. 신규값만 가져오는 방법
// watch(count, (newValue)=>{
//   logs.value.push(newValue);
// });

// 3. new + old값 가져오기
watch(count, (newValue, oldValue)=>{
  console.log(`count 변경: ${oldValue} → ${newValue}`);
  logs.value.push(`count 변경: ${oldValue} → ${newValue}`);
});

const increment = ()=>{
  count.value++;
}
const decrement = ()=>{
  count.value--;
}

</script>

<template>
  <div>
    count : {{ count }}<br>
    <button @click="increment">증가</button>
    <button @click="decrement">감소</button>
    <div v-for="item in logs">
      {{ item }}
    </div>
  </div>
</template>
