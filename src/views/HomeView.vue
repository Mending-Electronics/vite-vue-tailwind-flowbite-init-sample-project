<template>
    <div class="home">
      <!-- Hero Section -->
      <section class="py-20 bg-gradient-to-r from-primary-500 to-primary-700 text-white">
        <div class="container mx-auto px-4">
          <div class="flex flex-col md:flex-row items-center">
            <div class="md:w-1/2 mb-10 md:mb-0">
              <h1 class="text-4xl md:text-5xl font-bold mb-6">Welcome to FlowVue</h1>
              <p class="text-xl mb-8">Build beautiful, responsive web applications with Vue 3, Tailwind CSS, and Flowbite.</p>
              <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <router-link 
                  to="/signup" 
                  class="bg-white text-primary-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium text-center transition duration-300"
                >
                  Get Started
                </router-link>
                <router-link 
                  to="/features" 
                  class="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 px-6 py-3 rounded-lg font-medium text-center transition duration-300"
                >
                  Learn More
                </router-link>
              </div>
            </div>
            <div class="md:w-1/2">
              <img 
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" 
                alt="App preview" 
                class="w-full max-w-md mx-auto"
              >
            </div>
          </div>
        </div>
      </section>
  
      <!-- Features Section -->
      <section class="py-20 bg-white dark:bg-gray-900">
        <div class="container mx-auto px-4">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Amazing Features</h2>
            <p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover the powerful features that make our platform stand out from the rest.
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div 
              v-for="(feature, index) in features" 
              :key="index"
              class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4">
                <component :is="feature.icon" class="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 class="text-xl font-semibold mb-2">{{ feature.title }}</h3>
              <p class="text-gray-600 dark:text-gray-300">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- CTA Section -->
      <section class="py-20 bg-gray-50 dark:bg-gray-800">
        <div class="container mx-auto px-4 text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to get started?</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied users and experience the power of our platform.
          </p>
          <router-link 
            to="/signup" 
            class="inline-block bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-medium transition duration-300"
          >
            Create Free Account
          </router-link>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  import { ref, markRaw } from 'vue';
  
  // Icons (you can replace these with actual icons from your preferred icon library)
  const LightningBoltIcon = markRaw({
    template: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    `
  });
  
  const CodeIcon = markRaw({
    template: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    `
  });
  
  const DeviceMobileIcon = markRaw({
    template: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    `
  });
  
  const features = ref([
    {
      icon: LightningBoltIcon,
      title: "Lightning Fast",
      description: "Built with Vite for the fastest development experience and production builds."
    },
    {
      icon: CodeIcon,
      title: "Developer Friendly",
      description: "Clean, well-documented code that's easy to understand and extend."
    },
    {
      icon: DeviceMobileIcon,
      title: "Fully Responsive",
      description: "Looks great on all devices, from mobile phones to desktop computers."
    }
  ]);
  </script>
  
  <style scoped>
  .home {
    scroll-behavior: smooth;
  }
  
  /* Custom animations */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  </style>