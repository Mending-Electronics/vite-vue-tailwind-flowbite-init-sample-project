<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <div>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
          <p class="mt-2 text-center text-sm text-gray-600">
            Or
            <router-link to="/login" class="font-medium text-primary-600 hover:text-primary-500">
              sign in to your existing account
            </router-link>
          </p>
        </div>
        <form class="mt-8 space-y-6" @submit.prevent="handleSubmit">
          <div class="rounded-md shadow-sm space-y-4">
            <div>
              <label for="name" class="sr-only">Full name</label>
              <input
                id="name"
                v-model="form.name"
                name="name"
                type="text"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
                placeholder="Full name"
              >
            </div>
            <div>
              <label for="email-address" class="sr-only">Email address</label>
              <input
                id="email-address"
                v-model="form.email"
                name="email"
                type="email"
                autocomplete="email"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              >
            </div>
            <div>
              <label for="password" class="sr-only">Password</label>
              <input
                id="password"
                v-model="form.password"
                name="password"
                type="password"
                autocomplete="new-password"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              >
            </div>
            <div>
              <label for="confirm-password" class="sr-only">Confirm Password</label>
              <input
                id="confirm-password"
                v-model="form.confirmPassword"
                name="confirm-password"
                type="password"
                autocomplete="new-password"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
                placeholder="Confirm Password"
              >
            </div>
          </div>
  
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input
                id="terms"
                v-model="form.agreeTerms"
                name="terms"
                type="checkbox"
                required
                class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              >
              <label for="terms" class="ml-2 block text-sm text-gray-900">
                I agree to the <a href="#" class="text-primary-600 hover:text-primary-500">Terms</a> and <a href="#" class="text-primary-600 hover:text-primary-500">Privacy Policy</a>
              </label>
            </div>
          </div>
  
          <div>
            <button
              type="submit"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              :disabled="loading"
            >
              <span v-if="!loading">Sign up</span>
              <span v-else>Creating account...</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  const loading = ref(false)
  const form = ref({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  })
  
  const handleSubmit = async () => {
    if (form.value.password !== form.value.confirmPassword) {
      alert('Passwords do not match')
      return
    }
  
    if (!form.value.agreeTerms) {
      alert('You must agree to the terms and conditions')
      return
    }
  
    try {
      loading.value = true
      // TODO: Implement actual signup logic
      console.log('Signup form submitted:', form.value)
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      router.push('/dashboard')
    } catch (error) {
      console.error('Signup failed:', error)
      alert('Signup failed. Please try again.')
    } finally {
      loading.value = false
    }
  }
  </script>