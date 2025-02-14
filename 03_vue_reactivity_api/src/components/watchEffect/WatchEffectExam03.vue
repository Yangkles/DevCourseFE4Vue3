<script setup>
import { ref, watchEffect } from 'vue'
const user = ref({
  name: '홍길동',
  age: 25
});
const errors = ref({
  name: '',
  age: ''
});

// 이름과 나이의 유효성 검사

watchEffect(() => {
    //이름 유효성 검사
    if(user.value.name.length < 2){
      errors.value.name = '이름은 2글자 이상 입력해야 합니다.'
    } else {
      errors.value.name = '';
    }

    //나이 유효성 검사
    if(user.value.age < 0){
      errors.value.age = '나이는 음수를 입력할 수 없습니다.'
    } else {
      errors.value.age = '';
    }
})

</script>
<template>
  <h3>사용자 정보 입력</h3>
  이름 : <input v-model="user.name" type="text" /> <br>
  <span v-if="errors.name" style="color: red;">{{ errors.name }}</span> <br>
  나이 : <input v-model="user.age" type="number" /> <br>
  <span v-if="errors.age" style="color: red;">{{ errors.age }}</span> <br>
  <!-- 결과 출력 -->
  <div>
    <h3>입력한 정보</h3>
    이름: {{ user.name }}<br>
    나이: {{ user.age }}<br>
  </div>
</template>