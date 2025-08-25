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
