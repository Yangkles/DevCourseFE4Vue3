<script setup>
defineProps({
    // 기본 타입 검사(null, undifined 허용)
    propsA : Number,

    // 여러가지 가능한 타입
    propsB:[String, Number],

    // 필수 문자열
    propsC : {
        type: String,
        required: true
    },

    // 필수지만 널 허용 문자열
    propsD : {
        type:[String, null],
        required: true
    },

    // 기본값이 있는 숫자
    propsE: {
        type:Number,
        default: 100
    },
    propsF: {
        validator(value) {
            // 값은 이 문자열 중 하나와 일치해야 합니다
            return ['성공', '경고', '위험'].includes(value)
        }
    }
})
</script>

<template>
    <div class="child">
        <h2>Child Component</h2>
        propA (Number): {{ propA }} <br>
        propB (String or Number): {{ propB }} <br>
        propC (Required String): {{ propC }} <br>
        propD (Required String or Null): {{ propD }} <br>
        propE (Number with Default 100): {{ propE }} <br>
        propF ('성공', '경고', '위험'): {{ propG }} <br>
    </div>
</template>
