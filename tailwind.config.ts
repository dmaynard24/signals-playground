import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        aero: '#71BBD8',
        shadow: '#7B8DAD',
        amaranth: '#9A1C7D',
        violet: '#73207E',
        midnight: '#551168',
      },
    },
  },
  plugins: [],
} satisfies Config;
