/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
   darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#bfe5ff',
        secondary: '#d9ecfa',
        textColor:'#333333',
        buttonColor:'#1c3d5a'
        
      },
    },
  },

  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light",
      "dark",
    ],
  },
   
}

