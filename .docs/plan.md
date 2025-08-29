
## 🧭 `le-plan.md`

# Plan de développement MVP

## 🧩 Étapes principales

### 1. Initialisation du projet
- Créer le projet avec Vite + Vue
- Installer les dépendances : TailwindCSS, Flowbite, Flowbite-Vue, Vuex, Vue Router

### 2. Configuration TailwindCSS
- Définir les 5 thèmes dans `tailwind.config.js`
- Utiliser `data-theme` pour appliquer dynamiquement les couleurs

### 3. Configuration Vue Router
- Créer les routes : `/`, `/login`, `/signup`, `/features`, `/pricing`
- Associer chaque route à un composant Vue

### 4. Intégration Flowbite-Vue
- Utiliser les composants Flowbite-Vue pour les boutons, formulaires, cartes, etc.
- Ajouter un `Dropdown` dans chaque page pour changer le thème

### 5. Gestion d’état avec Vuex
- Stocker le thème sélectionné
- Appliquer le thème via `document.documentElement.setAttribute('data-theme', theme)`

### 6. Pages
- **HomePage.vue** : Landing page avec Hero section
- **LoginPage.vue** : Formulaire de connexion
- **SignupPage.vue** : Formulaire d’inscription
- **FeaturesPage.vue** : Liste des fonctionnalités
- **PricingPage.vue** : Tableau des prix

### 7. Composant ThemeSwitcher
- Dropdown Flowbite-Vue avec les 5 options de thème
- Appel à Vuex pour changer le thème

## 📌 Objectifs secondaires
- Responsive design
- Accessibilité (notamment pour les thèmes daltoniens)
- Animation légère entre les changements de thème

## 📅 Timeline
| Étape                  | Durée estimée |
|------------------------|---------------|
| Setup & config         | 1 jour        |
| Routing & pages        | 2 jours       |
| Flowbite-Vue UI        | 2 jours       |
| Theme system           | 2 jours       |
| Final polish & test    | 1 jour        |

## 🧪 Tests
- Vérifier le rendu de chaque thème
- Tester la navigation entre les routes
- Vérifier la persistance du thème sélectionné

## 🚀 Livraison
- MVP prêt pour déploiement statique (Netlify, Vercel, etc.)

