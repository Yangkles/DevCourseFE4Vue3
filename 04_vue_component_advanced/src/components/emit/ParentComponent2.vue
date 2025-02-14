<script setup>
import EmitData1 from './EmitData1.vue';
import EmitData2 from './EmitData2.vue';

const handleSomeEvent = (count, text) => {
    alert(`전달된 데이터 : ${count} ${text}`);
    console.log(`전달된 데이터 : ${count} ${text}`);
}
</script>

<template>
    <h3>$emit</h3>
    <EmitData1 @some-event="handleSomeEvent"/>

    <h3>defineEmits 활용</h3>
    <EmitData2 @some-event="handleSomeEvent"/>
</template>