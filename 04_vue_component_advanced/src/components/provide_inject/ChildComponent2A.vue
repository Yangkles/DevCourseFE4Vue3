<script setup>
import { inject } from 'vue';


// 부모에서 전달한 location과 update 함수 선언
const {location, updateLocation} = inject('location');

</script>

<template>
    <div class="child">
        <h3>Child Component</h3>
        Location Now : {{ location }} <br>
        <button @click="updateLocation('남극')">남극 변경</button>
    </div>
</template>