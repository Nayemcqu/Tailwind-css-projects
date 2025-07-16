 /** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{html,js}"],
   theme: {
      screens:{
    sm:'480 px',
    md:'768px',
    lg:'976px',
    xl:'1440px'
  },
  extend: {
  
  colors:{
 strongCyan: 'hsl(172, 67%, 45%)',         // vibrant cyan (teal-like)
  lightBlue: 'hsl(193, 100%, 96%)',         // very soft light blue
  darkGrayishBlue: 'hsl(186, 14%, 43%)',    // muted, dark bluish-gray
  grayishBlue: 'hsl(184, 14%, 56%)'  ,
  strongBlue: 'hsl(222, 89%, 55%)'  // deep vivid blue

  },
  fontFamily:{
sans:['Bai Jamjuree','sans-serif']
  },
    

  },
   },
   plugins: [],
 }