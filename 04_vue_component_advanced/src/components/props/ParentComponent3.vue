<script setup>
import ChildComponent3 from './ChildCOmponent3.vue';


</script>

<template>
    <h3>Parent Component3</h3>
    <ChildComponent3 :props-a="10" props-b="Hello world" props-c="required" props-f="성공"/>
</template>
s