<script setup>
import RefEaxm01 from './RefEaxm01.vue';
import RefEaxm02 from './RefEaxm02.vue';
import RefEaxm03 from './RefEaxm03.vue';

</script>
<template>
  <h2>1. ref() - 기본적인 반응형 API</h2>
  - 기본 데이터 타입(Number, String, Boolean, Object, Array 등)을 반응형 지원 <br>
  - 기본형을 감싸서(Wrapping)하여 관리함에 따라 .value 속성을 통해 값을 읽고 수정이 가능 <br>
  - 객체를 ref로 감싸면 내부적으로 reactive()와 유Y사하게 동작, null 초기화 가능하다. <br>
  <hr>
  
  <h3>1.1 ref - 기본형 예제</h3>
  <RefEaxm01/>
  <hr><br>

  <h3>1.2 ref - 객체 활용</h3>
  <RefEaxm02/>
  <hr><br>

  <h3>1.3 ref - 리스트 활용</h3>
  <RefEaxm03/>
  <hr><br>

</template>
