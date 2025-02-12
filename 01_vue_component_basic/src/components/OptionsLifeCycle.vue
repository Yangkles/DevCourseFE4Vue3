<script>
export default {
  data() {
    return { 
      message: "안녕하세요? Option(Vue2) 스타일입니다.",
      count: 0,
    };
  },
  beforeCreate() {
    console.log("beforeCreate: data에 접근할 수 없음", this.message);
  },
  created() {
    console.log("created: data에 접근 가능", this.message);
  },
  beforeMount() {
    console.log("beforeMount: DOM에 적용되기 전", this.message);
  },
  mounted() {
    console.log("mounted: DOM에 적용 완료", this.message);
  },
  beforeUpdate() {
    console.log("beforeUpdate: 데이터 변경 감지", this.count);
  },
  updated() {
    console.log("updated: 데이터 변경 후 DOM 반영", this.count);
  },
  beforeUnmount() {
    console.log("beforeUnmount : 컴포넌트 제거 전", this.message);
  },
  unmounted() {
    console.log("unmounted: 컴포넌트 제거 후", this.message);
  },
  errorCaptured(err, vm, info) {
    console.log(err, vm.$options.name, info);
  },
};
</script>

<template>
  <h2>{{ message }}</h2>
  <div>{{ count }}</div>
  <button @click="count++;">count++</button>
  <button @click="count--;">count--</button>
</template>