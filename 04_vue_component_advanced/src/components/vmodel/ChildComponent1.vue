<script setup>
const count = defineModel()
const increment = () => {
    count.value++;
}
</script>

<template>
    <div class="child">
        부모 count : {{ count }}<br>
        <button @click="increment">Click</button>
    </div>
</template>