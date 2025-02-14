<script setup>
import { inject, provide } from 'vue';

const theme = inject('theme');
const message = inject('message');
provide('Child-Message', '자식에서 보낸 메세지')

</script>

<template>
    <div class="child">
        Theme : {{ theme }} <br>
        Message : {{ message }} <br>
    </div>
</template>