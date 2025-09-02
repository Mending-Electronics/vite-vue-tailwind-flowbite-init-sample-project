import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createRouter, createWebHistory } from 'vue-router';
import { 
  FwbButton, 
  FwbNavbar, 
  FwbNavbarCollapse, 
  FwbNavbarLink,
  FwbCard,
  FwbInput,
  FwbCheckbox,
  FwbAlert,
  FwbSpinner,
  FwbAvatar,
  FwbDropdown,
  FwbListGroup,
  FwbListGroupItem,
  FwbModal,
  FwbToast
} from 'flowbite-vue';
import App from './App.vue';
import router from './router';
import pinia from './store';
import './main.css';

// Import Flowbite CSS and JS
import 'flowbite';

// Create the app
const app = createApp(App);

// Register Flowbite Vue components globally
const flowbiteComponents = {
  FwbButton,
  FwbNavbar,
  FwbNavbarCollapse,
  FwbNavbarLink,
  FwbCard,
  FwbInput,
  FwbCheckbox,
  FwbAlert,
  FwbSpinner,
  FwbAvatar,
  FwbDropdown,
  FwbListGroup,
  FwbListGroupItem,
  FwbModal,
  FwbToast
};

// Register all components
Object.entries(flowbiteComponents).forEach(([componentName, component]) => {
  app.component(componentName, component);
});

// Use plugins
app.use(pinia);
app.use(router);

// Mount the app
app.mount('#app');
