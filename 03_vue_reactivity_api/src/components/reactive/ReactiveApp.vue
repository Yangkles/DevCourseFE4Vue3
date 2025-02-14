<script setup>
import ReactiveEaxm01 from './ReactiveEaxm01.vue';
import ReactiveEaxm02 from './ReactiveEaxm02.vue';

</script>

<template>

<h2>2. reactive() - 반응형 객체</h2>
  - reactive()는 객체(Object)와 배열(Array) 를 반응형 상태로 만드는 API이다. <br>
  - ref와 달리 Wrapping 하지 않고 반응형 프록시(proxy, 변경을 감지하는 JS 패턴)를 활용 <br>
  - .value를 사용하지 않고 속성에 직접 접근이 가능하다. <br>
  - ref()와 달리 기본 타입은 사용할 수 없고, 객체나 배열만 가능하며, null로 초기화 될 수 없다. <br>
  - <b>일반적으로 ref가 더 자주 활용되며, deep 관련된 이슈가 있으면 reactive 설계 고려!</b>
  <br><hr>
  <h3>2.1 reactive - 객체 활용 예제</h3>
  <ReactiveEaxm01/>
  <hr><br>
  
  <h3>2.2 reactive - 리스트 활용 예제</h3>
  <ReactiveEaxm02/>
  <hr><br>


</template>


