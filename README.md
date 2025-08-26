# Vite + Vue 3 + Tailwind CSS + Flowbite Starter

This template should help get you started developing with Vue 3, Tailwindcss 4 and Flowbite 3 in Vite to init you Front-end Node Only Project.

---

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

## 🚀 Quickstart Start

1. **Clone the repository**

```bash
git clone https://github.com/Mending-Electronics/vite-vue-tailwind-flowbite-init-sample-project.git

cd vite-vue-tailwind-flowbite-init-sample-project
```

2. **Start the development server**

```bash
npm run dev
# or
yarn dev
```

3. **Build for production**

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
└──  vite.config.js    # Vite configuration

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


## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/) for the amazing build tool
- [Vue.js](https://vuejs.org/) for the progressive framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Flowbite](https://flowbite.com/) for the beautiful UI components
    vue(),
    tailwindcss(),
  ],
})

---

# 🛠️ Project Creation 

This template should help get you started developing with Vue 3, Tailwindcss 4 and Flowbite 3 in Vite.

✅ What You Should Do First

1. **Check Node.js version**
Make sure that you have Node.js installed. Flowbite Vue requires version 18 or newer.

```bash
node -v
```

2. **Initialize a Node.js Vite Js Bundler project**
Before installing dependencies, you need to initialize a Node.js project. Here's how:

```bash
npm init vite@latest
```

This command will prompt you to choose a project name and framework (select Vue). It will scaffold the project structure for you.



3. **Install and configure TailwindCSS**
> Install Tailwind CSS as part of devDependencies:

```bash
npm install -D tailwindcss @tailwindcss/vite
```

4. **Configure the Vite plugin**

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

5. **Import Tailwind CSS**

- create a `src/style.css`

```css
@import "tailwindcss";
```
>INFO
Remember to @reference your main style in `<style>` blocks if you want to use directives from Tailwind CSS.

- update the App.vue `<style>` element
```html
<style scoped>
@reference "./style.css";

.custom-class {
  @apply border rounded p-3;
}
</style>
```

- update the main.js file to import and use the `style.css` file whoe embed tailwind
```js
import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

createApp(App).mount('#app')
```


6. **Install and configure Flowbite Vue**

- Install Flowbite and Flowbite Vue as part of dependencies:

```bash
npm i flowbite flowbite-vue
```

- Update `src/style.css` file

```css
/* import Flowbite Vue styles */
@import "flowbite-vue/index.css";

/* import Flowbite plugin */
@plugin "flowbite/plugin";

/* add Flowbite Vue directory using @source directive */
@source "../node_modules/flowbite-vue";
```

> Now you can use Flowbite Vue anywhere in your project and build awesome interfaces:

- update the `<script setup>` element in your vue component
- use flowbite css & js components in your vue components

```html
<template>
  <fwb-alert type="success">
    Success! You can now use Flowbite Vue in your Vue application 🎉
  </fwb-alert>
</template>

<script setup>
import { FwbAlert } from 'flowbite-vue'
</script>
```



7. **Check the package.json file in the project directory**

```json
{
  "name": "vite-project",
  "version": "0.0.0",
  "private": true,
  "type": "module",
  "engines": {
    "node": "^20.19.0 || >=22.12.0"
  },
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "flowbite": "^3.1.2",
    "flowbite-vue": "^0.2.1",
    "vue": "^3.5.18"
  },
  "devDependencies": {
    "@tailwindcss/vite": "^4.1.12",
    "@vitejs/plugin-vue": "^6.0.1",
    "tailwindcss": "^4.1.12",
    "vite": "^7.0.6",
    "vite-plugin-vue-devtools": "^8.0.0"
  }
}
```

8. **Install dependencies**

```bash
cd your-project-name

npm install
# or
yarn install
```

9. **Start the development server**

```bash
npm run dev
# or
yarn dev
```

10. **Build for production**

```bash
npm run build
# or
yarn build
```


# Why this Front-End (Node Only) Stack


## Why Vite ? 🛠️

**Vite**: Offers excellent Developer Experience (DX) and ultra-fast, optimized compilation compared to React.

Vite has become the preferred choice for Vue.js projects due to its speed, simple configuration, and native integration with Vue through the official `@vitejs/plugin-vue`.


🔧 Popular tools for building applications:

| Tool | Description |
|------|-------------|
| Webpack (CRA) | The former standard, robust but sometimes heavy and complex to configure |
| Vite | Increasingly popular with React due to its speed and simplicity |
| Parcel | Zero-configuration, performant, ideal for simple projects |
| Next.js | Fullstack React framework with built-in compilation, SSR and SSG |
| ESBuild | Ultra-fast, used internally by Vite |
| Rollup | Less common for React, but used for libraries |
| Turbopack | New bundler by Vercel, intended to eventually replace Webpack |

> 👉 Today, Vite is gaining ground, especially for pure frontend projects. However, for more complex or fullstack applications, Next.js is often preferred as it offers much more than just a bundler: routing, server-side rendering, built-in APIs, and more.



## Why Vue ? 🖖

Vue is easier for beginners to pick up, with a more intuitive syntax. React offers more flexibility and is more popular in large enterprises.

### ⚔️ Front-End Stack Comparison

| **Criterion** | **Webpack + React + Tailwind + Flowbite-React** | **Vite + Vue + Tailwind + Flowbite-Vue** |
|--------------|--------------------------------------------------|------------------------------------------|
| **🚀 Execution Speed** | Fast, but Webpack builds are slower and heavier; dev server can lag with large projects | Blazing fast with Vite’s native ESBuild; instant HMR and lightweight dev experience |
| **📦 Base Project Size (MB)** | ~180–220 MB (Webpack config + node_modules + build) | ~120–180 MB (Vite config is minimal and optimized) |
| **📚 Number of Dependencies** | 1000–1300 (Webpack, Babel, React, Tailwind, Flowbite-React, plugins) | 800–1100 (Vite, Vue, Tailwind, Flowbite-Vue, minimal plugins) |
| **🛡️ Update & Vulnerability Tracking** | Good, but Webpack ecosystem can be slower to evolve; more config overhead | Excellent, Vite and Vue have rapid release cycles and strong community support |
| **🧮 TypeScript Support** | Yes, via `ts-loader` or Babel; requires manual config | Yes, built-in with Vite + Vue 3; seamless integration |
| **⚛️ JSX Support** | Native (React uses JSX by default) | Optional via `@vitejs/plugin-vue-jsx`; Vue prefers template syntax |
| **🧁 Mustache Syntax Support (`{{ }}`)** | No (React uses `{}` for JS expressions) | Yes, native in Vue templates |
| **🔍 Advanced DOM Debugging** | React DevTools (solid, but less granular than Vue) | Vue DevTools (deep introspection of reactive state, props, lifecycle) |
| **🪝 DOM Manipulation Hooks** | Extensive (React Hooks: `useEffect`, `useRef`, etc.) | Rich Composition API (`ref`, `watch`, `onMounted`, etc.) with simpler syntax |
| **🔗 Data Binding** | Unidirectional (`props`, `state`, `useState`) | Bidirectional (`v-model`, `computed`, `watch`, `emit`) |
| **🧩 Flowbite Compatibility** | Fully compatible via `flowbite-react` (JSX/TSX components) | Fully compatible via `flowbite-vue` (slots, directives, Vue components) |
| **⚙️ Build Configuration Complexity** | High (Webpack requires manual config for loaders, plugins, optimization) | Low (Vite is zero-config by default, with intuitive plugin system) |
| **📱 Mobile-First Design** | Yes, Tailwind ensures responsive design out of the box | Yes, same Tailwind advantage with cleaner integration via Vite |
| **🧼 CSS Reset (Preflight)** | Included via Tailwind’s base layer | Same Tailwind Preflight ensures consistent styling across browsers |



## Why Flowbite with Tailwind CSS? 🎨

Using **Tailwind CSS** alone can be disorienting for developers accustomed to Bootstrap's component-based approach. While Tailwind provides powerful utility classes, it lacks built-in interactive components like modals and dropdowns.

### The Solution: Flowbite + Tailwind CSS

This project integrates **Flowbite**—a comprehensive component library built on top of Tailwind CSS. Flowbite offers:

- 🧩 Ready-to-use UI components
- 🎯 Built-in JavaScript interactions
- 🎨 Full compatibility with Tailwind's utility classes
- 📱 Mobile-first responsive design
- 🧹 Clean slate with Tailwind's Preflight

### Framework Compatibility

Flowbite works seamlessly across multiple frameworks:

#### Frontend Frameworks
- ✅ Vue.js (with Flowbite-Vue)
- ⚛️ React
- 🎯 Svelte
- 🅰️ Angular

#### Meta-Frameworks
- 🌐 Next.js
- 🚀 Nuxt.js
- ⭐ Astro
- 🛠️ Remix
- ⚡ SolidJS
- 🚄 Qwik

#### Backend Integrations
- 🐘 Laravel
- 🎻 Symfony
- 💎 Ruby on Rails
- 🔥 Phoenix
- 🐍 Django/Flask
- 🪶 Blazor

#### Static Site Generators
- ⚡ Hugo

This flexibility makes Flowbite a powerful choice for building modern, responsive web applications across any tech stack.




## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).


## 📝 License

This project is open source and available under the [MIT License](LICENSE).
