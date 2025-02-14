<script setup >
import WatchExam01 from './WatchExam01.vue';
import WatchExam02 from './WatchExam02.vue';
import WatchExam03 from './WatchExam03.vue';
import WatchExam04 from './WatchExam04.vue';

</script>

<template>
   <h2>4. watch() - 데이터 변경 감지</h2>
  - watch()는 특정 데이터의 변화를 감지하는 API <br>
  - 보통 변경을 감지하고 특정 로직 (예: API 호출, 상태 업데이트, 콘솔 로그, 알림 등) 을 실행 <br>
  - computed()는 결과값을 반환하지만, watch()는 반응형 데이터를 변경했을 때 특정 동작을 실행 한다<br>
  <hr>
  <h3>4.1 watch - 기본형 예제(데이터 1개 감시)</h3>
  <WatchExam01/>
  <hr><br>

  <h3>4.2 watch - 기본형 예제(데이터 2개 이상 감시)</h3>
  <WatchExam02/>
  <hr><br>

  <h3>4.3 watch - 회원가입 유효성 검사(ref)</h3>
  <WatchExam03/>
  <hr><br>

  <h3>4.4 watch - 회원가입 유효성 검사(reactive)</h3>
  <WatchExam04/>
  <hr><br>


</template>