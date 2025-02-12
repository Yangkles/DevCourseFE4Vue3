<script setup>
import { ref } from "vue";
    // 이벤트 핸들러 함수
    const doThis = () => {
        alert("doThis 실행!");
    };
    const doThat = (message, event) => {
        alert(`doThat 실행! 메시지: ${message}, 이벤트 타입: ${event.type}`);
    };
    const onEnter = () => {
        alert("Enter 키가 눌렸습니다!");
    };
    // 동적 이벤트 이름
    const event = ref("click");
    const count = ref(0);
    const increment = () => {
        count.value++
    }
</script>

<template>
    <h2>4 .v-on (이벤트 연결)</h2>
    - 이벤트 리스너를 특정 메소드로 바인딩하거나 익명함수를 통해 즉시 구현 가능 디렉티브<br>
    - @ 단축 문법 사용 가능하여 @을 통해 축약하는 것이 일반적<br>
    - https://ko.vuejs.org/api/built-in-directives#v-on <br>

    <h3>4.1 Vue 이벤트 핸들링 예제</h3>
    <!-- 메서드 핸들러 -->
    <!-- @으로 사용하는 것이 정석 ⭐⭐⭐⭐⭐ -->
    <button @click="doThis">메서드 핸들러 실행</button><br>
    <!-- 축약 이전의 문법 -->
    <button v-on:click="doThis">메서드 핸들러 실행</button><br>

    <!-- 동적 이벤트 -->
    <button v-on:[event]="doThis">동적 이벤트</button><br>

    <!-- 인라인 표현식 -->
    <button @dblclick="doThat('hello', $event)">인라인 표현식(더블클릭)</button><br>
    <button @click="doThat('hello', $event)">인라인 표현식</button><br>

    <!-- 단축 문법 -->
    <button @click="doThis">단축 문법</button><br>

    <!-- 단축 문법 동적 이벤트 -->
    <button @[event]="doThis">단축 문법 동적 이벤트</button><br>

    <!-- 오른쪽 클릭 -->
    <button @click.right="doThis">오른쪽 클릭</button><br>

    <!-- 왼쪽 클릭 -->
    <button @click.left="doThis">왼쪽 클릭</button><br>

    <!-- 전파 중지 -->
    <button @click.stop="doThis">전파 중지</button><br>

    <!-- 키 별칭을 수식어로 사용 -->
    <input type="text" @keyup.enter="onEnter" placeholder="Enter를 눌러보세요!"><br>

    <!-- 클릭 이벤트 단 한 번만 트리거 -->
    <button @click.once="doThis">클릭 이벤트 한 번만 실행</button><br>

    <!-- 객체 문법 -->
    <button v-on="{ mousedown: doThis, mouseup: doThis }">객체 문법</button><br>

    <h3>4.2. 이벤트 처리 방식</h3>
    - 인라인 처리, 함수 분리, 인라인 함수 처리로 처리 가능<br>
    <br>
    <button @click="count++">
        count: {{ count }}
    </button><br>
    <button @click="increment">
        count : {{ count }}
    </button><br>
    <button @click="(e) => count++">
        count: {{ count }}
    </button><br>
    <hr><br>
</template>

