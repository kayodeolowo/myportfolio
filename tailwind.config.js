/** @type {import('tailwindcss').Config} */
module.exports = {
content: [  "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
       fontFamily:{
        Inconsolata: [ 'Inconsolata',  ],
        Source: [ 'Source Code Pro',  ],
        fira: ['Fira Sans Condensed', ],
        Ubuntu: ['Ubuntu'],
        OpenSans:['Open Sans']
        
     },
    },
  },
  plugins: [
  ],
}
