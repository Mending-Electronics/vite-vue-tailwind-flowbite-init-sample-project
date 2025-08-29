<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div class="text-center">
        <h2 class="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">
          Sign in to your account
        </h2>
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Or
          <router-link to="/signup" class="font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300">
            create a new account
          </router-link>
        </p>
      </div>
      
      <fwb-alert v-if="errorMessage" type="danger" class="mb-4">
        {{ errorMessage }}
      </fwb-alert>

      <fwb-card class="p-6">
        <form class="space-y-6" @submit.prevent="handleSubmit">
          <div class="space-y-4">
            <div class="space-y-2">
              <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email address
              </label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                autocomplete="email"
                required
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                placeholder="name@example.com"
                @blur="validateForm"
              >
            </div>

            <div class="space-y-2">
              <div class="flex items-center justify-between">
                <label for="password" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Password
                </label>
              </div>
              <input
                id="password"
                v-model="form.password"
                type="password"
                autocomplete="current-password"
                required
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                placeholder="••••••••"
                @blur="validateForm"
                @keyup.enter="handleSubmit"
              >
            </div>
          </div>

          <div class="flex items-center justify-between">
            <fwb-checkbox v-model="form.rememberMe">
              Remember me
            </fwb-checkbox>

            <router-link 
              to="/forgot-password" 
              class="text-sm font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300"
            >
              Forgot password?
            </router-link>
          </div>

          <div>
            <fwb-button 
              type="submit"
              :disabled="isLoading || v$.$invalid"
              :loading="isLoading"
              class="w-full justify-center"
              color="blue"
              size="lg"
            >
              Sign in
            </fwb-button>
          </div>
        </form>
      </fwb-card>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isLoading = ref(false);
const errorMessage = ref('');
const form = ref({
  email: '',
  password: '',
  rememberMe: false
});

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const validateForm = () => {
  if (!form.value.email) {
    errorMessage.value = 'Email is required';
    return false;
  }
  
  if (!validateEmail(form.value.email)) {
    errorMessage.value = 'Please enter a valid email';
    return false;
  }
  
  if (!form.value.password) {
    errorMessage.value = 'Password is required';
    return false;
  }
  
  if (form.value.password.length < 8) {
    errorMessage.value = 'Password must be at least 8 characters';
    return false;
  }
  
  errorMessage.value = '';
  return true;
};

const handleSubmit = async () => {
  if (!validateForm()) return;
  
  isLoading.value = true;
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // For demo purposes, just log the form data
    console.log('Login form submitted:', form.value);
    
    // Store login state if remember me is checked
    if (form.value.rememberMe) {
      localStorage.setItem('rememberMe', 'true');
    }
    
    // Redirect to dashboard on success
    router.push('/dashboard');
  } catch (error) {
    errorMessage.value = error.message || 'Failed to sign in. Please try again.';
  } finally {
    isLoading.value = false;
  }
};
</script>