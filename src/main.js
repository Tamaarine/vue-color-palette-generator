import { createApp, VueElement } from 'vue'
import App from './App.vue'
import Toast, { POSITION } from "vue-toastification"

import "vue-toastification/dist/index.css";
import "bootstrap/dist/css/bootstrap.css"
import './main.css'

const app = createApp(App);

const options = {
    position: POSITION.TOP_CENTER
}

app.use(Toast, options);
app.mount("#app");
