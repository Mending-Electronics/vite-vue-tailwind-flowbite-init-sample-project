<template>
    <div class="py-16 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p class="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Choose the perfect plan for your needs.
          </p>
        </div>
  
        <div class="mt-16 space-y-8 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          <!-- Free Plan -->
          <div class="relative p-8 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm flex flex-col">
            <div class="flex-1">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Free</h3>
              <p class="mt-4 flex items-baseline text-gray-900 dark:text-white">
                <span class="text-5xl font-extrabold tracking-tight">$0</span>
                <span class="ml-1 text-xl font-semibold text-gray-500 dark:text-gray-400">/month</span>
              </p>
              <p class="mt-6 text-gray-500 dark:text-gray-300">Perfect for getting started with our platform.</p>
              <ul role="list" class="mt-6 space-y-4">
                <li class="flex items-start">
                  <svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="ml-3 text-gray-700 dark:text-gray-300">Up to 5 projects</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="ml-3 text-gray-700 dark:text-gray-300">Basic analytics</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="ml-3 text-gray-700 dark:text-gray-300">Email support</span>
                </li>
              </ul>
            </div>
            <a href="#" class="mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-200">
              Get started
            </a>
          </div>
  
          <!-- Pro Plan -->
          <div class="relative p-8 bg-white dark:bg-gray-800 border-2 border-primary-500 rounded-2xl shadow-lg flex flex-col">
            <div class="absolute top-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
              <span class="inline-flex items-center px-4 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                Most popular
              </span>
            </div>
            <div class="flex-1">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Pro</h3>
              <p class="mt-4 flex items-baseline text-gray-900 dark:text-white">
                <span class="text-5xl font-extrabold tracking-tight">$29</span>
                <span class="ml-1 text-xl font-semibold text-gray-500 dark:text-gray-400">/month</span>
              </p>
              <p class="mt-6 text-gray-500 dark:text-gray-300">For growing teams that need more power.</p>
              <ul role="list" class="mt-6 space-y-4">
                <li class="flex items-start">
                  <svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="ml-3 text-gray-700 dark:text-gray-300">Up to 50 projects</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="ml-3 text-gray-700 dark:text-gray-300">Advanced analytics</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="ml-3 text-gray-700 dark:text-gray-300">Priority email support</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="ml-3 text-gray-700 dark:text-gray-300">API access</span>
                </li>
              </ul>
            </div>
            <a href="#" class="mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-200">
              Get started
            </a>
          </div>
  
          <!-- Enterprise Plan -->
          <div class="relative p-8 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm flex flex-col">
            <div class="flex-1">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Enterprise</h3>
              <p class="mt-4 flex items-baseline text-gray-900 dark:text-white">
                <span class="text-5xl font-extrabold tracking-tight">$99</span>
                <span class="ml-1 text-xl font-semibold text-gray-500 dark:text-gray-400">/month</span>
              </p>
              <p class="mt-6 text-gray-500 dark:text-gray-300">For businesses with custom needs.</p>
              <ul role="list" class="mt-6 space-y-4">
                <li class="flex items-start">
                  <svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="ml-3 text-gray-700 dark:text-gray-300">Unlimited projects</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="ml-3 text-gray-700 dark:text-gray-300">Advanced analytics</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="ml-3 text-gray-700 dark:text-gray-300">24/7 support</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="ml-3 text-gray-700 dark:text-gray-300">Dedicated account manager</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="ml-3 text-gray-700 dark:text-gray-300">Custom integrations</span>
                </li>
              </ul>
            </div>
            <a href="#" class="mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-200">
              Contact sales
            </a>
          </div>
        </div>
  
        <div class="mt-16 bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Frequently asked questions</h3>
          <dl class="mt-6 space-y-6 divide-y divide-gray-200 dark:divide-gray-700">
            <div class="pt-6">
              <dt class="text-lg">
                <button type="button" class="text-left w-full flex justify-between items-start text-gray-400" aria-controls="faq-0" aria-expanded="false">
                  <span class="font-medium text-gray-900 dark:text-white">What's the best thing about Switzerland?</span>
                  <span class="ml-6 h-7 flex items-center">
                    <svg class="h-6 w-6 transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
              </dt>
              <dd class="mt-2 pr-12" id="faq-0">
                <p class="text-base text-gray-500 dark:text-gray-400">I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.</p>
              </dd>
            </div>
            <div class="pt-6">
              <dt class="text-lg">
                <button type="button" class="text-left w-full flex justify-between items-start text-gray-400" aria-controls="faq-1" aria-expanded="false">
                  <span class="font-medium text-gray-900 dark:text-white">How do you make holy water?</span>
                  <span class="ml-6 h-7 flex items-center">
                    <svg class="h-6 w-6 transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
              </dt>
              <dd class="mt-2 pr-12" id="faq-1">
                <p class="text-base text-gray-500 dark:text-gray-400">You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.</p>
              </dd>
            </div>
            <!-- More questions... -->
          </dl>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  // Component logic goes here
  </script>
  
  <style scoped>
  /* Add any custom styles here */
  </style>