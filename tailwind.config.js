/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Tomato':' hsl(4, 100%, 67%)',
        'DarkSlateGrey': 'hsl(234, 29%, 20%)',
        'CharcoalGrey': 'hsl(235, 18%, 26%)',
        'Grey': 'hsl(231, 7%, 60%)',
        'White': 'hsl(0, 0%, 100%)',
        'red': '#ff000033',
      },
      fontSize: {
        para:'16px',
      }, 
      backgroundImage: {
        'gradient': 'linear-gradient(to right, rgb(255, 91, 168) 0%, hsl(4, 100%, 67%) 20%)',
      },
    },
  },
  plugins: [
   
  ],
}

