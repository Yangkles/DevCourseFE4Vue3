<script setup>
import { ref } from 'vue';

const count = ref(100);
const text = ref('안녕하세요?')
</script>

<template>
    <div class="child">
        <h3>Child</h3>
        count : <input type="text" v-model="count"><br>
        text : <input type="text" v-model="text"><br>

        <button @click="$emit('someEvent', count, text)"> emit </button>
    </div>
</template>