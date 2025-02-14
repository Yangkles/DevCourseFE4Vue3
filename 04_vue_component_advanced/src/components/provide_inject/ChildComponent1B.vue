<script setup>
import { inject} from 'vue';

const msg = inject('Child-Messgae');

</script>

<template>
    <div class="child">
        ChildMessage : {{ msg ? msg : '전달되지 않음' }} <br>
    </div>
</template>