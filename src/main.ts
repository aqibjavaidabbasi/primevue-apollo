import { createApp } from 'vue';
import App from './App.vue';

import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

const app = createApp(App);

app.component('InputText', InputText);
app.component('Button', Button);

app.mount('#app')

