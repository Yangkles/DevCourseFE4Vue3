<script setup>
import { ref } from 'vue';
import ChildComponent2 from './ChildComponent2.vue';

const count = ref(0);
const text = ref('');
</script>

<template>
    <div>
        <h3>Parent Component2</h3>
        count : {{ count }} <br>
        text : {{ text }} <br>
        <ChildComponent2  v-model:count="count" v-model:text="text"/>
    </div>
</template>