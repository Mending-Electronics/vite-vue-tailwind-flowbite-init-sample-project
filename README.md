# Vite + Vue 3 + Tailwind CSS + Flowbite Starter

[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)](https://vuejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Flowbite](https://img.shields.io/badge/flowbite-%23039BE5.svg?style=for-the-badge&logo=flowbite&logoColor=white)](https://flowbite.com/)
[![Node](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)

## 🚀 Project Overview

A modern, production-ready starter template built with:

- ⚡ [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- 🖖 [Vue 3](https://vuejs.org/) - The Progressive JavaScript Framework
- 🎨 [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- 🎯 [Flowbite](https://flowbite.com/) - Open-source UI component library

## ✨ Features

- ⚡ Blazing fast development with Vite
- 🛠️ Vue 3's Composition API
- 🎨 Pre-configured Tailwind CSS with Flowbite
- 🔥 Hot Module Replacement (HMR)
- 📦 Optimized production build
- 🛠️ Vue DevTools integration

## 🛠️ Prerequisites

- Node.js 20.19.0 or higher
- npm or yarn package manager

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/vite-vue-tailwind-flowbite-project.git
   cd vite-vue-tailwind-flowbite-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Build for production**
   ```bash
   npm run build
   # or
   yarn build
   ```

## 📁 Project Structure

```
├── public/           # Static files
├── src/
│   ├── assets/       # Assets (images, fonts, etc.)
│   ├── components/   # Vue components
│   ├── App.vue       # Root component
│   └── main.js       # Application entry point
├── index.html        # Main HTML file
├── package.json      # Project dependencies
├── vite.config.js    # Vite configuration
└── tailwind.config.js # Tailwind CSS configuration
```

## 📦 Dependencies

### Core Dependencies

- `vue`: ^3.5.18 - The Progressive JavaScript Framework
- `flowbite`: ^3.1.2 - Open-source UI component library
- `flowbite-vue`: ^0.2.1 - Flowbite components for Vue 3

### Development Dependencies

- `@vitejs/plugin-vue`: ^6.0.1 - Vue 3 support for Vite
- `vite`: ^7.0.6 - Next Generation Frontend Tooling
- `tailwindcss`: ^4.1.12 - A utility-first CSS framework
- `@tailwindcss/vite`: ^4.1.12 - Tailwind CSS Vite plugin
- `vite-plugin-vue-devtools`: ^8.0.0 - Vue DevTools integration for Vite

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/) for the amazing build tool
- [Vue.js](https://vuejs.org/) for the progressive framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Flowbite](https://flowbite.com/) for the beautiful UI components
    vue(),
    tailwindcss(),
  ],
})


# 🛠️ Project Creation 


# vite-project

This template should help get you started developing with Vue 3 in Vite.




Flowbite Vue - Quickstart
Get started with Flowbite by including it into your project using NPM

Flowbite is a library of components built on top of the utility-classes from Tailwind CSS and it also includes a JavaScript file that makes interactive elements works, such as modals, dropdowns, and more. Learn how to get started by following this quickstart guide.


✅ What You Should Do First

Make sure that you have Node.js installed. Flowbite Vue requires version 18 or newer.
node -v



Before installing dependencies, you need to initialize a Node.js project. Here's how:

```bash
npm init vite@latest
```

This command will prompt you to choose a project name and framework (select Vue). It will scaffold the project structure for you.

Then:

```bash
cd your-project-name
npm install
```


Install and configure TailwindCSS
Install Tailwind CSS as part of devDependencies:

npm install -D tailwindcss @tailwindcss/vite
Configure the Vite plugin:

update vite.config.js
```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
  ],
})
```

Import Tailwind CSS

create a `src/style.css`

```css
@import "tailwindcss";
```
INFO

Remember to @reference your main style in <style> blocks if you want to use directives from Tailwind CSS.

update the App.vue `<style>` element
```vue
<style scoped>
@reference "./style.css";

.custom-class {
  @apply border rounded p-3;
}
</style>
```

update the main.js file to import and use the `style.css` file whoe embed tailwind
```js
import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

createApp(App).mount('#app')
```


Install and configure Flowbite Vue
Install Flowbite and Flowbite Vue as part of dependencies:

```bash
npm i flowbite flowbite-vue
```

Update `src/style.css` file

```css
/* import Flowbite Vue styles */
@import "flowbite-vue/index.css";

/* import Flowbite plugin */
@plugin "flowbite/plugin";

/* add Flowbite Vue directory using @source directive */
@source "../node_modules/flowbite-vue";
```

Now you can use Flowbite Vue anywhere in your project and build awesome interfaces:

update the `<script setup>` element in your vue component
use flowbite css & js components in your vue components

```vue
<template>
  <fwb-alert type="success">
    Success! You can now use Flowbite Vue in your Vue application 🎉
  </fwb-alert>
</template>

<script setup>
import { FwbAlert } from 'flowbite-vue'
</script>
```




## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
