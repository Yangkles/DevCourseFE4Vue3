<script setup>
import DirectiveConditionalRendering from './components/DirectiveConditionalRendering.vue';
import DirectiveVbind from './components/DirectiveVbind.vue';
import DirectiveVmodel from './components/DirectiveVmodel.vue';
import DirectiveVonEvent from './components/DirectiveVonEvent.vue';
import TextInterpolation from './components/TextInterpolation.vue';

</script>

<template>
  <h2>Vue Template Syntax - 보간법, 디렉티브</h2>
  - Vue는 렌더링된 DOM과 바인딩할 수 있는 HTML 친화적인 템플릿 구문을 사용 <br>
  - HTML 처럼 보이지만 내부적으로는 Javascript 파싱되어 순수 js 객체로 관리 된다. <br>
  - 작성된 템플릿 구문은 Vue app을 통해 이벤트 및 반응성 처리를 지원 <br>
  - 또한 DOM의 변경을 최소한으로 수행하기 위해 Virtual DOM으로 구성됨<br>
  - https://ko.vuejs.org/guide/essentials/template-syntax.html <br>
  <hr><br>
  <TextInterpolation/>

  <h2>디렉티브(Directives)</h2>
  - HTML 요소에 특수한 동작을 추가하는 템플릿 전용 속성(Attribute)이다. <br>
  - v- 접두사를 사용하며, Vue의 반응형 시스템과 결합하여 동적인 동작을 수행할 수 있다. <br>
  - 주로 속성 바인딩, 양방향 바인딩 또는 분기문, 반복문 등을 표현할 때 활용 된다.<br>
  <hr><br>
  <DirectiveVbind/>
  <DirectiveVmodel/>
  <DirectiveConditionalRendering />
  <DirectiveVonEvent/>
</template>


