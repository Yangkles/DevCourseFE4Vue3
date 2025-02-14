<script setup>
import EmitApp from './components/emit/EmitApp.vue';
import PropsApp from './components/props/PropsApp.vue';
import ProvideApp from './components/provide_inject/ProvideApp.vue';
import VmodelApp from './components/vmodel/VmodelApp.vue';


</script>

<template>
    <h1>컴포넌트 심화</h1>
  - 사용자와 상호작용하는 기본적인 형태로 기능을 수행할 수 있는 최소한의 단위 <br>
  - 중요한 속성은 재사용으로 특정 영역에서만 사용하지 않도록 용도를 명확하게 정의<br>
  - 컴포넌트는 색, 텍스트, 아이콘 등을 이용하여 시각적으로 적절하게 구성<br>
  - Vue의 컴포넌트는 페이지에 렌더링할 엘리먼트이며, 작고 재사용 가능한 코드 조각<br>
  - 외부 layout과 상호작용이 가능하며 props, emits 개념 활용 가능 <br>
  <hr>
  <PropsApp/>
  <EmitApp />
  <VmodelApp/>
  <ProvideApp/>
</template>


