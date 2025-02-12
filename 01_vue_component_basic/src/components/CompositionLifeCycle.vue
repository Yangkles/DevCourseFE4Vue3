<script setup>
    import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onErrorCaptured, onMounted, onUnmounted, onUpdated, ref } from 'vue';

    const message = ref("안녕하세요? Composition(Vue3) 스타일입니다.");
    const count = ref(0);

    console.log("setup 생명주기 시작", message.value);

    onBeforeMount(() => {
        console.log("onBeforeMount : DOM이 마운드 되기 이전", message.value);
    });

    onMounted(() => {
        console.log("onMounted : DOM이 마운트 됨", message.value);
        // 비동기 통신을 수행할 때도 있다.
    });

    onBeforeUpdate(() => {
        console.log("onBeforeUpdate : 데이터 변경 감지", count.value);
    });

    onUpdated(() => {
        console.log("onUpdated : DOM에서 데이터 변경이 완료된 이후", count.value);
    });

    onBeforeUnmount(() => {
        console.log("onBeforeUnmount: 컴포넌트 소멸 직전", message.value);
    });
    
    onUnmounted(() => {
        console.log("onUnmounted: 컴포넌트 소멸 후", message.value);
    });
    
    onErrorCaptured((err, instance, info) => {
        console.error("에러 발생!", err, instance, info);
    });

</script>

<template>
    <h2>{{ message }}</h2>
    <div>{{ count }}</div>
    <button @click="count++">count++</button>
    <button @click="count--">count--</button>
</template>
