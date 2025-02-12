<script>

    // script 영역이 작성되는 곳
    // data나 생명주기 method 작성 가능.

    export default {
        data() {
            return {
                count: 0,
            }
        }
    }
</script>

<template>
    <!-- template : HTML 작성영역, 실제로는 JS로 변환됨, vue의 고유 속성을 사용가능 -->
    <div>
        <div class="test"> 클릭 횟수 : {{ count }}</div>
        <button @click="count++">
            클릭 횟수 : {{ count }}
        </button>
    </div>
</template>

<style scoped>
    /* style scoped */
    /* css를 적용 가능한 영역 */
    .test {
        color: blue;
    }
</style>