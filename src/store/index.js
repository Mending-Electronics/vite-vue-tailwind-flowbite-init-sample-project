import { createPinia } from 'pinia';

// Create and export the Pinia instance
export const pinia = createPinia();

// Export store modules
export * from './theme';

export default pinia;
