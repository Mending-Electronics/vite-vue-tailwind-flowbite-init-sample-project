# 📦 Stack Vue 3 + Vite – Dépendances & Avantages

Ce projet utilise une stack moderne basée sur Vue 3, Vite et une sélection de packages optimisés pour la performance, l’accessibilité, les tests et l’expérience développeur.

---

## 🧩 Dépendances principales (prod)

| Package | Rôle | Avantage |
|--------|------|----------|
| `vue` | Framework JS réactif | Léger, performant, facile à apprendre |
| `vue-router` | Routing SPA | Intégration native Vue, support des transitions |
| `pinia` | Store global | Remplace Vuex, plus simple, typé, modulaire |
| `@tanstack/vue-query` | Gestion des requêtes API | Cache, synchronisation, pagination, retry automatique, **scroll infini** |
| `@vuelidate/core` + `@vuelidate/validators` | Validation des formulaires | Réactif, déclaratif, bien intégré à Vue |
| `@vueuse/core` | Hooks utilitaires Vue | Réutilisables, bien documentés, booste la productivité |
| `vue-i18n` | Internationalisation | Support complet des langues, lazy loading |
| `vue-meta` | Gestion des balises `<meta>` | Utile pour SEO, SSR, PWA |
| `zod` | Validation de schémas JS/TS | Typé, composable, plus moderne que Joi ou Yup |
| `@headlessui/vue` | Composants UI accessibles | Composants sans style, parfait pour Tailwind |
| `@heroicons/vue` | Icônes SVG pour Vue | Icônes modernes, intégration directe Vue |
| `flowbite` + `flowbite-vue` | Composants UI Tailwind | Prêt à l’emploi, responsive, bien stylé |
| `axe-core` + `jest-axe` | Accessibilité (a11y) | Audit automatique, intégrable aux tests |

---

## 🧪 Dépendances de développement (dev)

| Package | Rôle | Avantage |
|--------|------|----------|
| `vite` | Bundler ultra rapide | Dev server instantané, HMR, config simple |
| `@vitejs/plugin-vue` | Support Vue dans Vite | Officiel, optimal pour Vue 3 |
| `vite-plugin-vue-devtools` | Devtools Vue dans Vite | Debug avancé, inspection des composants |
| `tailwindcss` + `@tailwindcss/vite` + `@tailwindcss/postcss` | CSS utilitaire | Design rapide, responsive, customisable |
| `postcss` + `autoprefixer` | Préprocessing CSS | Compatibilité navigateurs, plugins CSS |
| `unplugin-vue-components` | Auto-import des composants | Moins de boilerplate, gain de temps |
| `vitest` | Tests unitaires | Ultra rapide, intégré à Vite, syntaxe Jest-like |
| `@testing-library/vue` + `@testing-library/jest-dom` | Tests UI | Tests orientés utilisateur, lisibles |
| `@vue/test-utils` | Tests composants Vue | Bas niveau, utile pour tests précis |
| `@pinia/testing` | Tests du store Pinia | Mock facile, isolation des états |
| `c8` | Couverture de code | Rapide, compatible avec Vitest |
| `cypress` | Tests end-to-end | UI interactive, très fiable pour E2E |
| `jsdom` | DOM virtuel pour tests | Simule le navigateur côté Node |
| `msw` | Mock des appels API | Simule les requêtes réseau, parfait pour tests offline/dev |

---

## 🧠 Comparaisons clés

| Besoin | Ton choix | Alternative | Pourquoi ton choix est top |
|--------|-----------|-------------|-----------------------------|
| Store | `pinia` | `vuex` | Plus simple, plus moderne, meilleur support TS |
| Validation | `vuelidate` + `zod` | `vee-validate`, `yup` | Vuelidate est réactif, Zod est typé |
| Requêtes API | `vue-query` | `axios` + gestion manuelle | Vue Query gère cache, erreurs, loading, **scroll infini** |
| Tests | `vitest` + `cypress` | `jest`, `playwright` | Vitest = rapide, Cypress = visuel et fiable |
| UI | `tailwind` + `flowbite` | `Bootstrap`, `Vuetify` | Tailwind = design libre, Flowbite = composants prêts |
| Accessibilité | `axe-core` | `eslint-plugin-jsx-a11y` | Axe = audit runtime, plus précis |

---

> ✨ Cette stack est conçue pour offrir une DX optimale, une performance front-end maximale, et une base solide pour les tests, l’accessibilité et la scalabilité.
