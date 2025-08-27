
## 📄 `mvp.md`

# MVP: Vue 3 Front-End App with Flowbite-Vue and Theme Switching

## 🎯 Objective
Build a multi-page Vue 3 front-end app using Vite, TailwindCSS 4, and Flowbite-Vue. The app includes:
- 5 core routes: Home, Login, Sign-Up, Features, Pricing
- Flowbite-Vue UI components
- Theme switching across 4 TailwindCSS themes: Light (default), Dark, Protanopia, Deuteranopia, Tritanomaly

## 🧱 Tech Stack
- **Vue 3**
- **Vue Router**
- **Vuex**
- **Vite**
- **TailwindCSS 4**
- **Flowbite & Flowbite-Vue**

## 🗺️ Routes
| Route       | Path        | Component        |
|-------------|-------------|------------------|
| Home        | `/`         | `HomePage.vue`   |
| Login       | `/login`    | `LoginPage.vue`  |
| Sign-Up     | `/signup`   | `SignupPage.vue` |
| Features    | `/features` | `FeaturesPage.vue` |
| Pricing     | `/pricing`  | `PricingPage.vue` |

## 🎨 Themes
- **Light (default)**: Custom palette provided
- **Dark**
- **Protanopia**
- **Deuteranopia**
- **Tritanomaly**

Themes are defined in `tailwind.config.js` using `theme.extend.colors`.

## 🔄 Theme Switcher
Each page includes a Flowbite-Vue `Dropdown` component to toggle between themes. Selected theme is stored in Vuex and applied via Tailwind's `data-theme` attribute on `<html>`.

## 📦 Folder Structure

```
src/
├── assets/
├── components/
│   └── ThemeSwitcher.vue
├── pages/
│   ├── HomePage.vue
│   ├── LoginPage.vue
│   ├── SignupPage.vue
│   ├── FeaturesPage.vue
│   └── PricingPage.vue
├── router/
│   └── index.js
├── store/
│   └── index.js
├── App.vue
└── main.js
```

## ✅ MVP Goals
- [x] Vue Router setup with 5 routes
- [x] Flowbite-Vue components in each page
- [x] TailwindCSS 4 with custom themes
- [x] Theme switcher dropdown
- [x] Vuex for theme state

