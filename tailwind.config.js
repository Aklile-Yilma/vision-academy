/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#235937",
        accent: "#CC092F",
      },
      fontFamily: {
        loto: ["Lato", "sans-serif"],
        merriweather: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
};
