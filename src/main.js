import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import BackButton from '@/components/BackButton.vue';
import Checkbox from '@/components/Checkbox.vue';
import Input from '@/components/Input.vue';
import TextArea from '@/components/TextArea.vue';
import Stepper from '@/components/Stepper.vue';
import Button from '@/components/Button.vue';
import CustomSelect from '@/components/CustomSelect.vue';

createApp(App)
  .component('BackButton', BackButton)
  .component('Checkbox', Checkbox)
  .component('Input', Input)
  .component('TextArea', TextArea)
  .component('Stepper', Stepper)
  .component('Button', Button)
  .component('CustomSelect', CustomSelect)
  .use(store)
  .use(router)
  .mount('#app');
