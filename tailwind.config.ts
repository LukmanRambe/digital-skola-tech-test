import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-text': '#404040',
        primary: {
          600: '#00b9c3',
          700: '#01959f',
          800: '#0b757f',
          900: '#0e606b',
        },
        secondary: {
          400: '#fbc037',
          500: '#f5990b',
          600: '#d97206',
          700: '#b44f09',
        },
        green: {
          500: '#43936c',
          600: '#2d6e50',
          700: '#245841',
        },
      },
    },
  },
  plugins: [],
};
export default config;
