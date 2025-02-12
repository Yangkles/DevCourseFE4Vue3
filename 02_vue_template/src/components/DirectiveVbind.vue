
<script setup>
    import { ref } from 'vue';
    const message = ref('v-bind 디렉티브');
    const imagePath = ref('https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png');
    const url = ref('https://www.google.com/images/branding/googlelogo/1x/');
    const filename = ref('googlelogo_color_272x92dp.png');
    const width = ref('200px');
    const isButtonDisabled = ref(true);
    const objectOfAttrs = ref({
        id: 'container',
        class: 'wrapper',
        style: 'background-color:green'
    });
</script>

<template>
    <h2>1. v-bind (Attribute Bindings) </h2>
    - vue에서 속성 값을 바인딩 하기 위해 활용되는 문법, 일방향 바인딩 <br>
    - 모든 속성값(id, class, type, value ...)이 바인딩 될수 있음 <br>
    - v-bind:value="~~~"와 같이 속성값 앞에 문법을 활용 <br>
    - Shorthand 문법지원 <br>
    - 1. bind 생략 후 ':'만 사용 <br>
    - 2. 속성값과 같은 이름 생략하여 ':width'만 사용 <br>
    <br>

    <!-- v-bind 정석 문법 -->
    message : {{ message }}<br>
    <input type="text" v-bind:value="message"><br><br>

    <!-- Shorthand 문법, ':' 만 활용, :width, 속성이름과 같으면 대체 -->
    <input type="text":value="message"><br>
    <img :src="imagePath"><br>
    <img :src="imagePath" :width="width"><br>

    <!-- v-bind 내에서 문자열을 조합하는 방법도 지원함 -->
    <img :src="url + filename" :width="width"><br>
    <img :src="`${url}${filename}`" :width="width"><br>

    <!-- width는 이름이 같아서 생략 가능 -->
    <img :src="imagePath" :width><br>

    <!-- Boolean 적용 방법 -->
    <button :disabled="isButtonDisabled">Button</button>

    <!--objectOfAttrs에 다수의 속성값을 한번에 적용하는 문법-->
    <div v-bind="objectOfAttrs">복합 속성 적용</div>

</template>
