<script setup>
import { provide } from 'vue';
import ChildComponent1A from './ChildComponent1A.vue';
import ChildComponent1B from './ChildComponent1B.vue';

// key, value => theme로 키를 제공
provide('theme', 'dark');
</script>

<template>
    <h3>Parent Component</h3>
    <ChildComponent1A />
    <ChildComponent1B />
</template>
