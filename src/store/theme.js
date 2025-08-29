import { defineStore } from 'pinia';

export const useThemeStore = defineStore('theme', {
  state: () => ({
    currentTheme: 'light',
    availableThemes: [
      { id: 'light', name: 'Light' },
      { id: 'dark', name: 'Dark' },
      { id: 'protanopia', name: 'Protanopia' },
      { id: 'deuteranopia', name: 'Deuteranopia' },
      { id: 'tritanomaly', name: 'Tritanomaly' },
    ],
  }),

  actions: {
    initializeTheme() {
      // Check for saved theme preference or use system preference
      const savedTheme = localStorage.getItem('theme');
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      if (savedTheme) {
        this.setTheme(savedTheme);
      } else if (systemPrefersDark) {
        this.setTheme('dark');
      } else {
        this.setTheme('light');
      }
    },

    setTheme(themeName) {
      if (!this.availableThemes.some(theme => theme.id === themeName)) {
        console.warn(`Theme '${themeName}' is not available.`);
        return;
      }

      // Remove all theme classes
      document.documentElement.classList.remove(
        'dark',
        'theme-protanopia',
        'theme-deuteranopia',
        'theme-tritanomaly'
      );

      // Add the selected theme class
      if (themeName === 'dark') {
        document.documentElement.classList.add('dark');
      } else if (themeName !== 'light') {
        document.documentElement.classList.add(`theme-${themeName}`);
      }

      // Update state and save to localStorage
      this.currentTheme = themeName;
      localStorage.setItem('theme', themeName);
    },
  },
});
