import { createApp } from 'vue';
import App from './App.vue';
import router from './router'

import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import ConfirmationService from 'primevue/confirmationservice';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import '@/assets/css/common.css'
import 'primeflex/primeflex.css';

const app = createApp(App);

app.use(PrimeVue);
app.use(router);
app.use(ConfirmationService);

app.component('InputText', InputText);
app.component('Button', Button);


app.mount('#app');

