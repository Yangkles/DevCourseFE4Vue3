
<script setup>
import ComputedEaxm01 from './ComputedEaxm01.vue';
import ComputedEaxm02 from './ComputedEaxm02.vue';


</script>

<template>
 <h2>3. computed() - 반응형 재계산</h2>
  - computed()는 기존 데이터(state)를 기반으로 새로운 값을 자동 계산하는 API <br>
  - 종속된 값이 변경되면 자동으로 재계산 되며, 읽기 전용으로 활용한다. <br>
  - 기본적으로 읽기 전용이지만, set을 지원하기도 한다.<br>
  <hr>

  <h3>3.1 computed - 기본형 예제</h3>
  <ComputedEaxm01/>

  <h3>3.2 computed - get/setter</h3>
  <ComputedEaxm02/>
  <hr><br>
</template>

