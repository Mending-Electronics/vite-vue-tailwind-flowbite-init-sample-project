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
      
      // Apply the theme immediately to prevent flash of default theme
      if (savedTheme) {
        this.setTheme(savedTheme);
      } else if (systemPrefersDark) {
        this.setTheme('dark');
      } else {
        this.setTheme('light');
      }
      
      // Listen for system theme changes
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) { // Only auto-update if user hasn't set a preference
          this.setTheme(e.matches ? 'dark' : 'light');
        }
      });
    },

    setTheme(themeName) {
      if (!this.availableThemes.some(theme => theme.id === themeName)) {
        console.warn(`Theme '${themeName}' is not available.`);
        return;
      }

      const html = document.documentElement;
      
      // Remove all theme classes and attributes
      html.classList.remove(
        'dark',
        'light',
        'theme-protanopia',
        'theme-deuteranopia',
        'theme-tritanomaly'
      );
      
      // Remove data-mode attribute
      html.removeAttribute('data-mode');

      // Apply the selected theme
      if (themeName === 'dark') {
        html.setAttribute('data-mode', 'dark');
        html.classList.add('dark');
      } else if (themeName !== 'light') {
        html.classList.add(`theme-${themeName}`);
      } else {
        html.setAttribute('data-mode', 'light');
      }

      // Update state and save to localStorage
      this.currentTheme = themeName;
      localStorage.setItem('theme', themeName);
    },
  },
});
