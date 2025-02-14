<script setup >
import ParentComponent from './ParentComponent.vue';

</script>

<template>
  <h2>5. mitt - 전역 이벤트 버스</h2>
  - mitt는 가벼운 이벤트 기반 라이브러리로 전역 이벤트 버스를 제공한다 <br>
  - 모든 컴포넌트(부모, 자식 혹은 자식 - 자식)에서 이벤트를 송수신할 수 있도록 지원한다. <br>
  
  <ParentComponent/>
  <hr><br>


</template>