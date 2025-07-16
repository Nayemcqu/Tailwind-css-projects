 /** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{html,js}"],
   theme: {


screens:{
sm:'480px',
md:'768px',
lg:'1020px',
xl:'1440px',

}
,
     extend: {
      colors: {
      softBlue: 'hsl(231, 69%, 60%)',       // Calm, medium-light blue
      softRed: 'hsl(0, 94%, 66%)',          // Bright, soft red
      grayishBlue: 'hsl(229, 8%, 60%)',     // Neutral gray-blue
      veryDarkBlue: 'hsl(229, 31%, 21%)',   // Deep navy blue
    },
fontFamily:{
sans:['Rubik','sans-serif']

},

backgroundImage:{
'dots':"url('../public/images/bg-dots.svg')",

}

     },
   },
   plugins: [],
 }