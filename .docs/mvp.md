
## 📄 `mvp.md`

# MVP: Vue 3 Front-End App with Flowbite-Vue and Theme Switching

## 🎯 Objective
Build a multi-page Vue 3 front-end app using Vite, TailwindCSS 4, and Flowbite-Vue. The app includes:
- 5 core routes: Home, Login, Sign-Up, Features, Pricing
- Flowbite-Vue UI components
- Theme switching across 5 TailwindCSS themes: Light (default), Dark, Protanopia, Deuteranopia, Tritanomaly

## 🧱 Tech Stack
- **Vue 3**
- **Vue Router**
- **Pinia**
- **Vite**
- **TailwindCSS 4**
- **Flowbite & Flowbite-Vue**

## 🗺️ Routes
| Route       | Path        | Component        |
|-------------|-------------|------------------|
| Home        | `/`         | `HomeView.vue`   |
| Login       | `/login`    | `LoginView.vue`  |
| Sign-Up     | `/signup`   | `SignupView.vue` |
| Features    | `/features` | `FeaturesView.vue` |
| Pricing     | `/pricing`  | `PricingView.vue` |

## 🎨 Themes
- **Light (default)**: Custom palette provided
- **Dark**
- **Protanopia**
- **Deuteranopia**
- **Tritanomaly**

Themes are defined in `tailwind.config.js` using `theme.extend.colors`.

## 🔄 Theme Switcher
Each page includes a Flowbite-Vue `Dropdown` component to toggle between themes. Selected theme is stored in Pinia and applied via Tailwind's `data-theme` attribute on `<html>`.

## 📦 Folder Structure

```
src/
├── assets/
├── components/
│   └── ThemeSwitcher.vue
├── views/
│   ├── HomeView.vue
│   ├── LoginView.vue
│   ├── SignupView.vue
│   ├── FeaturesView.vue
│   └── PricingView.vue
├── router/
│   └── router.js
├── store/
│   └── store.js
├── App.vue
└── main.js
```

## ✅ MVP Goals
- [ ] Vue Router setup with 5 routes
- [ ] Flowbite-Vue components in each page
- [ ] TailwindCSS 4 with 5 custom themes
- [ ] Theme switcher dropdown
- [ ] Pinia for theme state

