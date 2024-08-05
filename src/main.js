
import { createApp } from 'vue';
import App from './App.vue';
import UserData from './components/ActiveUser.vue';
import ActiveUser from './components/UserData.vue';


const app = createApp(App);

//Components added to their parent component
app.component('active-user', ActiveUser);
app.component('user-data', UserData);

app.mount('#app');