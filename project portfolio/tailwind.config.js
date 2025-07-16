 /** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{html,js}"],
   theme: {
     extend: {
 screens:{
sm:'480px',
md:'768px',
lg:'1020px',
xl:'1440px',

}
,
colors:{
    primary: '#2563eb',       // Blue 600
    primaryLight: '#3b82f6',  // Blue 500
    secondary: '#f59e0b',     // Amber 500
    accent: '#10b981',        // Emerald 500
    muted: '#6b7280',         // Gray 500
    dark: '#111827',          // Gray 900
    light: '#f9fafb',         // Gray 50
    danger: '#ef4444',        // Red 500
},
fontFamily:{
sans:['Open Sans','sans-serif'],
heading:['Raleway','sans-serif']

},
     },
   },
   plugins: [],
 }