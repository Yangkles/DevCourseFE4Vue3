import mitt from 'mitt';
const emitter = mitt();

export default {
  install(app) {
    app.config.globalProperties.$emitter = mitt(); // Vue2 대응
    app.provide('emitter', emitter); // Vue3 대응
  }
};
