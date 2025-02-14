<script setup>
import { inject, provide } from 'vue';

const theme = inject('theme');
provide('Child-Message', '자식에서 보낸 메세지')

</script>

<template>
    <div class="child">
        theme : {{ theme }} <br>
    </div>
</template>