<script setup>
import { inject, ref } from 'vue';


const emitter = inject('emitter');
const message = ref('');
const receiveMessage = (data) => {
    message.value = data.text;
}

emitter.on('send-message', receiveMessage);

</script>

<template>
    <div class="child">
        <h3>Child 2</h3>
        Message to A : {{ message }} <br>
    </div>
</template>