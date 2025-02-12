<script setup>
    import { ref } from 'vue';

    const message1 = ref('Hello Vue3 World!'); 
    const message2 = ref('안녕하세요? Vue3입니다.'); 
    const myTag = ref('<b>강조된 텍스트</b>');
    const number = ref(5);
    const message = ref('Hello vue world!');
    const id = ref('test');
    const myFunc = ref(() => 'myFunc Test!');
</script>

<template>
    <h3>1. Text Interpolation(보간법)</h3>
        - 콧수엽(Mustache)문법을 통해 반응형으로 vue에 선언된 data를 출력한다. <br>
        - 출력된 값은 escape 처리 되어 XSS에 안전하게 어플리케이션을 보호한다. <br>
    <br>
    message1 : {{ message1 }} <br>
    message2 : {{ message2 }} <br>
    myTag : {{ myTag }} <br>
    myTag(v-html) : <span v-html="myTag"></span><br>
    <hr><br>

    <h3>2. JavaScript Expressions</h3>
    - JS 문법을 표현식으로 처리할수 있다.<br>
    - document.write('this!') this에 들어갈수 있는 문법만 적용 가능 <br>
    - 순수 문자열, 삼항연산자, 초기화 구문, 함수 등이 사용 될 수 있다. <br>
    <br>
    {{ number + 5 }} <br>
    {{ null ? 'null입니다.' : 'null이 아닙니다.' }} <br>
    {{ null || '초기화 문장입니다.' }} <br>
    {{ message.split('').reverse().join('') }} <br>

    <div :id="`list-${id}`">테스트</div>
    {{ myFunc() }} <br>
    <hr><br>
</template>
