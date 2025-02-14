<script setup>
import ParentComponent1 from './ParentComponent1.vue';
import ParentComponent2 from './ParentComponent2.vue';


</script>

<template>
    <h2>3. v-model - defineModel()</h2>
    - v-model을 컴포넌트에서 사용하여 양방향 바인딩을 구현할 수 있다. <br>
    - 또한 named를 붙여 하나가 아닌 여러 개의 v-model을 활용할 수 있다. <br>
    - Vue 3.4부터는 defineModel() 매크로를 사용하는 것을 권장한다. <br>
    
    <h3>3.1 기본 예제</h3>
    <ParentComponent1/>
    <hr><br>

    <h3>3.2 다수의 v-model 활용(named)</h3>
    <ParentComponent2/>
    <hr><br>
</template>