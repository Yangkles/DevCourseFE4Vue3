
<script setup>
import { computed, ref, watch } from 'vue';

const price = ref(1000);
const quantity = ref(2);
const totalPrice = ref(price.value * quantity.value);
const logs = ref([]);

// 자동으로 계산되는 속성
// const totalPrice = computed(()=> price.value * quantity.value);

// computed 대신 watch로 처리하는 패턴
// 1. 여러개 기본형
// watch([price, quantity], ()=>{
//   totalPrice.value = price.value * quantity.value;
//   logs.value.push(`${price.value}, ${quantity.value}`);
// });

// 2. 여러개 old new 한번에 가져오는 패턴
watch([price, quantity], ([newPrice, newQuantity], [oldPrice, oldQuantity])=>{
  totalPrice.value = price.value * quantity.value;
  logs.value.push(`${oldPrice} -> ${newPrice}, ${oldQuantity} -> ${newQuantity}`);
});

</script>

<template>
  <h3>물품 가격</h3>
  가격 : <input type="number" v-model="price"> 원 <br>
  수량 : <input type="number" v-model="quantity"> 개 <br>
  <b>총 가격 : {{ totalPrice }} 원 </b>
  <hr><br>
  <div v-for="item in logs" v-bind:key="item">
    {{ item }}
  </div>
</template>

