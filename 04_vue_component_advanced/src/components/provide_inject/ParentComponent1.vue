<script setup>
import { provide } from 'vue';
import ChildComponent1 from './ChildComponent1.vue';
import ChildComponentA from './ChildComponentA.vue';

// key, value => theme로 키를 제공
provide('theme', 'dark');
</script>

<template>
    <h3>Parent Component</h3>
    <ChildComponent1 />
    <ChildComponentA />
</template>
