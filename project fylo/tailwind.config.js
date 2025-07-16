/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enables manual dark mode using <html class="dark">
  content: ["./src/**/*.{html,js}", "./index.html"], // Include root HTML if needed
  theme: {
    extend: {
      colors: {
        darkBlue: 'hsl(220, 60%, 20%)',
        darkBlue1: 'hsl(220, 60%, 15%)',
        darkBlue2: 'hsl(220, 60%, 10%)',
        darkBlue3: 'hsl(220, 60%, 5%)',
        accentBlue: 'hsl(210, 100%, 50%)',
        lightRed: 'hsl(0, 80%, 70%)',
      },
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
      },
    backgroundImage: {
  'logo-dark-mode': "url('../public/images/logo-dark-mode.svg')",
  'logo-light-mode': "url('../public/images/logo-light-mode.svg')",
  'curvy-dark-mode': "url('../public/images/bg-curvy-dark-mode.svg')",
  'curvy-light-mode': "url('../public/images/bg-curvy-light-mode.svg')",
},

    },
  },
  plugins: [],
}
