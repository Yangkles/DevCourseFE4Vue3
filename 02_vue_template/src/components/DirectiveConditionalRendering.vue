<script setup>
import { ref } from 'vue';

    const text = ref("Hello vue world!");
    const nullValue = ref(null);
    const balance = ref(0);
    const amount = ref("0");
    const names = ref(["홍길동", "김길동", "박길동"]);
    const regions = ref({
        A: "Asia",
        B: "America",
        C: "Europe",
        D: "Africa",
        E: "Oceania",
    });
    const contacts = ref([
        { no: 1011, name: "RM", tel: "010-3456-8299" },
        { no: 1012, name: "정국", tel: "010-3456-8298" },
        { no: 1013, name: "제이홉", tel: "010-3456-8297" },
        { no: 1014, name: "슈가", tel: "010-3456-8296" },
        { no: 1015, name: "진", tel: "010-3456-8295" },
        { no: 1016, name: "뷔", tel: "010-3456-8294" },
        { no: 1017, name: "지민", tel: "010-3456-8293" },
    ]);
</script>

<template>
    <h2>3. Conditional Rendering (v-if, v-else, v-else-if, v-show) </h2>
    - 제어문의 조건문으로 조건이 일치할 경우 동작 <br>
    - v-if는 값이 없을때 보이지 않도록 하는 필터링 문으로도 많이 활용 <br>
    https://ko.vuejs.org/guide/essentials/conditional.html <br>
    <hr><br>

    <h3>3.1 조건문 - if, else-if, else</h3>
    <!-- 텍스트가 있으면 출력하거나 없으면 출력하지 않는 문장 -->
    text : <span v-if="text">{{ text }}</span> <br>
    nullValue : <span v-if="nullValue">{{ nullValue }}</span> <br>
    <br>

    잔고 : <input type="text" v-model="balance"><br>
    회원님의 등급 :
    <span v-if="balance >= 1000000">Gold</span>
    <span v-else-if="balance >= 500000">Silver</span>
    <span v-else-if="balance >= 200000">Bronze</span>
    <span v-else>Iron</span>
    <hr><br>

    <h3>3.2 v-show</h3>
    - if문과 동작은 같지만, 보여준다(show)는 직관적인 표현
    - 조건에 맞으면 화면에 보여주는 디렉티브<br>
    <br>
    text : <span v-show="text"><b>{{ text }}</b></span>
    nullValue : <span v-show="nullValue"><b>{{ nullValue }}</b></span>
    <br><br>

    예금액 : <input type="text" v-model="amount"><br>
    회원님의 등급 :
    <div v-show="amount == 0">입력값이 없습니다. 다시 입력하세요.</div>
    <div v-show="amount < 0">마이너스 값이 허용되지 않습니다.</div>
    <div v-show="amount > 0">입력값 : {{ amount }}</div>
    <!-- if문과 동일하다 -->
    <div v-if="amount == 0">입력값이 없습니다. 다시 입력하세요.</div>
    <div v-if="amount < 0">마이너스 값이 허용되지 않습니다.</div>
    <div v-if="amount > 0">입력값 : {{ amount }}</div>
    <hr><br>

    <h3>3.3 v-for (list Rendering)</h3>
    - 엘리먼트 또는 템플릿 블록을 반복하여 렌더링 할 때 list로 표현하는 디렉티브<br>
    - 또한 반드시 key를 적용 해야 하며, 이는 렌더링 시 최적화를 위해 활용된다. <br>
    <br>

    <h4>단순 html로 출력하는 방법(key 없음=권장 안함!)</h4>
    <!-- 일반 리스트 -->
    <span v-for="item in names">{{ item }}, </span>
    <!-- 객체를 반복하는 방법 -->
    <ul>
        <li v-for="item in regions">{{ item }}</li>
    </ul>
    <br>

    <h4>단순 html로 출력하는 방법(index, key, value 활용법)</h4>
    <!-- 일반 리스트 -->
    <span v-for="(index, item) in names" :key="index">{{ ` ${item + 1} : ${index}` }}, </span><br>
    <!-- 객체 반복하는 방법 -->
    <ul>
        <li v-for="(value, key, index) in regions" :key="index">{{ ` ${key} (${index}) : ${value}` }}</li>
    </ul>
    <br>

    <h4>Table로 출력하는 예시</h4>
    <table border="1">
        <thead>
            <tr>
                <td>번호</td>
                <td>이름</td>
                <td>전화번호</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in contacts" :key="item.no" >
                <td>{{ item.no }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.tel }}</td>
            </tr>
        </tbody>
    </table>
    <br>
    <h4>테이블로 출력하는 index 적용 및 if 문 적용</h4>
    -template : 빈 태그로 dom에서는 출력되지 않는 태그 <br>
    <table border="1">
        <thead>
            <tr>
                <td>번호</td>
                <td>index</td>
                <td>이름</td>
                <td>전화번호</td>
            </tr>
        </thead>
        <tbody>
            <template v-for="(item, index) in contacts" :key="index">
                <tr>
                    <td>{{ item.no }}</td>
                    <td>{{ index }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.tel }}</td>
                </tr>
                <tr class="divider" v-if="index % 2 === 0">
                    <td colspan="4">공백</td>
                </tr>
            </template>
        </tbody>
    </table>
</template>
