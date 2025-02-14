<script setup>
import { ref } from 'vue';
import ChildComponent1 from './ChildComponent1.vue';

const count = ref(0);
</script>

<template>
    <h3>Parent Component1</h3>
    count : {{ count }}
    <ChildComponent1 v-model="count"/>
</template>