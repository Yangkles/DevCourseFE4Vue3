<script setup>
import { onMounted, ref } from 'vue';

// 객체 선언
// const user = ref({ name: '홍길동', age: 25, favoriteLanguage: 'JavaScript' });
const user = ref(null);

// 배열 선언
const languages = ref(['C', 'Java', 'JavaScript']);

onMounted(() => {
  // axios로 데이터 받아오는 곳
  setTimeout(()=>{
    user.value = { name: '홍길동', age: 25, favoriteLanguage: 'JavaScript' };
  }, 3000);
});
</script>

<template>
  <template v-if="user">
    <h3>사용자 정보 입력</h3>
    이름 : <input type="text" v-model="user.name"><br>
    나이 : <input type="number" v-model="user.age"><br>
    좋아하는 언어 :
    <select v-model="user.favoriteLanguage">
      <option v-for="item in languages" :key="item" :value="item">
        {{ item }}
      </option>
    </select><br>

    <h3>입력한 정보</h3>
    이름 : {{ user.name }} <br>
    나이 : {{ user.age }} <br>
    좋아하는 언어 : {{ user.favoriteLanguage }} <br>
  </template>
  <template v-else>
    <h3>로딩중... (사용자 정보 없음!)</h3>
  </template>

</template>
