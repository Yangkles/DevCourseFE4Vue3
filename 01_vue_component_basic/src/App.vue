<script setup>
  import CompositionComponent from './components/CompositionComponent.vue';
import CompositionLifeCycle from './components/CompositionLifeCycle.vue';
  import OptionsComponent from './components/OptionsComponent.vue';
import OptionsLifeCycle from './components/OptionsLifeCycle.vue';
  import ParentComponent from './components/ParentComponent.vue';

</script>

<template>
  <h2> Component란? </h2>
  - 사용자와 상호작용하는 기본적인 형태로 기능을 수행할 수 있는 최소한의 단위 <br>
  - 중요한 속성은 재사용으로 특정 영역에서만 사용하지 않도록 용도를 명확하게 정의<br>
  - 컴포넌트는 색, 텍스트, 아이콘 등을 이용하여 시각적으로 적절하게 구성<br>
  - Vue의 컴포넌트는 페이지에 렌더링할 엘리먼트이며, 작고 재사용 가능한 코드 조각<br>
  - 외부 layout과 상호작용이 가능하며 props, emits 개념 활용 <br>
  - props : 외부에서 Component로 인자를 넘길 때는 속성값을 통해 전달하는 기능<br>
  - emits : Component에서 event 발생시 handler 전달하기 위해 method 인자<br>
  <hr><br>
  <h2>1. Option API 컴포넌트</h2>
  - vue2 스타일로 레거시 호환을 위해 남겨놓았지만 vue3에서는 활용되지 않는다.<br>
  <OptionsComponent />
  <hr><br>

  <h2>2. Composition API 컴포넌트⭐⭐⭐⭐⭐</h2>
  - vue3에서 본격적으로 활용하는 스타일로 해당 스타일로 사용하길 권장<br>
  <br>
  <CompositionComponent />
  <hr><br>

  <h2>3. 컴포넌트가 인자 전달 - props</h2>
  - Props : 부모 컴포넌트와 자식 컴포넌트 간의 데이터 전달을 위해 활용되는 속성<br>
  - v-bind : vue 전용 디렉티브로서 속성을 전달하는 문법<br>
  <ParentComponent class="parent" />
  <hr><br>

  <h2>4. Options API LifeCycle</h2>
  - beforeCreate : 컴포넌트가 생성되기 전에 호출, data 및 props에 접근 불가<br>
  - created : 컴포넌트가 생성된 직후 호출, data 및 props에 접근 가능<br>
  - beforeMount : DOM이 렌더링되기 전에 호출<br>
  - mounted : DOM이 렌더링된 후 호출<br>
  - beforeUpdate : 데이터가 변경되어 DOM 업데이트 전 호출<br>
  - updated : 데이터 변경으로 DOM 업데이트 후 호출<br>
  - beforeUnmount : 컴포넌트가 DOM에서 제거되기 전에 호출, vue2에서는 beforeDestroy로 활용됨<br>
  - unmounted : 컴포넌트가 DOM에서 완전히 제거된 후 호출 , vue2에서는 destroyed로 활용됨<br>
  - errorCaptured : 자식 컴포넌트에서 전파된 에러가 캡쳐 될때 호출<br>
  <!-- <OptionsLifeCycle/> -->
  <hr><br>

  <h2>5. Composition API LifeCycle</h2>
  - setup : 컴포넌트가 생성될 때 실행 data, method 미리 정의 가능<br>
  - onBeforeMount : DOM이 마운트되기 직전 실행<br>
  - onMounted : DOM이 마운트된 후 실행<br>
  - onBeforeUpdate : 반응형 데이터가 변경되어 DOM이 업데이트되기 직전 실행<br>
  - onUpdated : 반응형 데이터가 변경되어 DOM이 업데이트된 후 실행<br>
  - onBeforeUnmount : 컴포넌트가 소멸되기 직전 실행<br>
  - onUnmounted : 컴포넌트가 소멸된 후 실행<br>
  - onErrorCaptured : 자식 컴포넌트에서 전파된 에러가 캡쳐 될 때 호출<br>
  <CompositionLifeCycle />
</template>

<style>
.parent {
  margin: 10px;
  padding: 5px;
  border: 1px solid black;
}
</style>