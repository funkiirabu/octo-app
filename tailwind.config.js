/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'oscar-purple': '#402E7A',
        'oscar-light-purple': '#4C3BCF',
        'oscar-blue': '#4B70F5',
        'oscar-light-blue': '#3DC2EC',
      },
    },
  },
  plugins: [],
};