/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef2f9',
          100: '#d4dcef',
          200: '#a9bce0',
          300: '#7d9bd1',
          400: '#527bc2',
          500: '#1a2a6c',
          600: '#152256',
          700: '#101b41',
          800: '#0b132b',
          900: '#050a16',
        },
        accent: {
          50: '#e6f7fa',
          100: '#b8eaf2',
          200: '#8adce9',
          300: '#5ccfe1',
          400: '#2ec1d8',
          500: '#1a8a9e',
          600: '#156e7e',
          700: '#10525e',
          800: '#0a363f',
          900: '#051b1f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
