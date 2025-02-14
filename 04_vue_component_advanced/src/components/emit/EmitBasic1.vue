<script setup>

</script>

<template>
    <div class="child">
        <h3>Click</h3>
        <!-- someEvent : 부모에서 정의한 이벤트의 이름. -->
        <button @click="$emit('someEvent')"> Click me</button>
    </div>
</template>
