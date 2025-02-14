<script setup>
import ParentComponent1 from './ParentComponent1.vue';
import ParentComponent2 from './ParentComponent2.vue';


</script>

<template>
    <h2>2. emit - 방출, 자식에서 부모로의 이벤트 전파</h2>  
    - Vue의 emit은 자식 컴포넌트에서 부모 컴포넌트로 이벤트를 전달하는 메커니즘이다. <br> 
    - Vue3에서 도입된 $emit을 기반으로 활용하는 문법으로 단축된 emit 활용을 지원한다.<br>
    - 부모에서는 @some-event와 같이 kebab-case로 선언하고, 자식에는 camelCase로 호출하여도 문제없다.<br>
    - 또한 vue2 부터 활용하던 emit 패턴으로 defineEmits을 통해 emit을 활용하는 방법도 존재 <br>
    <hr/>

    <h3>2.1 $emit / defineEmits 기본 예제</h3>
    <ParentComponent1/>
    <hr><br>

    <h3>2.2 $emit / defineEmits 데이터 전달 예제</h3>
    <ParentComponent2/>
    <hr><br>
</template>