<script setup>
import ParentComponent1 from './ParentComponent1.vue';


</script>

<template>
    <h2>1. props - 속성, 부모 자식 간 데이터 전달</h2>
    - Props는 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달하는 방법 <br>
    - defineProps를 통해 자식 컴포넌트에서 부모에서 받을 props를 정의 <br>
    - 부모 컴포넌트에서 자식 컴포넌트 활용 시 정의된 props의 자동 완성을 지원한다.<br>
    - html 속성 처럼 camelCase가 아닌 kebab-case로 이름을 정의하는 것을 권장 (greeting-message="안녕!")<br>
    - 단방향 데이터 흐름을 유지해야 하며, props로 받은 값은 자식에서 직접 수정할 수 없다. (read only)<br>
    - 단방향 데이터 흐름일지라도 부모에서 props를 변경하면 이를 감지하여 자동으로 업데이트 된다. <br>
    <hr>
    <h3>1.1 기본 예제</h3>
    <ParentComponent1/>
    <hr><br>
</template>

