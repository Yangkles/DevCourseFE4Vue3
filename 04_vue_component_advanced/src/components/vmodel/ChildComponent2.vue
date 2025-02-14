<script setup>
const count = defineModel('count')
const text = defineModel('text')
const increment = () => {
    count.value++;
}
</script>

<template>
    <div class="child">
        부모 count : {{ count }}
        <button @click="increment">Click</button><br>
        <input type="text" v-model="text">
    </div>
</template>