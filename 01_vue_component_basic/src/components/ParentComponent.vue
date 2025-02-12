<script setup>
    import ChildComponent from './ChildComponent.vue';

    const parentMessage = 'Hello from parent!';
</script>

<template>
    <div>
        <h2>부모 컴포넌트</h2>
        <p>- 부모 메세지 : {{ parentMessage }}</p>

        <!-- 자식 컴포넌트로 props 전달하는 방법 -->
        <!-- v-bind : 속성을 전달하는 디렉티브(vue 고유속성), 단축 표현도 존재한다. -->
        <ChildComponent v-bind:message="parentMessage"/>
        <ChildComponent :message="parentMessage"/>
        <ChildComponent message="Hello from parent!"/>
    </div>
</template>
