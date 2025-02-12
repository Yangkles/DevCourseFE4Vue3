<script setup>
    // 부모로부터 전달 받은 props 정의하는 방법
    defineProps({
        message: String,
    });
</script>

<template>
    <div>
        <h3>자식 컴포넌트</h3>
        <p>- 부모로부터 전달 받은 메세지 : {{ message }}</p>
    </div>
</template>