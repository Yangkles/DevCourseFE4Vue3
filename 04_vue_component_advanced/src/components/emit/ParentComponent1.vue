<script setup>
import EmitBasic1 from './EmitBasic1.vue';
import EmitBasic2 from './EmitBasic2.vue';


const handeleSomeEvent = () => {
    alert('call handleSomeEvent');
    console.log('call handleSomeEvent');
}

</script>

<template>
    <h3>$emit</h3>
    <EmitBasic1 @some-event="handeleSomeEvent"/>
    <EmitBasic1 @some-event.once="handeleSomeEvent"/>
    
    <h3>defineEmits 활용</h3>
    <EmitBasic2 @some-event="handeleSomeEvent"/>

</template>
