<script setup>
import { RouterView } from 'vue-router';
import { FwbNavbar, FwbNavbarCollapse, FwbNavbarLink } from 'flowbite-vue';
import ThemeSwitcher from '@/components/ThemeSwitcher.vue';
import { useThemeStore } from '@/store/theme';
import { onMounted } from 'vue';

const themeStore = useThemeStore();

// Initialize theme when app mounts
onMounted(() => {
  themeStore.initializeTheme();
});
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
    <!-- Navigation -->
    <fwb-navbar class="border-b border-gray-200 dark:border-gray-700">
      <template #logo>
        <router-link to="/" class="flex items-center">
          <span class="self-center text-xl font-semibold whitespace-nowrap text-primary-600 dark:text-white">
            FlowVue
          </span>
        </router-link>
      </template>
      
      <template #default="{ isShowMenu }">
        <fwb-navbar-collapse :is-show-menu="isShowMenu">
          <fwb-navbar-link link="/" active>Home</fwb-navbar-link>
          <fwb-navbar-link link="/features">Features</fwb-navbar-link>
          <fwb-navbar-link link="/pricing">Pricing</fwb-navbar-link>
          <div class="flex items-center space-x-4 md:order-2">
            <router-link 
              to="/login" 
              class="text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Log in
            </router-link>
            <router-link 
              to="/signup"
              class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >
              Sign up
            </router-link>
            <div class="ml-2">
              <ThemeSwitcher />
            </div>
          </div>
        </fwb-navbar-collapse>
      </template>
    </fwb-navbar>

    <!-- Main Content -->
    <main class="container mx-auto px-4 py-8">
      <RouterView />
    </main>

    <!-- Footer -->
    <footer class="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-12">
      <div class="container mx-auto px-4 py-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="mb-4 md:mb-0">
            <span class="text-sm text-gray-500 dark:text-gray-400">
              © 2024 FlowVue. All rights reserved.
            </span>
          </div>
          <div class="flex space-x-6">
            <a href="#" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white">
              <span class="sr-only">GitHub</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>

@reference "./main.css";

.custom-class {
  @apply border rounded p-3;
}
/* Base styles */
body {
  @apply bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100;
  transition: background-color 0.3s, color 0.3s;
}

/* Colorblind theme overrides */
.theme-protanopia {
  --color-primary-50: #e8f2f8;
  --color-primary-100: #d1e5f1;
  --color-primary-200: #a3cbe3;
  --color-primary-300: #75b2d5;
  --color-primary-400: #4798c7;
  --color-primary-500: #0D6986; /* Primary color */
  --color-primary-600: #0a536b;
  --color-primary-700: #083d50;
  --color-primary-800: #052635;
  --color-primary-900: #03131b;
}

.theme-deuteranopia {
  --color-primary-50: #e8f2f8;
  --color-primary-100: #d1e5f1;
  --color-primary-200: #a3cbe3;
  --color-primary-300: #75b2d5;
  --color-primary-400: #4798c7;
  --color-primary-500: #0D6986; /* Primary color */
  --color-primary-600: #0a536b;
  --color-primary-700: #083d50;
  --color-primary-800: #052635;
  --color-primary-900: #03131b;
}

.theme-tritanomaly {
  --color-primary-50: #e8f2f8;
  --color-primary-100: #d1e5f1;
  --color-primary-200: #a3cbe3;
  --color-primary-300: #75b2d5;
  --color-primary-400: #4798c7;
  --color-primary-500: #0D6986; /* Primary color */
  --color-primary-600: #0a536b;
  --color-primary-700: #083d50;
  --color-primary-800: #052635;
  --color-primary-900: #03131b;
}
</style>
