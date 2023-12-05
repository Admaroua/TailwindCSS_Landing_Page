/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-color': 'rgba(251, 191, 36)',
        'dark': 'rgb(23 23 23)',
        'light': 'rgb(229 229 229)',
        'second-color': '#004840'
      },
      maxWidth: {
        '16':'16rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

