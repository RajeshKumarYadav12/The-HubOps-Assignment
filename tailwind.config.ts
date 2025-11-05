import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A3A2A',
          dark: '#062219',
          light: '#0D4D37',
        },
        cream: {
          DEFAULT: '#F5F3ED',
          light: '#FAF9F6',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#E5C158',
        },
        sage: {
          DEFAULT: '#8B9A92',
          light: '#A8B5AE',
          dark: '#6B7A72',
        }
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
