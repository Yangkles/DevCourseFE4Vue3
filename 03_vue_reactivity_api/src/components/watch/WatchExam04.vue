<script setup>
import { reactive, watch } from 'vue';

const user = reactive({
  name: '홍길동',
  age: 25,
});

const errors = reactive({
  name: '',
  age: '',
});

// 유효성 검사를 위한 watch
watch(user, (newUser) => {
  // 이름 유효성 검사
  if (newUser.name.length < 2) {
    errors.name = '이름을 두글자 이상 입력하세요.';
  } else {
    errors.name = '';
  }

  // 나이 유효성 검사
  if (newUser.age < 0) {
    errors.age = '나이는 음수를 입력할수 없습니다.';
  } else {
    errors.age = '';
  }
}); // {deep:true}는 reactive 없어도 문제 없다!
</script>

<template>
  <h3>사용자 정보 입력</h3>
  이름 : <input type="text" v-model="user.name" /> <br>
  <span v-if="errors.name" style="color: red;">{{ errors.name }}</span> <br>
  나이 : <input type="text" v-model="user.age" /> <br>
  <span v-if="errors.age" style="color: red;">{{ errors.age }}</span> <br>
  <br>

  <h3>입력한 정보</h3>
  이름: {{ user.name }}<br>
  나이: {{ user.age }}<br>
</template>
