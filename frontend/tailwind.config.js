/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         fontFamily: {
            "body-font": ['"Inter"', "sans-serif"],
         },
      },
   },
   daisyui: {
      themes: false, // Only light & dark theme
      darkTheme: "light", // sets default theme, even with OS preferences
   },
   plugins: [require("daisyui")],
   darkMode: "class",
};
