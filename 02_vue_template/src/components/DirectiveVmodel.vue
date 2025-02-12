<script setup>
import { ref } from 'vue';


    const inputValue = ref('초기값');
    const hobby = ref(['A', 'B']);
    const picked = ref('one');
    const category = ref("");
    const agree = ref('no');
    const num = ref(0);
    const trimStr = ref("");
    const msg = ref("");
    const name = ref("");

</script>

<template>
    <h2>2. v-model (component two-way binding) </h2>
    - 사용자 입력을 받는 폼(form) 엘리먼트 또는 컴포넌트에 양방향 바인딩을 만드는 디렉티브 <br>
    - 이벤트를 통해 변경된 값을 감지하여 vue(VDOM) 내부 변수와 양방향 바인딩 <br>
    - input, select, textarea 그리고 사용자 컴포넌트에서만 활용 가능하다. <br>
    - https://ko.vuejs.org/guide/essentials/forms.html <hr><br>

    <input type="text" v-model="inputValue" /><br>
    입력한 내용 : {{ inputValue }}<br>
    <hr><br>

    <h3>2.1 checkbox/radio/select layout 적용</h3>
    <b>취미 생활</b><br>
    <input type="checkbox" id="hobbyA" value="A" v-model="hobby">
    <label for="hobbyA">영화보기</label>
    <input type="checkbox" id="hobbyB" value="B" v-model="hobby">
    <label for="hobbyB">공부하기</label>
    <input type="checkbox" id="hobbyC" value="C" v-model="hobby">
    <label for="hobbyC">독서하기</label><br>
    선택된 취미 : {{ hobby.sort() }}
    <hr><br>

    <b>라디오 버튼</b><br>
    <input type="radio" id="one" value="one" v-model="picked">
    <label for="one">One</label><br>
    <input type="radio" id="two" value="two" v-model="picked">
    <label for="two">Two</label><br>
    <input type="radio" id="three" value="three" v-model="picked">
    <label for="three">Three</label><br>
    선택된 라디오버튼 : {{ picked }}
    <hr><br>

    <b>select - 상품 분류 선택</b><br>
    <select v-model="category">
        <option value="">--상품 분류 선택--</option>
        <option value="C01">레저</option>
        <option value="C02">가전</option>
        <option value="C03">학습</option>
        <option value="C04">식품</option>
        <option value="C05">생활</option>
    </select><br>
    선택된 상품 분류 : {{ category }}<br>
    <hr><br>

    <h3>2.2 true-value, false-value 속성</h3>
    - checkbox의 경우 체크 값에 대한 속성으로 값을 가져올수 있다. <br>
    <div>
        위의 내용에 동의하십니까?
        <input type="checkbox" v-model="agree" true-value="yes" false-value="no">
        <br>
        체크된 값 : {{ agree }}
    </div>
    <hr><br>

    <h3>2.3 Modifiers</h3>
    - event가 감지된 이후 적용할 값에 대한 후처리 기능도 지원 <br>
    - number: 입력시 number타입으로 자동형변환<br>
    - trim: 문자열의 앞뒤 문자열 제거<br>
    - lazy: 포커스가 이동하는 이벤트 발생시 데이터 동기화<br>

    <b>숫자 변환</b><br>
    <input type="text" v-model.number="num"><br>
    number : {{ num * 10 }} <br><br>
    
    <b> 자동 trim 변환</b><br>
    <input type="text" v-model.trim="trimStr"><br>
    trimStr : {{ trimStr }} <br><br>

    <b> lazy 연동 ()</b><br>
    <input type="text" v-model.lazy="msg"><br>
    msg : {{ msg }} <br><br>

    <h3>2.4 한글처리 실시간 처리 문제</h3>
    - 한글입력이 실시간으로 적용되지 않는 경우 event를 직접 감지하여 입력값으로 활용<br>
    <br>
    <input type="text" :value="name" @input="(e) => {name = e.target.value}"><br>
    입력한 이름 : {{ name }}
    <hr><br>
    
</template>