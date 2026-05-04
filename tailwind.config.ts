import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base: 'var(--color-base)',
        accent: 'var(--color-accent)',
        text: 'var(--color-text-primary)'
      }
    }
  }
};

export default config;
