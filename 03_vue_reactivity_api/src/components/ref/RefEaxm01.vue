<script setup>
import { ref } from 'vue';

// 기본형 예제
const count = ref(0);
const message = ref("");
const number = ref(3);
const isChecked = ref(false);

const increment = () => {
  count.value++ // .value 필수
}
</script>

<template>
  카운트 : {{ count }} <br />
  <button @click="increment">증가</button> <br/><br/>

  입력한 메세지 : {{ message }} <br>
  <input type="text" v-model="message" placeholder="메세지 입력바랍니다."> <br><br>

  입력한 숫자 : {{ number * 10}} <br>
  <input type="text" v-model="number" placeholder="숫자를 입력바랍니다."> <br><br>

  체크 상태 : {{ isChecked }}<br>
  <input type="checkbox" v-model="isChecked"/><br><br>

</template>
