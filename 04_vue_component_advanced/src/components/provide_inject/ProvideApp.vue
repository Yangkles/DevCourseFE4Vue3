<script setup>
import ParentComponent1 from './ParentComponent1.vue';
import ParentComponent2 from './ParentComponent2.vue';


</script>

<template>
    <h2>4. Provide / Inject (전역 속성 공유)</h2>
    - vue에서 props 없이 컴포넌트 간 데이터를 공유하는 방법 제공한다. <br>
    - provide()를 사용하여 부모가 값을 제공하고, inject()를 사용하여 자식이 값을 사용 <br>
    - provide(): 부모 컴포넌트에서 데이터를 제공 하는 메소드<br>
    - inject(): 자식 컴포넌트에서 부모가 제공한 데이터를 수신하는 메소드 <br>
    - <b>child와 child 간의 공유도 가능하다(?) => 는 아님. 공유 되지 않는다. 부모를 통해 전달은 가능하다. </b><br>
    <br>

    <h3>4.1 기본 예제</h3>
    <ParentComponent1/>
    <hr><br>
    <h3>4.2 반응형 예제</h3>
    <ParentComponent2/>
    <hr><br>
</template>
