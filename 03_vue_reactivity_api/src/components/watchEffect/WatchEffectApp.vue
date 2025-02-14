<script setup>
import WatchEffectExam01 from './WatchEffectExam01.vue';
import WatchEffectExam02 from './WatchEffectExam02.vue';
import WatchEffectExam03 from './WatchEffectExam03.vue';


</script>

<template>
   <h2>4. watchEffect() - 자동 감지 및 실행</h2>
  - watchEffect()는 내부에서 사용된 모든 반응형 상태를 자동으로 감지하는 API <br>
  - watch()와 달리 어떤 변수를 감시할지 명시할 필요 없으나 모든 변수의 변화를 감지하여 동작 <br>
  - 이전 값에 대한 모니터링이 불가능하다<br>
  - 생명주기 상 Mount부터 감시가 시작된다. (watch는 Mount는 감시하지 않고, 이벤트 발생시) <br>
  <hr>

  <h3>4.1 watchEffect - 기본형 예제(데이터 1개 감시)</h3>
  <WatchEffectExam01 />
  <hr><br>

  <h3>4.2 watchEffect - 기본형 예제(데이터 2개 이상 감시)</h3>
  <WatchEffectExam02 />
  <hr><br>

  <h3>4.3 watchEffect - 회원가입 유효성 검사(ref)</h3>
  <WatchEffectExam03 />
  <hr><br>
</template>
