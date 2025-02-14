<script setup>
import ChildComponent1 from './ChildComponent1.vue';


</script>

<template>
    <div>
        <h3>Parent Component1</h3>
        <ChildComponent1 title="Vue의 Props 예제" :count="10"/>
    </div>
</template>
