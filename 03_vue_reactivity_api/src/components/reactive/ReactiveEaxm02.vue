<script setup>
import { reactive } from 'vue';

const items = reactive([
  { id: 1, text: "리스트 1" },
  { id: 1, text: "리스트 2" },
]);

const addItem = ()=>{
  items.push({
    id:items.length + 1,
    text: `리스트 ${items.length + 1}`,
  });
}

const removeItem = (id)=>{
  const index = items.findIndex(item => item.id === id);
  if(index !== -1){
    items.splice(index, 1);
  }
}
</script>

<template>
  <button @click="addItem">추가</button><br>
  <b>아이템 클릭하면 삭제</b><br>

  <li v-for="item in items" :key="item.id">
    <span @click="removeItem(item.id)">{{ item.text }}</span>
  </li>
</template>
