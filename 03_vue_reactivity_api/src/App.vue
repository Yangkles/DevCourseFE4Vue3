<script setup>
import ComputedApp from './components/computed/ComputedApp.vue';
import ReactiveApp from './components/reactive/ReactiveApp.vue';
import RefApp from './components/ref/RefApp.vue';
import WatchApp from './components/watch/WatchApp.vue';
import WatchEffectApp from './components/watchEffect/WatchEffectApp.vue';

</script>

<template>
  <h1>반응형 API (Reactivity API)</h1>
  - 데이터의 변경을 자동으로 감지하고, UI를 최신 상태로 유지하는 API이다. <br>
  - 기본적으로 Vue는 데이터가 변경되면 자동으로 DOM을 업데이트한다. <br>
  - 이를 가능하게 하는 핵심 개념이 반응형 시스템(Reactivity System)이다.<br>
  <hr>

  <RefApp />
  <ReactiveApp />
  <ComputedApp />
  <WatchApp />
  <WatchEffectApp />

  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
</template>