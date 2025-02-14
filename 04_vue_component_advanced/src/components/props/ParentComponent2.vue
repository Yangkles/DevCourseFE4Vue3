<script setup>
import ChildComponent2 from './ChildComponent2.vue';

const title = "Vue Props 예제입니다.";
const count = 10;
const active = true;
const items = ["Apple", "Banana", "Cherry"];
const user = { name: "Alice", age: 25 };
const today = new Date();
const callback = () => alert("Callback function!");

</script>

<template>
    <h3>Parent Component2</h3>
    <ChildComponent2 :title="title" :count="count" :active="active" :items="items" :user="user" :today="today" :callback="callback"/>
</template>
