<script setup>
import { ref } from 'vue';
const price = ref(100);
const quantity = ref(2);
const totalPrice = ref(price.value * quantity.value);

// computed 대신 사용가능!

watchEffect(() => {
    totalPrice.value = price.value * quantity.value;
});

</script>
<template>
<div>
    <label>
      가격: <input type="number" v-model="price" /> 원
    </label>
    <br />
    <label>
      수량: <input type="number" v-model="quantity" />
    </label>
    <br />
    <p>총 가격: {{ totalPrice }} 원</p>
  </div>
</template>