/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#f5f5f4",
      black: "#02020b",
      red: "#e30000",
      yellow: "#ffb515",
      primary: {
        100: "#edcff2",
        200: "#7c20be",
        300: "#3e006b",
      },
      secondary: {
        100: "#d6ebff",
        200: "#007fff",
        300: "#000e1d",
      },
      green: {
        100: "#84ce7a",
        200: "#14a900",
        300: "#0d3512",
      },
      orange: {
        100: "#fabe7a",
        200: "#ff8800",
        300: "#351d09",
      },
      pink: {
        100: "#Fa7abc",
        200: "#ff0084",
        300: "#350223",
      },
    },

    extend: {
      fontFamily: {
        sans: "['Outfit']",
      },

      borderRadius: {
        sm: "20px",
        md: "24px",
        lg: "30px",
      },
    },
  },
  plugins: [],
};
