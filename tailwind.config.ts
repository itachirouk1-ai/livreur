import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';

export default {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // Add any custom extensions here (colors, spacing, etc.)
    },
  },
  plugins: [forms],
} satisfies Config;
