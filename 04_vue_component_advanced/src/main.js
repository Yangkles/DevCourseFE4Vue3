import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import mittPlugin from './plugin/mittPlugin';

const app = createApp(App);

// emit 활용 추가
app.use(mittPlugin);

// app 수준의 provide

app.provide('message', 'Hello Vue World! 안녕?')

app.mount('#app')
