<script setup>
import { ref } from 'vue';

    // 순수 Javascript 영역으로 생각하면 편하다.
    // 컴포넌트 생명주기인 setup이 실행되는 자리, setup은 마운트 되기 이전 초기 단계이다.

    const count = ref(0);
</script>

<template>
    <div>
        <button @click="count++">
            클릭 횟수 : {{ count }}
        </button>
    </div>
</template>
