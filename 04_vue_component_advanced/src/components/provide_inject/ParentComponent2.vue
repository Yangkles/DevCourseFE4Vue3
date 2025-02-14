<script setup>
import { provide, ref } from 'vue';
import ChildComponent2A from './ChildComponent2A.vue';
import ChildComponent2B from './ChildComponent2B.vue';

const location = ref('북극');

const updateLocation = (newLocation) => {
    location.value = newLocation;
}

// provide를 통해 자식 컴포넌트에 값과 Update 함수 제공
provide('location', {location, updateLocation});

</script>

<template>
    <div>
        <h3>Parent Component</h3>
        Location Now : {{ location }} <br>
        <ChildComponent2A />
        <ChildComponent2B />
    </div>
</template>