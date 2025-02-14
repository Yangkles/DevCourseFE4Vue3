<script setup>
import { onMounted, reactive, ref } from 'vue';

const isLoading = ref(true);
const user = reactive({ name: '', age: 0, favoriteLanguage: '' });
const languages = reactive(['C', 'Java', 'JavaScript']);

onMounted(()=>{
  // axios 비동기 데이터 받아오는 곳
  setTimeout(()=>{
    const newUser =  { name: '홍길동', age: 25, favoriteLanguage: 'JavaScript' };
    // user = newUser; 안되는 코드!!
    user.name = newUser.name;
    user.age = newUser.age;
    user.favoriteLanguage = newUser.favoriteLanguage;
    isLoading.value = false;
  }, 3000);
});

</script>

<template>
  <template v-if="!isLoading">
    <h3>사용자 정보 입력</h3>
    이름 : <input v-model="user.name" type="text" /> <br>
    나이 : <input v-model="user.age" type="number" /> <br>
    좋아하는 언어:
    <select v-model="user.favoriteLanguage" class="input">
      <option v-for="lang in languages" :key="lang" :value="lang">
        {{ lang }}
      </option>
    </select><br>

    <h3>입력한 정보</h3>
    이름: {{ user.name }}<br>
    나이: {{ user.age }}<br>
    좋아하는 언어: {{ user.favoriteLanguage }}<br>
</template>
<template v-else>
  로딩중...(데이터 없음)
</template>

</template>
