
<script setup>
import { computed, ref } from 'vue';

const price = ref(1000);
const quantity = ref(2);

// 자동으로 계산되는 속성
const totalPrice = computed(()=> price.value * quantity.value);

</script>

<template>
  <h3>물품 가격</h3>
  가격 : <input type="number" v-model="price"> 원 <br>
  수량 : <input type="number" v-model="quantity"> 개 <br>
  <b>총 가격 : {{ totalPrice }} 원 </b>
  <hr><br>
</template>

