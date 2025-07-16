 /** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{html,js}"],
   theme: {


     extend: {
 colors:{
Cyan:	'hsl(180, 100%, 50%)',
CyanLight	:'hsl(180, 100%, 80%)',
DarkViolet:	'hsl(263, 60%, 30%)',
Red	:'hsl(0, 100%, 50%)',
GrayishViolet:	'hsl(257, 10%, 60%)',
VeryDarkBlue:'hsl(220, 50%, 15%)',
VeryDarkViolet:'hsl(263, 70%, 20%)',

  },

fontFamily:{
  sans:['Poppins','sans-serif']
},
spacing:{
  180:'32rem',
}
     },
   },
   plugins: [],
 }