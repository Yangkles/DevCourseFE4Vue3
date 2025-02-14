<script setup>
import { inject } from 'vue';

const emitter = inject('emitter');
let count = 0;
const sendMessage = () => {
    emitter.emit('send-message', {text: `Hello From A ${count++}`})
}

</script>

<template>
    <div class="child">
        <h3>Child 1</h3>
        <button @click="sendMessage">Child1 => Child2</button>
    </div>
</template>