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
      themes: false,
      darkTheme: "dark",
   },
   plugins: [require("daisyui")],
   darkMode: "class",
};
