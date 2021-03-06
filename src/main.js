import 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


createApp(App)
    .use(router)
    .mount('#app')
