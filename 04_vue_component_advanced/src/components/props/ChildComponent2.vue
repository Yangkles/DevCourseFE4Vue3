<script setup>
    defineProps({
        title:String,
        count:Number,
        active:Boolean,
        items:Array,
        user : Object,
        callback: Function,
        today: Date,
    })
</script>

<template>
    <div class="child">
        <h3>{{ title }}</h3>
        count : {{ count }} <br>
        active : {{ active ? 'Y' : "N" }} <br>
        item : <template v-for="(item, index) in items" :key="index">{{ item }}</template><br>
        user : {{ user.name }}, {{ user.age }} <br>
        today : {{ today.toLocaleString }} <br>
        <button @click="callback">callback</button>
    </div>
</template>
