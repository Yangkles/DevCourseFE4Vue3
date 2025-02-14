<script setup>
import { ref } from "vue";
const message_clock = ref("초기값");
const contacts = ref([
  { no: 1011, name: "RM", tel: "010-3456-8299" },
  { no: 1012, name: "정국", tel: "010-3456-8298" },
  { no: 1013, name: "제이홉", tel: "010-3456-8297" },
  { no: 1014, name: "슈가", tel: "010-3456-8296" },
]);

const message = ref("Hello Vue World");

const updateMessage = () => {
  message.value = "Hello Vue 3!";
};

const myTag = ref('<b>강조된 텍스트</b>');
const text = ref('일반 텍스트');

</script>

<template>
  <h2>5. v-cloak</h2>
  - css의 v-cloak을 추가해주면 보간법이 일시적으로 보이는 현상을 막을 수 있다. <br />
  <br />
  <div>no v-cloak : {{ message_clock }}</div>
  <div v-cloak>v-cloak : {{ message_clock }}</div>
  <table id="list" v-cloak>
    <thead>
      <tr>
        <th>번호</th>
        <th>이름</th>
        <th>전화번호</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="contact in contacts" :key="contact.no">
        <td>{{ contact.no }}</td>
        <td>{{ contact.name }}</td>
        <td>{{ contact.tel }}</td>
      </tr>
    </tbody>
  </table>
  <hr /><br />

  <h2>6. v-pre</h2>
  - HTML을 컴파일하지 않고 소스 코드 그대로 보여줌 <br>
  <span>{{ message }}</span><br>
  <span v-pre>{{message}} </span>
  <hr><br>

  <h2>7. v-memo</h2>
  - 리스트나 템플릿의 특정 부분을 메모이제이션(memorization)하여 불필요한 업데이트를 방지<br>
  <br>
  <div v-memo="message">
    메세지 : {{ message }}
  </div>
  <button @click="updateMessage">메시지 변경</button>
  <hr><br>

  <h2>8. v-html, v-text</h2>
  - v-html: HTML을 렌더링하는 디렉티브 <br>
  - v-text: 텍스트 그대로 출력 == 보간법과 동일<br>
  <br>
  {{ myTag }}
  <div v-html="myTag"></div>
  <div v-text="myTag"></div>
  <br>
  {{ text }}
  <div v-html="text"></div>
  <div v-text="text"></div>
  <hr><br>

</template>

<style>
[v-cloak] {
  /* color: red; */
  display: none;
}
</style>
