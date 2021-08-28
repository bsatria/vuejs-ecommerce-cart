import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import BackButton from '@/components/BackButton.vue';
import Checkbox from '@/components/Checkbox.vue';
import Input from '@/components/Input.vue';
import TextArea from '@/components/TextArea.vue';
import Stepper from '@/components/Stepper.vue';

createApp(App)
  .component('BackButton', BackButton)
  .component('Checkbox', Checkbox)
  .component('Input', Input)
  .component('TextArea', TextArea)
  .component('Stepper', Stepper)
  .use(store)
  .use(router)
  .mount('#app');
