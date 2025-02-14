<script setup>
import { inject} from 'vue';

const msg = inject('Child-Messgae');

</script>

<template>
    <div class="child">
        msg : {{ msg }} <br>
    </div>
</template>