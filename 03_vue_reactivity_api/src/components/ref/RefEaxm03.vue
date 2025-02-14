<script setup>
import { ref } from 'vue';

const newTodo = ref('');
const todos = ref([
  { id: 1, text: 'Vue 공부하기', done: false },
  { id: 2, text: 'Vue 연습하기', done: false },
  { id: 3, text: 'React 복습하기', done: true },
]);
const count = ref(todos.value.length);

const addTodo = ()=>{
  if(!newTodo.value) return;
  count.value++;
  todos.value.push({id: count.value, text: newTodo.value, done: false});
  newTodo.value = '';
};

const toggleTodo = (todo)=>{
  todo.done = !todo.done;
}
</script>

<template>
  <h3>Todo-List</h3>
  <input type="text" v-model.trim="newTodo" @keyup.enter="addTodo" placeholder="할일을 입력하세요.">
  <button @click="addTodo">추가</button>
  <li v-for="item in todos" :key="item.id">
    <span @click="toggleTodo(item)" :style="{ textDecoration: item.done ? 'line-through' : 'none' }">
      {{ item.text }}
    </span> 
  </li>
</template>
