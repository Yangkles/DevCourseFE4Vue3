<script setup>

// props 선언부

//props를 JS에서 활용할 일이 있으면 props 를 선언하여 받는다.
// const props = defineProps({
//     title: String,
//     count: Number,
// })

//만약 JS에서 사용 할 일이 없으면 defineProps만 선언한다.
defineProps({
    title: String,
    count: Number,
});
</script>

<template>
    <div class="child">
    <b>{{ title }}</b><br>
    Count: {{ count }}<br>
    </div>
</template>
