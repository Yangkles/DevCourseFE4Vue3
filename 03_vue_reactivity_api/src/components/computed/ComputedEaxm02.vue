
<script setup>
import { computed, ref } from 'vue';

const firstName = ref('John');
const lastName = ref('Doe');

const fullName = computed({
  // getter
  get(){
    return firstName.value + ' ' + lastName.value;
  },
  // setter 
  set(newValue){
    if(!newValue){
      firstName.value = '';
      lastName.value = '';
    }
    if(newValue.includes(' ')){
      [firstName.value, lastName.value] = newValue.split(' ');
    }
  },
});
</script>

<template>
  <div>
    firstName : <input type="text" v-model="firstName"><br>
    lastName : <input type="text" v-model="lastName"><br>
    fullName: <input type="text" v-model="fullName"><br>
    fullName: {{ fullName }}<br>
  </div>
</template>
